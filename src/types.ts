export type NavigationTab = 
  | 'home' 
  | 'ai-systems' 
  | 'engineering' 
  | 'projects' 
  | 'research' 
  | 'about' 
  | 'contact';

export type Language = 'en' | 'pt' | 'es';

export type ProjectCategory = 
  | 'what-we-built' 
  | 'what-we-are-exploring' 
  | 'what-is-planned';

export type TruthStatus = 
  | 'implemented'
  | 'partial'
  | 'planned'
  | 'not-present';

export type DeploymentStatus =
  | 'production'
  | 'deployed'
  | 'validated'
  | 'not-deployed'
  | 'unknown';

export interface RealTechnologyStack {
  languages: string[];
  frameworks: string[];
  libraries: string[];
  databases: string[];
  cloud: string[];
  iac: string[];
  apis: string[];
  testing: string[];
  ciCd: string[];
  observability: string[];
}

export interface RealArchitectureVerification {
  documented: string;
  implemented: string;
  presentedOnSite: string;
  coherenceScore: '100% Coherent' | 'Verified Alignment' | 'Architectural Delta Flagged';
}

export interface ProjectRepositoryInfo {
  name: string;
  isPrivate: boolean;
  visibilityBadge: 'Public Repository' | 'Private Enterprise Monorepo' | 'Proprietary IP';
  url?: string;
  testSuiteStatus: string;
  ciCdPipeline: string;
  adrReferences: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  sector: string;
  category: ProjectCategory;
  truthStatus: TruthStatus;
  deploymentStatus?: DeploymentStatus;
  evidenceSource?: string;
  lastVerified?: string;
  honestScope: string;
  whatItProves: string;
  problem: string;
  context: string;
  architecture: {
    overview: string;
    components: string[];
    diagramText?: string;
  };
  realArchitectureVerification: RealArchitectureVerification;
  realTechnologies: RealTechnologyStack;
  repository: ProjectRepositoryInfo;
  engineering: string[];
  technology: string[];
  evolution: string;
  challenges: string[];
  decisions: {
    decision: string;
    rationale: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  evidence: string;
}

export interface ResearchArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  abstract: string;
  keyTakeaways: string[];
  bodySections: {
    heading: string;
    content: string;
    codeSnippet?: string;
  }[];
  conclusions: string;
  doiOrReference: string;
  repositoryUrl?: string;
  portfolioLabel?: string;
  operationalMonitoring?: 'excluded' | 'operational';
}

export interface AISystem {
  id: string;
  name: string;
  headline: string;
  description: string;
  keyCapabilities: string[];
  technicalSpecs: {
    latency: string;
    reliability: string;
    dataResidency: string;
    guardrailType: string;
  };
  architecturalFlow: {
    step: number;
    title: string;
    description: string;
    technology: string;
  }[];
}

export interface VocabularyTerm {
  term: string;
  shortDefinition: string;
  fullNarrative: string;
  contrastingAntiPattern: string;
  productionImplementation: string;
}

export interface TelemetryMetric {
  name: string;
  value: string;
  unit: string;
  change: string;
  status: 'nominal' | 'optimal' | 'verified';
}

export type EvidenceStatus = 'sustained' | 'consolidating' | 'aspirational';

export interface AuditRealityItem {
  id: string;
  concept: string;
  status: EvidenceStatus;
  claim: string;
  githubEvidence: string;
  analysis: string;
  architecturalVerdict: string;
}

export interface ProductionGate {
  id: string;
  name: string;
  phase: string;
  status: 'verified' | 'in-progress' | 'pending';
  evidence: string;
  details: string;
}
