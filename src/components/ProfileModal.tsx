import React, { useState } from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('Willian Pinheiro');
  const [company, setCompany] = useState('DSOP Esportes Corporativos');
  const [email, setEmail] = useState('willian.pinheiro@dsop.com.br');
  const [favoriteModality, setFavoriteModality] = useState('Futsal Society');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#16191E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-5 md:p-6 text-[#e2e2e6] space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#ffb4a3] text-[#630f00] flex items-center justify-center font-bold font-headline">
              WP
            </div>
            <div>
              <h3 className="font-headline font-bold text-base uppercase text-white leading-tight">
                Perfil do Organizador
              </h3>
              <p className="text-xs text-[#94A3B8]">Gestão Bola 5 VIP</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#21262F] hover:bg-[#333538] text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {savedSuccess ? (
          <div className="py-8 text-center text-[#10B981] space-y-2">
            <span className="material-symbols-outlined text-4xl">check_circle</span>
            <p className="font-headline text-sm font-bold uppercase text-white">Preferências salvas!</p>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-3 text-xs">
            <div>
              <label className="block font-headline uppercase font-semibold text-[#94A3B8] mb-1">
                Nome do Responsável
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white focus:outline-none focus:border-[#EB4E2C]"
                required
              />
            </div>

            <div>
              <label className="block font-headline uppercase font-semibold text-[#94A3B8] mb-1">
                Empresa / Entidade
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white focus:outline-none focus:border-[#EB4E2C]"
                required
              />
            </div>

            <div>
              <label className="block font-headline uppercase font-semibold text-[#94A3B8] mb-1">
                E-mail de Contato
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white focus:outline-none focus:border-[#EB4E2C]"
                required
              />
            </div>

            <div>
              <label className="block font-headline uppercase font-semibold text-[#94A3B8] mb-1">
                Modalidade de Preferência
              </label>
              <select
                value={favoriteModality}
                onChange={(e) => setFavoriteModality(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white focus:outline-none focus:border-[#EB4E2C]"
              >
                <option value="Futsal Society">Futsal & Society Amortecido</option>
                <option value="Torneio de Tranca">Torneio de Tranca & Baralho</option>
                <option value="Team Building">Team Building & Dinâmicas de RH</option>
                <option value="Confraternização Geral">Confraternização & Churrasco</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-11 py-2.5 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Salvar Alterações
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
