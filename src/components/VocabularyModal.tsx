import React, { useState, useEffect } from 'react';
import { X, Code2, AlertTriangle, CheckCircle, Search } from 'lucide-react';
import { TECHNICAL_VOCABULARY_I18N } from '../data/corporateData';
import { useLanguage } from '../i18n/LanguageContext';

interface VocabularyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VocabularyModal: React.FC<VocabularyModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState('');
  
  const terms = TECHNICAL_VOCABULARY_I18N[language] || TECHNICAL_VOCABULARY_I18N.en;
  const [selectedTermIndex, setSelectedTermIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setSelectedTermIndex(0);
      setSearch('');
    }
  }, [isOpen, language]);

  if (!isOpen) return null;

  const filteredTerms = terms.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.shortDefinition.toLowerCase().includes(search.toLowerCase())
  );

  const current = filteredTerms[selectedTermIndex] || terms[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-xl border border-[#D1D1CD] bg-[#F4F4F1] shadow-2xl overflow-hidden font-sans">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D1D1CD] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#1A1A1A] text-white flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                {t('vocab.title')}
              </h2>
              <p className="text-[11px] font-mono text-[#70706B]">
                {t('vocab.subtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Search */}
        <div className="p-4 border-b border-[#D1D1CD] bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-[#70706B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('vocab.searchPlaceholder')}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedTermIndex(0);
              }}
              className="w-full pl-10 pr-4 py-2 bg-[#F4F4F1] border border-[#D1D1CD] rounded text-xs font-mono text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
            />
          </div>
        </div>

        {/* Modal Body: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          {/* Term List Column */}
          <div className="md:col-span-4 border-r border-[#D1D1CD] overflow-y-auto p-2 space-y-1 bg-[#EAEAE6]/50 max-h-[300px] md:max-h-none">
            <div className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#70706B]">
              {t('vocab.termsIndex')}
            </div>
            {filteredTerms.map((term, idx) => {
              const isSelected = current?.term === term.term;
              return (
                <button
                  key={term.term}
                  onClick={() => setSelectedTermIndex(idx)}
                  className={`w-full text-left p-3 rounded text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-white font-semibold shadow-xs'
                      : 'text-[#4A4A45] hover:text-[#1A1A1A] hover:bg-white'
                  }`}
                >
                  <div className="font-mono">{term.term}</div>
                  <div className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-[#70706B]'}`}>
                    {term.shortDefinition}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Term Detail Column */}
          <div className="md:col-span-8 p-6 overflow-y-auto space-y-6">
            {current ? (
              <>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] bg-white border border-[#D1D1CD] px-2 py-0.5 rounded font-semibold">
                    CANONICAL CONCEPT
                  </span>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mt-2 font-sans">
                    {current.term}
                  </h3>
                  <p className="text-xs text-[#70706B] font-mono mt-1">
                    {current.shortDefinition}
                  </p>
                </div>

                {/* Narrative */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-[#1A1A1A] uppercase tracking-wider">
                    {t('vocab.contractDefinition')}
                  </h4>
                  <p className="text-xs text-[#4A4A45] leading-relaxed font-sans bg-white p-4 rounded-lg border border-[#D1D1CD] shadow-xs">
                    {current.fullNarrative}
                  </p>
                </div>

                {/* Contrasting Anti-Pattern */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    {t('vocab.contrastingAntiPattern')}
                  </h4>
                  <div className="text-xs text-[#4A4A45] bg-amber-50/60 border border-amber-200 p-3.5 rounded-lg leading-relaxed">
                    {current.contrastingAntiPattern}
                  </div>
                </div>

                {/* Production Implementation */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    {t('vocab.productionImplementation')}
                  </h4>
                  <div className="text-xs text-[#4A4A45] bg-emerald-50/60 border border-emerald-200 p-3.5 rounded-lg leading-relaxed">
                    {current.productionImplementation}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#D1D1CD] bg-white flex justify-between items-center text-[11px] font-mono text-[#70706B]">
          <span>SPEC-REV: 2026.08 // TRIMINDSLABS-ONTOLOGY</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#1A1A1A] hover:bg-black text-white transition-colors cursor-pointer font-semibold"
          >
            {t('vocab.closeBtn')}
          </button>
        </div>
      </div>
    </div>
  );
};
