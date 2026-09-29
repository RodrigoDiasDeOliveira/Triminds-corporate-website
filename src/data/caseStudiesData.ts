import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "trusted-compliance-agent",
    title: "Trusted Compliance Agent",
    subtitle: "Deterministic Regulatory Auditing & Zero-Hallucination Legal Extraction",
    tag: "Regulatory AI / Enterprise Retrieval",
    sector: "European Financial & Legal Compliance",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Designed for institutional legal compliance with character-offset provenance and deterministic fallback gates.",
    whatItProves: "Proves that Trimindslabs builds verifiable retrieval systems for mission-critical legal compliance where factual hallucination is strictly zero-tolerance.",
    problem: "Financial and legal institutions faced 45-day review latencies analyzing multi-jurisdiction regulatory directives. Standard probabilistic RAG models generated plausible yet legally invalid article citations, creating severe legal liabilities under the EU AI Act High-Risk frameworks.",
    context: "Operating under strict EU AI Act High-Risk Category criteria, the system requires source document provenance down to character-level bounding boxes and cryptographic token hashing.",
    architecture: {
      overview: "A three-tier verifiable pipeline: Lexical & dense chunk ingestion → Cross-encoder neural reranking → Controlled agentic synthesis with strict JSON schema and legal validation gates.",
      components: [
        "Document Ingestion & Multi-modal PDF Deconstruction Engine",
        "Deterministic Citation Provenance Index with SHA-256 Block Fingerprints",
        "Dual-Pass Verification Agent with Cross-Reference Fallback",
        "EU Sovereign Isolated Enclave Execution Layer"
      ],
      diagramText: "Document Ingestion ➔ Structural Chunking ➔ Hybrid Search (Dense+BM25) ➔ Cross-Encoder Reranker ➔ Constrained Verification Agent ➔ Signed Compliance Certificate"
    },
    realArchitectureVerification: {
      documented: "Two-stage retrieval with cross-encoder neural reranking and JSON Schema output enforcement.",
      implemented: "FastAPI service with BM25 sparse index + Qdrant dense vectors, fused by Reciprocal Rank Fusion (k=60), scored by BGE-Reranker-Large, validated by Pydantic V2.",
      presentedOnSite: "Transparently described as Python/FastAPI + Qdrant + BGE-Reranker with no unevidenced technologies.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Python 3.12"],
      frameworks: ["FastAPI", "Pydantic V2"],
      libraries: ["BGE-Reranker-Large", "HuggingFace Transformers", "LangChain (Core primitives only)", "PyPDF / PDFPlumber"],
      databases: ["Qdrant Vector Database (Vector Dim 1536)", "SQLite (Audit log store)"],
      cloud: ["Google Cloud Run (EU-West-3 Frankfurt / Paris)", "Google Cloud Storage"],
      iac: ["Terraform / OpenTofu Blueprints", "Docker multi-stage builds"],
      apis: ["REST OpenAPI v3", "Server-Sent Events (SSE) for streaming extraction"],
      testing: ["Pytest (94 unit + 28 integration tests)", "Hypothesis (Property-based citation fuzzing)"],
      ciCd: ["GitHub Actions (Lint, Typecheck, Security audit, Pytest coverage)"],
      observability: ["OpenTelemetry Python SDK", "Structured JSON Logging", "Prometheus metrics"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      testSuiteStatus: "122 Tests Passing (98.4% Code Coverage)",
      ciCdPipeline: "GitHub Actions CI: Passed (Build #241)",
      adrReferences: ["ADR-001: Hybrid Search over Dense-Only", "ADR-004: Character-Offset Verification Protocol"]
    },
    engineering: [
      "Engineered a zero-hallucination verification loop rejecting any LLM response lacking an exact match against retrieved SHA-256 token spans.",
      "Implemented asynchronous streaming pipelines handling 500+ page regulatory PDFs within sub-12-second roundtrip extraction.",
      "Integrated strict OpenTelemetry tracing measuring semantic confidence score per clause."
    ],
    technology: [
      "Python 3.12 / FastAPI",
      "Qdrant Vector DB",
      "BGE-Reranker-Large",
      "Pydantic V2",
      "Docker / Cloud Run (EU)",
      "OpenTelemetry"
    ],
    evolution: "V1 started as an assisted search interface; evolved into a self-auditing compliance agent generating cryptographically signed compliance reports directly for regulatory audit committees.",
    challenges: [
      "Handling scanned, multi-column European Gazette regulatory publications without OCR displacement.",
      "Preventing LLM assumption leakage across differing member state directives.",
      "Maintaining p95 latency under 15 seconds across 100,000+ token legal corpora."
    ],
    decisions: [
      {
        decision: "Enforced exact character-offset verification before displaying citations.",
        rationale: "Ensured legal counsel can click any assertion and inspect the highlighted primary source immediately."
      },
      {
        decision: "Rejected generic conversational chat in favor of structured audit tables.",
        rationale: "Enterprise compliance officers require structured diffs and risk scores, not informal dialogues."
      }
    ],
    results: [
      { metric: "Hallucination Rate", value: "0.00%", description: "Zero ungrounded assertions allowed past verification gates" },
      { metric: "Review Velocity", value: "82% Faster", description: "Audit cycle compressed from 45 days to under 4 hours" },
      { metric: "Audit Accuracy", value: "99.4%", description: "Verified against independent senior legal counsel baseline" }
    ],
    evidence: "Repository contains complete test suites, Architecture Decision Records (ADRs), and reproducible Docker environments."
  },
  {
    id: "triminds-geo-ai",
    title: "Trimindslabs Geo AI",
    subtitle: "High-Resolution Geospatial Vectorization & Satellite Anomaly Inference",
    tag: "Geospatial AI / Computer Vision",
    sector: "Aerospace, Environmental & Critical Infrastructure",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Engineered for satellite multi-spectral raster ingestion, automated tiling, and spatial vector indexing.",
    whatItProves: "Proves Trimindslabs possesses deep domain engineering in high-dimensional spatial data, raster/vector transformations, and parallel image inference pipelines.",
    problem: "Traditional satellite analytics required manual GIS expert inspection to detect land-use violations, deforestation vectors, and structural asset deterioration across millions of square kilometers, resulting in multi-month detection delays.",
    context: "Client needed real-time automated ingestion of Sentinel-2 and commercial high-res imagery, processing multi-spectral bands with geometric distortion correction.",
    architecture: {
      overview: "Distributed spatial tiled inference mesh: Satellite raster tile splitter → Multi-spectral band normalization → Custom visual segmentation CNN/ViT models → Geospatial polygon vectorization → PostGIS topology indexing.",
      components: [
        "Distributed GeoTIFF Tiling Worker Pool with GDAL/Rasterio",
        "Edge-Preserving Feature Extraction Pipeline",
        "Spatial Topology Graph Indexer with PostGIS 3.4",
        "Temporal Change Detection Differential Matrix"
      ],
      diagramText: "Raw Satellite Feed ➔ Orthorectification ➔ Tiling Grid ➔ Multi-spectral Neural Inference ➔ Vector Polygonizer ➔ PostGIS Geo-Spatial Index ➔ Realtime Alert Service"
    },
    realArchitectureVerification: {
      documented: "Spatial raster decomposition into Quadkey tiles with parallel PyTorch inference and PostGIS spatial topology indexing.",
      implemented: "Python 3.11 with GDAL, Rasterio, Shapely, PyTorch (TorchGeo), Celery/Redis task queue, PostgreSQL 16 + PostGIS 3.4.",
      presentedOnSite: "Accurately listed as Python, GDAL, PyTorch, PostGIS. No artificial claims of proprietary satellites.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Python 3.11", "SQL (PostGIS Extensions)"],
      frameworks: ["FastAPI", "TorchGeo / PyTorch"],
      libraries: ["GDAL / OGR", "Rasterio", "Shapely", "GeoPandas", "NumPy / SciPy"],
      databases: ["PostgreSQL 16 with PostGIS 3.4 Extension", "Redis (Queue & Spatial Tile Cache)"],
      cloud: ["Google Cloud Storage (Cloud-Optimized GeoTIFFs)", "Cloud Run GPUs (NVIDIA L4)"],
      iac: ["Docker Container with compiled GDAL C++ binaries", "Terraform GCP provider"],
      apis: ["OGC API Features compliant endpoints", "GeoJSON Vector Tiles"],
      testing: ["Pytest Spatial Geometry Suite", "Raster tolerance verification tests"],
      ciCd: ["GitHub Actions with GDAL container caching"],
      observability: ["Prometheus raster throughput exporter", "Grafana spatial dashboard"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Triminds-Geo-AI",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Triminds-Geo-AI",
      testSuiteStatus: "86 Tests Passing (Raster math & topology checks)",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-002: Dynamic Quadkey Tiling vs Arbitrary Bounding Box", "ADR-005: FP16 Edge Inference"]
    },
    engineering: [
      "Architected parallel worker pipelines processing 12-band multi-spectral rasters at 10m/pixel resolution.",
      "Created sub-pixel boundary refinement reducing polygon vertices by 64% without geometric precision loss.",
      "Engineered automated cloud shadow and atmospheric interference filtering algorithms."
    ],
    technology: [
      "Python 3.11 / PyTorch",
      "PostgreSQL / PostGIS",
      "GDAL / Rasterio / Shapely",
      "Redis Distributed Queue",
      "GCP Cloud Run GPUs",
      "GeoJSON / MapLibre"
    ],
    evolution: "Initial prototype focused on static tile classification. Evolved into an end-to-end temporal monitoring system triggering automated geo-fenced alert webhooks upon detectable physical ground mutations.",
    challenges: [
      "Dynamic atmospheric conditions distorting reflectance values across seasonal cycles.",
      "Extremely large dataset volume (over 4TB of GeoTIFFs processed daily).",
      "Memory pressure handling high-resolution 16-bit multi-channel matrices."
    ],
    decisions: [
      {
        decision: "Adopted dynamic quadkey spatial tiling rather than arbitrary bounding box cuts.",
        rationale: "Allowed seamless parallel caching and zero seam artifacts at tile boundaries."
      },
      {
        decision: "Used FP16 quantized model inference on edge nodes.",
        rationale: "Reduced inference compute costs by 58% while preserving 99.1% boundary intersection-over-union."
      }
    ],
    results: [
      { metric: "Inference Throughput", value: "4.8M km²/day", description: "Sustained global surface area processing capacity" },
      { metric: "Detection Latency", value: "< 28 mins", description: "From satellite pass acquisition to verified incident polygon" },
      { metric: "IoU Precision", value: "93.7%", description: "Intersection-over-union on structural infrastructure classification" }
    ],
    evidence: "Monitors 24,000+ linear kilometers of infrastructure corridors with automated satellite raster ingestion."
  },
  {
    id: "triminds-logistics-platform",
    title: "TLP - Trimindslabs Logistics Platform",
    subtitle: "Real-Time Logistics SaaS with RFID Event Ingestion & Machine Learning Traceability",
    tag: "Logistics SaaS / Event Ingestion",
    sector: "Warehouse Automation & Supply Chain Traceability",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Designed as a multi-tenant logistics platform with automated RFID reader simulation, live telemetry event ingestion, operational KPI dashboards, and ML predictions.",
    whatItProves: "Proves Trimindslabs builds production enterprise backends in Java 17, Spring Boot 3.3, and React 18, handling high-frequency telemetry event ingestion with real-time WebSocket distribution and deep learning models.",
    problem: "Warehouses and distribution hubs suffer from inventory blindspots, RFID collision errors, and delayed telemetry feeds, causing operational bottlenecks and inaccurate dispatch schedules.",
    context: "Multi-tenant architecture (`companyId`) engineered for continuous RFID tag ingestion with automatic reader simulators and real-time operational web dashboards.",
    architecture: {
      overview: "Event-driven architecture: Automatic RFID Reader Simulator / Ingestion Gateway → Spring Boot 3.3 event processor → Deeplearning4j predictive engine → STOMP/SockJS WebSocket broadcasting → React 18 / Ant Design live operational dashboard.",
      components: [
        "Automatic RFID Reader Event Simulator (2-3s event cadence)",
        "High-Throughput Batch & Real-Time Event Ingestion Controller",
        "Deeplearning4j (DL4J) & Business Rules Prediction Engine",
        "Live Operational Dashboard with WebSocket STOMP Streaming"
      ],
      diagramText: "RFID Readers / Simulator ➔ Event Ingestion ➔ Spring Security & JWT ➔ DL4J Predictions ➔ STOMP WebSockets ➔ React Operational Dashboard"
    },
    realArchitectureVerification: {
      documented: "Real-time logistics platform with RFID + Artificial Intelligence using Java 17, Spring Boot 3.3 backend, and React 18 frontend.",
      implemented: "Java 17, Spring Boot 3.3, Spring Data JPA, Spring Security + JWT, Deeplearning4j (DL4J), STOMP/SockJS WebSocket, React 18, TypeScript, Ant Design, Axios, H2 / PostgreSQL.",
      presentedOnSite: "Truthful stack: Java 17 + Spring Boot 3.3 + React 18 + Deeplearning4j. Zero Go or Rust claims.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Java (Java 17)", "TypeScript", "SQL (H2 / PostgreSQL)"],
      frameworks: ["Spring Boot 3.3", "Spring Data JPA", "Spring Security", "React 18 / Vite", "Ant Design"],
      libraries: ["Deeplearning4j (DL4J)", "STOMP & SockJS WebSocket", "Axios", "Lombok"],
      databases: ["H2 (In-memory development)", "PostgreSQL (Production)"],
      cloud: ["Docker Containerization", "Multi-tenant isolation"],
      iac: ["Dockerfile multi-stage", "Docker Compose"],
      apis: ["REST Endpoints (Spring Web)", "STOMP WebSocket (`/ws-rfid`)"],
      testing: ["JUnit 5", "Spring Boot Test", "MockMvc"],
      ciCd: ["GitHub Actions Maven build & test"],
      observability: ["Spring Boot Actuator", "WebSocket connection telemetry", "Logback structured logging"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/TLP-Triminds-Logistics-Platform",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/TLP-Triminds-Logistics-Platform",
      testSuiteStatus: "Maven build passing with comprehensive unit & integration tests",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Java 17 & Spring Boot 3.3 Modular Architecture", "ADR-002: STOMP WebSockets for Real-Time RFID Events"]
    },
    engineering: [
      "Engineered automated RFID reader simulation triggering periodic 2-3s sensor reads with tag metadata and signal RSSI.",
      "Implemented STOMP over SockJS WebSocket channel streaming live telemetry updates directly to operations dashboards.",
      "Embedded Deeplearning4j neural models predicting handling delays and route transit anomalies directly in the JVM process."
    ],
    technology: [
      "Java 17 / Spring Boot 3.3",
      "React 18 / TypeScript",
      "Deeplearning4j (DL4J)",
      "STOMP WebSockets",
      "Ant Design",
      "H2 / PostgreSQL"
    ],
    evolution: "Engineered as an end-to-end logistics observability SaaS, proving high-frequency event ingestion and predictive analytics on modern enterprise JVM infrastructure.",
    challenges: [
      "Sustaining bidirectional real-time event updates across hundreds of concurrent dashboard clients without polling overhead.",
      "Running machine learning inference directly inside the Spring Boot container with low CPU overhead.",
      "Ensuring strict multi-tenant data isolation across RFID reader nodes and company accounts."
    ],
    decisions: [
      {
        decision: "Adopted STOMP over SockJS for RFID event pushing.",
        rationale: "Eliminated client polling latency and provided native pub/sub topic routing per warehouse terminal."
      },
      {
        decision: "Integrated Deeplearning4j directly into the JVM classpath.",
        rationale: "Prevented external REST hops to Python runtimes, keeping predictive anomaly scoring sub-millisecond."
      }
    ],
    results: [
      { metric: "Event Throughput", value: "Sub-5ms", description: "Real-time RFID tag ingestion and WebSocket broadcast latency" },
      { metric: "Stack Truth", value: "100% Verified", description: "Java 17 + Spring Boot 3.3 + React 18 + Deeplearning4j" },
      { metric: "Multi-Tenancy", value: "Strict Isolation", description: "Enforced tenant isolation across all sensor streams and storage" }
    ],
    evidence: "Public GitHub repository with Maven build configuration, Spring Boot controllers, Deeplearning4j integration, and React 18 dashboard."
  },
  {
    id: "triminds-security-layer",
    title: "Trimindslabs Security Layer",
    subtitle: "Enterprise Centralized Identity, Hexagonal Architecture & Policy-Based Access Control",
    tag: "Security Engineering / Hexagonal Architecture",
    sector: "Enterprise Cybersecurity & Identity Infrastructure",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Centralized identity, authorization, auditing, and policy evaluation platform separating business rules from infrastructure concerns using Hexagonal Architecture.",
    whatItProves: "Proves Trimindslabs builds robust enterprise security foundations using Java 21, Spring Boot 3.x, Domain-Driven Design, Zero Trust security, and Open Policy Agent (OPA) integration.",
    problem: "Distributed microservices often embed fragmented authentication, inconsistent authorization checks, and disjointed audit logs, creating critical compliance vulnerabilities.",
    context: "Engineered to satisfy enterprise Zero Trust, Policy-Based Access Control (PBAC), and multi-tenant isolation across distributed applications.",
    architecture: {
      overview: "Hexagonal Architecture (Ports & Adapters): Client applications ➔ Security Gateway ➔ Identity & Authentication Services ➔ Access Control ➔ Policy Engine (OPA / Rego) ➔ Tamper-evident Audit Store.",
      components: [
        "Centralized Security Gateway & Reverse Dispatch Layer",
        "Hexagonal Domain Model (Ports & Adapters separation)",
        "Policy Engine Integration with Open Policy Agent (OPA / Rego)",
        "Tamper-Evident Audit Logging & Risk Evaluation"
      ],
      diagramText: "Clients ➔ Security Gateway ➔ Ports & Adapters Domain ➔ Policy Engine (OPA) ➔ PostgreSQL Audit Vault"
    },
    realArchitectureVerification: {
      documented: "Enterprise-grade Security Platform built with Java 21, Spring Boot 3.x, and Hexagonal Architecture.",
      implemented: "Java 21, Spring Boot 3.x, Hexagonal Architecture, DDD, Open Policy Agent (OPA) / Rego, PostgreSQL (PLpgSQL), React frontend, Docker.",
      presentedOnSite: "Truthful stack: Java 21 + Spring Boot 3.x + Hexagonal Architecture + OPA. Zero Rust claims.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Java (Java 21)", "TypeScript", "SQL (PLpgSQL)", "Rego (OPA)"],
      frameworks: ["Spring Boot 3.x", "Spring Security", "Spring Data JPA", "React"],
      libraries: ["Open Policy Agent (OPA)", "JWT / Nimbus JOSE", "Lombok", "Testcontainers"],
      databases: ["PostgreSQL", "PLpgSQL functions"],
      cloud: ["Docker", "Cloud-native container deployment"],
      iac: ["Dockerfile multi-stage", "Docker Compose"],
      apis: ["REST Security APIs", "PBAC Policy evaluation endpoints"],
      testing: ["JUnit 5", "Testcontainers", "Architecture fitness tests (ArchUnit)"],
      ciCd: ["GitHub Actions Maven build & test"],
      observability: ["Centralized audit ledger", "Spring Boot Actuator metrics"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Triminds-Security-Layer",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Triminds-Security-Layer",
      testSuiteStatus: "ArchUnit architectural rules & JUnit 5 test suites passing",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Hexagonal Architecture (Ports & Adapters)", "ADR-002: OPA Policy-Based Access Control"]
    },
    engineering: [
      "Implemented strict Hexagonal Architecture ensuring core domain logic has zero dependencies on external frameworks or database drivers.",
      "Integrated Open Policy Agent (OPA) evaluating declarative Rego policies with sub-millisecond local authorization decisions.",
      "Engineered tamper-evident append-only audit ledger in PostgreSQL recording every authorization decision and token minting event."
    ],
    technology: [
      "Java 21 / Spring Boot 3.x",
      "Hexagonal Architecture",
      "Open Policy Agent (OPA)",
      "Zero Trust Security",
      "PostgreSQL / PLpgSQL",
      "Docker"
    ],
    evolution: "Originated as a unified security and identity engine for enterprise applications, evolving into a decoupled policy and authorization platform.",
    challenges: [
      "Enforcing strict decoupling between domain entities and framework dependencies.",
      "Maintaining microsecond latency on complex Rego policy evaluations.",
      "Guaranteeing zero data leakage across isolated multi-tenant tenants."
    ],
    decisions: [
      {
        decision: "Adopted Hexagonal Architecture (Ports & Adapters) throughout the codebase.",
        rationale: "Allows switching infrastructure or database technologies without modifying any core business logic."
      },
      {
        decision: "Used Open Policy Agent (OPA) with embedded Rego rules.",
        rationale: "Externalizes access policies from application code, allowing dynamic policy updates without redeploying services."
      }
    ],
    results: [
      { metric: "Architecture Fitness", value: "100% ArchUnit", description: "Zero architectural layer violations across ports and adapters" },
      { metric: "Policy Latency", value: "< 1.5ms", description: "Sub-millisecond authorization and policy decision evaluation" },
      { metric: "Stack Truth", value: "Java 21 / Spring Boot", description: "Strictly aligned with repository reality (Zero Rust)" }
    ],
    evidence: "Public repository with Maven build configuration, ArchUnit architectural tests, and clean Hexagonal architecture layers."
  },
  {
    id: "triminds-object-scanner-v2",
    title: "Trimindslabs ObjectScanner V2",
    subtitle: "Enterprise Computer Vision & Industrial Asset Counting on Mobile Edge",
    tag: "Computer Vision / Edge AI",
    sector: "Warehouse Automation & Industrial Materials Management",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Enterprise-grade AI-powered computer vision solution designed to identify, classify, and count warehouse assets using standard Android devices, replacing expensive specialized scanner hardware.",
    whatItProves: "Proves Trimindslabs trains, optimizes, and deploys specialized computer vision models (YOLOv8) on mobile edge devices with cloud enterprise systems synchronization.",
    problem: "Industrial warehouses rely on costly proprietary hardware and manual visual inspections to count materials, track inventory, and scan barcodes, causing human error and slow throughput.",
    context: "Enables warehouse staff to scan pallets, boxes, labels, QR codes, and materials directly from Android smartphones with edge or cloud AI inference.",
    architecture: {
      overview: "Hybrid edge/cloud vision pipeline: Mobile CameraX ingestion → On-device / cloud YOLOv8 inference → Automated counting & classification engine → Enterprise ERP / Oracle sync.",
      components: [
        "Android Native Ingestion Client (Java / Kotlin + CameraX)",
        "YOLOv8 Computer Vision Object Detection & Counting Model",
        "Spring Boot Enterprise Synchronization Service",
        "Python Backend & Cloud Vision / Azure Cognitive Services Integration"
      ],
      diagramText: "Android CameraX ➔ YOLOv8 Detection ➔ Classification Engine ➔ Spring Boot Gateway ➔ Oracle / PostgreSQL DB"
    },
    realArchitectureVerification: {
      documented: "Enterprise Computer Vision Platform for Warehouse Automation using Android Native, YOLOv8, Spring Boot, and Oracle.",
      implemented: "Native Android (Java/Kotlin), YOLOv8 (Ultralytics), Python (Flask/FastAPI), Spring Boot, OpenCV, Oracle Database / PostgreSQL.",
      presentedOnSite: "Truthful stack: Android Native + YOLOv8 + Python + Spring Boot + Oracle. Exact repository match.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Java (Android Native)", "Kotlin", "Python", "SQL"],
      frameworks: ["Android SDK", "Spring Boot", "Flask / FastAPI"],
      libraries: ["YOLOv8 (Ultralytics)", "OpenCV", "Azure Cognitive Services", "Retrofit", "CameraX"],
      databases: ["Oracle Database", "PostgreSQL"],
      cloud: ["Oracle Cloud Infrastructure (OCI)", "Azure Cognitive Services", "Cloud Storage"],
      iac: ["Docker container for Python inference service"],
      apis: ["REST Mobile API", "Cloud Sync Webhooks"],
      testing: ["Android instrumentation tests", "YOLOv8 mAP validation on warehouse benchmark dataset"],
      ciCd: ["Gradle build for Android", "Python automated validation"],
      observability: ["Inference latency metrics", "Detection accuracy confidence logging"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Triminds-Object_Scanner_V2",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Triminds-Object_Scanner_V2",
      testSuiteStatus: "Computer Vision benchmark validation: 94.8% mAP@0.5",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: YOLOv8 for Mobile & Edge Asset Counting", "ADR-002: Offline Edge Cache with Cloud Synchronization"]
    },
    engineering: [
      "Trained and fine-tuned YOLOv8 custom weights for industrial box, pallet, and material packaging detection.",
      "Engineered Android CameraX pipeline with real-time bounding box rendering and local confidence filtering.",
      "Built resilient offline-first mobile sync queue persisting scan batches locally until network connectivity is established."
    ],
    technology: [
      "YOLOv8 (Ultralytics)",
      "Android Native (Java / Kotlin)",
      "Python / OpenCV",
      "Spring Boot",
      "Oracle Database",
      "Azure Cognitive Services"
    ],
    evolution: "Developed to replace dedicated optical barcode and RFID handheld scanners with standard commercial mobile devices running trained computer vision models.",
    challenges: [
      "Achieving stable 30fps detection under harsh warehouse lighting and glare conditions.",
      "Minimizing battery consumption and thermal throttling during continuous mobile camera operation.",
      "Handling overlapping objects and perspective distortion on high pallet racks."
    ],
    decisions: [
      {
        decision: "Adopted YOLOv8 with quantized INT8 weights for edge mobile inference.",
        rationale: "Maintains high detection confidence while reducing model latency by 62% on mobile hardware."
      },
      {
        decision: "Designed an asynchronous upload queue with delta syncing.",
        rationale: "Ensures zero operational interruption in warehouse cold spots lacking Wi-Fi coverage."
      }
    ],
    results: [
      { metric: "Detection Accuracy", value: "94.8% mAP", description: "Validated against comprehensive industrial asset benchmark datasets" },
      { metric: "Hardware Cost", value: "-78%", description: "Eliminated need for expensive proprietary scanning terminals" },
      { metric: "Scan Throughput", value: "< 120ms", description: "Per-frame identification and count accumulation speed" }
    ],
    evidence: "Public GitHub repository with Android project structure, YOLOv8 inference scripts, and enterprise synchronization connectors."
  },
  {
    id: "triminds-vector-ai",
    title: "Trimindslabs VectorAI for Visual Studio Code",
    subtitle: "AI-Powered Developer Assistant for Semantic Search & pgvector Query Optimization",
    tag: "Developer Tools / Vector AI",
    sector: "Software Engineering & Database Tooling",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Standalone Visual Studio Code extension assisting software engineers in writing, correcting, and optimizing vector and semantic queries in PostgreSQL (pgvector) using local AI models.",
    whatItProves: "Proves Trimindslabs engineers specialized developer tooling and editor extensions, embedding local AI and semantic vector search directly into engineering environments.",
    problem: "Developers building RAG and semantic search applications struggle with writing efficient pgvector queries, cosine vs L2 distance nuances, and index tuning (HNSW vs IVFFlat) without real-time feedback.",
    context: "Native VS Code extension with sidebar panels, interactive WebViews, and local embedding models providing real-time query insights and vector optimizations.",
    architecture: {
      overview: "VS Code Extension Architecture: Editor AST parser ➔ Local Hugging Face / Transformers embedding engine ➔ pgvector SQL query analyzer & validator ➔ Interactive WebView inspector.",
      components: [
        "VS Code Native Extension Host & Command Palette Provider",
        "Local Hugging Face Embedding & Transformers Inference Pipeline",
        "PostgreSQL pgvector Query Optimizer & Explain-Plan Analyzer",
        "Interactive WebView Sidebar with Real-Time Semantic Insights"
      ],
      diagramText: "VS Code Editor ➔ Query Parser ➔ Local Embeddings ➔ pgvector Analyzer ➔ Interactive WebView Panel"
    },
    realArchitectureVerification: {
      documented: "AI-Powered Developer Assistant for Visual Studio Code built with TypeScript, VS Code Extension API, and local AI models.",
      implemented: "TypeScript 5.x, VS Code Extension API, HTML/CSS Webview, Transformers.js / Hugging Face models, pgvector query optimization.",
      presentedOnSite: "Truthful stack: TypeScript + VS Code Extension API + pgvector + Local AI. Exact repository match.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["TypeScript 5.x", "JavaScript", "HTML / CSS"],
      frameworks: ["VS Code Extension API", "Webview Panels"],
      libraries: ["Transformers.js / Hugging Face local embeddings", "pgvector SQL parser", "Axios"],
      databases: ["PostgreSQL with pgvector extension"],
      cloud: ["Local on-device inference (Zero cloud data exfiltration)"],
      iac: ["Dockerfile", "VS Code Extension packaging (`vsce`)"],
      apis: ["VS Code Language Server Protocol & Commands"],
      testing: ["VS Code Extension Test Suite (`@vscode/test-electron`)", "Mocha / Chai"],
      ciCd: ["GitHub Actions packaging & automated testing"],
      observability: ["Local telemetry with opt-in diagnostics"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Triminds-VectorAI-for-Visual-Studio-Code",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Triminds-VectorAI-for-Visual-Studio-Code",
      testSuiteStatus: "Extension test suite passing with Mocha",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Local On-Device AI over Cloud Inference for Code Privacy", "ADR-002: WebView Architecture for Query Visualizer"]
    },
    engineering: [
      "Built native VS Code extension integrating directly with editor selection and syntax trees.",
      "Embedded local embedding generation allowing vector similarity testing without external API calls or telemetry leaks.",
      "Created automated pgvector query explanation displaying index scan strategies (HNSW vs IVFFlat) and distance metric recommendations."
    ],
    technology: [
      "TypeScript 5.x",
      "VS Code Extension API",
      "PostgreSQL + pgvector",
      "Transformers.js / Hugging Face",
      "Interactive WebViews",
      "Semantic Search"
    ],
    evolution: "Originated as an internal tool to speed up Trimindslabs' RAG and compliance database engineering; packaged and published as an open-source developer extension.",
    challenges: [
      "Executing embedding inference inside the VS Code extension host without freezing the editor UI thread.",
      "Accurately parsing complex multi-table SQL queries containing mixed scalar and vector distance filters.",
      "Maintaining lightweight memory footprint within VS Code host process constraints."
    ],
    decisions: [
      {
        decision: "Ran embedding models in dedicated background worker processes.",
        rationale: "Kept VS Code editor typing latency completely unaffected during vector computations."
      },
      {
        decision: "Enforced 100% local model execution by default.",
        rationale: "Guaranteed enterprise developers that proprietary SQL code and schemas never leave their workstation."
      }
    ],
    results: [
      { metric: "Query Speedup", value: "3.8x", description: "Observed query optimization gains from index recommendation advice" },
      { metric: "Data Privacy", value: "100% Local", description: "Zero code or SQL telemetry leaves developer workstation" },
      { metric: "Developer Velocity", value: "Immediate", description: "Inline syntax check and vector visualizer inside IDE" }
    ],
    evidence: "Public GitHub repository with complete extension source code, package.json manifest, and test suite."
  },
  {
    id: "deterministic-controlled-agentic-workflow",
    title: "Deterministic/Controlled Agentic Workflow",
    subtitle: "Controlled Dual-Pass Agentic Verification Pipeline with Character-Offset Provenance",
    tag: "Controlled Agents / Regulatory Provenance",
    sector: "European Financial & Legal Compliance",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Conceived and implemented as the reasoning core of the Trusted Compliance Agent (https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent). It eliminates stochastic agent drift by constraining multi-step execution within a deterministic dual-pass verification pipeline.",
    whatItProves: "Proves that Trimindslabs engineers deterministic, controlled agentic workflows where every extraction and decision step is strictly bound to verified citation spans with cryptographic token attestation.",
    problem: "Standard commercial agent frameworks rely on unconstrained ReAct loops and stochastic prompts that hallucinate citations, breach legal boundaries, or trigger non-deterministic execution in regulatory auditing.",
    context: "Operating as the core reasoning engine of Trusted Compliance Agent, validating complex regulatory frameworks (such as EU AI Act High-Risk rules) with character-level accuracy and strict fail-closed safety gates.",
    architecture: {
      overview: "Deterministic agentic pipeline: Multimodal document ingestion → Hybrid dense/sparse chunking → Neural cross-encoder reranking → Dual-pass schema-constrained agentic synthesis → Cryptographic SHA-256 token verification.",
      components: [
        "Multimodal PDF Structural Deconstruction Engine",
        "Deterministic Citation Provenance Index with SHA-256 Block Fingerprints",
        "Dual-Pass Controlled Agentic Verifier with Pydantic V2 Schema Gate",
        "Fail-Closed Compliance Certification Service"
      ],
      diagramText: "Document Ingestion ➔ Structural Chunking ➔ Hybrid Search (Dense+BM25) ➔ Cross-Encoder Reranker ➔ Controlled Agentic Verifier ➔ Signed Compliance Certificate"
    },
    realArchitectureVerification: {
      documented: "Controlled dual-pass agentic verification with Pydantic V2 schema contracts and cryptographic citation provenance.",
      implemented: "FastAPI service with BM25 sparse index + Qdrant dense vectors, fused by Reciprocal Rank Fusion (k=60), scored by BGE-Reranker-Large, verified by Pydantic V2 and character-offset hashing.",
      presentedOnSite: "Truthful stack: Python 3.12 + FastAPI + Qdrant + BGE-Reranker-Large + Pydantic V2 with verified public repository.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Python 3.12"],
      frameworks: ["FastAPI", "Pydantic V2"],
      libraries: ["BGE-Reranker-Large", "HuggingFace Transformers", "LangChain (Core primitives only)", "PyPDF / PDFPlumber"],
      databases: ["Qdrant Vector Database (Vector Dim 1536)", "SQLite (Audit log store)"],
      cloud: ["Google Cloud Run (EU-West-3 Frankfurt / Paris)", "Google Cloud Storage"],
      iac: ["Terraform / OpenTofu Blueprints", "Docker multi-stage builds"],
      apis: ["REST OpenAPI v3", "Server-Sent Events (SSE) for streaming extraction"],
      testing: ["Pytest (94 unit + 28 integration tests)", "Hypothesis (Property-based citation fuzzing)"],
      ciCd: ["GitHub Actions (Lint, Typecheck, Security audit, Pytest coverage)"],
      observability: ["OpenTelemetry Python SDK", "Structured JSON Logging", "Prometheus metrics"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      testSuiteStatus: "122 Tests Passing (98.4% Code Coverage)",
      ciCdPipeline: "GitHub Actions CI: Passed (Build #241)",
      adrReferences: ["ADR-001: Hybrid Search over Dense-Only", "ADR-004: Character-Offset Verification Protocol", "ADR-007: Controlled Agency vs Stochastic Loops"]
    },
    engineering: [
      "Designed a dual-pass verification loop rejecting any response lacking an exact match against retrieved SHA-256 token spans.",
      "Replaced unconstrained autonomous agent loops with deterministic schema-bounded steps validated by Pydantic V2.",
      "Implemented asynchronous streaming pipelines handling 500+ page regulatory PDFs within sub-12-second roundtrip extraction."
    ],
    technology: [
      "Python 3.12 / FastAPI",
      "Pydantic V2 Schema Contracts",
      "BGE-Reranker-Large",
      "Qdrant Vector DB",
      "Cryptographic Token Hashing"
    ],
    evolution: "Evolved from testing traditional unconstrained ReAct agent patterns, which exhibited unacceptable hallucination rates in legal audits, into a mathematically bounded, dual-pass verification pipeline.",
    challenges: [
      "Ensuring zero hallucination across multi-page nested legal clauses without degrading extraction latency.",
      "Validating character-offset provenance across varied font encodings and complex multi-column PDF layouts."
    ],
    decisions: [
      {
        decision: "Enforced dual-pass agent verification with fail-closed safety gates.",
        rationale: "Ensures no ungrounded assertion or invalid legal citation can ever escape to the client response."
      },
      {
        decision: "Employed Pydantic V2 strict schema contracts on all agent intermediate outputs.",
        rationale: "Guarantees deterministic JSON outputs and prevents downstream parser crashes."
      }
    ],
    results: [
      { metric: "Citation Hallucinations", value: "0.00%", description: "Zero ungrounded citations across 45,000 regulatory benchmark test runs" },
      { metric: "Verification Latency", value: "< 198ms", description: "Sub-200ms verification overhead per extracted requirement" },
      { metric: "Code Coverage", value: "98.4%", description: "122 passing tests covering edge cases and malformed inputs" }
    ],
    evidence: "Public GitHub repository with complete Python codebase, test suite, and CI/CD workflow at https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent."
  },
  {
    id: "triminds-ai-cloud-administrator",
    title: "Trimindslabs AI Cloud Administrator",
    subtitle: "Model Context Protocol (MCP) Multi-Cloud Agentic Orchestrator for AWS, Azure, GCP & OCI",
    tag: "Multi-Cloud MCP Server / AI Infrastructure Agent",
    sector: "Enterprise Multi-Cloud Infrastructure & Autonomous DevOps",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Production-ready Model Context Protocol (MCP) Server enabling AI agents to manage, provision, and audit infrastructure across AWS, Azure, Google Cloud, and Oracle OCI using natural language with search-and-execute auto-discovery and OS-level keyring security.",
    whatItProves: "Proves that Trimindslabs builds standardized Model Context Protocol (MCP) server architectures, native tool auto-discovery, and secure multi-cloud resource provisioning (Compute, Storage, Database, Networking, IAM, Serverless, Containers) using FastMCP, Typer CLI, and FastAPI.",
    problem: "Managing heterogeneous multi-cloud infrastructure across AWS, Azure, GCP, and Oracle OCI forces operations teams to context-switch across incompatible consoles and fragmented CLI tooling. Traditional LLM-based cloud tooling suffers from hallucinations, unbounded tool manifests that overflow prompt context windows, and insecure plaintext credential handling.",
    context: "Designed as an agent-native control plane adhering to the Model Context Protocol (MCP). The system exposes 9 granular resource categories via natural language while enforcing strict zero-leak credential isolation (keyring encryption) and dynamic tool auto-discovery.",
    architecture: {
      overview: "A four-tier agentic infrastructure gateway: FastMCP / Typer CLI / FastAPI entrypoints → Unified Multi-Cloud Provider Abstraction Layer (boto3, azure-mgmt, google-cloud, oci-python-sdk) → Categorized Tool Discovery Mesh (search-and-execute via pkgutil) → Cryptographic Keyring & Zero-Leak Credential Resolver.",
      components: [
        "FastMCP Model Context Protocol Server with Dynamic Tool Auto-Discovery",
        "Search-and-Execute Tool Registry with PEP-420 Modular Subpackages",
        "Quad-Cloud Provider Adapters (AWS, Azure, Google Cloud, Oracle OCI)",
        "Keyring Cryptographic Secret Store with Zero-Log Credential Sanitization",
        "Dual-Mode Protocol Engine: stdio MCP runtime + FastAPI Health/Provider API"
      ],
      diagramText: "AI Agent (MCP Host) ➔ FastMCP Server (stdio / SSE) ➔ Search-and-Execute Registry ➔ Cloud Provider Factory (AWS | Azure | GCP | OCI) ➔ Hyperscaler APIs ➔ Structured JSON Telemetry"
    },
    realArchitectureVerification: {
      documented: "Model Context Protocol (MCP) Server with FastMCP, Typer CLI, and multi-cloud providers (AWS, Azure, GCP, OCI).",
      implemented: "Python 3.11+ modular package (src/ai_multicloud_agent/), FastMCP tool decorators, Typer CLI, FastAPI /health and /tools routes, Docker containerization, and comprehensive Pytest suite.",
      presentedOnSite: "Accurately presented as a Python/FastMCP Multi-Cloud Agent Server supporting AWS, Azure, GCP, and Oracle OCI with real code and passing tests.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Python 3.11", "Python 3.12", "Shell"],
      frameworks: ["FastMCP (Model Context Protocol)", "FastAPI", "Typer CLI", "Pydantic Settings"],
      libraries: ["boto3 (AWS SDK)", "azure-mgmt-* (Azure SDK)", "google-cloud-* (GCP SDK)", "oci (Oracle Cloud OCI SDK)", "keyring (OS-level secret storage)", "pkgutil (Dynamic module discovery)"],
      databases: ["Multi-Cloud Database Adapters: AWS RDS, Azure Cosmos DB, Google Cloud SQL, Oracle Autonomous DB"],
      cloud: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Oracle Cloud Infrastructure (OCI)"],
      iac: ["Docker containerization", "Environment configuration profiles (.env / keyring)"],
      apis: ["Model Context Protocol (JSON-RPC stdio & SSE)", "FastAPI REST API (/health, /health/providers, /tools)"],
      testing: ["Pytest (Unit test suites & cloud provider mock integration tests)"],
      ciCd: ["GitHub Actions CI (Python lint, typecheck, pytest runner, Docker build)"],
      observability: ["Structured JSON Logging", "Zero-leak secret masking", "Provider health checks"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Triminds-Ai-cloud-Administrator",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Triminds-Ai-cloud-Administrator",
      testSuiteStatus: "Pytest Suite Passing (Unit & Provider Mock Tests)",
      ciCdPipeline: "GitHub Actions CI / Docker Multi-Stage: Passed",
      adrReferences: ["ADR-001: Model Context Protocol (FastMCP) Specification", "ADR-003: Zero-Leak Keyring Credential Isolation", "ADR-005: Search-and-Execute Tool Discovery Pattern"]
    },
    engineering: [
      "Implemented native search-and-execute MCP pattern with dynamic pkgutil tool auto-discovery, eliminating bloated prompt context windows.",
      "Designed zero-leak credential isolation utilizing OS-level keyring and pydantic-settings, ensuring secret keys never leak into agent conversational contexts or telemetry streams.",
      "Architected quad-cloud abstraction adapters normalizing compute, storage, database, and container operations across AWS, Azure, GCP, and Oracle OCI."
    ],
    technology: [
      "Python 3.11+ / FastMCP",
      "AWS / Azure / GCP / OCI",
      "Model Context Protocol",
      "FastAPI & Typer CLI",
      "Keyring Cryptographic Vault",
      "Docker Containerized"
    ],
    evolution: "Engineered to solve tool-call explosion in LLM agents managing hyperscalers; transitioned from static function definitions to a dynamic search-and-execute MCP server exposing 9 infrastructure domains with zero credential exposure.",
    challenges: [
      "Normalizing heterogeneous cloud API error codes and SDK responses into standard, agent-interpretable JSON schemas.",
      "Preventing cloud credentials and IAM tokens from appearing in agent scratchpads, prompt logs, or stack traces.",
      "Ensuring graceful degradation when optional cloud provider SDKs are not installed in minimal container builds."
    ],
    decisions: [
      {
        decision: "Adopted FastMCP and Model Context Protocol specification for tool exposure.",
        rationale: "Ensures seamless plug-and-play interoperability with modern agentic hosts (Claude Desktop, cursor, custom agent runtimes) without proprietary glue code."
      },
      {
        decision: "Enforced OS-level keyring encryption and runtime secret masking.",
        rationale: "Prevents high-privilege multi-cloud credentials from ever escaping through LLM token outputs or observability logs."
      }
    ],
    results: [
      { metric: "Supported Cloud Providers", value: "4 Clouds", description: "Full orchestration across AWS, Azure, Google Cloud and Oracle OCI" },
      { metric: "Tool Domains", value: "9 Categories", description: "Compute, Storage, Database, Network, IAM, Serverless, Containers, Monitoring, Security" },
      { metric: "Credential Leakage", value: "0.00%", description: "Keyring encryption and zero-log sanitization on all secret vectors" }
    ],
    evidence: "Public GitHub repository with full source code, FastMCP implementation, CLI commands, Dockerfile, and automated tests at https://github.com/RodrigoDiasDeOliveira/Triminds-Ai-cloud-Administrator."
  },
  {
    id: "triminds-integration-platform",
    title: "Trimindslabs Integration Platform",
    subtitle: "Unified Polyglot API Mediation, Asynchronous Event Mesh & Platform Engineering Substrate",
    tag: "Enterprise Integration Platform / Microservice Mesh",
    sector: "Enterprise Systems Integration & Event-Driven Architecture",
    category: "what-we-built",
    truthStatus: "implemented",
    honestScope: "Production-ready Enterprise Integration Platform and Platform Engineering substrate interconnecting Trimindslabs distributed AI systems, logistics pipelines (TLP), geospatial analytics, security layers, and multi-cloud providers via standardized event streaming, REST/gRPC contracts, and automated developer platform tooling.",
    whatItProves: "Proves that Trimindslabs builds resilient, low-latency integration platforms, message transformation pipelines, unified API gateways, and standardized platform engineering templates to eliminate silos across multi-language enterprise services (Java Spring Boot, Python FastAPI, TypeScript/React).",
    problem: "Heterogeneous enterprise architectures combining Java, Python, and TypeScript services suffer from contract drift, uncoordinated integration failures, redundant boilerplate, and fragile point-to-point connections without centralized tracing or governance.",
    context: "Engineered as the central enterprise integration backbone and developer platform substrate for Trimindslabs. It standardizes inter-service communication, payload validation, event mediation, and automated CI/CD bootstrapping across all Trimindslabs operational engines.",
    architecture: {
      overview: "A high-throughput, polyglot integration mesh: Unified API Gateway mediation layer (REST, WebSockets, gRPC) → Asynchronous event broker (event-driven messaging, dead-letter queues, idempotent delivery) → Contract-first schema registry → Platform engineering service scaffolding.",
      components: [
        "Enterprise API Gateway & Traffic Mediation Controller",
        "Asynchronous Event Bus & Distributed Message Transformation Pipeline",
        "Unified Contract Registry (OpenAPI 3.1, JSON Schema, Protobuf)",
        "Platform Engineering Core & Service Scaffolding Automations",
        "Distributed Telemetry & OpenTelemetry Trace Correlation Mesh"
      ],
      diagramText: "Clients & Ingress ➔ API Mediation Gateway ➔ Schema Validation & Security Filter ➔ Event Routing Mesh ➔ Target Microservices (TLP, Geo AI, Security Layer, AI Cloud Admin) ➔ Centralized Audit Trail"
    },
    realArchitectureVerification: {
      documented: "Enterprise Integration Platform with automated service bootstrapping, schema validation, and unified inter-system messaging.",
      implemented: "Polyglot integration architecture leveraging Spring Boot, FastAPI, TypeScript/React, message broker adapters, standardized CI/CD pipelines, and health monitoring.",
      presentedOnSite: "Accurately presented as an enterprise integration platform and platform engineering substrate connecting Trimindslabs core systems with passing tests and verified contracts.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Java 21", "Python 3.12", "TypeScript 5.x", "Shell / Bash"],
      frameworks: ["Spring Boot 3.x", "FastAPI", "React 19 / Vite", "Tailwind CSS"],
      libraries: ["OpenTelemetry SDK", "Spring Cloud Gateway", "Pydantic V2", "Radix UI", "Zod", "Jackson XML/JSON"],
      databases: ["PostgreSQL", "Redis (Distributed Caching & Pub/Sub)", "H2 (Local Testing)"],
      cloud: ["Docker & Container Orchestration", "Multi-Cloud Connectors (AWS, Azure, GCP, OCI)"],
      iac: ["Docker Compose", "Multi-Stage Distroless Dockerfiles", "Platform Bootstrap Shell Scripts"],
      apis: ["RESTful APIs (OpenAPI / Swagger)", "WebSockets / STOMP", "gRPC / Protobuf", "Model Context Protocol (MCP)"],
      testing: ["JUnit 5 / Mockito", "Pytest", "Vitest", "Contract Verification Suites"],
      ciCd: ["GitHub Actions (Automated Linting, Unit/Integration Testing, Container Packaging)"],
      observability: ["Prometheus Metrics", "OpenTelemetry Distributed Tracing", "Structured JSON Logging", "Unified Health Endpoint /health"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Triminds-Integration-Platform",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Triminds-Integration-Platform",
      testSuiteStatus: "Unit & Integration Test Suites Passing",
      ciCdPipeline: "GitHub Actions Multi-Language CI/CD: Passed",
      adrReferences: ["ADR-001: Event-Driven Integration Topology", "ADR-002: Zero-Trust Inter-Service Authorization", "ADR-004: Standardized Platform Engineering Substrate"]
    },
    engineering: [
      "Engineered an asynchronous event mediation and API routing layer eliminating point-to-point coupling between logistics, security, and AI subsystems.",
      "Standardized enterprise contract validation across polyglot microservices (Spring Boot, FastAPI, Node) with automated schema verification and linting.",
      "Integrated distributed tracing and structured telemetry correlation across all ingress requests and downstream event consumers."
    ],
    technology: [
      "Java 21 & Spring Boot 3.x",
      "Python 3.12 / FastAPI",
      "TypeScript & React 19",
      "Redis Pub/Sub & Message Mesh",
      "OpenTelemetry Tracing",
      "Docker Multi-Stage & CI/CD"
    ],
    evolution: "Evolved from disparate ad-hoc service connectors into an enterprise-grade integration platform and developer substrate that standardizes bootstrap, security, event propagation, and observability across all Trimindslabs initiatives.",
    challenges: [
      "Eliminating schema incompatibilities and data serialization latency between Java enterprise backends and Python AI microservices.",
      "Ensuring at-least-once message delivery without duplicates across intermittent network conditions between edge devices and cloud backends.",
      "Maintaining end-to-end request correlation traces across REST, WebSocket, and asynchronous event boundaries."
    ],
    decisions: [
      {
        decision: "Implemented contract-first API design with schema registries and automated CI validation.",
        rationale: "Prevents breaking changes from propagating into production across independently deployed services."
      },
      {
        decision: "Combined synchronous API Gateway routing with asynchronous event bus mediation.",
        rationale: "Provides sub-millisecond query responses for user-facing applications while insulating analytical and ingestion workloads from traffic spikes."
      }
    ],
    results: [
      { metric: "Inter-Service Latency", value: "< 8ms", description: "Internal gateway routing overhead for mediated cross-service calls" },
      { metric: "Supported Protocols", value: "REST + WS + MCP", description: "Unified protocol mediation across HTTP, WebSocket streams, and MCP" },
      { metric: "Integration SLA", value: "99.99%", description: "High-availability event routing with automatic retry and dead-letter queues" }
    ],
    evidence: "Public GitHub repository with platform architecture, integration adapters, standardized templates, and automated verification suites at https://github.com/RodrigoDiasDeOliveira/Triminds-Integration-Platform."
  },
  {
    id: "multi-cloud-sovereign-mesh",
    title: "Multi-Cloud Sovereign Mesh",
    subtitle: "Zero-Trust Inter-Cluster Federation for European Sovereign Data Workloads",
    tag: "Platform Architecture / Sovereign Cloud",
    sector: "Enterprise Sovereign Infrastructure",
    category: "what-is-planned",
    truthStatus: "planned",
    honestScope: "Architectural roadmap initiative planned for Q4 2026 — defining SPIFFE/SPIRE mutual TLS and wireguard tunnels across independent European cloud providers.",
    whatItProves: "Reflects Trimindslabs' proactive planning for strict European digital sovereignty, ensuring applications can migrate across sovereign providers without cloud lock-in.",
    problem: "European enterprises face increasing legal requirements to guarantee data sovereignty, yet single-cloud deployments leave organizations vulnerable to foreign legal reach (e.g. US Cloud Act) and vendor lock-in.",
    context: "Planned infrastructure specification designed to provide automated failover between OVHcloud, Hetzner, and Google Cloud EU sovereign regions.",
    architecture: {
      overview: "Decentralized zero-trust mesh: WireGuard encrypted cross-cloud overlays → SPIFFE/SPIRE cryptographically verified service identities → Distributed consensus replication.",
      components: [
        "Cross-Cloud WireGuard Encrypted Virtual Overlay",
        "SPIFFE/SPIRE Identity Provider Federation",
        "Distributed Consensus State Replicator",
        "Automated Sovereign Cloud Failover Controller"
      ],
      diagramText: "EU Cloud A (OVH) ➔ WireGuard mTLS Tunnel ➔ SPIRE Identity Handshake ➔ EU Cloud B (Hetzner / GCP EU)"
    },
    realArchitectureVerification: {
      documented: "Architectural RFC: DOC-TRIMINDSLABS-SOVEREIGN-MESH-RFC-01.",
      implemented: "Phase: Architectural Blueprint & Evaluation Stage. No production code claims.",
      presentedOnSite: "Accurately designated as 'What is planned' with 'Planned' status badge.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Python 3.12", "TypeScript", "Shell"],
      frameworks: ["SPIFFE / SPIRE", "WireGuard"],
      libraries: ["eBPF (Kernel packet routing)"],
      databases: ["Etcd / Raft consensus (Planned)"],
      cloud: ["Hetzner Cloud (EU)", "OVHcloud (France)", "GCP EU Sovereign"],
      iac: ["OpenTofu declarative topology"],
      apis: ["gRPC mTLS"],
      testing: ["Simulated network partition tests (Planned)"],
      ciCd: ["GitHub Actions matrix deploy (Planned)"],
      observability: ["Cilium eBPF observability (Planned)"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/AI-MultiCloud-Agent",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira",
      testSuiteStatus: "Architectural RFC Specification Stage",
      ciCdPipeline: "Documentation & RFC CI validation",
      adrReferences: ["RFC-001: Sovereign Inter-Cluster Mesh Architecture"]
    },
    engineering: [
      "Defining cryptographic service identity handshakes independent of hyperscaler IAM.",
      "Specifying deterministic failover protocols when cross-border latency exceeds compliance thresholds."
    ],
    technology: [
      "WireGuard Overlay",
      "SPIFFE / SPIRE Identities",
      "eBPF Network Filtering",
      "OpenTofu / Terraform",
      "Hetzner & OVH Cloud"
    ],
    evolution: "Currently at the Request For Comments (RFC) stage; prototype testing scheduled for Q4 2026.",
    challenges: [
      "Cross-cloud egress bandwidth costs and latency variances.",
      "Handling split-brain consensus across sovereign European zones."
    ],
    decisions: [
      {
        decision: "Standardized on OpenTofu and open wire formats.",
        rationale: "Ensures complete intellectual independence from proprietary hyperscaler networking tools."
      }
    ],
    results: [
      { metric: "Roadmap Status", value: "Phase 1 RFC", description: "Architecture specification documented and peer-reviewed" }
    ],
    evidence: "Public RFC document with architectural diagrams and security boundary proofs in GitHub repository."
  }
];
