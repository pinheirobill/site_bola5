import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: 'servicos', label: 'Serviços', icon: 'sports_soccer' },
    { id: 'espaco-b5', label: 'Espaço B5', icon: 'stadium' },
    { id: 'eventos', label: 'Eventos', icon: 'emoji_events' },
    { id: 'contato', label: 'Contato', icon: 'support_agent' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-[#0B0C0E]/95 backdrop-blur-xl border-t border-white/5 shadow-[0_-4px_24px_rgba(0,0,0,0.6)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center min-w-[70px] h-12 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-[#EB4E2C] bg-[#16191E] shadow-sm font-semibold'
                  : 'text-[#bfc7d5] hover:text-white'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
              >
                {item.icon}
              </span>
              <span className="font-headline text-[11px] tracking-wider uppercase mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
