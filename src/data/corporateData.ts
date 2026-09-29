import { VocabularyTerm, Language } from '../types';

export interface CorporatePositioningData {
  specificationDocumentId: string;
  lastAudit: string;
  auditVersion: string;
  jurisdiction: string;
  
  mission: string;
  vision: string;

  whatTrimindsIs: string;
  whatTrimindsBuilds: string;
  whatTrimindsDoesNotClaimToBe: string;
  whoTrimindsServes: string;
  whyTrimindsExists: string;

  differenceBetweenTrimindsAndArchitectureLeadership: {
    architectureLeadership: string;
    triminds: string;
  };

  provenPillars: {
    title: string;
    subtitle: string;
    description: string;
    status: 'sustained';
    githubEvidence: string;
  }[];

  transversalCapabilities: {
    name: string;
    description: string;
    status: 'sustained' | 'consolidating';
  }[];

  distinctivePrinciples: {
    name: string;
    description: string;
    status: 'sustained' | 'consolidating';
  }[];

  engineeringPrinciples: string[];
}

export const CORPORATE_POSITIONING_I18N: Record<Language, CorporatePositioningData> = {
  en: {
    specificationDocumentId: "DOC-TRIMINDSLABS-POSITIONING-V1.0",
    lastAudit: "2026-Q3",
    auditVersion: "V1.0 Consolidated Post-Audit",
    jurisdiction: "European Union (GDPR / EU AI Act Strict Compliance)",

    mission: "To engineer intelligent systems that address real-world problems through reliable, secure, and measurable technology.",
    vision: "To help establish a higher standard for engineering intelligent systems that are trustworthy, observable, secure, and ready for real-world operation.",

    whatTrimindsIs: "Trimindslabs is an advanced systems engineering and production AI organization. We build deterministic, observable, and hardened intelligent systems for high-stakes enterprise and industrial environments.",
    whatTrimindsBuilds: "Enterprise-grade Trusted Search engines, deterministic/controlled agentic workflows, geospatial intelligence platforms, and zero-trust AI security observation layers.",
    whatTrimindsDoesNotClaimToBe: "We are not a generic generative AI hype agency, not an ungrounded LLM wrapper, and not sellers of opaque 'black-box' algorithms. We do not deploy stochastic models without deterministic validation fences, mathematical reranking, and full trace observability.",
    whoTrimindsServes: "Tier-1 enterprise infrastructure, cross-border logistics operators, geospatial & satellite analytics firms, regulated financial & legal compliance institutions, and mission-critical engineering organizations across Europe and worldwide.",
    whyTrimindsExists: "Because the vast majority of enterprise AI fails in production due to lack of determinism, hallucination risk, compliance breaches, and zero operational observability. Trimindslabs was founded to bring rigorous software and systems engineering to artificial intelligence.",

    differenceBetweenTrimindsAndArchitectureLeadership: {
      architectureLeadership: "The systems architecture leadership conceived the foundational algorithms, geospatial heuristics, and retrieval-engine architecture, driving technical rigor and architectural invariance.",
      triminds: "Trimindslabs is the sovereign corporate entity, engineering collective, and operational platform infrastructure built for enterprise SLA delivery, continuous multi-tenant governance, long-term support, and institutional accountability."
    },

    provenPillars: [
      {
        title: "1. Problem First",
        subtitle: "Technology follows the problem",
        description: "We solve problems, not technology trends. Architectural evolution is dictated by concrete technical barriers (such as retrieval false positives), not the desire to artificially inflate AI volume.",
        status: "sustained",
        githubEvidence: "Trusted Compliance Agent: Two-stage retrieval + cross-encoder reranking born from diagnosing semantic limitations. Multi-provider AI abstractions."
      },
      {
        title: "2. Trust Through Engineering",
        subtitle: "Reliability is an architectural consequence",
        description: "Trust must be engineered into the system, not proclaimed in marketing copy. It is realized through deterministic validation, reduction of false positives, and fail-closed safety fences.",
        status: "sustained",
        githubEvidence: "Compliance & Security Layer: Sub-0.01% semantic leakage through cross-encoder verification, PII anonymization, and SHA-256 chunk auditing."
      },
      {
        title: "3. Evidence Over Claims",
        subtitle: "Engineering capability demonstrated, not promised",
        description: "We prove capability through tangible evidence. Public GitHub repositories demonstrate algorithms, tests, and CI/CD pipelines; private repositories protect production intellectual assets.",
        status: "sustained",
        githubEvidence: "Open repositories with full test suites, Architecture Decision Records (ADRs), vulnerability patches, and commit timelines."
      },
      {
        title: "4. Continuous Evolution",
        subtitle: "Inspect, identify gaps, roadmap, refine",
        description: "Architectures are continually audited and elevated. We discover baseline performance, identify operational bottlenecks, design evolutionary roadmaps, and validate each iteration.",
        status: "sustained",
        githubEvidence: "Documented trajectory: Single vector search -> gap analysis -> architectural redesign -> two-stage retrieval -> reranking -> continuous audit."
      },
      {
        title: "5. Production-Oriented Engineering",
        subtitle: "Engineered with real-world operation from day one",
        description: "Production readiness is not a postponed checkpoint. Security, testing, CI/CD, containerization, and cost boundaries guide engineering decisions from the very first commit.",
        status: "sustained",
        githubEvidence: "Every project repository mandates Docker containerization, TypeScript strictness, automated linting, latency monitoring, and zero-trust IAM."
      }
    ],

    transversalCapabilities: [
      {
        name: "Security by Design",
        description: "Continuous auditing, secret isolation, vulnerability triage, and prompt injection defense.",
        status: "sustained"
      },
      {
        name: "Testing & Validation",
        description: "Automated regression pipelines, semantic accuracy benchmarks, and factual offset checking.",
        status: "sustained"
      },
      {
        name: "Observability by Design",
        description: "Structured JSON logging, OpenTelemetry tracing, latency distribution monitoring, and health probes.",
        status: "consolidating"
      }
    ],

    distinctivePrinciples: [
      {
        name: "Trust Before Generation",
        description: "When a problem can be solved deterministically, generation should not be the default. Traditional RAG -> Trusted Search -> Deterministic answer where possible -> Validated generative fallback.",
        status: "sustained"
      },
      {
        name: "Intellectual Independence",
        description: "Technology choices remain adaptable, avoiding unnecessary vendor lock-in. Independence where practical, specialization where valuable.",
        status: "sustained"
      },
      {
        name: "AI With Purpose",
        description: "AI applied strictly where it creates measurable value (Satellite Earth observation, computer vision, legal semantic navigation).",
        status: "consolidating"
      },
      {
        name: "Engineering Excellence",
        description: "Building systems that are understandable, testable, secure, observable, maintainable, and fit for their intended purpose.",
        status: "sustained"
      }
    ],

    engineeringPrinciples: [
      "Problem First: Technology follows the problem, never technology hype.",
      "Trust Before Generation: Deterministic answers before generative speculation.",
      "Trust Through Engineering: Reliability is an architectural consequence, not a marketing declaration.",
      "Security by Design: Continuous vulnerability identification, secret isolation, and zero-trust IAM.",
      "Evidence Over Claims: Technical capability demonstrated through repositories and audits.",
      "Continuous Evolution: Baseline measurement, gap diagnosis, and roadmap execution.",
      "Observable by Design: Structured telemetry, OpenTelemetry distributed tracing, and health probes.",
      "Production-Oriented: Engineered with real-world SLOs, containerization, and cost bounds from day one."
    ]
  },

  pt: {
    specificationDocumentId: "DOC-TRIMINDSLABS-POSITIONING-V1.0",
    lastAudit: "2026-Q3",
    auditVersion: "V1.0 Consolidada Pós-Auditoria",
    jurisdiction: "União Europeia (Conformidade Estrita GDPR e EU AI Act)",

    mission: "Projetar sistemas inteligentes que resolvem problemas reais através de tecnologia confiável, segura e mensurável.",
    vision: "Ajudar a estabelecer um padrão mais elevado na engenharia de sistemas inteligentes que sejam confiáveis, observáveis, seguros e prontos para operação no mundo real.",

    whatTrimindsIs: "A Trimindslabs é uma organização avançada de engenharia de sistemas e IA de produção. Projetamos sistemas inteligentes determinísticos, observáveis e blindados para ambientes corporativos e industriais de alta criticidade.",
    whatTrimindsBuilds: "Engines corporativas de Trusted Search, fluxos de agentes determinísticos e controlados, plataformas de inteligência geoespacial e camadas de observabilidade e segurança zero-trust para IA.",
    whatTrimindsDoesNotClaimToBe: "Não somos uma agência de modismos em IA generativa, nem um invólucro superficial de LLMs, nem vendedores de algoritmos de caixa-preta opacos. Não implementamos modelos estocásticos sem cercas de validação determinísticas, reranking matemático e rastreabilidade total.",
    whoTrimindsServes: "Infraestruturas corporativas Tier-1, operadoras logísticas transfronteiriças, empresas de satélite e análise geoespacial, instituições financeiras e jurídicas reguladas e organizações de engenharia crítica na Europa e no mundo.",
    whyTrimindsExists: "Porque a grande maioria das iniciativas de IA corporativa falha em produção devido à falta de determinismo, risco de alucinação, quebras de conformidade e zero observabilidade operacional. A Trimindslabs nasceu para trazer o rigor da engenharia de software e sistemas para a inteligência artificial.",

    differenceBetweenTrimindsAndArchitectureLeadership: {
      architectureLeadership: "A liderança em arquitetura de sistemas concebeu os algoritmos fundamentais, heurísticas geoespaciais e a arquitetura dos motores de busca, garantindo rigor técnico e invariância de engenharia.",
      triminds: "Trimindslabs é a entidade corporativa soberana, o coletivo de engenharia e a infraestrutura de plataforma operacional criada para entregas com SLA corporativo, governança multilocatária contínua, suporte de longo prazo e responsabilidade institucional."
    },

    provenPillars: [
      {
        title: "1. Problem First (O Problema Primeiro)",
        subtitle: "A tecnologia segue o problema",
        description: "Resolvemos problemas, não tendências tecnológicas. A evolução arquitetural é ditada por barreiras técnicas concretas (como falsos positivos no retrieval), e não pelo desejo de adicionar mais IA de forma artificial.",
        status: "sustained",
        githubEvidence: "Trusted Compliance Agent: Busca em dois estágios e neural reranking surgiram do diagnóstico de limitações semânticas. Abstrações de IA multi-provider."
      },
      {
        title: "2. Trust Through Engineering (Confiança Construída)",
        subtitle: "Confiabilidade é consequência da arquitetura",
        description: "A confiança deve ser construída na arquitetura do sistema, não declarada em discursos de marketing. Ela é alcançada através de validação determinística, redução de falsos positivos e cercas de proteção fail-closed.",
        status: "sustained",
        githubEvidence: "Compliance & Security Layer: Sub-0,01% de escape semântico através de reranking de cross-encoder, anonimização de PII e verificação criptográfica de chunks SHA-256."
      },
      {
        title: "3. Evidence Over Claims (Evidência Sobre Afirmações)",
        subtitle: "Capacidade de engenharia demonstrada, não prometida",
        description: "Demonstramos capacidade técnica através de evidências concretas. Repositórios públicos do GitHub comprovam código, testes e pipelines de CI/CD; repositórios privados protegem segredos e ativos de produção.",
        status: "sustained",
        githubEvidence: "Repositórios abertos com suítes de teste completas, Architecture Decision Records (ADRs), patches de vulnerabilidades e histórico estruturado de commits."
      },
      {
        title: "4. Continuous Evolution (Evolução Contínua)",
        subtitle: "Inspecionar, identificar lacunas, criar roadmap, refinar",
        description: "As arquiteturas são continuamente auditadas e aprimoradas. Identificamos o baseline, diagnosticamos gargalos operacionais, projetamos roadmaps evolutivos e validamos cada iteração.",
        status: "sustained",
        githubEvidence: "Trajetória documentada: Busca vetorial simples -> análise de limitações -> redesign arquitetural -> busca em dois estágios -> reranking -> auditoria contínua."
      },
      {
        title: "5. Production-Oriented (Orientado à Produção)",
        subtitle: "Projetado com operação real desde o primeiro dia",
        description: "A prontidão para produção não é um checkpoint adiado. Segurança, testes, CI/CD, containerização e limites de custo orientam as decisões de engenharia desde o primeiro commit.",
        status: "sustained",
        githubEvidence: "Todos os repositórios exigem Docker, TypeScript com tipagem estrita, lint automatizado, monitoramento de latência e governança zero-trust."
      }
    ],

    transversalCapabilities: [
      {
        name: "Security by Design (Segurança por Concepção)",
        description: "Auditoria contínua, isolamento de credenciais, correção de vulnerabilidades e defesa contra injeção de prompts.",
        status: "sustained"
      },
      {
        name: "Testing & Validation (Testes e Validação)",
        description: "Pipelines de regressão automatizados, benchmarks de acurácia semântica e verificação de citações literais.",
        status: "sustained"
      },
      {
        name: "Observable by Design (Observabilidade por Concepção)",
        description: "Logs JSON estruturados, rastreamento OpenTelemetry, distribuição de latência e sondas de saúde.",
        status: "consolidating"
      }
    ],

    distinctivePrinciples: [
      {
        name: "Trust Before Generation (Confiança Antes da Geração)",
        description: "Quando um problema pode ser resolvido deterministicamente, a geração não deve ser o padrão. RAG Tradicional -> Trusted Search -> Resposta determinística onde possível -> IA validada como fallback.",
        status: "sustained"
      },
      {
        name: "Intellectual Independence (Independência Intelectual)",
        description: "As escolhas tecnológicas devem permanecer adaptáveis, evitando aprisionamento de fornecedor. Independência onde for prático, especialização onde houver valor.",
        status: "sustained"
      },
      {
        name: "AI With Purpose (IA com Propósito)",
        description: "IA aplicada estritamente onde cria valor mensurável (Observação da Terra por satélite, visão computacional, navegação jurídica semântica).",
        status: "consolidating"
      },
      {
        name: "Engineering Excellence (Excelência em Engenharia)",
        description: "Construir sistemas compreensíveis, testáveis, seguros, observáveis, sustentáveis e adequados ao propósito real.",
        status: "sustained"
      }
    ],

    engineeringPrinciples: [
      "Primeiro o Problema: A tecnologia segue o problema concreto, nunca o hype.",
      "Confiança Antes da Geração: Respostas determinísticas e verificadas antes de especulações generativas.",
      "Confiança Através da Engenharia: Confiabilidade é uma propriedade arquitetural, não um slogan de vendas.",
      "Segurança por Design: Identificação contínua de vulnerabilidades, isolamento de segredos e zero-trust IAM.",
      "Evidência Sobre Afirmações: Capacidade técnica comprovada por código em repositórios, testes e auditorias.",
      "Evolução Contínua: Medição de baseline, diagnóstico de gaps e execução de roadmap contínuo.",
      "Observável por Design: Telemetria estruturada, rastreamento distribuído OpenTelemetry e sondas de integridade.",
      "Orientado à Produção: Projetado com SLOs do mundo real, conteinerização e limites de custos desde o primeiro commit."
    ]
  },

  es: {
    specificationDocumentId: "DOC-TRIMINDSLABS-POSITIONING-V1.0",
    lastAudit: "2026-Q3",
    auditVersion: "V1.0 Consolidada Post-Auditoría",
    jurisdiction: "Unión Europea (Cumplimiento Estricto RGPD y Ley de IA de la UE)",

    mission: "Diseñar sistemas inteligentes que resuelven problemas del mundo real a través de tecnología confiable, segura y medible.",
    vision: "Ayudar a establecer un estándar más elevado en la ingeniería de sistemas inteligentes que sean confiables, observables, seguros y listos para operar en el mundo real.",

    whatTrimindsIs: "Trimindslabs es una organización avanzada de ingeniería de sistemas e IA para entornos de producción. Diseñamos sistemas inteligentes determinísticos, observables y blindados para entornos corporativos e industriales críticos.",
    whatTrimindsBuilds: "Motores corporativos de Trusted Search, flujos de agentes deterministas y controlados, plataformas de inteligencia geoespacial y capas de observabilidad y seguridad zero-trust para IA.",
    whatTrimindsDoesNotClaimToBe: "No somos una agencia de modas en IA generativa, ni un envoltorio superficial de LLMs, ni vendedores de algoritmos de caja negra opacos. No desplegamos modelos estocásticos sin vallas determinísticas de validación, reranking matemático y trazabilidad total.",
    whoTrimindsServes: "Infraestructuras empresariales Tier-1, operadores logísticos transfronterizos, compañías de satélites y análisis geoespacial, entidades financieras y legales reguladas y firmas de ingeniería crítica en Europa y a nivel global.",
    whyTrimindsExists: "Porque la gran mayoría de proyectos corporativos de IA fracasa en producción por falta de determinismo, riesgo de alucinación, fallos de cumplimiento normativo y nula observabilidad operativa. Trimindslabs nació para aplicar el rigor de la ingeniería de software y sistemas a la inteligencia artificial.",

    differenceBetweenTrimindsAndArchitectureLeadership: {
      architectureLeadership: "El liderazgo en arquitectura de sistemas diseñó los algoritmos base, las heurísticas geoespaciales y la arquitectura de los motores de búsqueda, asegurando rigor técnico e invariancia de ingeniería.",
      triminds: "Trimindslabs es la entidad corporativa soberana, el colectivo de ingeniería y la infraestructura de plataforma operativa concebida para entregas con SLA empresarial, gobernanza multinquilino continua, soporte a largo plazo y responsabilidad institucional."
    },

    provenPillars: [
      {
        title: "1. Problem First (Primero el Problema)",
        subtitle: "La tecnología sigue al problema",
        description: "Resolvemos problemas, no tendencias tecnológicas. La evolución de la arquitectura está dictada por barreras técnicas tangibles (como los falsos positivos en la recuperación), no por el afán de añadir más IA de forma artificial.",
        status: "sustained",
        githubEvidence: "Trusted Compliance Agent: Búsqueda en dos etapas y reranking neuronal nacidos del diagnóstico de limitaciones semánticas. Abstracciones multi-proveedor."
      },
      {
        title: "2. Trust Through Engineering (Confianza Construida)",
        subtitle: "La fiabilidad es consecuencia de la arquitectura",
        description: "La confianza debe construirse en la arquitectura del sistema, no proclamarse en folletos de marketing. Se logra mediante validación determinística, reducción de falsos positivos y vallas de seguridad fail-closed.",
        status: "sustained",
        githubEvidence: "Compliance & Security Layer: Filtración semántica inferior al 0,01% mediante verificación con cross-encoder, anonimización de PII y hash SHA-256 de fragmentos."
      },
      {
        title: "3. Evidence Over Claims (Evidencia Sobre Afirmaciones)",
        subtitle: "Capacidad de ingeniería demostrada, no prometida",
        description: "Demostramos capacidad mediante evidencia tangible. Los repositorios públicos de GitHub acreditan algoritmos, pruebas y pipelines de CI/CD; los repositorios privados protegen activos intelectuales y de producción.",
        status: "sustained",
        githubEvidence: "Repositorios abiertos con suites completas de pruebas, Architecture Decision Records (ADRs), parches de seguridad e histórico verificable de commits."
      },
      {
        title: "4. Continuous Evolution (Evolución Continua)",
        subtitle: "Inspeccionar, identificar brechas, crear roadmap, refinar",
        description: "Las arquitecturas son auditadas y perfeccionadas continuamente. Detectamos el rendimiento base, diagnosticamos cuellos de botella operativos, diseñamos hojas de ruta evolutivas y validamos cada iteración.",
        status: "sustained",
        githubEvidence: "Trayectoria documentada: Búsqueda vectorial básica -> análisis de limitaciones -> rediseño arquitectónico -> búsqueda en dos etapas -> reranking -> auditoría continua."
      },
      {
        title: "5. Production-Oriented (Orientado a Producción)",
        subtitle: "Diseñado para operación real desde el primer día",
        description: "La preparación para producción no es un trámite postergado. La seguridad, las pruebas, CI/CD, la contenerización y los límites de costes guían las decisiones de ingeniería desde el primer commit.",
        status: "sustained",
        githubEvidence: "Cada repositorio exige Docker, TypeScript estricto, análisis estático automatizado, monitorización de latencia y control de accesos zero-trust."
      }
    ],

    transversalCapabilities: [
      {
        name: "Security by Design (Seguridad por Diseño)",
        description: "Auditoría continua, aislamiento de secretos, resolución de vulnerabilidades y defensa contra inyección de prompts.",
        status: "sustained"
      },
      {
        name: "Testing & Validation (Pruebas y Validación)",
        description: "Pipelines de regresión automatizados, benchmarks de precisión semántica y verificación de citas textuales.",
        status: "sustained"
      },
      {
        name: "Observable by Design (Observabilidad por Diseño)",
        description: "Registros JSON estructurados, trazas OpenTelemetry, distribución de latencia y sondas de salud.",
        status: "consolidating"
      }
    ],

    distinctivePrinciples: [
      {
        name: "Trust Before Generation (Confianza Antes de la Generación)",
        description: "Cuando un problema puede resolverse de forma determinística, la generación no debe ser la opción por defecto. RAG Tradicional -> Trusted Search -> Respuesta determinística donde sea posible -> IA validada como respaldo.",
        status: "sustained"
      },
      {
        name: "Intellectual Independence (Independencia Intelectual)",
        description: "Las decisiones tecnológicas deben permanecer adaptables, evitando dependencias cautivas con un solo proveedor. Independencia donde sea práctico, especialización donde agregue valor.",
        status: "sustained"
      },
      {
        name: "AI With Purpose (IA con Propósito)",
        description: "IA aplicada estrictamente donde genera valor cuantificable (Observación de la Tierra por satélite, visión por computador, navegación jurídica semántica).",
        status: "consolidating"
      },
      {
        name: "Engineering Excellence (Excelencia en Ingeniería)",
        description: "Construir sistemas comprensibles, verificables, seguros, observables, mantenibles y adecuados para su fin operativo.",
        status: "sustained"
      }
    ],

    engineeringPrinciples: [
      "Primero el Problema: La tecnología sigue al problema concreto, nunca a la especulación publicitaria.",
      "Confianza Antes de la Generación: Respuestas determinísticas y verificadas antes de síntesis probabilística.",
      "Confianza a Través de la Ingeniería: La fiabilidad es consecuencia de la arquitectura, no una promesa comercial.",
      "Seguridad por Diseño: Detección continua de vulnerabilidades, aislamiento de credenciales y zero-trust IAM.",
      "Evidencia Sobre Afirmaciones: Capacidad técnica acreditada mediante código, tests y auditorías verificables.",
      "Evolución Continua: Medición de líneas base, diagnóstico de carencias y desarrollo continuo de roadmaps.",
      "Observable por Diseño: Telemetría estructurada, trazas distribuidas OpenTelemetry y sondas de salud.",
      "Orientado a Producción: Diseñado con SLOs del mundo real, contenedores y contención de costes desde el primer commit."
    ]
  }
};

// Legacy alias for backward compatibility
export const CORPORATE_POSITIONING = CORPORATE_POSITIONING_I18N.en;

export const TECHNICAL_VOCABULARY_I18N: Record<Language, VocabularyTerm[]> = {
  en: [
    {
      term: "Trusted Search",
      shortDefinition: "A hybrid retrieval engine combining lexical determinism (BM25/sparse) with dense neural embeddings and secondary cross-encoder reranking.",
      fullNarrative: "Unlike basic vector-only search that frequently retrieves semantically similar but factually contradictory documents, Trusted Search employs multi-stage verification to guarantee factual provenance and citation integrity.",
      contrastingAntiPattern: "Naive vector cosine similarity against unverified chunk databases.",
      productionImplementation: "Trimindslabs Search Core (Qdrant / Milvus + BGE-Reranker-Large + BM25 reciprocal rank fusion)."
    },
    {
      term: "Trust Before Generation",
      shortDefinition: "Architectural mandate: when a query can be satisfied deterministically or through exact verified retrieval, generative synthesis is strictly bypassed.",
      fullNarrative: "Generative models are probabilistic; adding generation to a problem that requires factual certainty introduces unnecessary entropy. If the data permits a direct, verified answer, we present it deterministically.",
      contrastingAntiPattern: "Passing every query through an LLM prompt wrapper even when an exact database or document quote already answers it.",
      productionImplementation: "Trimindslabs Deterministic Answer Gate with confidence threshold checks before fallback generative dispatch."
    },
    {
      term: "Trusted AI",
      shortDefinition: "Artificial intelligence systems engineered with formal safety bounds, deterministic guardrails, and verifiable output provenance.",
      fullNarrative: "AI systems where hallucinations are prevented before reaching user interfaces through semantic boundary fences, schema enforcement, and fact-checking validators.",
      contrastingAntiPattern: "Unchecked chat interfaces relying on system prompt prayers like 'Please do not hallucinate'.",
      productionImplementation: "Trimindslabs Guardrail Engine with Pydantic JSON schema locks and regex verification layers."
    },
    {
      term: "Production-Oriented AI",
      shortDefinition: "Machine learning workflows engineered to meet strict p99 latency SLOs, cost-per-token ceilings, cold-start guarantees, and fault tolerance.",
      fullNarrative: "Transitioning research-grade neural models into resilient production services with automated rollback, circuit breaking, and canary deployments.",
      contrastingAntiPattern: "Jupyter notebooks deployed directly as fragile microservices without load or error handling.",
      productionImplementation: "Trimindslabs Containerized Inference Engines on Google Cloud Run with autoscaling to zero and health probes."
    },
    {
      term: "AI Observability",
      shortDefinition: "Full-stack instrumentation tracking token spend, semantic drift, latency distribution, guardrail trigger rates, and embedding space cohesion.",
      fullNarrative: "Real-time telemetry and distributed tracing across every hop in the LLM pipeline, from vector lookup to token emission.",
      contrastingAntiPattern: "Treating external LLM APIs as black-box services with no logging beyond HTTP 200 counts.",
      productionImplementation: "OpenTelemetry + Prometheus metrics + Trimindslabs Structured Log Schema."
    },
    {
      term: "Deterministic/Controlled Agentic Workflows",
      shortDefinition: "Autonomous agent workflows whose reasoning and execution space are strictly confined by dual-pass verification, character-offset provenance, and validated schema contracts.",
      fullNarrative: "Engineered in the Trusted Compliance Agent (https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent). Agents designed to perform multi-step document analysis and regulatory compliance without stochastic runaway loops, citation hallucination, or ungrounded generative leaps.",
      contrastingAntiPattern: "Open-ended stochastic ReAct loops given unconstrained autonomy and generating plausible yet fabricated legal citations.",
      productionImplementation: "Trusted Compliance Agent dual-pass verification pipeline with SHA-256 token span hashing, BGE cross-encoder reranking, and fail-closed validation gates."
    }
  ],

  pt: [
    {
      term: "Trusted Search (Busca Confiável)",
      shortDefinition: "Mecanismo de recuperação híbrido que combina determinismo lexical (BM25/esparso) com embeddings neurais densos e reranking secundário por cross-encoder.",
      fullNarrative: "Diferente da busca vetorial simples que frequentemente recupera documentos semanticamente semelhantes porém factualmente contraditórios, a Busca Confiável emprega verificação em múltiplos estágios para garantir proveniência factual e integridade de citação.",
      contrastingAntiPattern: "Similaridade de cosseno vetorial ingênua sobre bancos de chunks não verificados.",
      productionImplementation: "Trimindslabs Search Core (Qdrant / Milvus + BGE-Reranker-Large + fusão por Reciprocal Rank Fusion BM25)."
    },
    {
      term: "Trust Before Generation (Confiança Antes da Geração)",
      shortDefinition: "Diretriz arquitetural: quando uma consulta pode ser atendida de forma determinística ou por recuperação verificada exata, a síntese generativa é estritamente evitada.",
      fullNarrative: "Modelos generativos são probabilísticos; adicionar geração a um problema que exige certeza factual introduz entropia desnecessária. Se os dados permitem uma resposta direta e verificada, nós a apresentamos deterministicamente.",
      contrastingAntiPattern: "Passar todas as consultas por prompts de LLM mesmo quando um banco de dados ou citação exata de documento já fornece a resposta.",
      productionImplementation: "Trimindslabs Deterministic Answer Gate com verificação de limiar de confiança antes do envio generativo de fallback."
    },
    {
      term: "Trusted AI (IA Confiável)",
      shortDefinition: "Sistemas de inteligência artificial projetados com limites formais de segurança, guardrails determinísticos e proveniência verificável de saída.",
      fullNarrative: "Sistemas de IA onde alucinações são impedidas antes de atingir interfaces de usuário por meio de cercas semânticas, aplicação de esquemas rigorosos e validadores de checagem de fatos.",
      contrastingAntiPattern: "Interfaces de chat abertas dependentes de súplicas no system prompt como 'Por favor não alucine'.",
      productionImplementation: "Trimindslabs Guardrail Engine com travas de esquema JSON via Pydantic e camadas de validação por expressões regulares."
    },
    {
      term: "Production-Oriented AI (IA Orientada a Produção)",
      shortDefinition: "Fluxos de machine learning projetados para cumprir rigorosos SLOs de latência p99, limites de custo por token, garantias de cold-start e tolerância a falhas.",
      fullNarrative: "Transição de modelos neurais de laboratório para serviços de produção resilientes com rollback automatizado, circuit breakers e deploys canário.",
      contrastingAntiPattern: "Notebooks Jupyter implantados diretamente como microsserviços frágeis sem tratamento de carga ou falhas.",
      productionImplementation: "Motores de inferência conteinerizados da Trimindslabs no Google Cloud Run com autoescala a zero e sondas de integridade (health probes)."
    },
    {
      term: "AI Observability (Observabilidade de IA)",
      shortDefinition: "Instrumentação full-stack monitorando consumo de tokens, deriva semântica, distribuição de latência, taxa de acionamento de guardrails e coesão do espaço de embeddings.",
      fullNarrative: "Telemetria em tempo real e rastreamento distribuído em cada salto do pipeline de LLM, desde a busca vetorial até a emissão de cada token.",
      contrastingAntiPattern: "Tratar APIs externas de LLM como caixas-pretas sem registros além da contagem de códigos HTTP 200.",
      productionImplementation: "Métricas OpenTelemetry + Prometheus + Esquema Estruturado de Logs Trimindslabs."
    },
    {
      term: "Deterministic/Controlled Agentic Workflows (Fluxos de Agentes Determinísticos)",
      shortDefinition: "Fluxos de agentes autônomos cujo espaço de raciocínio e execução é estritamente confinado por verificação em dois passos, proveniência por coordenadas de caracteres e contratos de esquema validados.",
      fullNarrative: "Projetado e implementado no Trusted Compliance Agent (https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent). Agentes arquitetados para análise documental complexa e conformidade regulatória sem loops estocásticos descontrolados, alucinação de citações ou saltos generativos infundados.",
      contrastingAntiPattern: "Loops ReAct estocásticos abertos com autonomia irrestrita que geram citações jurídicas plausíveis porém fabricadas.",
      productionImplementation: "Pipeline de verificação em dois passos do Trusted Compliance Agent com hash SHA-256 de spans de tokens, reranking por cross-encoder BGE e portões de validação fail-closed."
    }
  ],

  es: [
    {
      term: "Trusted Search (Búsqueda Confiable)",
      shortDefinition: "Motor de recuperación híbrido que combina determinismo léxico (BM25/disperso) con embeddings neuronales densos y reranking secundario mediante cross-encoder.",
      fullNarrative: "A diferencia de la búsqueda vectorial básica que con frecuencia recupera documentos semánticamente similares pero factualmente contradictorios, Trusted Search emplea verificación en múltiples etapas para garantizar la proveniencia factual y la integridad de citas.",
      contrastingAntiPattern: "Similitud coseno vectorial ingenua sobre bases de datos de fragmentos sin verificar.",
      productionImplementation: "Trimindslabs Search Core (Qdrant / Milvus + BGE-Reranker-Large + fusión por Reciprocal Rank Fusion BM25)."
    },
    {
      term: "Trust Before Generation (Confianza Antes de la Generación)",
      shortDefinition: "Mandato arquitectónico: cuando una consulta puede satisfacerse de forma determinística o mediante recuperación verificada exacta, la síntesis generativa se omite estrictamente.",
      fullNarrative: "Los modelos generativos son probabilísticos; añadir generación a un problema que requiere certeza factual introduce entropía innecesaria. Si los datos permiten una respuesta directa y verificada, la presentamos de forma determinista.",
      contrastingAntiPattern: "Pasar cada consulta a través de un prompt de LLM incluso cuando una base de datos o cita exacta de documento ya proporciona la respuesta.",
      productionImplementation: "Trimindslabs Deterministic Answer Gate con comprobaciones de umbral de confianza antes del despacho generativo de respaldo.",
    },
    {
      term: "Trusted AI (IA Confiable)",
      shortDefinition: "Sistemas de inteligencia artificial diseñados con límites formales de seguridad, guardrails deterministas y proveniencia verificable de salida.",
      fullNarrative: "Sistemas de IA donde las alucinaciones se previenen antes de llegar a las interfaces de usuario mediante vallas de contención semántica, cumplimiento de esquemas y validadores de contraste factual.",
      contrastingAntiPattern: "Interfaces de chat sin controles dependientes de peticiones en el system prompt como 'Por favor no alucines'.",
      productionImplementation: "Trimindslabs Guardrail Engine con bloqueos de esquema JSON mediante Pydantic y capas de verificación por expresiones regulares.",
    },
    {
      term: "Production-Oriented AI (IA Orientada a Producción)",
      shortDefinition: "Flujos de machine learning diseñados para cumplir con estrictos SLOs de latencia p99, límites de coste por token, garantías de arranque en frío y tolerancia a fallos.",
      fullNarrative: "Transición de modelos neuronales de investigación a servicios de producción resilientes con reversión automática, disyuntores (circuit breakers) y despliegues canary.",
      contrastingAntiPattern: "Notebooks de Jupyter desplegados directamente como microservicios frágiles sin gestión de carga ni control de errores.",
      productionImplementation: "Motores de inferencia contenerizados de Trimindslabs en Google Cloud Run con autoescalado a cero y sondas de salud (health probes).",
    },
    {
      term: "AI Observability (Observabilidad de IA)",
      shortDefinition: "Instrumentación full-stack que monitoriza consumo de tokens, deriva semántica, distribución de latencia, tasa de activación de guardrails y cohesión del espacio de embeddings.",
      fullNarrative: "Telemetría en tiempo real y trazado distribuido en cada salto del pipeline de LLM, desde la búsqueda vectorial hasta la emisión de cada token.",
      contrastingAntiPattern: "Tratar las APIs externas de LLM como cajas negras sin más registro que el recuento de respuestas HTTP 200.",
      productionImplementation: "Métricas de OpenTelemetry + Prometheus + Esquema Estructurado de Logs de Trimindslabs.",
    },
    {
      term: "Deterministic/Controlled Agentic Workflows (Flujos de Agentes Deterministas)",
      shortDefinition: "Flujos de agentes autónomos cuyo espacio de razonamiento y ejecución está estrictamente delimitado por verificación de doble paso, proveniencia por coordenadas de caracteres y contratos de esquema validados.",
      fullNarrative: "Diseñado e implementado en el Trusted Compliance Agent (https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent). Agentes concebidos para análisis documental complejo y cumplimiento regulatorio sin bucles estocásticos fuera de control, alucinación de citas ni saltos generativos infundados.",
      contrastingAntiPattern: "Bucles ReAct estocásticos abiertos con autonomía irrestricta que generan citas legales plausibles pero fabricadas.",
      productionImplementation: "Pipeline de verificación de doble paso de Trusted Compliance Agent con hash SHA-256 de tramos de tokens, reranking por cross-encoder BGE y puertas de validación fail-closed."
    }
  ]
};

export const TECHNICAL_VOCABULARY: VocabularyTerm[] = TECHNICAL_VOCABULARY_I18N.en;

