import React from 'react';
import { ASSETS } from '../data/mockData';

interface HeaderProps {
  onOpenProfile: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProfile }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_8px_rgba(0,0,0,0.5)] pt-safe">
      <div className="h-16 px-4 md:px-6 max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand & Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img
            alt="Bola 5 Esportes Logo"
            className="h-8 w-auto object-contain"
            src={ASSETS.logo}
            onError={(e) => {
              // Graceful fallback to branded badge if image fails to load
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-headline font-bold text-lg md:text-xl uppercase tracking-wider text-white leading-none">
              BOLA 5
            </span>
            <span className="font-headline text-[11px] font-semibold text-[#EB4E2C] uppercase tracking-widest leading-none mt-0.5">
              Serviços
            </span>
          </div>
        </div>

        {/* Action Shortcuts */}
        <div className="flex items-center gap-2">
          <a
            aria-label="WhatsApp Bola 5"
            className="h-9 px-3 rounded-md bg-[#16191E] hover:bg-[#21262F] text-[#10B981] flex items-center gap-1.5 transition-colors border border-white/5"
            href="https://api.whatsapp.com/send?phone=5511964628404&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Bola%205."
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="font-headline text-[11px] font-bold uppercase hidden sm:inline text-[#e2e2e6]">
              WhatsApp
            </span>
          </a>

          {/* User Profile Avatar */}
          <button
            onClick={onOpenProfile}
            aria-label="Perfil e Preferências"
            className="w-9 h-9 rounded-full bg-[#ffb4a3] text-[#630f00] flex items-center justify-center shrink-0 hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
