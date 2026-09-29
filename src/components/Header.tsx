import React, { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  FolderGit2, 
  BookOpen, 
  Building2, 
  Mail, 
  Activity, 
  Menu, 
  X, 
  ShieldCheck,
  Code2,
  Globe,
  Award
} from 'lucide-react';
import { NavigationTab, Language } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface HeaderProps {
  currentTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
  onOpenTelemetry: () => void;
  onOpenVocabulary: () => void;
  onOpenGates: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenTelemetry,
  onOpenVocabulary,
  onOpenGates
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems: { id: NavigationTab; labelKey: any; icon: React.ReactNode }[] = [
    { id: 'home', labelKey: 'nav.home', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'ai-systems', labelKey: 'nav.aiSystems', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'engineering', labelKey: 'nav.engineering', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'projects', labelKey: 'nav.caseStudies', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'research', labelKey: 'nav.research', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'about', labelKey: 'nav.positioning', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'contact', labelKey: 'nav.contact', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#D1D1CD] bg-[#F4F4F1]/95 backdrop-blur-md">
      {/* Top Telemetry Notification Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-[#EAEAE6] border-b border-[#D1D1CD] text-[11px] font-mono text-[#70706B]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#1A1A1A] font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {t('ticker.systemsNominal')}
          </span>
          <span className="text-[#D1D1CD]">|</span>
          <span>Evidence-first engineering</span>
          <span className="text-[#D1D1CD]">|</span>
          <span>Production status is system-specific</span>
          <span className="text-[#D1D1CD]">|</span>
          <span>Cloud / data jurisdiction qualified per system</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher in top bar */}
          <div className="flex items-center gap-1 bg-white border border-[#D1D1CD] px-1.5 py-0.5 rounded text-[10px]" role="group" aria-label="Language selector">
            <Globe className="w-3 h-3 text-[#70706B] mr-0.5" />
            {languages.map((lang, idx) => (
              <React.Fragment key={lang.code}>
                {idx > 0 && <span className="text-[#D1D1CD]">|</span>}
                <button
                  onClick={() => setLanguage(lang.code)}
                  className={`px-1 py-0.2 rounded transition-colors cursor-pointer font-mono font-bold ${
                    language === lang.code
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-[#70706B] hover:text-[#1A1A1A]'
                  }`}
                  aria-pressed={language === lang.code}
                  title={`Switch language to ${lang.label}`}
                >
                  {lang.label}
                </button>
              </React.Fragment>
            ))}
          </div>

          <span className="text-[#D1D1CD]">•</span>

          {/* Production Gates Quick Button */}
          <button
            onClick={onOpenGates}
            className="flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-bold"
            title="Inspect Phase 12 Production Release Gates"
          >
            <Award className="w-3 h-3 text-emerald-600" />
            <span>{t('nav.gatesBtn')}</span>
          </button>

          <span className="text-[#D1D1CD]">•</span>

          <button
            onClick={onOpenTelemetry}
            className="flex items-center gap-1.5 text-[#1A1A1A] hover:text-black transition-colors cursor-pointer"
          >
            <Activity className="w-3 h-3 text-emerald-600" />
            <span>{t('nav.telemetryBtn')}</span>
          </button>

          <span className="text-[#D1D1CD]">•</span>

          <button
            onClick={onOpenVocabulary}
            className="text-[#70706B] hover:text-[#1A1A1A] transition-colors cursor-pointer"
          >
            {t('nav.vocabularyBtn')}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-white font-mono text-sm font-bold shadow-xs">
              Δ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-[#1A1A1A] font-sans">
                  TRIMINDSLABS
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#EAEAE6] text-[#70706B] border border-[#D1D1CD]">
                  ENTERPRISE
                </span>
              </div>
              <p className="text-[10px] text-[#70706B] font-mono hidden sm:block">
                {t('nav.brandTagline')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white font-semibold shadow-xs'
                      : 'text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#EAEAE6]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.icon}
                  <span>{t(item.labelKey)}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onNavigate('about')}
              className="px-3 py-1.5 rounded-md border border-[#D1D1CD] bg-white text-xs font-mono text-[#1A1A1A] hover:bg-[#F4F4F1] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('nav.auditMatrixBtn')}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Language Switcher on mobile */}
            <div className="flex items-center bg-white border border-[#D1D1CD] px-1.5 py-0.5 rounded text-[11px] font-mono">
              {languages.map((lang, idx) => (
                <React.Fragment key={lang.code}>
                  {idx > 0 && <span className="text-[#D1D1CD] mx-0.5">|</span>}
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={`px-1 py-0.5 rounded font-bold ${
                      language === lang.code
                        ? 'bg-[#1A1A1A] text-white'
                        : 'text-[#70706B]'
                    }`}
                  >
                    {lang.label}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1A1A1A] hover:bg-[#EAEAE6] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D1D1CD] bg-[#F4F4F1] p-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white font-bold'
                      : 'text-[#4A4A45] hover:bg-[#EAEAE6]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.icon}
                  <span>{t(item.labelKey)}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#D1D1CD] space-y-2">
            <button
              onClick={() => {
                onOpenGates();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg border border-emerald-300 bg-emerald-50 text-xs font-mono font-bold text-emerald-800"
            >
              <Award className="w-4 h-4 text-emerald-600" />
              <span>{t('nav.gatesBtn')} {t('nav.gatesVerified')}</span>
            </button>

            <button
              onClick={() => {
                onOpenTelemetry();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg border border-[#D1D1CD] bg-white text-xs font-mono text-[#1A1A1A]"
            >
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>{t('nav.telemetryBtn')}</span>
            </button>

            <button
              onClick={() => {
                onOpenVocabulary();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg border border-[#D1D1CD] bg-white text-xs font-mono text-[#70706B]"
            >
              <Code2 className="w-4 h-4" />
              <span>{t('nav.vocabularyBtn')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
