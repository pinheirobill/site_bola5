import React from 'react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onOpenReservation }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#16191E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-8 text-[#e2e2e6] max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0B0C0E]/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#EB4E2C] text-white font-headline text-[11px] uppercase tracking-wider font-bold">
              {article.category}
            </span>
            <span className="text-xs text-[#94A3B8]">{article.readTime}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar artigo"
            className="w-8 h-8 rounded-full bg-[#21262F] hover:bg-[#333538] text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Article Body */}
        <div className="overflow-y-auto p-5 md:p-6 space-y-4">
          <h2 className="font-headline text-xl md:text-2xl font-bold uppercase text-white leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-3 text-xs text-[#94A3B8] pb-2 border-b border-white/5">
            <span>{article.date}</span>
            <span>•</span>
            <span>Por: {article.author}</span>
          </div>

          <div className="w-full h-52 md:h-64 rounded-xl overflow-hidden relative">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16191E] via-transparent to-transparent opacity-60" />
          </div>

          <p className="text-base font-medium text-white italic border-l-2 border-[#EB4E2C] pl-3 py-1 bg-white/5 rounded-r">
            {article.excerpt}
          </p>

          <div className="space-y-3 text-sm md:text-base leading-relaxed text-[#bfc7d5]">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick CTA box inside article */}
          <div className="mt-6 p-4 rounded-xl bg-[#21262F] border border-[#EB4E2C]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h4 className="font-headline text-sm uppercase text-white font-bold">
                Leve essa experiência para sua empresa
              </h4>
              <p className="text-xs text-[#94A3B8]">
                Conheça os pacotes do Espaço B5 para dinâmicas corporativas.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline text-xs uppercase font-bold tracking-wider transition-colors shrink-0"
            >
              Fazer Orçamento
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0B0C0E]/90 flex justify-between items-center text-xs text-[#94A3B8] shrink-0">
          <span>Bola 5 Esportes • Gestão & Torneios</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#21262F] text-white hover:bg-[#333538] transition-colors font-headline uppercase"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
