import React, { useState } from 'react';
import { BookOpen, ArrowRight, X, FileText, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { RESEARCH_ARTICLES } from '../data/researchData';
import { ResearchArticle } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

export const ResearchSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<ResearchArticle | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyCitation = (ref: string) => {
    navigator.clipboard.writeText(ref);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* Section Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAEAE6] border border-[#D1D1CD] text-[#1A1A1A] text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{t('res.badge')}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
          {t('res.title')} <span className="font-serif italic font-normal">{t('res.titleHighlight')}</span>
        </h2>
        <p className="text-sm sm:text-base text-[#4A4A45] leading-relaxed">
          {t('res.subtitle')}
        </p>
      </div>

      {/* Research Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESEARCH_ARTICLES.map((article) => (
          <div
            key={article.id}
            className="rounded-xl border border-[#D1D1CD] bg-white hover:border-[#1A1A1A] transition-all p-6 flex flex-col justify-between space-y-6 group shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#D1D1CD] text-[#1A1A1A] font-semibold">
                    {article.category}
                  </span>
                  {article.operationalMonitoring === 'excluded' && (
                    <span className="px-2 py-0.5 rounded bg-white border border-[#D1D1CD] text-[#70706B] font-semibold">
                      Portfolio only · no operational monitoring
                    </span>
                  )}
                </div>
                <span className="text-[#70706B] shrink-0">{article.readTime} • {article.publishedDate}</span>
              </div>

              <h3 className="text-lg font-bold text-[#1A1A1A] font-sans">
                {article.title}
              </h3>

              <p className="text-xs text-[#4A4A45] font-sans leading-relaxed">
                {article.abstract}
              </p>

              {/* Key Takeaways */}
              <div className="space-y-1.5 pt-2 border-t border-[#F0F0EE]">
                <span className="text-[10px] font-mono uppercase text-[#70706B] font-bold block">
                  {t('res.coreFindings')}
                </span>
                {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#4A4A45]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedArticle(article)}
              className="w-full py-2.5 rounded-lg text-xs font-mono font-medium text-[#1A1A1A] bg-[#F4F4F1] hover:bg-[#EAEAE6] border border-[#D1D1CD] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('res.readWhitepaper')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
            </button>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border border-[#D1D1CD] bg-[#F4F4F1] shadow-2xl overflow-hidden font-sans">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D1D1CD] bg-white">
              <div className="flex items-center gap-2 text-xs font-mono text-[#70706B]">
                <FileText className="w-4 h-4 text-[#1A1A1A]" />
                <span>{t('res.pubHeader')} {selectedArticle.category}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-[#1A1A1A] text-xs leading-relaxed">
              <div>
                <div className="text-[11px] font-mono text-[#70706B]">
                  Published {selectedArticle.publishedDate} • {selectedArticle.readTime}
                </div>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#1A1A1A] mt-1">
                  {selectedArticle.title}
                </h2>
              </div>

              {/* Abstract Callout */}
              <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-2 shadow-xs">
                <span className="text-[10px] font-mono text-[#1A1A1A] font-bold uppercase tracking-wider block">
                  Executive Abstract
                </span>
                <p className="text-xs sm:text-sm text-[#4A4A45] leading-relaxed">
                  {selectedArticle.abstract}
                </p>
              </div>

              {/* Takeaways */}
              <div className="space-y-2">
                <h4 className="font-mono text-[#1A1A1A] uppercase text-[11px] font-bold">
                  Key Technical Conclusions
                </h4>
                <div className="space-y-1.5">
                  {selectedArticle.keyTakeaways.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A4A45]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Article Sections */}
              <div className="space-y-6 pt-4 border-t border-[#D1D1CD]">
                {selectedArticle.bodySections.map((sec, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="text-base font-bold text-[#1A1A1A] font-sans">
                      {sec.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4A45] leading-relaxed">
                      {sec.content}
                    </p>
                    {sec.codeSnippet && (
                      <div className="rounded-lg bg-[#1A1A1A] p-4 border border-black font-mono text-[11px] text-white/90 overflow-x-auto">
                        <pre>{sec.codeSnippet}</pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Conclusions & Citation */}
              <div className="p-4 rounded-lg bg-white border border-[#D1D1CD] space-y-3 mt-6 shadow-xs">
                <div>
                  <h4 className="font-mono text-[#1A1A1A] text-xs font-bold uppercase">{t('res.copyCitation')}</h4>
                  <p className="text-[11px] font-mono text-[#70706B] mt-0.5">{selectedArticle.doiOrReference}</p>
                </div>
                <button
                  onClick={() => handleCopyCitation(selectedArticle.doiOrReference)}
                  className="px-3 py-1.5 rounded bg-[#F4F4F1] hover:bg-[#EAEAE6] border border-[#D1D1CD] text-[11px] font-mono text-[#1A1A1A] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t('res.copied') : t('res.copyCitation')}</span>
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-[#D1D1CD] bg-white flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-1.5 rounded bg-[#1A1A1A] hover:bg-black text-white text-xs transition-colors cursor-pointer font-semibold"
              >
                {t('res.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
