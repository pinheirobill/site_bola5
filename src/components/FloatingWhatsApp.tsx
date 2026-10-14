import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2 mr-1 px-3 py-1.5 rounded-lg bg-[#16191E] border border-white/10 text-white text-xs shadow-xl animate-fade-in flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          <span>Atendimento online agora</span>
        </div>
      )}
      <a
        aria-label="Conversar no WhatsApp Bola 5"
        className="w-13 h-13 w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all"
        href="https://api.whatsapp.com/send?phone=5511964628404&text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20Bola%205."
        rel="noopener noreferrer"
        target="_blank"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="material-symbols-outlined text-[26px]">chat</span>
      </a>
    </div>
  );
};
