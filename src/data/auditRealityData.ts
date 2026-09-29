import { AuditRealityItem, Language } from '../types';

export interface LocalizedAuditItem {
  id: string;
  concept: string;
  status: 'sustained' | 'consolidating' | 'aspirational';
  claim: string;
  githubEvidence: string;
  analysis: string;
  architecturalVerdict: string;
}

export const AUDIT_REALITY_DATA: Record<Language, LocalizedAuditItem[]> = {
  en: [
    {
      id: 'problem-first',
      concept: 'Problem First',
      status: 'sustained',
      claim: 'We solve problems, not technology trends.',
      githubEvidence: 'Trusted Compliance Agent: Trajectory from vector search -> identification of semantic false positives -> 2-stage retrieval -> neural cross-encoder reranking -> deterministic fallback. Multi-provider AI architecture avoiding single-vendor lock-in.',
      analysis: 'Technology changed strictly because the problem required it, not to inject more AI artificially.',
      architecturalVerdict: 'Core foundational pillar of Trimindslabs architecture.'
    },
    {
      id: 'trust-before-generation',
      concept: 'Trust Before Generation',
      status: 'sustained',
      claim: 'When a problem can be solved deterministically, generation should not be the default.',
      githubEvidence: 'Architecture evolution: Traditional RAG -> Trusted Search -> Deterministic answer where possible -> Validated generative fallback where necessary.',
      analysis: 'Adding generative layers without necessity degrades reliability. If data allows a deterministic answer, use it; if using AI, strictly fence and validate it.',
      architecturalVerdict: 'One of the most distinctive architectural signatures of Trimindslabs.'
    },
    {
      id: 'trust-is-engineered',
      concept: 'Trust Through Engineering',
      status: 'sustained',
      claim: 'Trust must be engineered into the system, not declared as marketing.',
      githubEvidence: 'Trusted Compliance + Security Layer: Reduction of semantic false-positives via BGE cross-encoder, PII pseudonymization, cryptographic hashing of retrieved chunks, fail-closed guardrails.',
      analysis: 'Trust is an architectural consequence. Audits identified vulnerabilities, and they were methodically triaged, patched, and re-verified.',
      architecturalVerdict: 'Primary structural pillar of all Trimindslabs platforms.'
    },
    {
      id: 'security-by-design',
      concept: 'Security by Design',
      status: 'sustained',
      claim: 'Security is part of engineering, not a final checkpoint.',
      githubEvidence: 'Security Layer repository: Audited key storage vulnerabilities, secrets rotation, tenant isolation, homoglyph injection defenses, and Cloud Run IAM boundaries.',
      analysis: 'Engineering follows the rigorous cycle: Build -> Audit -> Find vulnerabilities -> Fix -> Validate.',
      architecturalVerdict: 'Sustained across infrastructure and codebases.'
    },
    {
      id: 'evidence-over-claims',
      concept: 'Evidence Over Claims',
      status: 'sustained',
      claim: 'We demonstrate engineering through evidence, not marketing claims.',
      githubEvidence: 'Dual-tier repository strategy: Public GitHub repos demonstrate architecture, tests, CI/CD, and algorithmic evolution; private repositories protect production IP and client secrets.',
      analysis: 'Capability is proved by public commits, ADRs (Architecture Decision Records), and code audits, not ungrounded website claims.',
      architecturalVerdict: 'Core corporate value and operational standard.'
    },
    {
      id: 'continuous-evolution',
      concept: 'Continuous Evolution',
      status: 'sustained',
      claim: 'Architectures are analyzed, audited, and continuously improved.',
      githubEvidence: 'Audited trajectory: Legacy single-vector search -> limit analysis -> architectural redesign -> two-stage retrieval -> reranker evaluation -> ongoing roadmap execution.',
      analysis: 'Clear evidence of discovering the baseline, diagnosing gaps, drafting roadmaps, and executing technical refinement.',
      architecturalVerdict: 'Firmly validated across all project repos.'
    },
    {
      id: 'production-oriented',
      concept: 'Production-Oriented Engineering',
      status: 'sustained',
      claim: 'Production readiness guides our engineering decisions from the start.',
      githubEvidence: 'Roadmaps and audits in every repo mandate CI/CD, linting, TypeScript strictness, containerization, structured logging, and budget limits.',
      analysis: 'Rather than claiming "everything is already in production", we prove that every project is engineered with real-world production criteria from day one.',
      architecturalVerdict: 'Sustained as an architectural philosophy; universal implementation progressing.'
    },
    {
      id: 'engineering-excellence',
      concept: 'Engineering Excellence',
      status: 'sustained',
      claim: 'Building systems that are understandable, testable, secure, observable, maintainable, and fit for purpose.',
      githubEvidence: 'Automated test suites, type checking, ESLint rules, architecture blueprints, Docker containerization, and structured commit logs.',
      analysis: 'Excellence is defined by concrete engineering criteria rather than an isolated promotional slogan.',
      architecturalVerdict: 'Confirmed through technical auditing practices.'
    },
    {
      id: 'intellectual-independence',
      concept: 'Intellectual Independence',
      status: 'sustained',
      claim: 'Technology choices remain adaptable, avoiding unnecessary vendor lock-in.',
      githubEvidence: 'Multi-cloud & multi-provider readiness (GCP Vertex AI, Azure, BYOK client key models, local cross-encoder models, PostgreSQL / TimescaleDB abstraction).',
      analysis: 'Independence where practical, specialization where valuable. Avoids blind dependence on a single proprietary AI vendor.',
      architecturalVerdict: 'Solid architectural direction and implementation.'
    },
    {
      id: 'refined-mission',
      concept: 'Corporate Mission V1.0',
      status: 'sustained',
      claim: 'To engineer intelligent systems that address real-world problems through reliable, secure, and measurable technology.',
      githubEvidence: 'Projects in Geo AI, Legal/Compliance, Telematics/Logistics, and Computer Vision.',
      analysis: 'Refined to state what we can tangibly prove today, removing unproven universal claims while strengthening our engineering commitment.',
      architecturalVerdict: 'Fully aligned and defensible V1.0 Mission.'
    },
    {
      id: 'observable-by-design',
      concept: 'Observable by Design',
      status: 'consolidating',
      claim: 'We design systems to be observable, diagnosable, and continuously improvable.',
      githubEvidence: 'Cloud Logging, Cloud Monitoring, OpenTelemetry tracing in new services, latency metrics, and structured JSON logs.',
      analysis: 'The philosophy is consolidated; universal rollout across 100% of legacy projects is ongoing under the Trimindslabs Observability Standard.',
      architecturalVerdict: 'Corporate standard in consolidation (Roadmap item: Trimindslabs Observability Standard).'
    },
    {
      id: 'ai-with-purpose',
      concept: 'AI With Purpose',
      status: 'consolidating',
      claim: 'AI applied strictly where it creates measurable value.',
      githubEvidence: 'Geo AI (satellite imagery interpretation), ObjectScanner V2 (mobile computer vision / industrial counting), Compliance (hybrid retrieval), VectorAI (developer tooling). AI is never added for mere decoration.',
      analysis: 'Direction is very clear. To sustain "measurable" universally, an AI Value Measurement Framework (accuracy, latency, cost per query) is scheduled.',
      architecturalVerdict: 'Strong direction; formal measurement framework in rollout.'
    },
    {
      id: 'real-world-impact',
      concept: 'Real-World Impact',
      status: 'consolidating',
      claim: 'We focus our engineering on real-world problems and practical outcomes.',
      githubEvidence: 'Systems target high-stakes real domains: cross-border logistics, geospatial land segmentation, legal compliance, and satellite Earth observation.',
      analysis: 'We solve real operational challenges; large-scale external user metrics are expanding as pilots transition into full multi-tenant deployments.',
      architecturalVerdict: 'Practical engineering orientation confirmed.'
    },
    {
      id: 'transparency',
      concept: 'Technical Transparency',
      status: 'consolidating',
      claim: 'Full technical transparency across architectures, ADRs, and audits.',
      githubEvidence: 'Open public code, documented Architecture Decision Records (ADRs), vulnerability audit disclosures, and evolutionary changelogs.',
      analysis: 'High transparency exists in documentation and audit trails; a transversal unified corporate reporting standard is currently maturing.',
      architecturalVerdict: 'Evidenced in architecture records; corporate framework in progress.'
    },
    {
      id: 'new-standard-vision',
      concept: 'Corporate Vision',
      status: 'aspirational',
      claim: 'To help establish a higher standard for engineering intelligent systems that are trustworthy, observable, secure, and ready for real-world operation.',
      githubEvidence: 'Our research papers, open-source architectural patterns, and dual-tier verification engines serve as our contribution toward this benchmark.',
      analysis: 'Vision correctly represents the future horizon. Framed honestly as "helping establish a higher standard", which is authentic and credible.',
      architecturalVerdict: 'Clear, motivating, and architecturally grounded aspirational vision.'
    }
  ],

  pt: [
    {
      id: 'problem-first',
      concept: 'Problem First (Problema Primeiro)',
      status: 'sustained',
      claim: 'Resolvemos problemas, não modismos tecnológicos.',
      githubEvidence: 'Trusted Compliance Agent: Trajetória de busca vetorial -> identificação de falsos positivos semânticos -> busca em dois estágios -> neural cross-encoder reranking -> resposta determinística. Arquitetura de IA multi-provider evitando dependência de fornecedor.',
      analysis: 'A tecnologia mudou estritamente porque o problema exigiu, e não para adicionar "mais IA" de forma artificial.',
      architecturalVerdict: 'Pilar central e inegociável da engenharia Trimindslabs.'
    },
    {
      id: 'trust-before-generation',
      concept: 'Trust Before Generation (Confiança Antes da Geração)',
      status: 'sustained',
      claim: 'Quando um problema pode ser resolvido de forma determinística, a geração não deve ser o padrão.',
      githubEvidence: 'Evolução arquitetural: RAG Tradicional -> Trusted Search -> Resposta determinística onde possível -> IA / Fallback generativo validado onde necessário.',
      analysis: 'Adicionar camadas generativas sem necessidade degrada a confiabilidade. Se os dados já permitem resposta confiável, não devemos adicionar geração apenas para parecer "mais IA".',
      architecturalVerdict: 'Uma das maiores assinaturas arquiteturais da Trimindslabs.'
    },
    {
      id: 'trust-is-engineered',
      concept: 'Trust Through Engineering (Confiança Construída)',
      status: 'sustained',
      claim: 'A confiança deve ser construída na arquitetura do sistema, não declarada em marketing.',
      githubEvidence: 'Trusted Compliance + Camada de Segurança: Redução de falsos positivos via reranker BGE, pseudonimização de PII, hashing criptográfico de chunks recuperados, guardrails fail-closed.',
      analysis: 'Confiabilidade é consequência da arquitetura. Vulnerabilidades foram inspecionadas, encontradas, compreendidas, corrigidas e revalidadas em auditoria.',
      architecturalVerdict: 'Pilar estrutural comprovado nos projetos.'
    },
    {
      id: 'security-by-design',
      concept: 'Security by Design (Segurança por Concepção)',
      status: 'sustained',
      claim: 'Segurança é parte da engenharia contínua, não um checkpoint burocrático final.',
      githubEvidence: 'Repositório Security Layer: Auditorias identificaram vulnerabilidade crítica de armazenamento de chaves, rotação de secrets, isolamento multilocatário e defesas contra injeção homoglífica.',
      analysis: 'A segurança segue o ciclo real: Build -> Audit -> Find vulnerabilities -> Fix -> Validate.',
      architecturalVerdict: 'Comprovado na infraestrutura e nos repositórios.'
    },
    {
      id: 'evidence-over-claims',
      concept: 'Evidence Over Claims (Evidência Sobre Afirmações)',
      status: 'sustained',
      claim: 'Demonstramos engenharia através de evidências, não promessas de marketing.',
      githubEvidence: 'Estratégia de repositórios: Públicos demonstram código, arquitetura, testes, CI/CD e evolução; Privados protegem ativos de produção e propriedade intelectual.',
      analysis: 'A capacidade técnica é demonstrada através de commits, ADRs e auditorias públicas verificáveis.',
      architecturalVerdict: 'Valor corporativo oficial e diferencial competitivo.'
    },
    {
      id: 'continuous-evolution',
      concept: 'Continuous Evolution (Evolução Contínua)',
      status: 'sustained',
      claim: 'Arquiteturas são medidas, auditadas e continuamente melhoradas.',
      githubEvidence: 'Trajetória comprovada: Busca vetorial legada -> Análise de limitações -> Redesign arquitetural -> Busca em dois estágios -> Reranking neural -> Auditoria contínua.',
      analysis: 'Evidência transparente de descobrir onde estamos, mapear lacunas, definir roadmaps e executar refinamentos.',
      architecturalVerdict: 'Totalmente sustentado no histórico do GitHub.'
    },
    {
      id: 'production-oriented',
      concept: 'Production-Oriented (Orientado à Produção)',
      status: 'sustained',
      claim: 'A prontidão para produção guia nossas decisões de engenharia desde o início.',
      githubEvidence: 'Roadmaps e auditorias em todos os projetos exigem CI/CD, testes, lint, tipagem estrita TypeScript, containerização, logs estruturados e limites de custo.',
      analysis: 'Em vez de alegar que "tudo já está em produção", demonstramos que cada linha de código é projetada considerando operação real.',
      architecturalVerdict: 'Sustentado como filosofia de engenharia.'
    },
    {
      id: 'engineering-excellence',
      concept: 'Engineering Excellence (Excelência em Engenharia)',
      status: 'sustained',
      claim: 'Construir sistemas compreensíveis, testáveis, seguros, observáveis, sustentáveis e adequados ao propósito.',
      githubEvidence: 'Suítes de testes, checagem de tipos, regras ESLint, blueprints de arquitetura, containerização Docker e histórico estruturado.',
      analysis: 'Excelência definida por critérios técnicos tangíveis em vez de um slogan publicitário vazio.',
      architecturalVerdict: 'Validado em práticas e auditorias técnicas.'
    },
    {
      id: 'intellectual-independence',
      concept: 'Intellectual Independence (Independência Intelectual)',
      status: 'sustained',
      claim: 'As escolhas tecnológicas devem permanecer adaptáveis e evitar dependência desnecessária de fornecedores.',
      githubEvidence: 'Arquitetura multi-cloud e multi-provedor de IA (GCP Vertex AI, Azure, chave própria do cliente/BYOK, abstração de modelos e bancos Timescale/PostgreSQL).',
      analysis: 'Independência onde for prático, especialização onde houver valor. Sem aprisionamento tecnológico cego.',
      architecturalVerdict: 'Direção arquitetural sólida e executada.'
    },
    {
      id: 'refined-mission',
      concept: 'Missão Corporativa V1.0',
      status: 'sustained',
      claim: 'Projetar sistemas inteligentes que resolvem problemas reais através de tecnologia confiável, segura e mensurável.',
      githubEvidence: 'Projetos reais em Geo AI, Compliance Jurídica/Regulatória, Logística/Telemática e Visão Computacional.',
      analysis: 'Missão refinada para prometer exatamente o que podemos provar, sem inflações conceituais.',
      architecturalVerdict: 'Missão V1.0 plenamente defensável e consolidada.'
    },
    {
      id: 'observable-by-design',
      concept: 'Observable by Design (Observabilidade por Concepção)',
      status: 'consolidating',
      claim: 'Projetamos sistemas para serem observáveis, diagnosticáveis e continuamente aprimoráveis.',
      githubEvidence: 'Cloud Logging, Cloud Monitoring, rastreamento OpenTelemetry, métricas de latência p99 e esquemas de log estruturados em JSON.',
      analysis: 'A filosofia está consolidada; a padronização universal em 100% dos serviços está em andamento sob o Trimindslabs Observability Standard.',
      architecturalVerdict: 'Compromisso em consolidação (Iniciativa: Trimindslabs Observability Standard).'
    },
    {
      id: 'ai-with-purpose',
      concept: 'AI With Purpose (IA com Propósito)',
      status: 'consolidating',
      claim: 'IA aplicada estritamente onde ela gera valor mensurável.',
      githubEvidence: 'Geo AI (interpretação de imagens de satélite), ObjectScanner V2 (visão computacional mobile / contagem industrial), Compliance (recuperação híbrida), VectorAI (ferramentas para desenvolvedores). Nenhuma IA adicionada como adorno.',
      analysis: 'Direção muito forte. Para sustentar a mensuração uniforme, está previsto no roadmap o AI Value Measurement Framework.',
      architecturalVerdict: 'Direção confirmada; framework de métricas em implementação.'
    },
    {
      id: 'real-world-impact',
      concept: 'Real-World Impact (Impacto no Mundo Real)',
      status: 'consolidating',
      claim: 'Focamos nossa engenharia em problemas reais e resultados práticos.',
      githubEvidence: 'Sistemas focados em setores críticos: logística transfronteiriça, análise de solo geoespacial, conformidade regulatória e observação da Terra.',
      analysis: 'O foco em problemas práticos é absoluto; métricas de impacto em larga escala continuam amadurecendo conforme os pilotos avançam para produção.',
      architecturalVerdict: 'Orientação técnica prática comprovada.'
    },
    {
      id: 'transparency',
      concept: 'Transparência Técnica',
      status: 'consolidating',
      claim: 'Transparência técnica através de documentação, decisões arquiteturais e auditorias.',
      githubEvidence: 'Código público, Architecture Decision Records (ADRs), divulgação de auditorias de vulnerabilidades e histórico evolutivo.',
      analysis: 'Existe forte transparência técnica e de código; um padrão corporativo transversal único está sendo consolidado.',
      architecturalVerdict: 'Demonstrado em auditorias e documentação.'
    },
    {
      id: 'new-standard-vision',
      concept: 'Visão Corporativa',
      status: 'aspirational',
      claim: 'Ajudar a estabelecer um padrão mais elevado na engenharia de sistemas inteligentes que sejam confiáveis, observáveis, seguros e prontos para operação no mundo real.',
      githubEvidence: 'Artigos técnicos, padrões de arquitetura e engines de busca em dois estágios compartilhados para elevar a barra da indústria.',
      analysis: 'Visão representa o horizonte futuro. A formulação "Ajudar a estabelecer" é honesta, crível e inspiradora para uma organização em crescimento.',
      architecturalVerdict: 'Visão aspiracional clara, defensável e ancorada na engenharia.'
    }
  ],

  es: [
    {
      id: 'problem-first',
      concept: 'Problem First (Primero el Problema)',
      status: 'sustained',
      claim: 'Resolvemos problemas, no tendencias tecnológicas.',
      githubEvidence: 'Trusted Compliance Agent: Trayectoria de búsqueda vectorial -> detección de falsos positivos semánticos -> búsqueda en dos etapas -> reranking neuronal cross-encoder -> respuesta determinística. Arquitectura de IA multi-proveedor.',
      analysis: 'La tecnología evolucionó estrictamente porque el problema lo exigía, no para agregar más IA de forma artificial.',
      architecturalVerdict: 'Pilar fundacional e innegociable de Trimindslabs.'
    },
    {
      id: 'trust-before-generation',
      concept: 'Trust Before Generation (Confianza Antes de la Generación)',
      status: 'sustained',
      claim: 'Cuando un problema puede resolverse de forma determinística, la generación no debe ser la opción por defecto.',
      githubEvidence: 'Evolución arquitectónica: RAG Tradicional -> Trusted Search -> Respuesta determinística donde sea posible -> IA / Fallback generativo validado.',
      analysis: 'Agregar capas generativas sin necesidad degrada la fiabilidad. Si los datos permiten una respuesta determinística, se utiliza directamente.',
      architecturalVerdict: 'Una de las firmas arquitectónicas más distintivas de Trimindslabs.'
    },
    {
      id: 'trust-is-engineered',
      concept: 'Trust Through Engineering (Confianza Construida)',
      status: 'sustained',
      claim: 'La confianza debe construirse en la arquitectura del sistema, no declararse en marketing.',
      githubEvidence: 'Trusted Compliance + Capa de Seguridad: Reducción de falsos positivos mediante reranker BGE, seudonimización de PII, hash criptográfico de fragmentos y guardrails fail-closed.',
      analysis: 'La fiabilidad es consecuencia de la arquitectura. Las vulnerabilidades se inspeccionaron, comprendieron, corrigieron y revalidaron en auditoría.',
      architecturalVerdict: 'Pilar estructural demostrado en los repositorios.'
    },
    {
      id: 'security-by-design',
      concept: 'Security by Design (Seguridad por Diseño)',
      status: 'sustained',
      claim: 'La seguridad es parte de la ingeniería continua, no un punto de control final.',
      githubEvidence: 'Repositorio Security Layer: Auditorías que detectaron vulnerabilidad crítica de gestión de claves, rotación de secretos y defensas contra inyecciones.',
      analysis: 'El ciclo es real: Construir -> Auditar -> Encontrar vulnerabilidades -> Corregir -> Validar.',
      architecturalVerdict: 'Demostrado en infraestructura y código fuente.'
    },
    {
      id: 'evidence-over-claims',
      concept: 'Evidence Over Claims (Evidencia Sobre Afirmaciones)',
      status: 'sustained',
      claim: 'Demostramos ingeniería mediante evidencia, no afirmaciones publicitarias.',
      githubEvidence: 'Estrategia de repositorios: Públicos demuestran código, arquitectura, pruebas y evolución; Privados protegen activos y secretos de producción.',
      analysis: 'La capacidad se demuestra mediante commits públicos, ADRs y auditorías verificables.',
      architecturalVerdict: 'Valor corporativo oficial y estándar de trabajo.'
    },
    {
      id: 'continuous-evolution',
      concept: 'Continuous Evolution (Evolución Continua)',
      status: 'sustained',
      claim: 'Las arquitecturas se analizan, auditan y mejoran continuamente.',
      githubEvidence: 'Trayectoria comprobada: Búsqueda vectorial básica -> Análisis de limitaciones -> Rediseño arquitectónico -> Búsqueda en dos etapas -> Reranking -> Auditoría continua.',
      analysis: 'Clara evidencia de evaluar el estado inicial, detectar brechas, definir roadmaps y ejecutar mejoras.',
      architecturalVerdict: 'Ampliamente validado en el historial de GitHub.'
    },
    {
      id: 'production-oriented',
      concept: 'Production-Oriented (Orientado a Producción)',
      status: 'sustained',
      claim: 'La preparación para producción guía nuestras decisiones de ingeniería desde el inicio.',
      githubEvidence: 'Auditorías en todos los repositorios que exigen CI/CD, pruebas, linting estricto TypeScript, contenedores Docker y métricas de latencia.',
      analysis: 'No afirmamos que "todo esté ya en producción", sino que cada sistema se diseña con criterios operativos reales desde el primer día.',
      architecturalVerdict: 'Sustentado como filosofía de ingeniería.'
    },
    {
      id: 'engineering-excellence',
      concept: 'Engineering Excellence (Excelencia en Ingeniería)',
      status: 'sustained',
      claim: 'Construir sistemas comprensibles, verificables, seguros, observables, mantenibles y adecuados a su propósito.',
      githubEvidence: 'Suites de tests, comprobación de tipos, reglas ESLint, esquemas arquitectónicos y control de versiones riguroso.',
      analysis: 'Excelencia definida por criterios técnicos objetivos en lugar de un eslogan vacío.',
      architecturalVerdict: 'Confirmado mediante prácticas de auditoría técnica.'
    },
    {
      id: 'intellectual-independence',
      concept: 'Intellectual Independence (Independencia Intelectual)',
      status: 'sustained',
      claim: 'Las decisiones tecnológicas deben permanecer adaptables y evitar la dependencia innecesaria de proveedores.',
      githubEvidence: 'Arquitectura multi-nube y multi-proveedor de IA (GCP Vertex AI, Azure, clave propia BYOK, abstracción de modelos y bases de datos).',
      analysis: 'Independencia donde sea práctico, especialización donde agregue valor. Sin ataduras arbitrarias a un único proveedor.',
      architecturalVerdict: 'Sólida dirección arquitectónica e implementación.'
    },
    {
      id: 'refined-mission',
      concept: 'Misión Corporativa V1.0',
      status: 'sustained',
      claim: 'Diseñar sistemas inteligentes que resuelven problemas del mundo real a través de tecnología confiable, segura y medible.',
      githubEvidence: 'Proyectos aplicados en Geo AI, Cumplimiento Legal/Regulatorio, Logística/Telemática y Visión Computacional.',
      analysis: 'Misión refinada para prometer con precisión lo que podemos demostrar, resultando aún más sólida.',
      architecturalVerdict: 'Misión V1.0 plenamente defendible y consolidada.'
    },
    {
      id: 'observable-by-design',
      concept: 'Observable by Design (Observabilidad por Diseño)',
      status: 'consolidating',
      claim: 'Diseñamos sistemas para ser observables, diagnosticables y continuamente mejorables.',
      githubEvidence: 'Cloud Logging, Cloud Monitoring, rastreo OpenTelemetry, métricas de latencia y esquemas de registro JSON estructurados.',
      analysis: 'La filosofía está consolidada; el despliegue universal en el 100% de los servicios avanza bajo el Trimindslabs Observability Standard.',
      architecturalVerdict: 'Compromiso en consolidación (Iniciativa: Trimindslabs Observability Standard).'
    },
    {
      id: 'ai-with-purpose',
      concept: 'AI With Purpose (IA con Propósito)',
      status: 'consolidating',
      claim: 'IA aplicada estrictamente donde genera valor cuantificable.',
      githubEvidence: 'Geo AI (análisis de imágenes satelitales), ObjectScanner V2 (visión por computador móvil / conteo industrial), Compliance (búsqueda híbrida), VectorAI (herramientas para desarrolladores). Sin IA decorativa.',
      analysis: 'Dirección muy sólida. Para estandarizar métricas cuantitativas, está programado el AI Value Measurement Framework.',
      architecturalVerdict: 'Dirección confirmada; marco de medición en despliegue.'
    },
    {
      id: 'real-world-impact',
      concept: 'Real-World Impact (Impacto en el Mundo Real)',
      status: 'consolidating',
      claim: 'Enfocamos nuestra ingeniería en problemas reales y resultados prácticos.',
      githubEvidence: 'Sistemas dirigidos a áreas críticas: logística transfronteriza, análisis de suelo, cumplimiento normativo y observación de la Tierra.',
      analysis: 'El enfoque en retos prácticos es total; los indicadores de impacto a gran escala se expanden conforme los pilotos avanzan a producción.',
      architecturalVerdict: 'Orientación práctica de ingeniería ratificada.'
    },
    {
      id: 'transparency',
      concept: 'Transparencia Técnica',
      status: 'consolidating',
      claim: 'Transparencia técnica mediante documentación, decisiones de arquitectura y auditorías.',
      githubEvidence: 'Código abierto público, Architecture Decision Records (ADRs), divulgación de auditorías de vulnerabilidades e histórico evolutivo.',
      analysis: 'Existe alta transparencia técnica; un marco corporativo transversal unificado se encuentra en maduración.',
      architecturalVerdict: 'Comprobado en auditorías y documentación de diseño.'
    },
    {
      id: 'new-standard-vision',
      concept: 'Visión Corporativa',
      status: 'aspirational',
      claim: 'Ayudar a establecer un estándar más elevado en la ingeniería de sistemas inteligentes que sean confiables, observables, seguros y listos para operar en el mundo real.',
      githubEvidence: 'Publicaciones técnicas, patrones de arquitectura de búsqueda en dos etapas y modelos abiertos compartidos con la comunidad.',
      analysis: 'La visión representa el horizonte futuro. La formulación "Ayudar a establecer" es sincera, creíble y rigurosa.',
      architecturalVerdict: 'Visión aspiracional clara y sustentada en la ingeniería.'
    }
  ]
};
