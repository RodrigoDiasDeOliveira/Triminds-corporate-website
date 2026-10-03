export type AuditHealthStatus = 'GREEN' | 'YELLOW' | 'RED';

export type EvidenceLevel = 
  | 'Architecture' 
  | 'Implemented' 
  | 'Executed' 
  | 'Production Evidence';

export type DimensionKey = 
  | 'testSurface'
  | 'executionEvidence'
  | 'failurePaths'
  | 'security'
  | 'integration'
  | 'persistence'
  | 'ciEnforcement'
  | 'operationalEvidence';

export interface AuditDimension {
  name: string;
  status: AuditHealthStatus;
  evidenceLevel: EvidenceLevel;
  details: string;
  observedEvidence?: string;
}

export interface AuditedProject {
  id: string;
  name: string;
  /** Human-readable runtime identity supplied by the live Ecosystem Audit. */
  runtimeLabel?: string;
  /** Structured live deployment evidence for production runtime identity. */
  runtimeEvidence?: string[];
  repositoryUrl?: string;
  status: AuditHealthStatus;
  evidenceLevel: EvidenceLevel;
  summary: string;
  dimensions: {
    testSurface: AuditDimension;
    executionEvidence: AuditDimension;
    failurePaths: AuditDimension;
    security: AuditDimension;
    integration: AuditDimension;
    persistence: AuditDimension;
    ciEnforcement: AuditDimension;
    operationalEvidence: AuditDimension;
  };
  relevantEvidence: string[];
  knownLimitations: string[];
  currentPriority: string;
  lastKnownEvidence: string;
  lastAuditedDate: string;
}

export interface EcosystemOverviewSummary {
  totalProjects: number;
  distribution: {
    green: number;
    yellow: number;
    red: number;
  };
  maturityScore: string;
  projectsWithExecutionEvidence: number;
  projectsWithCiObserved: number;
  projectsWithCriticalGaps: number;
  lastAuditRun: string;
}

export interface EcosystemSnapshot {
  schemaVersion: '1.1.0';
  generatedAt: string;
  source: 'Triminds-ecosystem-audit';
  methodology: string;
  executionMode: 'autorun' | 'manual' | 'ci';
  summary: EcosystemOverviewSummary;
  projects: AuditedProject[];
  metadata: {
    baselineDate: string;
    auditVersion: string;
    evidenceDistinctionNotice: string;
  };
}

export interface AuditServiceState {
  data: EcosystemSnapshot | null;
  status: 'idle' | 'loading' | 'live' | 'cached' | 'error';
  error: string | null;
  lastUpdated: string | null;
  isCached: boolean;
}
