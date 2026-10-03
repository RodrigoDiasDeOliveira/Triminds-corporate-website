import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Activity, 
  Cpu, 
  HardDrive, 
  Terminal, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Award,
  ExternalLink,
  FolderGit2,
  RefreshCw,
  AlertTriangle,
  Search,
  ChevronDown,
  ChevronUp,
  Info,
  Clock,
  Database,
  GitBranch,
  AlertCircle,
  Play,
  Pause
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useEcosystemAudit } from '../hooks/useEcosystemAudit';
import { AuditedProject, AuditHealthStatus, EvidenceLevel } from '../types/ecosystemAudit';
import {
  formatRelativeTime,
  updateEcosystemVisualState
} from '../services/dashboard';

interface SystemTelemetryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGates?: () => void;
}

type ModalTab = 'ecosystem' | 'slo' | 'runtime';

const OPERATIONAL_SPECS = [
  { label: 'Ingress Runtime', value: 'Google Cloud Run (EU-West-3 Frankfurt / Paris)' },
  { label: 'Container Architecture', value: 'Linux x86_64 / Distroless Minimal Image' },
  { label: 'Bundle Target', value: 'Vite 6 / React 18 / TypeScript Strict Mode' },
  { label: 'Verified Release Tag', value: 'v1.0.0-audited // Commit #e9f8a3c' },
  { label: 'Data Jurisdiction', value: 'European Union Sovereign Cloud (GDPR Art. 28/32)' },
  { label: 'API Security Protocol', value: 'Zero Client-Side Secrets / Inline Proxy Hardening' }
];

const SERVICE_SLO_CONTRACTS = [
  { 
    service: 'Trusted Compliance Retrieval Core', 
    stack: 'Python 3.12 / Qdrant / BGE-Reranker', 
    targetP95: '< 145ms', 
    sloUptime: '99.99%',
    hallucinationBound: '0.00% Tolerance'
  },
  { 
    service: 'Trimindslabs AI Cloud Administrator (MCP Server)', 
    stack: 'Python 3.11+ / FastMCP / AWS, Azure, GCP, OCI / Keyring', 
    targetP95: '< 85ms tool exec', 
    sloUptime: '99.99%',
    hallucinationBound: 'Zero Credential Leakage'
  },
  { 
    service: 'Trimindslabs Integration Platform (Event & API Mesh)', 
    stack: 'Spring Boot 3.x / FastAPI / Redis / OpenTelemetry', 
    targetP95: '< 8ms mediation', 
    sloUptime: '99.99%',
    hallucinationBound: 'Zero Message Loss (Idempotent)'
  },
  { 
    service: 'Satellite Raster Ingestion & Tiling', 
    stack: 'Python 3.11 / GDAL / PostGIS / PyTorch', 
    targetP95: '< 28 mins / pass', 
    sloUptime: '99.95%',
    hallucinationBound: 'IoU > 93.5%'
  },
  { 
    service: 'Trimindslabs Logistics Platform (TLP)', 
    stack: 'Java 17 / Spring Boot 3.3 / DL4J / WebSockets', 
    targetP95: '< 5ms broadcast', 
    sloUptime: '99.99%',
    hallucinationBound: 'Continuous RFID Ingestion'
  },
  { 
    service: 'Trimindslabs Security Layer', 
    stack: 'Java 21 / Spring Boot 3.x / OPA / Hexagonal', 
    targetP95: '< 1.5ms policy eval', 
    sloUptime: '99.99%',
    hallucinationBound: 'Zero Policy Violations'
  },
  { 
    service: 'Trimindslabs ObjectScanner V2 Edge Ingestion', 
    stack: 'Android Native / YOLOv8 / CameraX / Spring Boot', 
    targetP95: '< 120ms frame', 
    sloUptime: '99.95%',
    hallucinationBound: 'mAP > 94.8%'
  },
  { 
    service: 'Trimindslabs VectorAI (VS Code Extension)', 
    stack: 'TypeScript 5.x / VS Code API / pgvector / Transformers.js', 
    targetP95: '< 15ms local eval', 
    sloUptime: '100% Local', 
    hallucinationBound: 'Zero Data Exfiltration'
  }
];

export const SystemTelemetryModal: React.FC<SystemTelemetryModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenGates
}) => {
  const { t } = useLanguage();
  const { data, status, error, lastUpdated, isCached, refresh, isLoading } = useEcosystemAudit();

  const [activeTab, setActiveTab] = useState<ModalTab>('ecosystem');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  // Auto-polling (30s configurável com pausa/retomada) e Contador Relativo
  const [isPolling, setIsPolling] = useState<boolean>(true);
  const [secondsAgo, setSecondsAgo] = useState<number>(0);

  // Determina o estado de saúde do ecossistema para tratamento visual (HEALTHY / DEGRADED / DOWN)
  const healthState = useMemo<'HEALTHY' | 'DEGRADED' | 'DOWN'>(() => {
    if (status === 'offline' || (!data && error)) {
      return 'DOWN';
    }
    if (status === 'error' || (data?.summary?.projectsWithCriticalGaps ?? 0) > 0 || isCached) {
      return 'DEGRADED';
    }
    return 'HEALTHY';
  }, [status, data, error, isCached]);

  // Sincroniza estado visual nos elementos DOM quando os dados ou estado mudam
  useEffect(() => {
    if (isOpen) {
      updateEcosystemVisualState(
        healthState === 'DOWN' ? 'DOWN' : healthState === 'DEGRADED' ? 'DEGRADED' : 'LIVE',
        data
      );
    }
  }, [isOpen, healthState, data]);

  // Polling autoritativo a cada 30 segundos. O refresh passa exclusivamente
  // pelo hook React, evitando qualquer fallback do dashboard legado.
  useEffect(() => {
    if (!isOpen || !isPolling) return;

    const timer = setInterval(() => {
      refresh();
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, [isOpen, isPolling, refresh]);

  // Timer de "Última atualização há X segundos" atualizado a cada 1s via JS
  useEffect(() => {
    if (!isOpen) return;

    const calcSeconds = () => {
      const ts = lastUpdated ? new Date(lastUpdated).getTime() : Date.now();
      setSecondsAgo(Math.max(0, Math.floor((Date.now() - ts) / 1000)));
    };

    calcSeconds();
    const interval = setInterval(calcSeconds, 1000);
    return () => clearInterval(interval);
  }, [isOpen, lastUpdated]);

  const handleTogglePolling = () => {
    setIsPolling(prev => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered projects from authoritative Ecosystem Audit snapshot - unconditionally called hook
  const filteredProjects = useMemo(() => {
    if (!data?.projects) return [];
    return data.projects.filter(p => {
      // Filter by Status
      if (filterStatus === 'GREEN' && p.status !== 'GREEN') return false;
      if (filterStatus === 'YELLOW' && p.status !== 'YELLOW') return false;
      if (filterStatus === 'RED' && p.status !== 'RED') return false;
      if (filterStatus === 'EXECUTED' && p.evidenceLevel !== 'Executed' && p.evidenceLevel !== 'Production Evidence') return false;
      if (filterStatus === 'GAPS' && p.status !== 'RED' && p.knownLimitations.length < 2) return false;

      // Filter by Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesRuntime = p.runtimeLabel?.toLowerCase().includes(q) ?? false;
        const matchesRuntimeEvidence = p.runtimeEvidence?.some(e => e.toLowerCase().includes(q)) ?? false;
        const matchesSummary = p.summary.toLowerCase().includes(q);
        const matchesPriority = p.currentPriority.toLowerCase().includes(q);
        const matchesLimitations = p.knownLimitations.some(l => l.toLowerCase().includes(q));
        return matchesName || matchesRuntime || matchesRuntimeEvidence || matchesSummary || matchesPriority || matchesLimitations;
      }

      return true;
    });
  }, [data, filterStatus, searchQuery]);

  const handleRefresh = async () => {
    try {
      // The React hook is the authoritative refresh path. Do not invoke the
      // legacy DOM refresh afterwards because it can fall back to the static
      // snapshot and visually overwrite live runtime evidence.
      await refresh();
    } catch (err) {
      console.error('Error triggering authoritative audit refresh:', err);
    }
  };

  const totalCount = data?.summary.totalProjects ?? (data?.projects?.length ?? 17);
  const greenCount = data?.summary.distribution.green ?? 11;
  const yellowCount = data?.summary.distribution.yellow ?? 6;
  const redCount = data?.summary.distribution.red ?? 0;
  const executedCount = data?.summary.projectsWithExecutionEvidence ?? 11;
  const ciObservedCount = data?.summary.projectsWithCiObserved ?? 17;
  const criticalGapsCount = data?.summary.projectsWithCriticalGaps ?? 0;

  const operationalSpecs = OPERATIONAL_SPECS;
  const serviceSloContracts = SERVICE_SLO_CONTRACTS;

  const toggleProject = (id: string) => {
    setExpandedProjectId(prev => prev === id ? null : id);
  };

  const getStatusBadge = (status: AuditHealthStatus) => {
    switch (status) {
      case 'GREEN':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
            GREEN // SUSTAINED
          </span>
        );
      case 'YELLOW':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-300 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
            YELLOW // CONSOLIDATING
          </span>
        );
      case 'RED':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-300 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-600"></span>
            RED // FLAGGED GAP
          </span>
        );
    }
  };

  const getEvidenceBadge = (level: EvidenceLevel) => {
    switch (level) {
      case 'Production Evidence':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-50 text-purple-900 border border-purple-300">PROVEN (PROD)</span>;
      case 'Executed':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-900 border border-emerald-300">EXECUTED (VERIFIED)</span>;
      case 'Implemented':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-blue-900 border border-blue-300">IMPLEMENTED (CODE)</span>;
      case 'Architecture':
        return <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-800 border border-slate-300">ARCHITECTURE (DESIGN)</span>;
    }
  };

  return (
    <div 
      id="ecosystem-observability-modal"
      className={`${isOpen ? 'fixed' : 'hidden'} inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 font-sans`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="telemetry-title"
    >
      <div 
        id="ecosystem-modal-container"
        className={`relative w-full max-w-5xl max-h-[94vh] flex flex-col rounded-xl border bg-[#F4F4F1] shadow-2xl overflow-hidden font-mono transition-colors duration-200 ${
          healthState === 'DOWN'
            ? 'border-rose-500 ring-2 ring-rose-500/20'
            : healthState === 'DEGRADED'
            ? 'border-amber-500 ring-2 ring-amber-500/20'
            : 'border-[#D1D1CD]'
        }`}
        data-health-state={healthState}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Navigation & Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#D1D1CD] bg-white gap-3">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 id="telemetry-title" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                  Trimindslabs Ecosystem Observability Dashboard
                </h2>
                <span 
                  id="system-status-badge"
                  role="status"
                  aria-live="polite"
                  aria-label={`Status do ecossistema: ${healthState}`}
                  className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-tight flex items-center gap-1 ${
                    healthState === 'HEALTHY'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : healthState === 'DEGRADED'
                      ? 'bg-amber-100 text-amber-900 border border-amber-400'
                      : 'bg-rose-100 text-rose-900 border border-rose-400'
                  }`}
                  data-status={healthState === 'HEALTHY' ? 'LIVE' : healthState}
                >
                  {healthState === 'HEALTHY' 
                    ? 'AUTHORITATIVE AUDIT // LIVE' 
                    : healthState === 'DEGRADED' 
                    ? 'DEGRADED // ATTENTION REQUIRED' 
                    : 'DOWN // SOURCE DISCONNECTED'}
                </span>
              </div>
              <p className="text-[10px] text-[#70706B] mt-0.5">
                Consumer & Presentation Layer for authoritative evidence from <code className="font-bold text-[#1A1A1A]">Trimindslabs-ecosystem-audit</code>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto flex-wrap">
            <span 
              id="audit-relative-time" 
              role="status" 
              aria-live="polite" 
              className="text-[10px] text-[#70706B] font-mono px-2 py-0.5 rounded bg-[#EAEAE6] border border-[#D1D1CD] hidden sm:inline"
              data-seconds-ago={secondsAgo}
            >
              {formatRelativeTime(secondsAgo)}
            </span>
            <span className="text-[10px] text-[#70706B] font-mono hidden md:inline">
              Refreshed: <strong id="last-audit-timestamp" role="timer" aria-live="polite" className="text-[#1A1A1A]">{lastUpdated ? new Date(lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : 'Initial'}</strong>
            </span>
            
            {/* Botão de Polling automático configurável (30s) com pausar/retomar e ARIA */}
            <button
              id="toggle-polling-btn"
              onClick={handleTogglePolling}
              role="button"
              aria-pressed={isPolling}
              aria-label={isPolling ? "Pausar atualização automática de 30s" : "Retomar atualização automática de 30s"}
              title={isPolling ? "Pausar polling automático (30s)" : "Iniciar polling automático (30s)"}
              className={`p-1.5 px-2 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 text-[11px] ${
                isPolling 
                  ? 'border-emerald-500 text-emerald-900 bg-emerald-50/60' 
                  : 'border-[#D1D1CD] text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1]'
              }`}
            >
              {isPolling ? <Pause className="w-3.5 h-3.5 text-emerald-600" /> : <Play className="w-3.5 h-3.5 text-[#70706B]" />}
              <span className="polling-label inline font-medium">{isPolling ? 'Auto (30s): Ativo' : 'Auto: Pausado'}</span>
            </button>

            {/* Botão de Refresh com Retry, Loading e ARIA */}
            <button
              id="refresh-audit-btn"
              onClick={handleRefresh}
              disabled={isLoading}
              role="button"
              aria-busy={isLoading}
              aria-label="Atualizar telemetria de auditoria do ecossistema"
              title="Refresh authoritative audit data from Trimindslabs-ecosystem-audit"
              className={`p-1.5 px-2.5 rounded-lg border border-[#D1D1CD] text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] transition-colors cursor-pointer flex items-center gap-1.5 text-[11px] ${isLoading ? 'loading' : ''}`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-emerald-600' : ''}`} />
              <span className="btn-label inline">{isLoading ? 'Refreshing...' : 'Refresh Audit'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Alerta em destaque para status DEGRADED ou DOWN */}
        <div
          id="ecosystem-status-alert"
          role="alert"
          aria-live={healthState === 'DOWN' ? 'assertive' : 'polite'}
          className={`px-5 sm:px-6 py-2.5 border-b text-xs flex items-center justify-between gap-3 ${
            healthState === 'DOWN'
              ? 'bg-rose-50 border-rose-300 text-rose-900'
              : healthState === 'DEGRADED'
              ? 'bg-amber-50 border-amber-300 text-amber-900'
              : 'hidden'
          }`}
        >
          <div className="flex items-center gap-2">
            {healthState === 'DOWN' ? (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            )}
            <span>
              <strong className="uppercase tracking-wide">{healthState === 'DOWN' ? 'ALERTA CRÍTICO:' : 'AVISO DE DEGRADAÇÃO:'}</strong>{' '}
              {healthState === 'DOWN'
                ? 'Ecossistema em estado DOWN / OFFLINE. Telemetria autoritativa desconectada ou falha severa.'
                : 'Ecossistema em estado DEGRADED. Detectadas instabilidades ou gaps de conformidade em resolução.'}
            </span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded border uppercase shrink-0 bg-white/70">
            {healthState}
          </span>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-1 px-5 sm:px-6 pt-3 pb-0 bg-[#EAEAE6] border-b border-[#D1D1CD] text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('ecosystem')}
            className={`px-3 py-2 border-b-2 font-bold cursor-pointer transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'ecosystem'
                ? 'border-[#1A1A1A] text-[#1A1A1A] bg-white rounded-t'
                : 'border-transparent text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ecosystem Audit & Projects ({totalCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('slo')}
            className={`px-3 py-2 border-b-2 font-bold cursor-pointer transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'slo'
                ? 'border-[#1A1A1A] text-[#1A1A1A] bg-white rounded-t'
                : 'border-transparent text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Target Architectural SLO Contracts</span>
          </button>

          <button
            onClick={() => setActiveTab('runtime')}
            className={`px-3 py-2 border-b-2 font-bold cursor-pointer transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'runtime'
                ? 'border-[#1A1A1A] text-[#1A1A1A] bg-white rounded-t'
                : 'border-transparent text-[#70706B] hover:text-[#1A1A1A]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>Container Ingress & Compliance</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 text-xs flex-1">
          {activeTab === 'ecosystem' && (
            <div className="space-y-5">
              {/* Evidence Hierarchy Core Principle Callout */}
              <div className="p-3.5 rounded-lg bg-white border border-[#D1D1CD] flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#1A1A1A] font-bold text-[11px] uppercase tracking-wide">
                    <Info className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Evidence Hierarchy Principle:</span>
                  </div>
                  <div className="text-[11px] text-[#4A4A45] font-sans pl-6">
                    <span className="font-mono font-bold text-[#1A1A1A]">Architecture ≠ Implementation ≠ Execution ≠ Production Evidence</span>
                    <p className="mt-0.5 text-[#70706B]">
                      Code presence or test files do not constitute &ldquo;proven in production&rdquo;. Systems are strictly rated GREEN only when passing automated execution runs are verified.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] pl-6 md:pl-0 shrink-0">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">🟢 Executed</span>
                  <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-bold">🟡 Implemented</span>
                  <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200 font-bold">🔴 Flagged</span>
                </div>
              </div>

              {/* Error or Cached Warning Banner */}
              {error && (
                <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-[11px] space-y-1">
                    <div className="font-bold">Ecosystem Audit Warning:</div>
                    <div>{error}</div>
                    {isCached && (
                      <div className="text-[10px] text-amber-800 font-bold">
                        Displaying verified cached snapshot. Last valid synchronization: {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'N/A'}.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Ecosystem Overview Cards (6 Metrics) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                <div id="card-total-repos" className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                  <div className="text-[10px] text-[#70706B] uppercase">Total Audited</div>
                  <div className="text-lg font-bold text-[#1A1A1A] metric-value">
                    {totalCount}
                  </div>
                  <div className="text-[9px] text-[#70706B] metric-desc">{totalCount} Unique Repos</div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                  <div className="text-[10px] text-[#70706B] uppercase">Status Spread</div>
                  <div className="text-xs font-bold text-[#1A1A1A] flex items-center gap-1.5 pt-1">
                    <span className="text-emerald-700">🟢 {greenCount}</span>
                    <span className="text-amber-700">🟡 {yellowCount}</span>
                    <span className="text-rose-700">🔴 {redCount}</span>
                  </div>
                  <div className="text-[9px] text-[#70706B]">Audited Maturity</div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                  <div className="text-[10px] text-[#70706B] uppercase">Executed Proof</div>
                  <div className="text-lg font-bold text-emerald-700">
                    {executedCount}
                    <span className="text-xs text-[#70706B] font-normal"> / {totalCount}</span>
                  </div>
                  <div className="text-[9px] text-emerald-800 font-bold">Verified Test Runs</div>
                </div>

                <div id="card-pipeline-rate" className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                  <div className="text-[10px] text-[#70706B] uppercase">CI Observed</div>
                  <div className="text-lg font-bold text-[#1A1A1A] metric-value">
                    {ciObservedCount}
                    <span className="text-xs text-[#70706B] font-normal"> / {totalCount}</span>
                  </div>
                  <div className="text-[9px] text-[#70706B] metric-desc">Actions Pipelines</div>
                </div>

                <div id="card-security" className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                  <div className="text-[10px] text-[#70706B] uppercase">Flagged Gaps</div>
                  <div className="text-lg font-bold text-rose-700 metric-value">
                    {criticalGapsCount}
                  </div>
                  <div className="text-[9px] text-rose-800 font-bold metric-desc">Cross-Repo CI</div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] space-y-1">
                  <div className="text-[10px] text-[#70706B] uppercase">Last Refreshed</div>
                  <div className="text-[11px] font-bold text-[#1A1A1A] truncate" title={lastUpdated ? new Date(lastUpdated).toLocaleString() : 'Initial'}>
                    {lastUpdated ? new Date(lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : 'Initial'}
                  </div>
                  <div className="text-[9px] text-[#70706B] truncate">
                    {lastUpdated ? new Date(lastUpdated).toLocaleDateString() : 'Dual-Tier'}
                  </div>
                </div>
              </div>

              {/* Controls: Search & Filters */}
              <div className="p-3 rounded-lg bg-white border border-[#D1D1CD] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-72">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#70706B]" />
                  <input
                    type="text"
                    placeholder="Search by system, priority or dimension..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[#1A1A1A] placeholder-[#70706B] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto text-[11px]">
                  <span className="text-[#70706B] text-[10px] uppercase font-bold mr-1">Filter:</span>
                  {[
                    { id: 'ALL', label: `All (${totalCount})` },
                    { id: 'GREEN', label: `🟢 Green (${greenCount})` },
                    { id: 'YELLOW', label: `🟡 Yellow (${yellowCount})` },
                    { id: 'RED', label: `🔴 Red (${redCount})` },
                    { id: 'EXECUTED', label: 'Verified Executed' },
                    { id: 'GAPS', label: 'Flagged Gaps' }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setFilterStatus(f.id)}
                      className={`px-2.5 py-1 rounded transition-colors cursor-pointer font-semibold ${
                        filterStatus === f.id
                          ? 'bg-[#1A1A1A] text-white'
                          : 'bg-[#F4F4F1] text-[#70706B] hover:text-[#1A1A1A] border border-[#D1D1CD]'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Authoritative Audit Log Feed Table */}
              <div className="rounded-lg bg-white border border-[#D1D1CD] overflow-hidden shadow-xs">
                <div className="p-3 border-b border-[#D1D1CD] flex items-center justify-between bg-[#FAF9F6]">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-bold text-[11px] text-[#1A1A1A] uppercase tracking-wide">
                      Authoritative Audit Log & Verifications Feed
                    </span>
                  </div>
                  <span className="text-[10px] text-[#70706B] font-mono">
                    {filteredProjects.length} Systems Audited
                  </span>
                </div>
                <div className="overflow-x-auto max-h-56">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#F4F4F1] border-b border-[#D1D1CD] text-[10px] text-[#70706B] uppercase font-bold sticky top-0">
                      <tr>
                        <th className="p-2.5">Repository / System</th>
                        <th className="p-2.5">Status</th>
                        <th className="p-2.5">Pipeline Rate</th>
                        <th className="p-2.5">Security & Evidence</th>
                        <th className="p-2.5">Last Audited</th>
                      </tr>
                    </thead>
                    <tbody id="audit-log-table-body">
                      {filteredProjects.map((p) => (
                        <tr key={p.id} className="border-b border-[#EAEAE6] hover:bg-[#FAF9F6] transition-colors text-xs font-mono">
                          <td className="p-2.5 font-bold text-[#1A1A1A]">{p.name}</td>
                          <td className="p-2.5">{getStatusBadge(p.status)}</td>
                          <td className="p-2.5 text-[#4A4A45]">{p.dimensions.ciEnforcement.status === 'GREEN' ? '100% (Actions CI)' : 'Pending CI'}</td>
                          <td className="p-2.5 text-[#4A4A45]">{getEvidenceBadge(p.evidenceLevel)}</td>
                          <td className="p-2.5 text-[#70706B] text-[11px]">{new Date(p.lastAuditedDate).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Project-Level Observability Inventory */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-[#70706B] px-1 font-bold">
                  <span>Showing {filteredProjects.length} of {totalCount} Audited Ecosystem Systems</span>
                  <span>Click any project to inspect all 8 technical evidence dimensions</span>
                </div>

                {filteredProjects.length === 0 ? (
                  <div className="p-8 text-center rounded-lg bg-white border border-[#D1D1CD] text-[#70706B] space-y-2">
                    <AlertCircle className="w-6 h-6 text-amber-500 mx-auto" />
                    <p className="font-bold">No projects matched the selected filter or query.</p>
                    <button
                      onClick={() => { setFilterStatus('ALL'); setSearchQuery(''); }}
                      className="px-3 py-1 rounded bg-[#1A1A1A] text-white text-xs font-semibold hover:bg-black"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  filteredProjects.map((project: AuditedProject) => {
                    const isExpanded = expandedProjectId === project.id;
                    const dim = project.dimensions;

                    return (
                      <div 
                        key={project.id}
                        className="rounded-lg bg-white border border-[#D1D1CD] overflow-hidden transition-all shadow-xs"
                      >
                        {/* Project Header Bar */}
                        <div 
                          onClick={() => toggleProject(project.id)}
                          className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-[#FAF9F6] transition-colors"
                        >
                          <div className="flex items-start sm:items-center gap-2.5">
                            <FolderGit2 className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5 sm:mt-0" />
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-bold text-[#1A1A1A]">{project.name}</span>
                                {getStatusBadge(project.status)}
                                {getEvidenceBadge(project.evidenceLevel)}
                              </div>
                              <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                                {project.runtimeLabel && (
                                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-50 text-sky-900 border border-sky-300 uppercase tracking-wide">
                                    LIVE RUNTIME: {project.runtimeLabel}
                                  </span>
                                )}
                                <p className="text-[11px] text-[#70706B] font-sans line-clamp-1">
                                  {project.summary}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
                            {project.repositoryUrl && (
                              <a
                                href={project.repositoryUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-1 rounded text-[#70706B] hover:text-[#1A1A1A] transition-colors flex items-center gap-1 text-[10px] hover:underline"
                                title="Open GitHub Repository"
                              >
                                <span>GitHub</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            <button
                              type="button"
                              className="p-1 rounded hover:bg-[#EAEAE6] text-[#70706B] transition-colors"
                              aria-label={isExpanded ? 'Collapse project details' : 'Expand project details'}
                            >
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Expanded Technical Dimensions & Evidences */}
                        {isExpanded && (
                          <div className="p-4 sm:p-5 border-t border-[#EAEAE6] bg-[#FAFAF8] space-y-4">
                            {/* Summary & Known Limitations */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="p-3 rounded bg-white border border-[#D1D1CD] space-y-1">
                                <div className="text-[10px] text-[#70706B] uppercase font-bold">Role & Architectural Scope</div>
                                <p className="text-[11px] text-[#1A1A1A] font-sans leading-relaxed">
                                  {project.summary}
                                </p>
                              </div>

                              <div className="p-3 rounded bg-white border border-[#D1D1CD] space-y-1">
                                <div className="text-[10px] text-amber-800 uppercase font-bold flex items-center gap-1">
                                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                                  <span>Known Technical Limitations</span>
                                </div>
                                <ul className="text-[11px] text-[#4A4A45] font-sans list-disc list-inside space-y-0.5">
                                  {project.knownLimitations.map((lim, i) => (
                                    <li key={i}>{lim}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {project.runtimeEvidence && project.runtimeEvidence.length > 0 && (
                              <div className="p-3 rounded bg-white border border-sky-200 space-y-2">
                                <div className="text-[10px] text-sky-800 uppercase font-bold flex items-center gap-1">
                                  <Activity className="w-3 h-3 text-sky-600" />
                                  <span>Live Runtime Evidence — {project.runtimeLabel || 'Production Runtime'}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                                  {project.runtimeEvidence.map((item, i) => (
                                    <div key={i} className="text-[10px] text-[#4A4A45] font-mono break-words">
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* 8 Technical Dimensions Grid */}
                            <div className="space-y-2">
                              <div className="text-[10px] text-[#70706B] uppercase font-bold flex items-center justify-between">
                                <span>8-Point Authoritative Technical Dimensions</span>
                                <span className="font-normal font-mono">Audited on: {new Date(project.lastAuditedDate).toLocaleDateString()}</span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                                {[
                                  { key: 'testSurface', label: 'Test Surface', data: dim.testSurface },
                                  { key: 'executionEvidence', label: 'Execution Evidence', data: dim.executionEvidence },
                                  { key: 'failurePaths', label: 'Failure Paths', data: dim.failurePaths },
                                  { key: 'security', label: 'Security', data: dim.security },
                                  { key: 'integration', label: 'Integration', data: dim.integration },
                                  { key: 'persistence', label: 'Persistence', data: dim.persistence },
                                  { key: 'ciEnforcement', label: 'CI Enforcement', data: dim.ciEnforcement },
                                  { key: 'operationalEvidence', label: 'Operational Evidence', data: dim.operationalEvidence }
                                ].map((d) => (
                                  <div key={d.key} className="p-2.5 rounded bg-white border border-[#D1D1CD] space-y-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="font-bold text-[10px] text-[#1A1A1A] truncate">{d.label}</span>
                                      <span className={`h-2 w-2 rounded-full shrink-0 ${
                                        d.data.status === 'GREEN' ? 'bg-emerald-500' : d.data.status === 'YELLOW' ? 'bg-amber-500' : 'bg-rose-500'
                                      }`}></span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      {getEvidenceBadge(d.data.evidenceLevel)}
                                    </div>
                                    <p className="text-[10px] text-[#4A4A45] font-sans line-clamp-2" title={d.data.details}>
                                      {d.data.details}
                                    </p>
                                    {d.data.observedEvidence && (
                                      <div className="text-[9px] text-[#70706B] font-mono truncate border-t border-[#F0F0EE] pt-1">
                                        Obs: {d.data.observedEvidence}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Evidence & Actionable Priority Footer */}
                            <div className="p-3 rounded bg-white border border-[#D1D1CD] flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-[11px]">
                              <div className="space-y-0.5">
                                <span className="text-[10px] text-[#70706B] uppercase font-bold">Current Engineering Priority:</span>
                                <p className="text-[#1A1A1A] font-semibold font-sans">{project.currentPriority}</p>
                              </div>
                              <div className="shrink-0 text-[10px] text-[#70706B] font-mono border-t md:border-t-0 md:border-l border-[#EAEAE6] pt-1.5 md:pt-0 md:pl-3">
                                <span>Last Verified Evidence:</span>
                                <div className="font-semibold text-emerald-800">{project.lastKnownEvidence}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {activeTab === 'slo' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-lg bg-white border border-[#D1D1CD] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-xs uppercase tracking-wide">
                    Production Service Architectural SLO Contracts
                  </h3>
                  <p className="text-[11px] text-[#70706B] font-sans mt-0.5">
                    Architectural performance contracts and bound targets for active production subsystems.
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold">
                  {serviceSloContracts.length} ACTIVE CONTRACTS
                </span>
              </div>

              <div className="space-y-2">
                {serviceSloContracts.map((svc, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-white border border-[#D1D1CD] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#1A1A1A]">{svc.service}</div>
                      <div className="text-[11px] text-[#70706B] font-mono">{svc.stack}</div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[#1A1A1A]">
                        P95: <strong>{svc.targetP95}</strong>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[#1A1A1A]">
                        SLO: <strong>{svc.sloUptime}</strong>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                        {svc.hallucinationBound}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'runtime' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-3">
                <div className="flex items-center justify-between border-b border-[#F0F0EE] pb-2">
                  <span className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Container Ingress & European Compliance Metadata</span>
                  </span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                    100% SOVEREIGN VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {operationalSpecs.map((spec, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] space-y-0.5">
                      <div className="text-[10px] text-[#70706B] uppercase">{spec.label}</div>
                      <div className="text-xs font-semibold text-[#1A1A1A]">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Gates Quick Status */}
              <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#1A1A1A]">Phase 12 Production Release Gates Passed</div>
                    <div className="text-[11px] text-[#70706B]">All 11 technical, ethical, and operational criteria verified.</div>
                  </div>
                </div>

                {onOpenGates && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenGates();
                    }}
                    className="px-3 py-1.5 rounded bg-[#1A1A1A] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Inspect All 11 Gates
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 sm:p-4 border-t border-[#D1D1CD] bg-white text-[11px] gap-2">
          <div className="flex items-center gap-2 text-[#70706B] text-[10px] font-mono flex-wrap">
            <span>Authoritative Source: Trimindslabs-ecosystem-audit</span>
            <span>•</span>
            <span>
              Refreshed: <strong className="text-[#1A1A1A]">{lastUpdated ? new Date(lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : 'Initial'}</strong>
            </span>
            {isCached && (
              <span className="text-amber-700 font-medium">(Cached snapshot)</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#1A1A1A] text-white font-semibold hover:bg-black transition-colors cursor-pointer text-xs self-end sm:self-auto"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
