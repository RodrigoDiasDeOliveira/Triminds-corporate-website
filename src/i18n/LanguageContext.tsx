import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, TranslationKey } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const evidenceOverrides: Partial<Record<Language, Partial<Record<TranslationKey, string>>>> = {
  en: {
    'nav.systemsNominal': 'EVIDENCE-BASED SYSTEM STATUS',
    'nav.zeroHallucination': 'NO UNSUPPORTED CLAIMS',
    'nav.gatesVerified': 'EVIDENCE STATUS',
    'hero.badge': 'ENGINEERING INTELLIGENT SYSTEMS // EVIDENCE-FIRST',
    'hero.titlePrefix': 'Intelligent Systems Engineered for',
    'hero.titleHighlight': 'Verifiable Operation',
    'hero.titleSuffix': 'and Explicit Evidence.',
    'hero.subtitle': 'Trimindslabs engineers intelligent systems around deterministic processing, controlled AI workflows, geospatial evidence, security and observability. Production status is stated only where deployment evidence exists.',
    'hero.slaUptime': 'DEPLOYMENT EVIDENCE',
    'hero.securitySpecs': 'GDPR / SECURITY / OBSERVABILITY — CLAIMS QUALIFIED BY EVIDENCE',
    'hero.metric1Title': 'Evidence Policy',
    'hero.metric1Desc': 'Implementation status is separated from deployment status',
    'hero.metric2Title': 'Sentinel-2 L2A',
    'hero.metric2Desc': 'Real satellite inputs in Geo AI V4',
    'hero.metric3Title': 'Google Cloud Run',
    'hero.metric3Desc': 'Geo AI V4 deployed in europe-west1',
    'hero.metric4Title': 'Explicit Failure States',
    'hero.metric4Desc': 'Unsupported claims are not promoted to production evidence',
    'home.auditedTitleHighlight': 'Production-Evidenced',
    'home.phase12Check': 'Production Gates — Evidence Status',
    'footer.sovereignCloud': 'CLOUD / DATA JURISDICTION: QUALIFIED PER SYSTEM',
    'footer.gatesCount': 'PRODUCTION GATES: EVIDENCE STATUS',
    'footer.euAiAct': 'EU AI ACT: CLAIMS REQUIRE SYSTEM-SPECIFIC EVIDENCE'
  },
  pt: {
    'nav.systemsNominal': 'STATUS DE SISTEMAS BASEADO EM EVIDÊNCIAS',
    'nav.zeroHallucination': 'SEM AFIRMAÇÕES SEM SUPORTE',
    'nav.gatesVerified': 'STATUS DE EVIDÊNCIA',
    'hero.badge': 'ENGENHARIA DE SISTEMAS INTELIGENTES // EVIDÊNCIA PRIMEIRO',
    'hero.titlePrefix': 'Sistemas Inteligentes Projetados para',
    'hero.titleHighlight': 'Operação Verificável',
    'hero.titleSuffix': 'e Evidência Explícita.',
    'hero.subtitle': 'A Trimindslabs projeta sistemas inteligentes com processamento determinístico, fluxos de IA controlados, evidência geoespacial, segurança e observabilidade. O status de produção só é declarado quando existe evidência de implantação.',
    'hero.slaUptime': 'EVIDÊNCIA DE IMPLANTAÇÃO',
    'hero.securitySpecs': 'GDPR / SEGURANÇA / OBSERVABILIDADE — AFIRMAÇÕES QUALIFICADAS POR EVIDÊNCIA',
    'hero.metric1Title': 'Política de Evidência',
    'hero.metric1Desc': 'Status de implementação separado de status de implantação',
    'hero.metric2Title': 'Sentinel-2 L2A',
    'hero.metric2Desc': 'Dados satelitais reais no Geo AI V4',
    'hero.metric3Title': 'Google Cloud Run',
    'hero.metric3Desc': 'Geo AI V4 implantado em europe-west1',
    'hero.metric4Title': 'Estados de Falha Explícitos',
    'hero.metric4Desc': 'Afirmações sem suporte não viram evidência de produção',
    'home.auditedTitleHighlight': 'Com Evidência de Produção',
    'home.phase12Check': 'Portões de Produção — Status de Evidência',
    'footer.sovereignCloud': 'NUVEM / JURISDIÇÃO DE DADOS: QUALIFICADA POR SISTEMA',
    'footer.gatesCount': 'PORTÕES DE PRODUÇÃO: STATUS DE EVIDÊNCIA',
    'footer.euAiAct': 'EU AI ACT: AFIRMAÇÕES EXIGEM EVIDÊNCIA ESPECÍFICA DO SISTEMA'
  },
  es: {
    'nav.systemsNominal': 'ESTADO DEL SISTEMA BASADO EN EVIDENCIA',
    'nav.zeroHallucination': 'SIN AFIRMACIONES SIN RESPALDO',
    'nav.gatesVerified': 'ESTADO DE EVIDENCIA',
    'hero.badge': 'INGENIERÍA DE SISTEMAS INTELIGENTES // EVIDENCIA PRIMERO',
    'hero.titlePrefix': 'Sistemas Inteligentes Diseñados para',
    'hero.titleHighlight': 'Operación Verificable',
    'hero.titleSuffix': 'y Evidencia Explícita.',
    'hero.subtitle': 'Trimindslabs diseña sistemas inteligentes con procesamiento determinista, flujos de IA controlados, evidencia geoespacial, seguridad y observabilidad. El estado de producción solo se declara cuando existe evidencia de despliegue.',
    'hero.slaUptime': 'EVIDENCIA DE DESPLIEGUE',
    'hero.securitySpecs': 'RGPD / SEGURIDAD / OBSERVABILIDAD — AFIRMACIONES CALIFICADAS POR EVIDENCIA',
    'hero.metric1Title': 'Política de Evidencia',
    'hero.metric1Desc': 'El estado de implementación se separa del estado de despliegue',
    'hero.metric2Title': 'Sentinel-2 L2A',
    'hero.metric2Desc': 'Datos satelitales reales en Geo AI V4',
    'hero.metric3Title': 'Google Cloud Run',
    'hero.metric3Desc': 'Geo AI V4 desplegado en europe-west1',
    'hero.metric4Title': 'Estados de Fallo Explícitos',
    'hero.metric4Desc': 'Las afirmaciones sin respaldo no se presentan como evidencia de producción',
    'home.auditedTitleHighlight': 'Con Evidencia de Producción',
    'home.phase12Check': 'Gates de Producción — Estado de Evidencia',
    'footer.sovereignCloud': 'NUBE / JURISDICCIÓN DE DATOS: CALIFICADA POR SISTEMA',
    'footer.gatesCount': 'GATES DE PRODUCCIÓN: ESTADO DE EVIDENCIA',
    'footer.euAiAct': 'LEY DE IA DE LA UE: LAS AFIRMACIONES REQUIEREN EVIDENCIA ESPECÍFICA DEL SISTEMA'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('triminds_lang') as Language;
    if (saved && (saved === 'en' || saved === 'pt' || saved === 'es')) return saved;
    const browserLang = navigator.language?.toLowerCase() || '';
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('es')) return 'es';
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('triminds_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey): string => {
    const override = evidenceOverrides[language]?.[key];
    if (override) return override;
    const langDict = translations[language];
    if (langDict && langDict[key]) return langDict[key];
    return translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
