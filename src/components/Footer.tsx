import React from 'react';
import { Terminal, ArrowUpRight, Mail } from 'lucide-react';
import { NavigationTab } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { CASE_STUDIES } from '../data/caseStudiesData';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenVocabulary: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenVocabulary }) => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#D1D1CD] bg-[#EAEAE6] text-[#4A4A45] font-sans">
      {/* Transversal Architecture Ribbon */}
      <div className="border-b border-[#D1D1CD] bg-[#F4F4F1] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#70706B] font-bold uppercase tracking-wider">{t('footer.tenetsTitle')}</span>
            <span className="text-[#1A1A1A] font-semibold">{t('footer.tenet1')}</span>
            <span className="text-[#A0A09B]">→</span>
            <span className="text-[#1A1A1A] font-semibold">{t('footer.tenet2')}</span>
            <span className="text-[#A0A09B]">→</span>
            <span className="text-[#1A1A1A] font-semibold">{t('footer.tenet3')}</span>
            <span className="text-[#A0A09B]">→</span>
            <span className="text-emerald-700 font-bold">{t('footer.tenet4')}</span>
          </div>
          <div className="flex items-center gap-4 text-[#70706B] text-[11px]">
            <span>{t('footer.sovereignCloud')}</span>
            <span>•</span>
            <span>{t('footer.gdprNotice')}</span>
            <span>•</span>
            <span>{t('footer.gatesCount')}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-lg font-bold">
                T
              </div>
              <span className="font-mono text-base font-bold tracking-wider text-[#1A1A1A]">TRIMINDSLABS</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1A1A1A] text-white">V1.0-AUDITED</span>
            </div>
            
            <p className="text-xs text-[#4A4A45] leading-relaxed max-w-md">
              {t('footer.desc')}
            </p>

            <div className="p-3.5 rounded-lg bg-white border border-[#D1D1CD] text-[11px] font-mono text-[#4A4A45] space-y-1 shadow-xs">
              <div className="text-[#1A1A1A] font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>{t('footer.foundationalDistinction')}</span>
              </div>
              <p className="text-[#1A1A1A]">
                <strong>{t('footer.systemsArchLeadership')}</strong> — {t('footer.systemsArchLeadershipDesc')}
              </p>
              <p className="text-[#70706B]">
                <strong>{t('footer.trimindsEntity')}</strong> — {t('footer.trimindsEntityDesc')}
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-emerald-800">
                <Mail className="w-3 h-3" />
                <a href="mailto:contato@trimindslabs.com" className="hover:underline font-bold">
                  contato@trimindslabs.com
                </a>
              </div>
            </div>
          </div>

          {/* AI Systems Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#1A1A1A]">
              {t('footer.colSystems')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('ai-systems')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Trusted Compliance Agent
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ai-systems')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Controlled Agentic Workflow
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ai-systems')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Trimindslabs Geo AI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ai-systems')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Trimindslabs Security Platform
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Trimindslabs Integration Platform
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  Parking Intelligence / Ontinyent
                </button>
              </li>
            </ul>
          </div>

          {/* Repository Truth & Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#1A1A1A]">
              {t('footer.colTruth')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer font-medium"
                >
                  {t('projects.categoryBuilt')} ({CASE_STUDIES.filter(s => s.category === 'what-we-built').length})
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  {t('projects.categoryExploring')} ({CASE_STUDIES.filter(s => s.category === 'what-we-are-exploring').length})
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  {t('projects.categoryPlanned')} ({CASE_STUDIES.filter(s => s.category === 'what-is-planned').length})
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer text-emerald-800 font-semibold"
                >
                  {t('audit.title')} (15 dimensions)
                </button>
              </li>

            </ul>
          </div>

          {/* Engineering, Standards & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[#1A1A1A]">
              {t('footer.colVerification')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('engineering')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  {t('footer.blueprints')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('research')} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  {t('footer.researchPapers')}
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenVocabulary} 
                  className="hover:text-[#1A1A1A] transition-colors text-left cursor-pointer"
                >
                  {t('footer.canonicalVocab')}
                </button>
              </li>
              <li>
                <a 
                  href="https://github.com/RodrigoDiasDeOliveira" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-1"
                >
                  <span>{t('footer.githubRepos')}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-[11px] font-mono text-[#70706B] block pt-1">
                  {t('footer.euAiAct')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright, Direct Contact & Verification */}
        <div className="mt-12 pt-8 border-t border-[#D1D1CD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#70706B]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} TRIMINDSLABS. {t('footer.allRights')}</span>
            <span>•</span>
            <span>{t('footer.directInquiries')}</span>
            <a href="mailto:contato@trimindslabs.com" className="text-[#1A1A1A] font-bold hover:underline">
              contato@trimindslabs.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>{t('footer.jurisdiction')}</span>
            <span>•</span>
            <span>Evidence status is system-specific</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
