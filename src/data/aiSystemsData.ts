import { AISystem } from '../types';

/**
 * Architectural system patterns presented on the public site.
 *
 * Important: this catalogue intentionally avoids deployment-wide SLAs and
 * infrastructure claims that belong to individual repositories/case studies.
 * Current implementation and deployment evidence is presented in Projects.
 */
export const AI_SYSTEMS: AISystem[] = [
  {
    id: "trusted-search",
    name: "Trusted Search Core",
    headline: "Evidence-first retrieval architecture for compliance and enterprise knowledge",
    description: "A retrieval architecture centered on explicit evidence boundaries: deterministic answers where the available data permits them, semantic retrieval when needed, and validated fallback generation rather than treating generation as the default.",
    keyCapabilities: [
      "Deterministic trusted-answer path",
      "Semantic retrieval with PostgreSQL + pgvector",
      "Explicit separation between evidence and generative fallback",
      "Repository-level provenance and validation"
    ],
    technicalSpecs: {
      latency: "Not stated as a global SLA",
      reliability: "Evidence status is system-specific",
      dataResidency: "Qualified per deployment and data source",
      guardrailType: "Evidence boundary + explicit fallback state"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Evidence & Query Intake",
        description: "Accepts the user request and determines whether the available corpus can support a trusted answer.",
        technology: "Application validation + structured data access"
      },
      {
        step: 2,
        title: "Deterministic Answer Path",
        description: "Uses structured or trusted evidence directly when the requested fact can be established without generative inference.",
        technology: "PostgreSQL / application domain logic"
      },
      {
        step: 3,
        title: "Semantic Retrieval",
        description: "Uses semantic retrieval when deterministic evidence is insufficient, keeping the fallback path explicit rather than implicit.",
        technology: "pgvector + sentence-transformers"
      },
      {
        step: 4,
        title: "Validated Fallback",
        description: "Generative assistance remains a qualified fallback and is not presented as equivalent to directly verified evidence.",
        technology: "LangChain + Pydantic validation"
      }
    ]
  },
  {
    id: "agentic-systems",
    name: "Controlled Agentic Workflow",
    headline: "Constrained AI workflows with explicit validation boundaries",
    description: "A controlled agentic pattern developed around the Trusted Compliance Agent. The workflow separates retrieval, reasoning and validation so that an agentic step does not become an unrestricted source of truth.",
    keyCapabilities: [
      "Controlled multi-step workflow",
      "Structured Pydantic contracts",
      "Explicit validation gates",
      "Fail-closed handling of unsupported results"
    ],
    technicalSpecs: {
      latency: "No global latency claim",
      reliability: "Validation state is explicit",
      dataResidency: "Qualified per deployment",
      guardrailType: "Schema validation + evidence boundary"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Document & Context Intake",
        description: "Ingests the relevant documents and structured context required by the workflow.",
        technology: "Python / FastAPI / document processing"
      },
      {
        step: 2,
        title: "Retrieval & Evidence Selection",
        description: "Retrieves candidate evidence before an agentic response is considered.",
        technology: "PostgreSQL + pgvector + semantic retrieval"
      },
      {
        step: 3,
        title: "Controlled Synthesis",
        description: "Applies constrained reasoning against the selected context rather than allowing unrestricted generation.",
        technology: "LangChain + Pydantic"
      },
      {
        step: 4,
        title: "Validation & State",
        description: "The result is validated and its evidence state is kept explicit; unsupported output is not promoted to trusted evidence.",
        technology: "Application validation gates"
      }
    ]
  },
  {
    id: "geospatial-ai",
    name: "Trimindslabs Geo AI",
    headline: "Operational Earth observation with deterministic geospatial analysis",
    description: "The current Geo AI V4 implementation turns real Copernicus Sentinel-2 L2A observations into traceable analytical evidence and GeoJSON outputs. The production architecture is intentionally presented separately from future GPU and deep-learning directions.",
    keyCapabilities: [
      "Real Sentinel-2 L2A scene discovery",
      "Cloud-Optimized GeoTIFF band extraction",
      "Deterministic NDVI / NDRE / EVI computation",
      "Evidence and GeoJSON generation"
    ],
    technicalSpecs: {
      latency: "No global latency SLA stated",
      reliability: "Production status is repository/deployment evidenced",
      dataResidency: "Qualified by data source and deployment",
      guardrailType: "Deterministic spatial and analytical validation"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Scene Discovery",
        description: "Discovers real Sentinel-2 L2A observations for the selected region of interest.",
        technology: "AWS Earth Search STAC / Copernicus data"
      },
      {
        step: 2,
        title: "Selective Raster Access",
        description: "Reads required Cloud-Optimized GeoTIFF bands rather than presenting synthetic imagery as production input.",
        technology: "geotiff / COG"
      },
      {
        step: 3,
        title: "Deterministic Analysis",
        description: "Computes spectral indices and geospatial measurements with reproducible numerical processing.",
        technology: "TypeScript / Float32Array / proj4"
      },
      {
        step: 4,
        title: "Evidence Output",
        description: "Produces analytical evidence and GeoJSON outputs, with optional generative reporting kept as a separate layer.",
        technology: "Express REST API / GeoJSON"
      }
    ]
  },
  {
    id: "security-observability",
    name: "Trimindslabs Security Platform",
    headline: "Zero-trust security, policy enforcement and observable AI boundaries",
    description: "A Java/Spring security platform built around policy enforcement, identity and access controls, auditability and operational observability. The public site presents the implemented architecture without inventing a universal gateway SLA.",
    keyCapabilities: [
      "Open Policy Agent policy enforcement",
      "Hexagonal architecture and domain isolation",
      "Identity, access-control and policy services",
      "PostgreSQL, Redis, Kafka and OpenTelemetry integration"
    ],
    technicalSpecs: {
      latency: "No global proxy-latency SLA stated",
      reliability: "Validation and deployment status are system-specific",
      dataResidency: "Qualified per deployment",
      guardrailType: "Fail-closed policy enforcement + audit trail"
    },
    architecturalFlow: [
      {
        step: 1,
        title: "Identity & Access",
        description: "Separates authentication and authorization concerns across dedicated security services.",
        technology: "Java 21 / Spring Boot"
      },
      {
        step: 2,
        title: "Policy Decision",
        description: "Evaluates authorization through explicit policy rules with fail-closed behavior.",
        technology: "Open Policy Agent (OPA) / Rego"
      },
      {
        step: 3,
        title: "Risk & Control",
        description: "Applies security controls and risk-oriented validation before protected operations proceed.",
        technology: "Security services / validation layer"
      },
      {
        step: 4,
        title: "Audit & Telemetry",
        description: "Records security events and exposes operational signals for investigation and observability.",
        technology: "PostgreSQL / Redis / Kafka / OpenTelemetry"
      }
    ]
  }
];
