import { EcosystemSnapshot, AuditServiceState, AuditedProject } from '../types/ecosystemAudit';

const CACHE_KEY = 'triminds_ecosystem_audit_cache_v2';
const CACHE_TIMESTAMP_KEY = 'triminds_ecosystem_audit_timestamp_v2';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache TTL

/**
 * Validates the raw payload conforms strictly to EcosystemSnapshot schema
 */
export function validateEcosystemSnapshot(raw: any): raw is EcosystemSnapshot {
  if (!raw || typeof raw !== 'object') return false;
  if (raw.schemaVersion !== '1.1.0') return false;
  if (!raw.summary || typeof raw.summary !== 'object') return false;
  if (!Array.isArray(raw.projects)) return false;
  if (raw.projects.length === 0) return false;

  for (const p of raw.projects) {
    if (!p.id || !p.name || !p.status || !p.dimensions) return false;
    if (!['GREEN', 'YELLOW', 'RED'].includes(p.status)) return false;
    if (!p.dimensions.testSurface || !p.dimensions.executionEvidence || !p.dimensions.security) {
      return false;
    }
  }

  return true;
}

/**
 * Retrieves cached snapshot from sessionStorage if valid and not expired
 */
export function getCachedSnapshot(): { snapshot: EcosystemSnapshot; cachedAt: string } | null {
  try {
    const rawData = sessionStorage.getItem(CACHE_KEY);
    const timestamp = sessionStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (!rawData || !timestamp) return null;

    const parsed = JSON.parse(rawData);
    if (validateEcosystemSnapshot(parsed)) {
      return { snapshot: parsed, cachedAt: timestamp };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Stores validated snapshot in sessionStorage with timestamp
 */
export function setCachedSnapshot(snapshot: EcosystemSnapshot, timestamp: string = new Date().toISOString()): void {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(snapshot));
    sessionStorage.setItem(CACHE_TIMESTAMP_KEY, timestamp);
  } catch {
    // Ignore storage quota or disabled storage gracefully
  }
}

/**
 * Clears cached audit data
 */
export function clearAuditCache(): void {
  try {
    sessionStorage.removeItem(CACHE_KEY);
    sessionStorage.removeItem(CACHE_TIMESTAMP_KEY);
  } catch {
    // Ignore
  }
}

/**
 * Primary fetcher for Ecosystem Audit authoritative data
 * Conforms strictly to fail-safe, truthful presentation:
 * - Never invents data
 * - Never converts an error into a false GREEN
 * - Clearly indicates live vs cached data
 * - Updates refresh timestamp to reflect exact time of operation
 */
export async function fetchEcosystemSnapshot(forceFresh = false): Promise<AuditServiceState> {
  const baseAuditUrl = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_ECOSYSTEM_AUDIT_URL)
    ? (import.meta as any).env.VITE_ECOSYSTEM_AUDIT_URL.replace(/\/$/, '')
    : 'https://triminds-ecosystem-audit-1091629879450.europe-west1.run.app';

  if (!forceFresh) {
    const cached = getCachedSnapshot();
    if (cached) {
      const ageMs = Date.now() - new Date(cached.cachedAt).getTime();
      if (ageMs < CACHE_TTL_MS) {
        return {
          data: cached.snapshot,
          status: 'cached',
          error: null,
          lastUpdated: cached.cachedAt,
          isCached: true
        };
      }
    }
  }

  const fetchJson = async (path: string) => {
    const url = `${baseAuditUrl}${path}${path.includes('?') ? '&' : '?'}_t=${Date.now()}`;
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      },
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${path}`);
    }
    return response.json();
  };

  try {
    // The audit API is the live authority. The website snapshot remains the
    // presentation contract, and is enriched with current runtime evidence.
    const [summary, portfolio, tlp, geoAi] = await Promise.all([
      fetchJson('/api/v1/audit/summary'),
      fetchJson('/api/v1/deployments/portfolio-v2'),
      fetchJson('/api/v1/deployments/tlp-nextgen'),
      fetchJson('/api/v1/deployments/geo-ai-v4')
    ]);

    const snapshotResponse = await fetch(`/data/ecosystem-audit-snapshot.json?_t=${Date.now()}`, {
      headers: { 'Accept': 'application/json', 'Cache-Control': 'no-cache' },
      cache: 'no-store'
    });
    if (!snapshotResponse.ok) {
      throw new Error(`HTTP ${snapshotResponse.status}: /data/ecosystem-audit-snapshot.json`);
    }

    const snapshot = await snapshotResponse.json();
    if (!validateEcosystemSnapshot(snapshot)) {
      throw new Error('Website audit snapshot contract validation failed');
    }

    const updateProject = (id: string, patch: Partial<AuditedProject>) => {
      const project = snapshot.projects.find((p: AuditedProject) => p.id === id);
      if (project) Object.assign(project, patch);
    };

    updateProject('Triminds-Technology-Portfolio', {
      status: portfolio.operational_status === 'GREEN' ? 'GREEN' : 'YELLOW',
      evidenceLevel: 'Production Evidence',
      lastKnownEvidence: portfolio.evidence,
      lastAuditedDate: portfolio.verified_at,
      runtimeLabel: 'Portfolio V2',
      runtimeEvidence: [
        `Repository: ${portfolio.repository}`,
        `Status: ${portfolio.status}`,
        `Deployment: ${portfolio.deployment}`,
        `Region: ${portfolio.region}`,
        `Revision: ${portfolio.revision}`,
        `Commit: ${portfolio.commit}`,
        `URL: ${portfolio.production_url}`,
        `Evidence: ${portfolio.evidence}`
      ],
      summary: `${portfolio.status} // ${portfolio.deployment} // revision ${portfolio.revision}`
    });

    updateProject('New-Triminds-Logistics-Plataform', {
      status: tlp.operational_status === 'GREEN' ? 'GREEN' : 'YELLOW',
      evidenceLevel: 'Production Evidence',
      lastKnownEvidence: tlp.evidence,
      lastAuditedDate: tlp.verified_at,
      runtimeLabel: 'TLP Next-Gen',
      runtimeEvidence: [
        `Repository: ${tlp.repository}`,
        `Status: ${tlp.status}`,
        `Project: ${tlp.project}`,
        `Service: ${tlp.service}`,
        `Region: ${tlp.region}`,
        `Architecture: ${tlp.architecture}`,
        `Database: ${tlp.database}`,
        `URL: ${tlp.url}`,
        `Evidence: ${tlp.evidence}`
      ],
      summary: `${tlp.status} // ${tlp.architecture} // ${tlp.database}`
    });

    updateProject('Triminds-Geo-AI', {
      status: geoAi.operational_status === 'GREEN' ? 'GREEN' : 'YELLOW',
      evidenceLevel: 'Production Evidence',
      lastKnownEvidence: geoAi.evidence,
      lastAuditedDate: geoAi.verified_at,
      runtimeLabel: 'Geo-AI V4',
      runtimeEvidence: [
        `Repository: ${geoAi.repository}`,
        `Status: ${geoAi.status}`,
        `Deployment: ${geoAi.deployment}`,
        `Region: ${geoAi.region}`,
        ...(geoAi.revision ? [`Revision: ${geoAi.revision}`] : []),
        ...(geoAi.commit ? [`Commit: ${geoAi.commit}`] : []),
        ...(geoAi.production_url ? [`URL: ${geoAi.production_url}`] : []),
        `Evidence: ${geoAi.evidence}`
      ],
      summary: `${geoAi.status} // ${geoAi.deployment} // ${geoAi.region}`
    });

    snapshot.generatedAt = summary.last_audit_timestamp || new Date().toISOString();
    snapshot.source = 'Triminds-ecosystem-audit';
    snapshot.metadata.auditVersion = 'v1.2.0';
    snapshot.metadata.evidenceDistinctionNotice =
      'Live runtime evidence is supplied by Trimindslabs Ecosystem Audit; architecture and repository maturity remain separate evidence dimensions.';

    // Keep the existing UI contract, but make the displayed audit timestamp live.
    snapshot.summary.lastAuditRun = summary.last_audit_timestamp || snapshot.summary.lastAuditRun;

    const refreshTimestamp = new Date().toISOString();
    setCachedSnapshot(snapshot, refreshTimestamp);

    return {
      data: snapshot,
      status: 'live',
      error: null,
      lastUpdated: refreshTimestamp,
      isCached: false
    };
  } catch (err: any) {
    const fallbackCache = getCachedSnapshot();
    if (fallbackCache) {
      return {
        data: fallbackCache.snapshot,
        status: 'cached',
        error: `Live audit source unreachable (${err.message}). Displaying verified cached snapshot from ${new Date(fallbackCache.cachedAt).toLocaleString()}.`,
        lastUpdated: fallbackCache.cachedAt,
        isCached: true
      };
    }

    return {
      data: null,
      status: 'error',
      error: `Authoritative Ecosystem Audit service is currently unavailable (${err.message}). No synthetic telemetry is displayed.`,
      lastUpdated: null,
      isCached: false
    };
  }
}
