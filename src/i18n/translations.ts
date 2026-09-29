import { Language } from '../types';

export type TranslationKey = 
  // Nav & Header
  | 'nav.home'
  | 'nav.aiSystems'
  | 'nav.engineering'
  | 'nav.caseStudies'
  | 'nav.research'
  | 'nav.positioning'
  | 'nav.contact'
  | 'nav.auditBtn'
  | 'nav.telemetryBtn'
  | 'nav.vocabularyBtn'
  | 'nav.auditMatrixBtn'
  | 'nav.gatesBtn'
  | 'nav.systemsNominal'
  | 'nav.brandTagline'
  | 'nav.zeroHallucination'
  | 'nav.euSovereign'
  | 'nav.gatesVerified'

  // Header Ticker
  | 'ticker.liveTelemetry'
  | 'ticker.systemsNominal'
  | 'ticker.p99Latency'
  | 'ticker.hallucinationRate'
  | 'ticker.fleetThroughput'
  | 'ticker.guardrail'
  | 'ticker.dataResidency'
  | 'ticker.datacenter'

  // Hero
  | 'hero.badge'
  | 'hero.titlePrefix'
  | 'hero.titleHighlight'
  | 'hero.titleSuffix'
  | 'hero.subtitle'
  | 'hero.exploreSystems'
  | 'hero.viewStudies'
  | 'hero.technicalGlossary'
  | 'hero.missionTitle'
  | 'hero.missionDesc'
  | 'hero.philosophyTitle'
  | 'hero.philosophyDesc'
  | 'hero.activeArchitecture'
  | 'hero.engineeringStack'
  | 'hero.trustedSearch'
  | 'hero.geospatialAI'
  | 'hero.boundedAgents'
  | 'hero.securityLayer'
  | 'hero.realworldAudit'
  | 'hero.auditedVerdict'
  | 'hero.exploreAudit'
  | 'hero.infrastructureStatus'
  | 'hero.slaUptime'
  | 'hero.securityFirst'
  | 'hero.securitySpecs'
  | 'hero.metric1Title'
  | 'hero.metric1Desc'
  | 'hero.metric2Title'
  | 'hero.metric2Desc'
  | 'hero.metric3Title'
  | 'hero.metric3Desc'
  | 'hero.metric4Title'
  | 'hero.metric4Desc'
  | 'hero.auditExplanation'

  // Home Page (App.tsx)
  | 'home.topologyBadge'
  | 'home.topologyTitle'
  | 'home.topologyTitleHighlight'
  | 'home.topologyDesc'
  | 'home.fullMatrixBtn'
  | 'home.auditedBadge'
  | 'home.auditedTitle'
  | 'home.auditedTitleHighlight'
  | 'home.viewAllProjects'
  | 'home.inspectTruth'
  | 'home.phase12Check'

  // Transversal Callout
  | 'callout.badge'
  | 'callout.title'
  | 'callout.titleHighlight'
  | 'callout.description'
  | 'callout.requestAudit'
  | 'callout.readPositioning'
  | 'callout.viewVocabulary'
  | 'callout.viewEvidence'

  // Architecture Viewer
  | 'arch.badge'
  | 'arch.tabRetrieval'
  | 'arch.tabAgentic'
  | 'arch.tabGeospatial'
  | 'arch.tabSecurity'
  | 'arch.guarantee'
  | 'arch.latencyProfile'

  // AI Systems
  | 'ai.badge'
  | 'ai.title'
  | 'ai.titleHighlight'
  | 'ai.subtitle'
  | 'ai.viewSpec'
  | 'ai.coreSpec'
  | 'ai.latencySlo'
  | 'ai.uptime'
  | 'ai.residency'
  | 'ai.guardrail'
  | 'ai.pipeline'
  | 'ai.verified'
  | 'ai.tech'
  | 'ai.hardening'

  // Engineering
  | 'eng.badge'
  | 'eng.title'
  | 'eng.titleHighlight'
  | 'eng.subtitle'
  | 'eng.axisTitle'
  | 'eng.axisSubtitle'
  | 'eng.noSilos'
  | 'eng.foundationalAxis'
  | 'eng.foundationalSub'
  | 'eng.foundationalDesc'
  | 'eng.verificationAxis'
  | 'eng.verificationSub'
  | 'eng.verificationDesc'
  | 'eng.deliveryAxis'
  | 'eng.deliverySub'
  | 'eng.deliveryDesc'
  | 'eng.cicdTitle'
  | 'eng.substrateTitle'
  | 'eng.directivesTitle'

  // Research
  | 'res.badge'
  | 'res.title'
  | 'res.titleHighlight'
  | 'res.subtitle'
  | 'res.coreFindings'
  | 'res.readWhitepaper'
  | 'res.pubHeader'
  | 'res.copyCitation'
  | 'res.copied'
  | 'res.close'

  // Contact
  | 'contact.badge'
  | 'contact.title'
  | 'contact.titleHighlight'
  | 'contact.subtitle'
  | 'contact.protocolTitle'
  | 'contact.protocolDirectAccess'
  | 'contact.protocolDirectAccessDesc'
  | 'contact.protocolNda'
  | 'contact.protocolNdaDesc'
  | 'contact.protocolSla'
  | 'contact.protocolSlaDesc'
  | 'contact.directChannel'
  | 'contact.primaryRole'
  | 'contact.encryptedNotice'
  | 'contact.formSuccessTitle'
  | 'contact.formSuccessDesc'
  | 'contact.formSubmitAnother'
  | 'contact.fullName'
  | 'contact.email'
  | 'contact.company'
  | 'contact.scope'
  | 'contact.scopeOption1'
  | 'contact.scopeOption2'
  | 'contact.scopeOption3'
  | 'contact.scopeOption4'
  | 'contact.scopeOption5'
  | 'contact.scopeOption6'
  | 'contact.scale'
  | 'contact.objective'
  | 'contact.objectivePlaceholder'
  | 'contact.objectiveGeneral'
  | 'contact.objectiveGeneralPlaceholder'
  | 'contact.gdprConsent'
  | 'contact.submitBtn'
  | 'contact.directEmailBtn'
  | 'contact.openEmailClient'
  | 'contact.copyEmail'
  | 'contact.emailCopied'

  // Reality Audit
  | 'audit.badge'
  | 'audit.title'
  | 'audit.titleHighlight'
  | 'audit.subtitle'
  | 'audit.question'
  | 'audit.sustained'
  | 'audit.consolidating'
  | 'audit.aspirational'
  | 'audit.filterAll'
  | 'audit.conceptCol'
  | 'audit.evidenceCol'
  | 'audit.statusCol'
  | 'audit.analysisCol'
  | 'audit.verdictCol'
  | 'audit.summaryTitle'
  | 'audit.summaryDesc'

  // Projects & Repository Truth
  | 'projects.badge'
  | 'projects.title'
  | 'projects.titleHighlight'
  | 'projects.subtitle'
  | 'projects.categoryAll'
  | 'projects.categoryBuilt'
  | 'projects.categoryExploring'
  | 'projects.categoryPlanned'
  | 'projects.truthBadge'
  | 'projects.viewTruthSheet'
  | 'projects.honestScopeLabel'
  | 'projects.whatItProves'

  // Status Labels
  | 'status.implemented'
  | 'status.partial'
  | 'status.planned'
  | 'status.notPresent'

  // Project Truth Modal
  | 'truthModal.title'
  | 'truthModal.subtitle'
  | 'truthModal.realStack'
  | 'truthModal.archVerification'
  | 'truthModal.documented'
  | 'truthModal.implemented'
  | 'truthModal.presented'
  | 'truthModal.coherence'
  | 'truthModal.repository'
  | 'truthModal.testSuite'
  | 'truthModal.ciCd'
  | 'truthModal.adrs'
  | 'truthModal.results'
  | 'truthModal.decisions'
  | 'truthModal.challenges'
  | 'truthModal.languages'
  | 'truthModal.frameworks'
  | 'truthModal.databases'
  | 'truthModal.cloud'
  | 'truthModal.testing'
  | 'truthModal.ciCdObs'
  | 'truthModal.inspectGithub'
  | 'truthModal.close'

  // Production Gates Modal
  | 'gates.badge'
  | 'gates.title'
  | 'gates.titleHighlight'
  | 'gates.subtitle'
  | 'gates.allVerified'
  | 'gates.verifiedCount'
  | 'gates.phaseCol'
  | 'gates.gateCol'
  | 'gates.evidenceCol'
  | 'gates.detailsCol'
  | 'gates.satisfiedBanner'
  | 'gates.auditRef'
  | 'gates.passed'
  | 'gates.readyRelease'
  | 'gates.closeBtn'

  // Vocabulary Modal
  | 'vocab.title'
  | 'vocab.subtitle'
  | 'vocab.searchPlaceholder'
  | 'vocab.termsIndex'
  | 'vocab.contractDefinition'
  | 'vocab.contrastingAntiPattern'
  | 'vocab.productionImplementation'
  | 'vocab.closeBtn'

  // Telemetry
  | 'telemetry.badge'
  | 'telemetry.title'
  | 'telemetry.subtitle'
  | 'telemetry.realMetadata'
  | 'telemetry.runtime'
  | 'telemetry.cluster'
  | 'telemetry.releaseTag'
  | 'telemetry.auditVersion'

  // GDPR Banner
  | 'gdpr.title'
  | 'gdpr.message'
  | 'gdpr.essential'
  | 'gdpr.confirm'

  // About Section
  | 'about.badge'
  | 'about.title'
  | 'about.titleHighlight'
  | 'about.subtitle'
  | 'about.tabMatrix'
  | 'about.tabPositioning'
  | 'about.missionTitle'
  | 'about.missionNote'
  | 'about.visionTitle'
  | 'about.vocabBannerTitle'
  | 'about.vocabBannerDesc'
  | 'about.openVocab'

  // Footer
  | 'footer.desc'
  | 'footer.allAuditsVerified'
  | 'footer.jurisdiction'
  | 'footer.tenetsTitle'
  | 'footer.tenet1'
  | 'footer.tenet2'
  | 'footer.tenet3'
  | 'footer.tenet4'
  | 'footer.sovereignCloud'
  | 'footer.gdprNotice'
  | 'footer.gatesCount'
  | 'footer.foundationalDistinction'
  | 'footer.systemsArchLeadership'
  | 'footer.systemsArchLeadershipDesc'
  | 'footer.trimindsEntity'
  | 'footer.trimindsEntityDesc'
  | 'footer.colSystems'
  | 'footer.colTruth'
  | 'footer.colVerification'
  | 'footer.allRights'
  | 'footer.directInquiries'
  | 'footer.blueprints'
  | 'footer.researchPapers'
  | 'footer.canonicalVocab'
  | 'footer.githubRepos'
  | 'footer.euAiAct';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Nav & Header
    'nav.home': 'Overview',
    'nav.aiSystems': 'AI Systems',
    'nav.engineering': 'Architecture',
    'nav.caseStudies': 'Projects & Evidence',
    'nav.research': 'Research',
    'nav.positioning': 'About & Audit',
    'nav.contact': 'Contact',
    'nav.auditBtn': 'Reality Audit Matrix',
    'nav.telemetryBtn': 'System Status',
    'nav.vocabularyBtn': 'Vocabulary',
    'nav.auditMatrixBtn': 'GitHub Reality Check',
    'nav.gatesBtn': 'Production Gates',
    'nav.systemsNominal': 'SYSTEMS OPERATIONAL',
    'nav.brandTagline': 'Deterministic Intelligence Systems',
    'nav.zeroHallucination': '0.00% HALLUCINATION',
    'nav.euSovereign': 'EU SOVEREIGN',
    'nav.gatesVerified': '(11/11 Verified)',

    // Header Ticker
    'ticker.liveTelemetry': 'LIVE PRODUCTION TELEMETRY:',
    'ticker.systemsNominal': 'SYSTEMS OPERATIONAL',
    'ticker.p99Latency': 'P99 LATENCY',
    'ticker.hallucinationRate': 'HALLUCINATION RATE',
    'ticker.fleetThroughput': 'FLEET THROUGHPUT',
    'ticker.guardrail': 'CITATION ACCURACY',
    'ticker.dataResidency': 'DATA JURISDICTION',
    'ticker.datacenter': 'Frankfurt (EU)',

    // Hero
    'hero.badge': 'ENTERPRISE PRODUCTION AI // DETERMINISTIC FOUNDATIONS',
    'hero.titlePrefix': 'Sovereign AI Systems Engineered for',
    'hero.titleHighlight': 'Deterministic Certainty',
    'hero.titleSuffix': 'and Zero Hallucination.',
    'hero.subtitle': 'Trimindslabs bridges the chasm between probabilistic neural models and mission-critical production reliability. We design verifiable search engines, deterministic and controlled agentic workflows, and geospatial intelligence platforms with immutable citation provenance.',
    'hero.exploreSystems': 'Explore AI Systems',
    'hero.viewStudies': 'View Audited Projects',
    'hero.technicalGlossary': 'Technical Glossary',
    'hero.missionTitle': 'Our Core Mandate',
    'hero.missionDesc': 'To engineer intelligent systems that solve real-world problems through reliable, secure, transparent, and measurable technology.',
    'hero.philosophyTitle': 'Engineering Philosophy',
    'hero.philosophyDesc': 'We reject opaque black-box AI. Real enterprise trust is built in the architecture through cross-encoder reranking, character-offset verification, and strict telemetry.',
    'hero.activeArchitecture': 'ACTIVE ARCHITECTURES',
    'hero.engineeringStack': 'VERIFIABLE PRODUCTION STACK',
    'hero.trustedSearch': 'Trusted Search',
    'hero.geospatialAI': 'Geospatial AI',
    'hero.boundedAgents': 'Controlled Agentic Workflows',
    'hero.securityLayer': 'Zero-Trust Security',
    'hero.realworldAudit': 'EVIDENCE OVER CLAIMS',
    'hero.auditedVerdict': 'All statements audited against GitHub repositories, tests, and architecture decision records.',
    'hero.exploreAudit': 'Inspect Reality Matrix',
    'hero.infrastructureStatus': 'INFRASTRUCTURE STATUS',
    'hero.slaUptime': '99.98% SLA UPTIME',
    'hero.securityFirst': 'Security & Compliance First',
    'hero.securitySpecs': 'GDPR COMPLIANT / AES-256 / OWASP LLM DEFENSE',
    'hero.metric1Title': 'Factual Hallucination Rate',
    'hero.metric1Desc': 'Verified in European compliance audits',
    'hero.metric2Title': 'Daily Earth Surface Analyzed',
    'hero.metric2Desc': 'Satellite multi-spectral raster processing',
    'hero.metric3Title': 'Client Freight Fuel Reductions',
    'hero.metric3Desc': '15,000+ telematics events/sec',
    'hero.metric4Title': 'Security Proxy Inspection',
    'hero.metric4Desc': 'OWASP prompt injection defense',
    'hero.auditExplanation': 'Every corporate claim mapped to public GitHub code, commits, and security audit records.',

    // Home Page (App.tsx)
    'home.topologyBadge': 'SYSTEMS BLUEPRINTS // VERIFIABLE RUNTIME',
    'home.topologyTitle': 'Interactive Architectural',
    'home.topologyTitleHighlight': 'Topology',
    'home.topologyDesc': 'Explore the formal pipeline stages behind Trimindslabs Trusted Retrieval, Deterministic Agentic Workflows, and Geo-Spatial systems.',
    'home.fullMatrixBtn': 'Full Systems Matrix',
    'home.auditedBadge': 'REPOSITORY TRUTH // AUDITED SYSTEMS',
    'home.auditedTitle': 'Audited Systems in',
    'home.auditedTitleHighlight': 'Active Production',
    'home.viewAllProjects': 'View All Projects & Tech Stacks',
    'home.inspectTruth': 'Inspect Truth Sheet',
    'home.phase12Check': 'Phase 12 Gates Check (11/11 Passed)',

    // Transversal Callout
    'callout.badge': 'EUROPEAN SOVEREIGNTY & EVIDENCE-FIRST ENGINEERING',
    'callout.title': 'Beyond Experimental Chatbots:',
    'callout.titleHighlight': 'Engineering Predictable Enterprise Foundations.',
    'callout.description': 'We reject the doctrine that generative AI must remain an opaque, unpredictable black box. By embedding models inside deterministic validation fences, cross-encoder rerankers, and continuous telemetry pipelines, we deliver intelligent systems that meet the rigorous standards of aerospace, logistics, and European compliance.',
    'callout.requestAudit': 'Request Technical Audit',
    'callout.readPositioning': 'Read Corporate Specification V1.0',
    'callout.viewVocabulary': 'View Canonical Vocabulary',
    'callout.viewEvidence': 'Explore Reality Audit Matrix',

    // Architecture Viewer
    'arch.badge': 'Interactive Architectural Schematics',
    'arch.tabRetrieval': 'Trusted Retrieval',
    'arch.tabAgentic': 'Controlled Agentic Workflow',
    'arch.tabGeospatial': 'Geo-Spatial Mesh',
    'arch.tabSecurity': 'Security Gateway',
    'arch.guarantee': 'Operational Guarantee:',
    'arch.latencyProfile': 'End-to-End Latency Profile:',

    // AI Systems
    'ai.badge': 'PHASE 1 & 2 // AI SYSTEMS & TECHNICAL SPECIFICATION',
    'ai.title': 'Architectures Engineered for',
    'ai.titleHighlight': 'Production Reliability',
    'ai.subtitle': 'Trimindslabs constructs resilient, mathematically verified intelligent systems designed to operate without human cognitive overload, token budget runaway, or opaque black-box assumptions.',
    'ai.viewSpec': 'View Specification',
    'ai.coreSpec': 'CORE SYSTEM SPECIFICATION',
    'ai.latencySlo': 'Latency SLO',
    'ai.uptime': 'Uptime Reliability',
    'ai.residency': 'Data Residency',
    'ai.guardrail': 'Guardrail Boundary',
    'ai.pipeline': 'Operational Pipeline Sequence',
    'ai.verified': 'Verified',
    'ai.tech': 'Tech:',
    'ai.hardening': 'Enterprise Hardening Capabilities',

    // Engineering
    'eng.badge': 'PHASE 4 & 10 // PLATFORM ENGINEERING & INFRASTRUCTURE',
    'eng.title': 'Transversal Engineering',
    'eng.titleHighlight': 'Architecture',
    'eng.subtitle': 'In Trimindslabs, security, observability, testing, and production readiness are not terminal post-launch phases. They are continuous, transversal requirements woven into every architectural layer.',
    'eng.axisTitle': 'The Trimindslabs Transversal Axis',
    'eng.axisSubtitle': 'All phases and systems adhere to this unified structural substrate',
    'eng.noSilos': 'ZERO ISOLATED SILOS',
    'eng.foundationalAxis': 'Foundational Axis',
    'eng.foundationalSub': 'Architecture • Engineering • Content',
    'eng.foundationalDesc': 'Every system is specified with character-level accuracy before code execution begins.',
    'eng.verificationAxis': 'Verification Axis',
    'eng.verificationSub': 'Security • Observability • Testing',
    'eng.verificationDesc': 'Non-negotiable telemetry, OWASP LLM attack defenses, and automated evaluation suites.',
    'eng.deliveryAxis': 'Delivery Axis',
    'eng.deliverySub': 'Cloud Native • Production SLA • Sovereignty',
    'eng.deliveryDesc': 'Serverless scale-to-zero workloads with strict European data residency guarantees.',
    'eng.cicdTitle': 'Automated Production CI/CD Pipeline Specification',
    'eng.substrateTitle': 'Technology & Infrastructure Substrate',
    'eng.directivesTitle': 'Trimindslabs Foundational Engineering Directives',

    // Research
    'res.badge': 'PHASE 6 // RESEARCH & TECHNICAL KNOWLEDGE BASE',
    'res.title': 'Engineering Insights &',
    'res.titleHighlight': 'Systems Research',
    'res.subtitle': 'Trimindslabs acts as an open research and engineering authority, publishing empirical findings on vector retrieval limitations, deterministic search primitives, and AI telemetry standards.',
    'res.coreFindings': 'Core Findings:',
    'res.readWhitepaper': 'Read Full Whitepaper',
    'res.pubHeader': 'TRIMINDSLABS TECHNICAL PUBLICATION //',
    'res.copyCitation': 'Copy Academic Citation',
    'res.copied': 'Citation Copied!',
    'res.close': 'Close Reader',

    // Contact
    'contact.badge': 'TECHNICAL CONSULTATION & ARCHITECTURE AUDIT',
    'contact.title': 'Direct Systems Architecture',
    'contact.titleHighlight': 'Consultation',
    'contact.subtitle': 'Engage directly with Trimindslabs senior systems architecture for mission-critical enterprise AI deployment, retrieval auditing, or sovereign infrastructure.',
    'contact.protocolTitle': 'Direct Engagement Protocol',
    'contact.protocolDirectAccess': 'Direct Architect Communication',
    'contact.protocolDirectAccessDesc': 'No intermediate sales SDRs. All inquiries are evaluated and answered directly by the Chief Systems Architect.',
    'contact.protocolNda': 'Mutual NDA & IP Sovereignty',
    'contact.protocolNdaDesc': 'European Union jurisdiction. Strict confidentiality and mutual NDA prior to code or data exchange.',
    'contact.protocolSla': 'Guaranteed Technical Review',
    'contact.protocolSlaDesc': 'Responses provided within 24 business hours, including a preliminary architectural feasibility assessment.',
    'contact.directChannel': 'Official Direct Email Channel',
    'contact.primaryRole': 'Chief Systems Architect & Lead Researcher',
    'contact.encryptedNotice': 'End-to-end encrypted or PGP communications available upon formal request.',
    'contact.formSuccessTitle': 'Technical Specification Prepared Successfully',
    'contact.formSuccessDesc': 'Your technical scope has been formulated. An email addressed to contato@trimindslabs.com has been initialized.',
    'contact.formSubmitAnother': 'Submit Another Technical Inquiry',
    'contact.fullName': 'Full Name',
    'contact.email': 'Official Corporate Email',
    'contact.company': 'Organization / Entity',
    'contact.scope': 'Architectural Scope',
    'contact.scopeOption1': 'Architecture Audit & Verification',
    'contact.scopeOption2': 'Trusted Search Core Deployment',
    'contact.scopeOption3': 'Deterministic/Controlled Agentic Workflows',
    'contact.scopeOption4': 'Geospatial AI & Satellite Analytics',
    'contact.scopeOption5': 'Zero-Trust Security & Observability Gateway',
    'contact.scopeOption6': 'General Inquiries',
    'contact.scale': 'Project Scale & Target Timeline',
    'contact.objective': 'Engineering Challenge & Operational Context',
    'contact.objectivePlaceholder': 'Describe your technical challenge, data volume, latency targets, and compliance requirements...',
    'contact.objectiveGeneral': 'Inquiry Details & Message',
    'contact.objectiveGeneralPlaceholder': 'Please describe your inquiry, partnership interest, or general request...',
    'contact.gdprConsent': 'I acknowledge that the data submitted will be processed under European Union GDPR and used strictly for architectural assessment.',
    'contact.submitBtn': 'Generate Technical Scope & Send Inquiry',
    'contact.directEmailBtn': 'Direct Send via Email Client',
    'contact.openEmailClient': 'Open in Default Email Client',
    'contact.copyEmail': 'Copy Official Email Address',
    'contact.emailCopied': 'Copied to Clipboard!',

    // Reality Audit
    'audit.badge': 'REPOSITORY TRUTH // GITHUB EVIDENCE AUDIT',
    'audit.title': 'Reality Audit Matrix',
    'audit.titleHighlight': 'Evidence Over Claims',
    'audit.subtitle': 'Every corporate claim made by Trimindslabs is rigorously cross-referenced against public and audited GitHub repositories, architecture decision records (ADRs), and automated test suites.',
    'audit.question': 'The Question: "Can we prove this?"',
    'audit.sustained': 'Sustained (Concrete Evidence)',
    'audit.consolidating': 'Consolidating (In Progress)',
    'audit.aspirational': 'Aspirational (Future Horizon)',
    'audit.filterAll': 'All 15 Audited Claims',
    'audit.conceptCol': 'Corporate Claim',
    'audit.evidenceCol': 'GitHub Code & Commit Evidence',
    'audit.statusCol': 'Audit Status',
    'audit.analysisCol': 'Technical Reality Analysis',
    'audit.verdictCol': 'Architectural Verdict',
    'audit.summaryTitle': 'The 5 Proven Pillars',
    'audit.summaryDesc': '1. Problem First | 2. Trust Through Engineering | 3. Evidence Over Claims | 4. Continuous Evolution | 5. Production-Oriented',

    // Projects & Repository Truth
    'projects.badge': 'REPOSITORY TRUTH // SYSTEM SPECIFICATIONS',
    'projects.title': 'Verifiable Engineering',
    'projects.titleHighlight': 'Projects & Repositories',
    'projects.subtitle': 'Every project is strictly categorized by its real state. We never present roadmap items as implemented systems.',
    'projects.categoryAll': 'All Projects',
    'projects.categoryBuilt': 'What We Built',
    'projects.categoryExploring': 'What We Are Exploring',
    'projects.categoryPlanned': 'What Is Planned',
    'projects.truthBadge': 'REPOSITORY TRUTH VERIFIED',
    'projects.viewTruthSheet': 'View Repository Truth Sheet',
    'projects.honestScopeLabel': 'Scope Specification',
    'projects.whatItProves': 'What This Proves About Trimindslabs',

    // Statuses
    'status.implemented': 'Implemented',
    'status.partial': 'Partial / Experimental',
    'status.planned': 'Planned',
    'status.notPresent': 'Not Present',

    // Truth Modal
    'truthModal.title': 'Repository Truth Sheet & Architecture Audit',
    'truthModal.subtitle': 'Source of Truth: Repository → Evidence → Website',
    'truthModal.realStack': 'Real Technology Stack (No Artificial Inflation)',
    'truthModal.archVerification': 'Architecture Verification (Documented vs Implemented vs Presented)',
    'truthModal.documented': 'Documented Architecture',
    'truthModal.implemented': 'Implemented in Code',
    'truthModal.presented': 'Presented on Site',
    'truthModal.coherence': 'Coherence Score',
    'truthModal.repository': 'Repository Metadata & Verification',
    'truthModal.testSuite': 'Test Suite & Coverage',
    'truthModal.ciCd': 'CI/CD Pipeline',
    'truthModal.adrs': 'Architecture Decision Records (ADRs)',
    'truthModal.results': 'Empirical Results & Benchmarks',
    'truthModal.decisions': 'Key Architectural Decisions',
    'truthModal.challenges': 'Production Engineering Challenges',
    'truthModal.languages': 'Languages',
    'truthModal.frameworks': 'Frameworks & Engine',
    'truthModal.databases': 'Databases & Storage',
    'truthModal.cloud': 'Cloud & Infrastructure',
    'truthModal.testing': 'Testing & Quality',
    'truthModal.ciCdObs': 'CI/CD & Observability',
    'truthModal.inspectGithub': 'Inspect Verified GitHub Repository',
    'truthModal.close': 'Close Audit Sheet',

    // Production Gates
    'gates.badge': 'PHASE 12 // PRODUCTION RELEASE GATES',
    'gates.title': 'Production Readiness & Quality',
    'gates.titleHighlight': 'Verification',
    'gates.subtitle': 'The Trimindslabs website strictly adheres to 11 technical, ethical, and operational gates before release.',
    'gates.allVerified': 'ALL 11 GATES VERIFIED',
    'gates.verifiedCount': '11 of 11 Gates Passed',
    'gates.phaseCol': 'Roadmap Phase',
    'gates.gateCol': 'Gate Requirement',
    'gates.evidenceCol': 'Concrete Evidence & Implementation',
    'gates.detailsCol': 'Compliance Rule',
    'gates.satisfiedBanner': '11/11 PRODUCTION GATES FORMALLY SATISFIED',
    'gates.auditRef': 'Audit Reference: TRIMINDSLABS-AUDIT-RELEASE-2026',
    'gates.passed': 'PASSED',
    'gates.readyRelease': 'Status: READY FOR PRODUCTION RELEASE',
    'gates.closeBtn': 'Close Gates Review',

    // Vocabulary Modal
    'vocab.title': 'Trimindslabs Technical Vocabulary Specification',
    'vocab.subtitle': 'Formal terminology establishing semantic precision across all Trimindslabs engineering documentation',
    'vocab.searchPlaceholder': 'Search concepts (e.g. Trusted Search, Observability, Controlled Agency)...',
    'vocab.termsIndex': 'Canonical Terminology Index',
    'vocab.contractDefinition': 'Formal Contract Definition',
    'vocab.contrastingAntiPattern': 'Contrasting Anti-Pattern',
    'vocab.productionImplementation': 'Production Reference Implementation',
    'vocab.closeBtn': 'Close Vocabulary Specification',

    // Telemetry
    'telemetry.badge': 'OPERATIONAL OBSERVABILITY // REAL RUNTIME DATA',
    'telemetry.title': 'Trimindslabs Operational Observability Hub',
    'telemetry.subtitle': 'Real compilation parameters, sovereign compliance, and release verification.',
    'telemetry.realMetadata': 'Real Platform Metadata (Zero Simulated Data)',
    'telemetry.runtime': 'Execution Environment',
    'telemetry.cluster': 'Ingress Cluster',
    'telemetry.releaseTag': 'Release Tag',
    'telemetry.auditVersion': 'Audit Specification',

    // GDPR Banner
    'gdpr.title': 'European Sovereign Compliance',
    'gdpr.message': 'Trimindslabs strictly adheres to EU GDPR and the EU AI Act. We operate zero third-party commercial trackers. Client telemetry and session diagnostics are processed exclusively within ISO 27001 certified European data centers (Frankfurt/Paris).',
    'gdpr.essential': 'Essential Only',
    'gdpr.confirm': 'Acknowledge & Confirm',

    // About Section
    'about.badge': 'PHASE 0 // CORPORATE IDENTITY & AUDIT SPECIFICATION',
    'about.title': 'What Trimindslabs',
    'about.titleHighlight': 'Represents',
    'about.subtitle': 'Trimindslabs was established to counteract the superficial rush of speculative AI prototypes with uncompromising systems engineering, deterministic verification, and European data sovereignty. Every claim is validated against real code and architecture audits.',
    'about.tabMatrix': 'GitHub Reality Check Audit Matrix',
    'about.tabPositioning': 'Positioning & Principles',
    'about.missionTitle': 'Corporate Mission (Audited V1.0)',
    'about.missionNote': 'Refined to promise strictly what is proved in production code, avoiding speculative inflation.',
    'about.visionTitle': 'Corporate Vision (Audited V1.0)',
    'about.vocabBannerTitle': 'Trimindslabs Technical Vocabulary Index',
    'about.vocabBannerDesc': 'Explore rigorous mathematical definitions of Trusted Search, Trust Before Generation, Controlled Agency, and AI Observability standardizing our production contracts.',
    'about.openVocab': 'Open Canonical Vocabulary',

    // Footer
    'footer.desc': 'Trimindslabs is an advanced systems engineering organization dedicated to building deterministic, observable, and hardened intelligent architectures. We eliminate the gap between probabilistic neural models and mission-critical production reliability.',
    'footer.allAuditsVerified': 'All Claims Audited against GitHub',
    'footer.jurisdiction': 'European Union Jurisdiction • GDPR Art. 28/32',
    'footer.tenetsTitle': 'Transversal Tenets:',
    'footer.tenet1': 'Problem First',
    'footer.tenet2': 'Trust Through Engineering',
    'footer.tenet3': 'Evidence Over Claims',
    'footer.tenet4': 'Production Ready',
    'footer.sovereignCloud': 'SOVEREIGN CLOUD: EU-WEST-3',
    'footer.gdprNotice': 'GDPR ART. 28/32 COMPLIANT',
    'footer.gatesCount': '11/11 GATES VERIFIED',
    'footer.foundationalDistinction': 'Foundational Distinction',
    'footer.systemsArchLeadership': 'Systems Architecture & Research',
    'footer.systemsArchLeadershipDesc': 'Sovereign Engineering & Deterministic Computing',
    'footer.trimindsEntity': 'Trimindslabs',
    'footer.trimindsEntityDesc': 'Sovereign Corporate Engineering Platform Infrastructure',
    'footer.colSystems': 'Core Systems',
    'footer.colTruth': 'Repository Truth',
    'footer.colVerification': 'Verification & Legal',
    'footer.allRights': 'ALL RIGHTS RESERVED.',
    'footer.directInquiries': 'DIRECT INQUIRIES:',
    'footer.blueprints': 'Architectural Blueprints',
    'footer.researchPapers': 'Research Papers & Benchmarks',
    'footer.canonicalVocab': 'Canonical Vocabulary',
    'footer.githubRepos': 'GitHub Repositories',
    'footer.euAiAct': 'EU AI Act High-Risk Compliant'
  },

  pt: {
    // Nav & Header
    'nav.home': 'Visão Geral',
    'nav.aiSystems': 'Sistemas de IA',
    'nav.engineering': 'Arquitetura',
    'nav.caseStudies': 'Projetos e Evidências',
    'nav.research': 'Pesquisa',
    'nav.positioning': 'Sobre e Auditoria',
    'nav.contact': 'Contato',
    'nav.auditBtn': 'Matriz de Auditoria de Realidade',
    'nav.telemetryBtn': 'Status do Sistema',
    'nav.vocabularyBtn': 'Glossário',
    'nav.auditMatrixBtn': 'Auditoria de Realidade GitHub',
    'nav.gatesBtn': 'Portões de Produção',
    'nav.systemsNominal': 'SISTEMAS OPERACIONAIS',
    'nav.brandTagline': 'Sistemas de Inteligência Determinística',
    'nav.zeroHallucination': '0,00% ALUCINAÇÃO',
    'nav.euSovereign': 'SOBERANIA UE',
    'nav.gatesVerified': '(11/11 Verificados)',

    // Header Ticker
    'ticker.liveTelemetry': 'TELEMETRIA DE PRODUÇÃO EM TEMPO REAL:',
    'ticker.systemsNominal': 'SISTEMAS OPERACIONAIS',
    'ticker.p99Latency': 'LATÊNCIA P99',
    'ticker.hallucinationRate': 'TAXA DE ALUCINAÇÃO',
    'ticker.fleetThroughput': 'TAXA DE PROCESSAMENTO',
    'ticker.guardrail': 'PRECISÃO DE CITAÇÃO',
    'ticker.dataResidency': 'JURISDIÇÃO DE DADOS',
    'ticker.datacenter': 'Frankfurt (UE)',

    // Hero
    'hero.badge': 'IA EMPRESARIAL PARA PRODUÇÃO // FUNDAÇÕES DETERMINÍSTICAS',
    'hero.titlePrefix': 'Sistemas Soberanos de IA Projetados para',
    'hero.titleHighlight': 'Certeza Determinística',
    'hero.titleSuffix': 'e Zero Alucinação.',
    'hero.subtitle': 'A Trimindslabs conecta a pesquisa estocástica à confiabilidade crítica de produção. Desenvolvemos motores de busca verificáveis, fluxos de agentes determinísticos e controlados, e plataformas geoespaciais com proveniência de citações imutável.',
    'hero.exploreSystems': 'Explorar Sistemas de IA',
    'hero.viewStudies': 'Ver Projetos Auditados',
    'hero.technicalGlossary': 'Glossário Técnico',
    'hero.missionTitle': 'Nosso Mandato Principal',
    'hero.missionDesc': 'Projetar sistemas inteligentes que resolvam problemas do mundo real por meio de tecnologia confiável, segura, transparente e mensurável.',
    'hero.philosophyTitle': 'Filosofia de Engenharia',
    'hero.philosophyDesc': 'Rejeitamos a IA como caixa-preta opaca. A confiança corporativa é construída na arquitetura através de rerankers neurais, verificação de caracteres e telemetria rigorosa.',
    'hero.activeArchitecture': 'ARQUITETURAS ATIVAS',
    'hero.engineeringStack': 'STACK DE PRODUÇÃO VERIFICÁVEL',
    'hero.trustedSearch': 'Busca Confiável',
    'hero.geospatialAI': 'IA Geoespacial',
    'hero.boundedAgents': 'Agentes Controlados',
    'hero.securityLayer': 'Segurança Zero-Trust',
    'hero.realworldAudit': 'EVIDÊNCIA ACIMA DE AFIRMAÇÕES',
    'hero.auditedVerdict': 'Todas as afirmações foram auditadas contra repositórios GitHub, baterias de testes e registros de decisões arquiteturais.',
    'hero.exploreAudit': 'Inspecionar Matriz de Realidade',
    'hero.infrastructureStatus': 'STATUS DA INFRAESTRUTURA',
    'hero.slaUptime': '99,98% SLA DISPONIBILIDADE',
    'hero.securityFirst': 'Segurança e Conformidade Primeiro',
    'hero.securitySpecs': 'CONFORME GDPR / AES-256 / DEFESA OWASP LLM',
    'hero.metric1Title': 'Taxa de Alucinação Factual',
    'hero.metric1Desc': 'Verificado em auditorias de conformidade europeias',
    'hero.metric2Title': 'Superfície Terrestre Analisada/Dia',
    'hero.metric2Desc': 'Processamento raster multiespectral de satélite',
    'hero.metric3Title': 'Economia de Combustível em Frotas',
    'hero.metric3Desc': '15.000+ eventos telemáticos/seg',
    'hero.metric4Title': 'Inspeção de Proxy de Segurança',
    'hero.metric4Desc': 'Defesa contra injeção de prompt OWASP',
    'hero.auditExplanation': 'Cada afirmação corporativa mapeada para código público no GitHub, commits e registros de auditoria.',

    // Home Page (App.tsx)
    'home.topologyBadge': 'BLUEPRINTS DE SISTEMAS // RUNTIME VERIFICÁVEL',
    'home.topologyTitle': 'Topologia Arquitetural',
    'home.topologyTitleHighlight': 'Interativa',
    'home.topologyDesc': 'Explore as etapas formais de pipeline por trás da Recuperação Confiável da Trimindslabs, Fluxos de Agentes Determinísticos e Sistemas Geoespaciais.',
    'home.fullMatrixBtn': 'Matriz Completa de Sistemas',
    'home.auditedBadge': 'VERDADE DO REPOSITÓRIO // SISTEMAS AUDITADOS',
    'home.auditedTitle': 'Sistemas Auditados em',
    'home.auditedTitleHighlight': 'Produção Ativa',
    'home.viewAllProjects': 'Ver Todos os Projetos e Stacks Técnicas',
    'home.inspectTruth': 'Inspecionar Ficha da Verdade',
    'home.phase12Check': 'Verificação de Portões Fase 12 (11/11 Aprovados)',

    // Transversal Callout
    'callout.badge': 'SOBERANIA EUROPEIA E ENGENHARIA BASEADA EM EVIDÊNCIAS',
    'callout.title': 'Além de Chatbots Experimentais:',
    'callout.titleHighlight': 'Construindo Fundações Empresariais Previsíveis.',
    'callout.description': 'Rejeitamos a doutrina de que a IA generativa deva permanecer como uma caixa-preta opaca. Ao conter modelos dentro de cercas determinísticas de validação, rerankers neurais e pipelines contínuos de telemetria, entregamos sistemas que atendem aos padrões aeroespaciais, logísticos e de conformidade europeia.',
    'callout.requestAudit': 'Solicitar Auditoria Técnica',
    'callout.readPositioning': 'Ler Especificação Corporativa V1.0',
    'callout.viewVocabulary': 'Ver Vocabulário Canônico',
    'callout.viewEvidence': 'Explorar Matriz de Auditoria de Realidade',

    // Architecture Viewer
    'arch.badge': 'Esquemas Arquiteturais Interativos',
    'arch.tabRetrieval': 'Recuperação Confiável',
    'arch.tabAgentic': 'Fluxo de Agente Controlado',
    'arch.tabGeospatial': 'Malha Geoespacial',
    'arch.tabSecurity': 'Gateway de Segurança',
    'arch.guarantee': 'Garantia Operacional:',
    'arch.latencyProfile': 'Perfil de Latência Ponta a Ponta:',

    // AI Systems
    'ai.badge': 'FASE 1 E 2 // SISTEMAS DE IA E ESPECIFICAÇÃO TÉCNICA',
    'ai.title': 'Arquiteturas Projetadas para',
    'ai.titleHighlight': 'Confiabilidade em Produção',
    'ai.subtitle': 'A Trimindslabs constrói sistemas inteligentes resilientes e matematicamente verificados, projetados para operar sem sobrecarga cognitiva humana, estouro de orçamento de tokens ou premissas opacas de caixa-preta.',
    'ai.viewSpec': 'Ver Especificação',
    'ai.coreSpec': 'ESPECIFICAÇÃO DO SISTEMA CENTRAL',
    'ai.latencySlo': 'SLO de Latência',
    'ai.uptime': 'Confiabilidade de Uptime',
    'ai.residency': 'Residência dos Dados',
    'ai.guardrail': 'Limite de Guardrails',
    'ai.pipeline': 'Sequência Operacional de Pipeline',
    'ai.verified': 'Verificado',
    'ai.tech': 'Tecnologia:',
    'ai.hardening': 'Capacidades de Robustecimento Corporativo',

    // Engineering
    'eng.badge': 'FASE 4 E 10 // ENGENHARIA DE PLATAFORMA E INFRAESTRUTURA',
    'eng.title': 'Arquitetura de Engenharia',
    'eng.titleHighlight': 'Transversal',
    'eng.subtitle': 'Na Trimindslabs, segurança, observabilidade, testes e prontidão para produção não são fases terminais pós-lançamento. São requisitos contínuos e transversais integrados em cada camada arquitetural.',
    'eng.axisTitle': 'O Eixo Transversal da Trimindslabs',
    'eng.axisSubtitle': 'Todas as fases e sistemas aderem a este substrato estrutural unificado',
    'eng.noSilos': 'ZERO SILOS ISOLADOS',
    'eng.foundationalAxis': 'Eixo Fundamental',
    'eng.foundationalSub': 'Arquitetura • Engenharia • Conteúdo',
    'eng.foundationalDesc': 'Cada sistema é especificado com precisão ao nível de caractere antes do início da execução do código.',
    'eng.verificationAxis': 'Eixo de Verificação',
    'eng.verificationSub': 'Segurança • Observabilidade • Testes',
    'eng.verificationDesc': 'Telemetria inegociável, defesas contra ataques OWASP LLM e suítes de avaliação automatizadas.',
    'eng.deliveryAxis': 'Eixo de Entrega',
    'eng.deliverySub': 'Cloud Native • SLA de Produção • Soberania',
    'eng.deliveryDesc': 'Cargas de trabalho serverless com escala a zero e garantias rigorosas de residência europeia de dados.',
    'eng.cicdTitle': 'Especificação de Pipeline CI/CD Automatizado de Produção',
    'eng.substrateTitle': 'Substrato de Tecnologia e Infraestrutura',
    'eng.directivesTitle': 'Diretrizes Fundamentais de Engenharia da Trimindslabs',

    // Research
    'res.badge': 'FASE 6 // PESQUISA E BASE DE CONHECIMENTO TÉCNICO',
    'res.title': 'Insights de Engenharia &',
    'res.titleHighlight': 'Pesquisa de Sistemas',
    'res.subtitle': 'A Trimindslabs atua como autoridade aberta de pesquisa e engenharia, publicando descobertas empíricas sobre limitações de recuperação vetorial, primitivas de busca determinística e padrões de telemetria de IA.',
    'res.coreFindings': 'Principais Descobertas:',
    'res.readWhitepaper': 'Ler Whitepaper Completo',
    'res.pubHeader': 'PUBLICAÇÃO TÉCNICA TRIMINDSLABS //',
    'res.copyCitation': 'Copiar Citação Acadêmica',
    'res.copied': 'Citação Copiada!',
    'res.close': 'Fechar Leitor',

    // Contact
    'contact.badge': 'CONSULTORIA TÉCNICA E AUDITORIA DE ARQUITETURA',
    'contact.title': 'Consultoria Direta de Arquitetura de',
    'contact.titleHighlight': 'Sistemas',
    'contact.subtitle': 'Conecte-se diretamente com a arquitetura sênior da Trimindslabs para implantações de IA em produção crítica, auditorias de recuperação ou infraestrutura soberana.',
    'contact.protocolTitle': 'Protocolo de Contato Direto',
    'contact.protocolDirectAccess': 'Comunicação Direta com o Arquiteto',
    'contact.protocolDirectAccessDesc': 'Sem intermediários de vendas. Todas as consultas técnicas são avaliadas e respondidas diretamente pelo Arquiteto Principal de Sistemas.',
    'contact.protocolNda': 'NDA Mútuo e Soberania de PI',
    'contact.protocolNdaDesc': 'Jurisdição da União Europeia. Estrita confidencialidade e assinatura de NDA mútuo antes do compartilhamento de código ou dados.',
    'contact.protocolSla': 'Revisão Técnica Garantida',
    'contact.protocolSlaDesc': 'Respostas enviadas em até 24 horas úteis com uma avaliação preliminar de viabilidade técnica.',
    'contact.directChannel': 'Canal Oficial de E-mail Direto',
    'contact.primaryRole': 'Arquiteto Principal de Sistemas e Pesquisador Líder',
    'contact.encryptedNotice': 'Comunicações criptografadas de ponta a ponta ou PGP disponíveis mediante solicitação formal.',
    'contact.formSuccessTitle': 'Especificação Técnica Formulada com Sucesso',
    'contact.formSuccessDesc': 'Seu escopo técnico foi estruturado. Um e-mail endereçado a contato@trimindslabs.com foi inicializado no seu cliente.',
    'contact.formSubmitAnother': 'Enviar Outra Consulta Técnica',
    'contact.fullName': 'Nome Completo',
    'contact.email': 'E-mail Corporativo Oficial',
    'contact.company': 'Organização / Entidade',
    'contact.scope': 'Escopo Arquitetural',
    'contact.scopeOption1': 'Auditoria e Verificação de Arquitetura',
    'contact.scopeOption2': 'Implantação de Trusted Search Core',
    'contact.scopeOption3': 'Fluxos de Agentes Determinísticos e Controlados',
    'contact.scopeOption4': 'IA Geoespacial e Análise Satelital',
    'contact.scopeOption5': 'Gateway de Segurança Zero-Trust e Observabilidade',
    'contact.scopeOption6': 'Assuntos Gerais',
    'contact.scale': 'Escala do Projeto e Prazo Alvo',
    'contact.objective': 'Desafio de Engenharia e Contexto Operacional',
    'contact.objectivePlaceholder': 'Descreva seu desafio técnico, volume de dados, metas de latência e requisitos regulatórios...',
    'contact.objectiveGeneral': 'Detalhes da Mensagem e Solicitação',
    'contact.objectiveGeneralPlaceholder': 'Descreva sua dúvida, interesse em parceria ou solicitação geral...',
    'contact.gdprConsent': 'Reconheço que os dados enviados serão processados sob o GDPR da União Europeia e utilizados estritamente para avaliação arquitetural.',
    'contact.submitBtn': 'Gerar Especificação Técnica e Enviar',
    'contact.directEmailBtn': 'Envio Direto via Cliente de E-mail',
    'contact.openEmailClient': 'Abrir no Cliente de E-mail Padrão',
    'contact.copyEmail': 'Copiar Endereço Oficial de E-mail',
    'contact.emailCopied': 'Copiado para a Área de Transferência!',

    // Reality Audit
    'audit.badge': 'VERDADE DO REPOSITÓRIO // AUDITORIA DE EVIDÊNCIA GITHUB',
    'audit.title': 'Auditoria de Realidade',
    'audit.titleHighlight': 'Evidência Acima de Afirmações',
    'audit.subtitle': 'Cada afirmação corporativa da Trimindslabs é rigorosamente confrontada contra nossos repositórios GitHub, registros de decisões arquiteturais (ADRs) e baterias de testes de produção.',
    'audit.question': 'A Pergunta: "Podemos provar isso?"',
    'audit.sustained': 'Sustentado (Evidência Concreta)',
    'audit.consolidating': 'Em Consolidação (Em Progresso)',
    'audit.aspirational': 'Aspiracional (Horizonte Futuro)',
    'audit.filterAll': 'Todas as 15 Afirmações Auditadas',
    'audit.conceptCol': 'Afirmação Corporativa',
    'audit.evidenceCol': 'Código GitHub e Evidência de Commits',
    'audit.statusCol': 'Status de Auditoria',
    'audit.analysisCol': 'Análise Técnica de Realidade',
    'audit.verdictCol': 'Veredito Arquitetural',
    'audit.summaryTitle': 'Os 5 Pilares Comprovados',
    'audit.summaryDesc': '1. Problema em Primeiro Lugar | 2. Confiança por Engenharia | 3. Evidência Acima de Afirmações | 4. Evolução Contínua | 5. Pronto para Produção',

    // Projects & Repository Truth
    'projects.badge': 'VERDADE DO REPOSITÓRIO // ESPECIFICAÇÕES DE SISTEMAS',
    'projects.title': 'Engenharia Verificável',
    'projects.titleHighlight': 'Projetos e Repositórios',
    'projects.subtitle': 'Todos os projetos são categorizados com rigor pelo seu estado real. Nunca apresentamos itens de roadmap como sistemas já implementados.',
    'projects.categoryAll': 'Todos os Projetos',
    'projects.categoryBuilt': 'O Que Construímos',
    'projects.categoryExploring': 'O Que Estamos Explorando',
    'projects.categoryPlanned': 'O Que Está Planejado',
    'projects.truthBadge': 'VERDADE DO REPOSITÓRIO VERIFICADA',
    'projects.viewTruthSheet': 'Ver Ficha de Verdade do Repositório',
    'projects.honestScopeLabel': 'Especificação de Escopo',
    'projects.whatItProves': 'O Que Isto Demonstra Sobre a Trimindslabs',

    // Statuses
    'status.implemented': 'Implementado',
    'status.partial': 'Parcial / Experimental',
    'status.planned': 'Planejado',
    'status.notPresent': 'Não Presente',

    // Truth Modal
    'truthModal.title': 'Ficha de Verdade do Repositório e Auditoria Arquitetural',
    'truthModal.subtitle': 'Fonte da Verdade: Repositório → Evidência → Website',
    'truthModal.realStack': 'Stack Real de Tecnologias (Sem Inflação Artificial)',
    'truthModal.archVerification': 'Verificação de Arquitetura (Documentada vs Implementada vs Apresentada)',
    'truthModal.documented': 'Arquitetura Documentada',
    'truthModal.implemented': 'Implementado em Código',
    'truthModal.presented': 'Apresentado no Site',
    'truthModal.coherence': 'Índice de Coerência',
    'truthModal.repository': 'Metadados e Verificação do Repositório',
    'truthModal.testSuite': 'Bateria de Testes e Cobertura',
    'truthModal.ciCd': 'Pipeline de CI/CD',
    'truthModal.adrs': 'Registros de Decisão Arquitetural (ADRs)',
    'truthModal.results': 'Resultados Empíricos e Benchmarks',
    'truthModal.decisions': 'Decisões Arquiteturais Chave',
    'truthModal.challenges': 'Desafios de Engenharia em Produção',
    'truthModal.languages': 'Linguagens',
    'truthModal.frameworks': 'Frameworks e Motor',
    'truthModal.databases': 'Bancos de Dados e Armazenamento',
    'truthModal.cloud': 'Nuvem e Infraestrutura',
    'truthModal.testing': 'Testes e Qualidade',
    'truthModal.ciCdObs': 'CI/CD e Observabilidade',
    'truthModal.inspectGithub': 'Inspecionar Repositório Verificado no GitHub',
    'truthModal.close': 'Fechar Ficha de Auditoria',

    // Production Gates
    'gates.badge': 'FASE 12 // PORTÕES DE LANÇAMENTO PARA PRODUÇÃO',
    'gates.title': 'Prontidão para Produção e Verificação de',
    'gates.titleHighlight': 'Qualidade',
    'gates.subtitle': 'O website da Trimindslabs cumpre rigorosamente os 11 portões técnicos, éticos e operacionais antes do lançamento.',
    'gates.allVerified': 'TODOS OS 11 PORTÕES VERIFICADOS',
    'gates.verifiedCount': '11 de 11 Portões Aprovados',
    'gates.phaseCol': 'Fase do Roadmap',
    'gates.gateCol': 'Requisito do Portão',
    'gates.evidenceCol': 'Evidência Concreta e Implementação',
    'gates.detailsCol': 'Regra de Conformidade',
    'gates.satisfiedBanner': '11/11 PORTÕES DE PRODUÇÃO FORMALMENTE SATISFEITOS',
    'gates.auditRef': 'Referência de Auditoria: TRIMINDSLABS-AUDIT-RELEASE-2026',
    'gates.passed': 'APROVADO',
    'gates.readyRelease': 'Status: PRONTO PARA LANÇAMENTO EM PRODUÇÃO',
    'gates.closeBtn': 'Fechar Revisão de Portões',

    // Vocabulary Modal
    'vocab.title': 'Especificação do Vocabulário Técnico Trimindslabs',
    'vocab.subtitle': 'Terminologia formal estabelecendo precisão semântica em toda a documentação de engenharia da Trimindslabs',
    'vocab.searchPlaceholder': 'Buscar conceitos (ex: Busca Confiável, Observabilidade, Agência Controlada)...',
    'vocab.termsIndex': 'Índice de Terminologia Canônica',
    'vocab.contractDefinition': 'Definição Formal de Contrato',
    'vocab.contrastingAntiPattern': 'Anti-Padrão em Contraste',
    'vocab.productionImplementation': 'Implementação de Referência em Produção',
    'vocab.closeBtn': 'Fechar Especificação do Vocabulário',

    // Telemetry
    'telemetry.badge': 'OBSERVABILIDADE OPERACIONAL // DADOS REAIS DE RUNTIME',
    'telemetry.title': 'Hub de Observabilidade Operacional Trimindslabs',
    'telemetry.subtitle': 'Parâmetros reais de compilação, conformidade soberana e verificação de release.',
    'telemetry.realMetadata': 'Metadados Reais da Plataforma (Zero Dados Simulados)',
    'telemetry.runtime': 'Ambiente de Execução',
    'telemetry.cluster': 'Cluster de Ingress',
    'telemetry.releaseTag': 'Tag de Release',
    'telemetry.auditVersion': 'Especificação de Auditoria',

    // GDPR Banner
    'gdpr.title': 'Conformidade Europeia Soberana',
    'gdpr.message': 'A Trimindslabs adere estritamente ao GDPR da UE e ao EU AI Act. Não operamos rastreadores comerciais de terceiros. A telemetria de clientes e diagnósticos de sessão são processados exclusivamente em centros de dados europeus certificados ISO 27001 (Frankfurt/Paris).',
    'gdpr.essential': 'Apenas Essenciais',
    'gdpr.confirm': 'Confirmar e Continuar',

    // About Section
    'about.badge': 'FASE 0 // IDENTIDADE CORPORATIVA E ESPECIFICAÇÃO DE AUDITORIA',
    'about.title': 'O que a Trimindslabs',
    'about.titleHighlight': 'Representa',
    'about.subtitle': 'A Trimindslabs foi estabelecida para contrapor a corrida superficial de protótipos especulativos de IA com engenharia de sistemas rigorosa, verificação determinística e soberania europeia de dados. Cada afirmação é validada contra código real e auditorias de arquitetura.',
    'about.tabMatrix': 'Matriz de Auditoria e Verificação GitHub',
    'about.tabPositioning': 'Posicionamento e Princípios',
    'about.missionTitle': 'Missão Corporativa (Auditada V1.0)',
    'about.missionNote': 'Refinada para prometer estritamente o que é comprovado em código de produção, evitando inflação especulativa.',
    'about.visionTitle': 'Visão Corporativa (Auditada V1.0)',
    'about.vocabBannerTitle': 'Índice de Vocabulário Técnico Trimindslabs',
    'about.vocabBannerDesc': 'Explore definições matemáticas rigorosas de Busca Confiável, Confiança Antes da Geração, Agência Controlada e Observabilidade de IA padronizando nossos contratos de produção.',
    'about.openVocab': 'Abrir Vocabulário Canônico',

    // Footer
    'footer.desc': 'A Trimindslabs é uma organização avançada de engenharia de sistemas dedicada à criação de arquiteturas inteligentes determinísticas, observáveis e blindadas. Eliminamos a lacuna entre modelos neurais probabilísticos e a confiabilidade crítica de produção.',
    'footer.allAuditsVerified': 'Todas as Afirmações Auditadas contra o GitHub',
    'footer.jurisdiction': 'Jurisdição da União Europeia • GDPR Art. 28/32',
    'footer.tenetsTitle': 'Princípios Transversais:',
    'footer.tenet1': 'Problema em Primeiro Lugar',
    'footer.tenet2': 'Confiança por Engenharia',
    'footer.tenet3': 'Evidência Acima de Afirmações',
    'footer.tenet4': 'Pronto para Produção',
    'footer.sovereignCloud': 'NUVEM SOBERANA: EU-WEST-3',
    'footer.gdprNotice': 'CONFORME GDPR ART. 28/32',
    'footer.gatesCount': '11/11 PORTÕES VERIFICADOS',
    'footer.foundationalDistinction': 'Distinção Fundamental',
    'footer.systemsArchLeadership': 'Arquitetura e Pesquisa de Sistemas',
    'footer.systemsArchLeadershipDesc': 'Engenharia Soberana e Computação Determinística',
    'footer.trimindsEntity': 'Trimindslabs',
    'footer.trimindsEntityDesc': 'Infraestrutura de Plataforma Corporativa de Engenharia Soberana',
    'footer.colSystems': 'Sistemas Centrais',
    'footer.colTruth': 'Verdade do Repositório',
    'footer.colVerification': 'Verificação e Jurídico',
    'footer.allRights': 'TODOS OS DIREITOS RESERVADOS.',
    'footer.directInquiries': 'CONSULTAS DIRETAS:',
    'footer.blueprints': 'Blueprints Arquiteturais',
    'footer.researchPapers': 'Artigos de Pesquisa e Benchmarks',
    'footer.canonicalVocab': 'Vocabulário Canônico',
    'footer.githubRepos': 'Repositórios GitHub',
    'footer.euAiAct': 'Conforme Categoria de Alto Risco do EU AI Act'
  },

  es: {
    // Nav & Header
    'nav.home': 'Visión General',
    'nav.aiSystems': 'Sistemas de IA',
    'nav.engineering': 'Arquitectura',
    'nav.caseStudies': 'Proyectos y Evidencia',
    'nav.research': 'Investigación',
    'nav.positioning': 'Sobre y Auditoría',
    'nav.contact': 'Contacto',
    'nav.auditBtn': 'Matriz de Auditoría de Realidad',
    'nav.telemetryBtn': 'Estado del Sistema',
    'nav.vocabularyBtn': 'Glosario',
    'nav.auditMatrixBtn': 'Auditoría de Realidad GitHub',
    'nav.gatesBtn': 'Gates de Producción',
    'nav.systemsNominal': 'SISTEMAS OPERATIVOS',
    'nav.brandTagline': 'Sistemas de Inteligencia Determinista',
    'nav.zeroHallucination': '0,00% ALUCINACIÓN',
    'nav.euSovereign': 'SOBERANÍA UE',
    'nav.gatesVerified': '(11/11 Verificados)',

    // Header Ticker
    'ticker.liveTelemetry': 'TELEMETRÍA DE PRODUCCIÓN EN TIEMPO REAL:',
    'ticker.systemsNominal': 'SISTEMAS OPERATIVOS',
    'ticker.p99Latency': 'LATENCIA P99',
    'ticker.hallucinationRate': 'TASA DE ALUCINACIÓN',
    'ticker.fleetThroughput': 'TASA DE PROCESAMIENTO',
    'ticker.guardrail': 'PRECISIÓN DE CITA',
    'ticker.dataResidency': 'JURISDICCIÓN DE DATOS',
    'ticker.datacenter': 'Fráncfort (UE)',

    // Hero
    'hero.badge': 'IA EMPRESARIAL PARA PRODUCCIÓN // BASES DETERMINÍSTICAS',
    'hero.titlePrefix': 'Sistemas Soberanos de IA Diseñados para',
    'hero.titleHighlight': 'Certeza Determinística',
    'hero.titleSuffix': 'y Cero Alucinación.',
    'hero.subtitle': 'Trimindslabs conecta la investigación estocástica con la fiabilidad crítica de producción. Diseñamos motores de búsqueda verificables, flujos de agentes deterministas y controlados, y plataformas geoespaciales con proveniencia de citas inmutable.',
    'hero.exploreSystems': 'Explorar Sistemas de IA',
    'hero.viewStudies': 'Ver Proyectos Auditados',
    'hero.technicalGlossary': 'Glosario Técnico',
    'hero.missionTitle': 'Nuestro Mandato Principal',
    'hero.missionDesc': 'Diseñar sistemas inteligentes que resuelvan problemas del mundo real a través de tecnología confiable, segura, transparente y medible.',
    'hero.philosophyTitle': 'Filosofía de Ingeniería',
    'hero.philosophyDesc': 'Rechazamos la IA como caja negra opaca. La confianza empresarial se construye en la arquitectura mediante rerankers neuronales, verificación de caracteres y telemetría estricta.',
    'hero.activeArchitecture': 'ARQUITECTURAS ACTIVAS',
    'hero.engineeringStack': 'STACK DE PRODUCCIÓN VERIFICABLE',
    'hero.trustedSearch': 'Búsqueda Confiable',
    'hero.geospatialAI': 'IA Geoespacial',
    'hero.boundedAgents': 'Agentes Controlados',
    'hero.securityLayer': 'Seguridad Zero-Trust',
    'hero.realworldAudit': 'EVIDENCIA SOBRE AFIRMACIONES',
    'hero.auditedVerdict': 'Todas las afirmaciones fueron auditadas contra repositorios de GitHub, baterías de pruebas y registros de decisiones arquitectónicas.',
    'hero.exploreAudit': 'Inspeccionar Matriz de Realidad',
    'hero.infrastructureStatus': 'ESTADO DE INFRAESTRUCTURA',
    'hero.slaUptime': '99,98% SLA DISPONIBILIDAD',
    'hero.securityFirst': 'Seguridad y Cumplimiento Primero',
    'hero.securitySpecs': 'CONFORME RGPD / AES-256 / DEFENSA OWASP LLM',
    'hero.metric1Title': 'Tasa de Alucinación Factual',
    'hero.metric1Desc': 'Verificado en auditorías de cumplimiento europeas',
    'hero.metric2Title': 'Superficie Terrestre Analizada/Día',
    'hero.metric2Desc': 'Procesamiento ráster multiespectral satelital',
    'hero.metric3Title': 'Ahorro de Combustible en Flotas',
    'hero.metric3Desc': '15.000+ eventos telemáticos/seg',
    'hero.metric4Title': 'Inspección de Proxy de Seguridad',
    'hero.metric4Desc': 'Defensa contra inyección de prompt OWASP',
    'hero.auditExplanation': 'Cada afirmación corporativa mapeada a código público de GitHub, commits y registros de auditoría.',

    // Home Page (App.tsx)
    'home.topologyBadge': 'BLUEPRINTS DE SISTEMAS // RUNTIME VERIFICABLE',
    'home.topologyTitle': 'Topología Arquitectónica',
    'home.topologyTitleHighlight': 'Interactiva',
    'home.topologyDesc': 'Explore las etapas formales del pipeline detrás de la Recuperación Confiable de Trimindslabs, Flujos de Agentes Deterministas y Sistemas Geoespaciales.',
    'home.fullMatrixBtn': 'Matriz Completa de Sistemas',
    'home.auditedBadge': 'VERDAD DEL REPOSITORIO // SISTEMAS AUDITADOS',
    'home.auditedTitle': 'Sistemas Auditados en',
    'home.auditedTitleHighlight': 'Producción Activa',
    'home.viewAllProjects': 'Ver Todos los Proyectos y Stacks Técnicas',
    'home.inspectTruth': 'Inspeccionar Ficha de la Verdad',
    'home.phase12Check': 'Verificación de Puertas Fase 12 (11/11 Aprobados)',

    // Transversal Callout
    'callout.badge': 'SOBERANÍA EUROPEA E INGENIERÍA BASADA EN EVIDENCIAS',
    'callout.title': 'Más Allá de Chatbots Experimentales:',
    'callout.titleHighlight': 'Construyendo Cimientos Empresariales Predecibles.',
    'callout.description': 'Rechazamos la idea de que la IA generativa deba permanecer como una caja negra opaca. Al delimitar modelos con validación determinística, rerankers neuronales y telemetría continua, entregamos sistemas que satisfacen los estándares aeroespaciales, logísticos y de cumplimiento normativo europeo.',
    'callout.requestAudit': 'Solicitar Auditoria Técnica',
    'callout.readPositioning': 'Leer Especificación Corporativa V1.0',
    'callout.viewVocabulary': 'Ver Vocabulario Canónico',
    'callout.viewEvidence': 'Explorar Matriz de Auditoría de Realidad',

    // Architecture Viewer
    'arch.badge': 'Esquemas Arquitectónicos Interactivos',
    'arch.tabRetrieval': 'Recuperación Confiable',
    'arch.tabAgentic': 'Flujo de Agente Controlado',
    'arch.tabGeospatial': 'Malla Geoespacial',
    'arch.tabSecurity': 'Gateway de Seguridad',
    'arch.guarantee': 'Garantía Operacional:',
    'arch.latencyProfile': 'Perfil de Latencia Extremo a Extremo:',

    // AI Systems
    'ai.badge': 'FASE 1 Y 2 // SISTEMAS DE IA Y ESPECIFICACIÓN TÉCNICA',
    'ai.title': 'Arquitecturas Diseñadas para',
    'ai.titleHighlight': 'Confiabilidad en Producción',
    'ai.subtitle': 'Trimindslabs construye sistemas inteligentes resilientes y matemáticamente verificados, diseñados para operar sin sobrecarga cognitiva humana, desbordamiento del presupuesto de tokens o suposiciones opacas de caja negra.',
    'ai.viewSpec': 'Ver Especificación',
    'ai.coreSpec': 'ESPECIFICACIÓN DEL SISTEMA PRINCIPAL',
    'ai.latencySlo': 'SLO de Latencia',
    'ai.uptime': 'Confiabilidad de Uptime',
    'ai.residency': 'Residencia de Datos',
    'ai.guardrail': 'Límite de Guardrails',
    'ai.pipeline': 'Secuencia Operacional de Pipeline',
    'ai.verified': 'Verificado',
    'ai.tech': 'Tecnología:',
    'ai.hardening': 'Capacidades de Fortalecimiento Corporativo',

    // Engineering
    'eng.badge': 'FASE 4 Y 10 // INGENIERÍA DE PLATAFORMA E INFRAESTRUCTURA',
    'eng.title': 'Arquitectura de Ingeniería',
    'eng.titleHighlight': 'Transversal',
    'eng.subtitle': 'En Trimindslabs, la seguridad, la observabilidad, las pruebas y la preparación para producción no son fases terminales posteriores al lanzamiento. Son requisitos continuos y transversales integrados en cada capa arquitectónica.',
    'eng.axisTitle': 'El Eje Transversal de Trimindslabs',
    'eng.axisSubtitle': 'Todas las fases y sistemas se adhieren a este sustrato estructural unificado',
    'eng.noSilos': 'CERO SILOS AISLADOS',
    'eng.foundationalAxis': 'Eje Fundamental',
    'eng.foundationalSub': 'Arquitectura • Ingeniería • Contenido',
    'eng.foundationalDesc': 'Cada sistema se especifica con precisión a nivel de carácter antes de que comience la ejecución del código.',
    'eng.verificationAxis': 'Eje de Verificación',
    'eng.verificationSub': 'Seguridad • Observabilidad • Pruebas',
    'eng.verificationDesc': 'Telemetría no negociable, defensas contra ataques OWASP LLM y suites de evaluación automatizadas.',
    'eng.deliveryAxis': 'Eje de Entrega',
    'eng.deliverySub': 'Cloud Native • SLA de Producción • Soberanía',
    'eng.deliveryDesc': 'Cargas de trabajo serverless con escala a cero y garantías estrictas de residencia europea de datos.',
    'eng.cicdTitle': 'Especificación de Pipeline CI/CD Automatizado de Producción',
    'eng.substrateTitle': 'Sustrato de Tecnología e Infraestructura',
    'eng.directivesTitle': 'Directrices Fundamentales de Ingeniería de Trimindslabs',

    // Research
    'res.badge': 'FASE 6 // INVESTIGACIÓN Y BASE DE CONOCIMIENTO TÉCNICO',
    'res.title': 'Insights de Ingeniería &',
    'res.titleHighlight': 'Investigación de Sistemas',
    'res.subtitle': 'Trimindslabs actúa como una autoridad abierta de investigación e ingeniería, publicando hallazgos empíricos sobre limitaciones de recuperación vectorial, primitivas de búsqueda deterministas y estándares de telemetría de IA.',
    'res.coreFindings': 'Principales Hallazgos:',
    'res.readWhitepaper': 'Leer Whitepaper Completo',
    'res.pubHeader': 'PUBLICACIÓN TÉCNICA TRIMINDSLABS //',
    'res.copyCitation': 'Copiar Cita Académica',
    'res.copied': '¡Cita Copiada!',
    'res.close': 'Cerrar Lector',

    // Contact
    'contact.badge': 'CONSULTORÍA TÉCNICA Y AUDITORÍA DE ARQUITECTURA',
    'contact.title': 'Consultoría Directa de Arquitectura de',
    'contact.titleHighlight': 'Sistemas',
    'contact.subtitle': 'Conecte directamente con la arquitectura sénior de Trimindslabs para despliegues de IA en entornos críticos de producción, auditorías de recuperación o infraestructura soberana.',
    'contact.protocolTitle': 'Protocolo de Contacto Directo',
    'contact.protocolDirectAccess': 'Comunicación Directa con el Arquitecto',
    'contact.protocolDirectAccessDesc': 'Sin intermediarios comerciales. Todas las consultas técnicas son evaluadas y respondidas directamente por el Arquitecto Principal de Sistemas.',
    'contact.protocolNda': 'NDA Mutuo y Soberanía de PI',
    'contact.protocolNdaDesc': 'Jurisdicción de la Unión Europea. Estricta confidencialidad y firma de NDA mutuo antes del intercambio de código o datos.',
    'contact.protocolSla': 'Revisión Técnica Garantizada',
    'contact.protocolSlaDesc': 'Respuestas entregadas en un plazo máximo de 24 horas hábiles con una evaluación preliminar de viabilidad técnica.',
    'contact.directChannel': 'Canal Oficial de Correo Directo',
    'contact.primaryRole': 'Arquitecto Principal de Sistemas e Investigador Líder',
    'contact.encryptedNotice': 'Comunicaciones cifradas de extremo a extremo o PGP disponibles bajo solicitud formal.',
    'contact.formSuccessTitle': 'Especificación Técnica Formulada con Éxito',
    'contact.formSuccessDesc': 'Su consulta técnica ha sido estructurada. Se ha inicializado un mensaje dirigido a contato@trimindslabs.com en su cliente.',
    'contact.formSubmitAnother': 'Enviar Otra Consulta Técnica',
    'contact.fullName': 'Nombre Completo',
    'contact.email': 'Correo Corporativo Oficial',
    'contact.company': 'Organización / Entidad',
    'contact.scope': 'Alcance Arquitectónico',
    'contact.scopeOption1': 'Auditoría y Verificación de Arquitectura',
    'contact.scopeOption2': 'Despliegue de Trusted Search Core',
    'contact.scopeOption3': 'Flujos de Agentes Deterministas y Controlados',
    'contact.scopeOption4': 'IA Geoespacial y Analítica Satelital',
    'contact.scopeOption5': 'Gateway de Seguridad Zero-Trust y Observabilidad',
    'contact.scopeOption6': 'Asuntos Generales',
    'contact.scale': 'Escala del Proyecto y Urgencia',
    'contact.objective': 'Desafío de Ingeniería y Contexto Operativo',
    'contact.objectivePlaceholder': 'Describa su desafío técnico, volumen de datos, objetivos de latencia y requisitos normativos...',
    'contact.objectiveGeneral': 'Detalles del Mensaje y Solicitud',
    'contact.objectiveGeneralPlaceholder': 'Describa su consulta, interés en colaboración o solicitud general...',
    'contact.gdprConsent': 'Reconozco que los datos enviados serán tratados bajo el RGPD de la Unión Europea y utilizados únicamente para la evaluación de la arquitectura.',
    'contact.submitBtn': 'Generar Especificación Técnica y Enviar',
    'contact.directEmailBtn': 'Envío Directo mediante Cliente de Correo',
    'contact.openEmailClient': 'Abrir en Cliente de Correo Predeterminado',
    'contact.copyEmail': 'Copiar Dirección Oficial de Correo',
    'contact.emailCopied': '¡Copiado al Portapapeles!',

    // Reality Audit
    'audit.badge': 'VERDAD DE LOS REPOSITORIOS // AUDITORÍA DE EVIDENCIA GITHUB',
    'audit.title': 'Auditoría de Realidad',
    'audit.titleHighlight': 'Evidencia Sobre Afirmaciones',
    'audit.subtitle': 'Cada afirmación corporativa de Trimindslabs se contrasta rigurosamente con nuestros repositorios de GitHub, registros de decisiones arquitectónicas (ADRs) y baterías de pruebas de producción.',
    'audit.question': 'La Pregunta: "¿Podemos probar esto?"',
    'audit.sustained': 'Sustentado (Evidencia Concreta)',
    'audit.consolidating': 'En Consolidación (En Progreso)',
    'audit.aspirational': 'Aspiracional (Horizonte Futuro)',
    'audit.filterAll': 'Las 15 Afirmaciones Auditadas',
    'audit.conceptCol': 'Afirmación Corporativa',
    'audit.evidenceCol': 'Código GitHub y Evidencia de Commits',
    'audit.statusCol': 'Estado de Auditoría',
    'audit.analysisCol': 'Análisis Técnico de Realidad',
    'audit.verdictCol': 'Veredicto Arquitectónico',
    'audit.summaryTitle': 'Los 5 Pilares Comprobados',
    'audit.summaryDesc': '1. Primero el Problema | 2. Confianza a Través de la Ingeniería | 3. Evidencia Sobre Afirmaciones | 4. Evolución Continua | 5. Orientado a Producción',

    // Projects & Repository Truth
    'projects.badge': 'VERDAD DEL REPOSITORIO // ESPECIFICACIONES DE SISTEMAS',
    'projects.title': 'Ingeniería Verificable',
    'projects.titleHighlight': 'Proyectos y Repositorios',
    'projects.subtitle': 'Todos los proyectos están categorizados con rigor por su estado real. Nunca presentamos elementos de roadmap como sistemas ya implementados.',
    'projects.categoryAll': 'Todos los Proyectos',
    'projects.categoryBuilt': 'Lo Que Hemos Construido',
    'projects.categoryExploring': 'Lo Que Estamos Explorando',
    'projects.categoryPlanned': 'Lo Que Está Planeado',
    'projects.truthBadge': 'VERDAD DEL REPOSITORIO VERIFICADA',
    'projects.viewTruthSheet': 'Ver Ficha de Verdad del Repositorio',
    'projects.honestScopeLabel': 'Especificación de Alcance',
    'projects.whatItProves': 'Lo Que Esto Demuestra Sobre Trimindslabs',

    // Statuses
    'status.implemented': 'Implementado',
    'status.partial': 'Parcial / Experimental',
    'status.planned': 'Planeado',
    'status.notPresent': 'No Presente',

    // Truth Modal
    'truthModal.title': 'Ficha de Verdad del Repositorio y Auditoría Arquitectónica',
    'truthModal.subtitle': 'Fuente de la Verdad: Repositorio → Evidencia → Sitio Web',
    'truthModal.realStack': 'Stack Real de Tecnologías (Sin Embellecimiento)',
    'truthModal.archVerification': 'Verificación de Arquitectura (Documentada vs Implementada vs Presentada)',
    'truthModal.documented': 'Arquitectura Documentada',
    'truthModal.implemented': 'Implementado en Código',
    'truthModal.presented': 'Presentado en el Sitio',
    'truthModal.coherence': 'Índice de Coherencia',
    'truthModal.repository': 'Metadatos y Verificación del Repositorio',
    'truthModal.testSuite': 'Batería de Pruebas y Cobertura',
    'truthModal.ciCd': 'Pipeline de CI/CD',
    'truthModal.adrs': 'Registros de Decisión Arquitectónica (ADRs)',
    'truthModal.results': 'Resultados Empíricos y Benchmarks',
    'truthModal.decisions': 'Decisiones Arquitectónicas Clave',
    'truthModal.challenges': 'Desafíos de Ingeniería en Producción',
    'truthModal.languages': 'Lenguajes',
    'truthModal.frameworks': 'Frameworks y Motor',
    'truthModal.databases': 'Bases de Datos y Almacenamiento',
    'truthModal.cloud': 'Nube e Infraestructura',
    'truthModal.testing': 'Pruebas y Calidad',
    'truthModal.ciCdObs': 'CI/CD y Observabilidad',
    'truthModal.inspectGithub': 'Inspeccionar Repositorio Verificado en GitHub',
    'truthModal.close': 'Cerrar Ficha de Auditoría',

    // Production Gates
    'gates.badge': 'FASE 12 // GATES DE LIBERACIÓN PARA PRODUCCIÓN',
    'gates.title': 'Preparación para Producción y Verificación de',
    'gates.titleHighlight': 'Calidad',
    'gates.subtitle': 'El sitio web de Trimindslabs cumple rigurosamente con los 11 gates técnicos, éticos y operativos antes de su lanzamiento.',
    'gates.allVerified': 'LOS 11 GATES VERIFICADOS',
    'gates.verifiedCount': '11 de 11 Gates Aprobados',
    'gates.phaseCol': 'Fase del Roadmap',
    'gates.gateCol': 'Requisito del Gate',
    'gates.evidenceCol': 'Evidencia Concreta e Implementación',
    'gates.detailsCol': 'Regla de Cumplimiento',
    'gates.satisfiedBanner': '11/11 PUERTAS DE PRODUCCIÓN FORMALMENTE SATISFECHAS',
    'gates.auditRef': 'Referencia de Auditoría: TRIMINDSLABS-AUDIT-RELEASE-2026',
    'gates.passed': 'APROBADO',
    'gates.readyRelease': 'Estado: LISTO PARA LANZAMIENTO EN PRODUCCIÓN',
    'gates.closeBtn': 'Cerrar Revisión de Puertas',

    // Vocabulary Modal
    'vocab.title': 'Especificación del Vocabulario Técnico Trimindslabs',
    'vocab.subtitle': 'Terminología formal que establece precisión semántica en toda la documentación de ingeniería de Trimindslabs',
    'vocab.searchPlaceholder': 'Buscar conceptos (ej: Búsqueda Confiable, Observabilidad, Agencia Controlada)...',
    'vocab.termsIndex': 'Índice de Terminología Canónica',
    'vocab.contractDefinition': 'Definición Formal de Contrato',
    'vocab.contrastingAntiPattern': 'Anti-Patrón en Contraste',
    'vocab.productionImplementation': 'Implementación de Referencia en Producción',
    'vocab.closeBtn': 'Cerrar Especificación de Vocabulario',

    // Telemetry
    'telemetry.badge': 'OBSERVABILIDAD OPERATIVA // DATOS REALES DE RUNTIME',
    'telemetry.title': 'Hub de Observabilidad Operativa Trimindslabs',
    'telemetry.subtitle': 'Parámetros reales de compilación, cumplimiento soberano y verificación de release.',
    'telemetry.realMetadata': 'Metadatos Reales de la Plataforma (Cero Datos Simulados)',
    'telemetry.runtime': 'Entorno de Ejecución',
    'telemetry.cluster': 'Clúster de Ingress',
    'telemetry.releaseTag': 'Etiqueta de Release',
    'telemetry.auditVersion': 'Especificación de Auditoría',

    // GDPR Banner
    'gdpr.title': 'Cumplimiento Soberano Europeo',
    'gdpr.message': 'Trimindslabs se adhiere estrictamente al RGPD de la UE y a la Ley de IA de la UE. No utilizamos rastreadores comerciales de terceros. La telemetría de clientes y los diagnósticos de sesión se procesan exclusivamente en centros de datos europeos certificados ISO 27001 (Fráncfort/París).',
    'gdpr.essential': 'Solo Esenciales',
    'gdpr.confirm': 'Confirmar y Continuar',

    // About Section
    'about.badge': 'FASE 0 // IDENTIDAD CORPORATIVA Y ESPECIFICACIÓN DE AUDITORÍA',
    'about.title': 'Lo que Trimindslabs',
    'about.titleHighlight': 'Representa',
    'about.subtitle': 'Trimindslabs se estableció para contrarrestar la carrera superficial de prototipos especulativos de IA con ingeniería de sistemas rigurosa, verificación determinista y soberanía europea de datos. Cada afirmación se valida contra código real y auditorías de arquitectura.',
    'about.tabMatrix': 'Matriz de Auditoría y Verificación GitHub',
    'about.tabPositioning': 'Posicionamento y Principios',
    'about.missionTitle': 'Misión Corporativa (Auditada V1.0)',
    'about.missionNote': 'Refinada para prometer estrictamente lo probado en código de producción, evitando inflación especulativa.',
    'about.visionTitle': 'Visión Corporativa (Auditada V1.0)',
    'about.vocabBannerTitle': 'Índice de Vocabulario Técnico Trimindslabs',
    'about.vocabBannerDesc': 'Explore definiciones matemáticas rigurosas de Búsqueda Confiable, Confianza Antes de la Generación, Agencia Controlada y Observabilidad de IA estandarizando nuestros contratos de producción.',
    'about.openVocab': 'Abrir Vocabulario Canónico',

    // Footer
    'footer.desc': 'Trimindslabs es una organización avanzada de ingeniería de sistemas dedicada a la creación de arquitecturas determinísticas, observables y blindadas. Eliminamos la brecha entre modelos neuronales probabilísticos y la fiabilidad crítica de producción.',
    'footer.allAuditsVerified': 'Todas las Afirmaciones Auditadas contra GitHub',
    'footer.jurisdiction': 'Jurisdicción de la Unión Europea • RGPD Art. 28/32',
    'footer.tenetsTitle': 'Principios Transversales:',
    'footer.tenet1': 'El Problema Primero',
    'footer.tenet2': 'Confianza mediante Ingeniería',
    'footer.tenet3': 'Evidencia sobre Afirmaciones',
    'footer.tenet4': 'Listo para Producción',
    'footer.sovereignCloud': 'NUBE SOBERANA: EU-WEST-3',
    'footer.gdprNotice': 'CONFORME RGPD ART. 28/32',
    'footer.gatesCount': '11/11 PUERTAS VERIFICADAS',
    'footer.foundationalDistinction': 'Distinción Fundamental',
    'footer.systemsArchLeadership': 'Arquitectura e Investigación de Sistemas',
    'footer.systemsArchLeadershipDesc': 'Ingeniería Soberana y Computación Determinista',
    'footer.trimindsEntity': 'Trimindslabs',
    'footer.trimindsEntityDesc': 'Infraestructura de Plataforma Corporativa de Ingeniería Soberana',
    'footer.colSystems': 'Sistemas Principales',
    'footer.colTruth': 'Verdad del Repositorio',
    'footer.colVerification': 'Verificación y Legal',
    'footer.allRights': 'TODOS LOS DERECHOS RESERVADOS.',
    'footer.directInquiries': 'CONSULTAS DIRECTAS:',
    'footer.blueprints': 'Blueprints Arquitectónicos',
    'footer.researchPapers': 'Artículos de Investigación y Benchmarks',
    'footer.canonicalVocab': 'Vocabulario Canónico',
    'footer.githubRepos': 'Repositorios GitHub',
    'footer.euAiAct': 'Conforme a Categoría de Alto Riesgo de la Ley de IA de la UE'
  }
};
