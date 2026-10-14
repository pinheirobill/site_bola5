import React, { useState } from 'react';
import { ASSETS, CLIENT_CASES } from '../../data/mockData';

interface EventosScreenProps {
  onOpenReservation: (type?: string) => void;
}

export const EventosScreen: React.FC<EventosScreenProps> = ({ onOpenReservation }) => {
  const [teamCount, setTeamCount] = useState<number>(8);
  const [format, setFormat] = useState<'grupos' | 'mata_mata'>('grupos');
  const [modality, setModality] = useState<'futsal' | 'society' | 'tranca'>('futsal');
  const [includeBuffet, setIncludeBuffet] = useState<boolean>(true);
  const [includeFotografia, setIncludeFotografia] = useState<boolean>(true);

  // Tournament cost estimation
  const baseCostPerTeam = modality === 'tranca' ? 220 : 450;
  const tournamentBase = teamCount * baseCostPerTeam;
  const buffetCost = includeBuffet ? teamCount * 12 * 75 : 0; // ~12 players/guests per team
  const photoCost = includeFotografia ? 650 : 0;
  const totalTournamentEstimate = tournamentBase + buffetCost + photoCost;

  return (
    <div className="flex flex-col w-full text-[#e2e2e6] pb-16 max-w-4xl mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="pt-6 pb-4 flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#16191E] border border-white/5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#EB4E2C] animate-pulse" />
          <span className="font-headline text-xs uppercase tracking-wider text-[#EB4E2C] font-bold">
            Copas & Eventos Corporativos
          </span>
        </div>
        <h1 className="font-headline text-3xl md:text-4xl uppercase text-white font-bold tracking-tight">
          Gestão de <span className="text-[#EB4E2C]">Torneios</span> & Team Building
        </h1>
        <p className="font-body text-sm text-[#bfc7d5]">
          Organização ponta a ponta: do regulamento técnico à arbitragem federada, súmula digital e entrega de troféus.
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative rounded-2xl overflow-hidden bg-[#16191E] border border-white/5 shadow-xl my-2">
        <div className="w-full h-56 md:h-72 relative">
          <img
            src={ASSETS.tournaments}
            alt="Troféus e cerimônia de premiação"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
            <span className="font-headline text-xs uppercase text-[#EB4E2C] font-bold tracking-wider">
              Padrão Bola 5
            </span>
            <h2 className="font-headline text-xl md:text-2xl font-bold uppercase text-white leading-tight">
              Mais de 500 Campeonatos Oficiais Realizados
            </h2>
            <p className="font-body text-xs md:text-sm text-[#bfc7d5]">
              Arbitragem homologada pelas principais federações paulistas com histórico disciplinar transparente.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Tournament Builder / Simulator */}
      <div className="my-4 p-5 md:p-6 rounded-2xl bg-[#16191E] border border-white/5 shadow-lg space-y-5">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div>
            <span className="font-headline text-xs uppercase text-[#EB4E2C] font-bold tracking-wider block">
              Simulador Interativo
            </span>
            <h3 className="font-headline text-lg md:text-xl font-bold uppercase text-white">
              Monte o Torneio da Sua Empresa
            </h3>
          </div>
          <span className="material-symbols-outlined text-[#EB4E2C] text-2xl">calculate</span>
        </div>

        {/* Modality Selector */}
        <div>
          <label className="font-headline text-xs uppercase tracking-wider text-[#94A3B8] font-bold block mb-1.5">
            1. Modalidade da Competição
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'futsal', label: 'Futsal Corporativo', icon: 'sports_soccer' },
              { id: 'society', label: 'Futebol Society', icon: 'stadium' },
              { id: 'tranca', label: 'Torneio de Tranca', icon: 'playing_cards' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setModality(m.id as any)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  modality === m.id
                    ? 'bg-[#EB4E2C] text-white border-[#EB4E2C]'
                    : 'bg-[#0B0C0E] text-[#bfc7d5] border-white/5 hover:border-white/20'
                }`}
              >
                <span className="material-symbols-outlined text-[20px] block mb-1">
                  {m.id === 'tranca' ? 'style' : m.icon}
                </span>
                <span className="font-headline text-[11px] font-bold uppercase block leading-tight">
                  {m.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Team count & format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-headline text-xs uppercase tracking-wider text-[#94A3B8] font-bold block mb-1.5">
              2. Número de Equipes ({teamCount} times)
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {[4, 8, 12, 16].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setTeamCount(count)}
                  className={`py-2 rounded-lg font-headline text-xs font-bold uppercase transition-all ${
                    teamCount === count
                      ? 'bg-white text-[#0B0C0E]'
                      : 'bg-[#0B0C0E] text-[#94A3B8] border border-white/5'
                  }`}
                >
                  {count} Times
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-headline text-xs uppercase tracking-wider text-[#94A3B8] font-bold block mb-1.5">
              3. Sistema de Disputa
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => setFormat('grupos')}
                className={`py-2 rounded-lg font-headline text-xs font-bold uppercase transition-all ${
                  format === 'grupos'
                    ? 'bg-[#282a2d] text-[#EB4E2C] border border-[#EB4E2C]'
                    : 'bg-[#0B0C0E] text-[#94A3B8] border border-white/5'
                }`}
              >
                Grupos + Finais
              </button>
              <button
                type="button"
                onClick={() => setFormat('mata_mata')}
                className={`py-2 rounded-lg font-headline text-xs font-bold uppercase transition-all ${
                  format === 'mata_mata'
                    ? 'bg-[#282a2d] text-[#EB4E2C] border border-[#EB4E2C]'
                    : 'bg-[#0B0C0E] text-[#94A3B8] border border-white/5'
                }`}
              >
                Mata-mata Direto
              </button>
            </div>
          </div>
        </div>

        {/* Addon checkboxes */}
        <div>
          <label className="font-headline text-xs uppercase tracking-wider text-[#94A3B8] font-bold block mb-1.5">
            4. Pacote de Confraternização
          </label>
          <div className="space-y-2 text-xs">
            <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0B0C0E] border border-white/5 cursor-pointer">
              <input
                type="checkbox"
                checked={includeBuffet}
                onChange={(e) => setIncludeBuffet(e.target.checked)}
                className="accent-[#EB4E2C] w-4 h-4"
              />
              <div className="flex-1">
                <span className="text-white font-medium">Churrasco Gourmet & Bebidas para Atletas</span>
                <span className="block text-[11px] text-[#94A3B8]">Espaço B5 exclusivo com serviço completo</span>
              </div>
            </label>

            <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0B0C0E] border border-white/5 cursor-pointer">
              <input
                type="checkbox"
                checked={includeFotografia}
                onChange={(e) => setIncludeFotografia(e.target.checked)}
                className="accent-[#EB4E2C] w-4 h-4"
              />
              <div className="flex-1">
                <span className="text-white font-medium">Cobertura Audiovisual & Melhores Momentos</span>
                <span className="block text-[11px] text-[#94A3B8]">Fotógrafo oficial e entrega de álbum digital em 48h</span>
              </div>
            </label>
          </div>
        </div>

        {/* Calculated Proposal Output */}
        <div className="p-4 rounded-xl bg-[#0B0C0E] border border-[#EB4E2C]/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-headline uppercase tracking-wider text-[#94A3B8]">
              Estimativa do Campeonato ({teamCount} times • {format === 'grupos' ? 'Grupos + Mata-mata' : 'Mata-mata'})
            </span>
            <div className="font-headline text-2xl md:text-3xl font-bold text-white leading-none mt-1">
              R$ {totalTournamentEstimate.toLocaleString('pt-BR')}
            </div>
            <span className="text-[11px] text-[#10B981] font-medium block mt-0.5">
              Inclui arbitragem homologada, medalhas e troféu campeão
            </span>
          </div>

          <button
            onClick={() => {
              const text = encodeURIComponent(
                `Olá! Montei um torneio no simulador:\n` +
                `• Modalidade: ${modality}\n` +
                `• Times: ${teamCount} equipes\n` +
                `• Formato: ${format}\n` +
                `• Churrasco incluso: ${includeBuffet ? 'Sim' : 'Não'}\n` +
                `• Fotos: ${includeFotografia ? 'Sim' : 'Não'}\n` +
                `• Estimativa: R$ ${totalTournamentEstimate.toLocaleString('pt-BR')}`
              );
              window.open(`https://api.whatsapp.com/send?phone=5511964628404&text=${text}`, '_blank');
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <span>Solicitar Proposta Completa</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>
      </div>

      {/* Case Studies Deep Dive */}
      <div className="my-4 p-5 md:p-6 rounded-2xl bg-[#16191E] border border-white/5 shadow-md">
        <span className="font-headline text-xs uppercase text-[#EB4E2C] font-bold tracking-wider block mb-1">
          Nossos Cases de Sucesso
        </span>
        <h3 className="font-headline text-xl uppercase font-bold text-white mb-4">
          Quem Já Ganhou Troféu no Bola 5
        </h3>

        <div className="space-y-3">
          {CLIENT_CASES.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-[#0B0C0E] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#21262F] flex items-center justify-center text-[#EB4E2C] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-headline text-sm font-bold uppercase text-white">
                      {item.title}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#282a2d] text-[#EB4E2C] font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">{item.description}</p>
                </div>
              </div>

              <span className="text-xs font-headline font-bold text-[#FFB800] shrink-0 self-end sm:self-center">
                {item.stats}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
