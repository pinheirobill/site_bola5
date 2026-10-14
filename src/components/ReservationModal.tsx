import React, { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialType = 'locacao',
}) => {
  const [serviceType, setServiceType] = useState<string>(initialType);
  const [court, setCourt] = useState<'quadra1' | 'quadra2' | 'gourmet' | 'complexo'>('quadra1');
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('19:00 - 20:00');
  const [durationHours, setDurationHours] = useState<number>(1);
  const [includeArbitragem, setIncludeArbitragem] = useState<boolean>(false);
  const [includeChurrasqueira, setIncludeChurrasqueira] = useState<boolean>(false);
  const [includeFotografo, setIncludeFotografo] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [userCompany, setUserCompany] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  // Base pricing logic
  const courtPrices: Record<string, number> = {
    quadra1: 300,
    quadra2: 320,
    gourmet: 850,
    complexo: 2400,
  };

  const baseCourtPrice = courtPrices[court] || 300;
  const subtotalCourt = baseCourtPrice * durationHours;
  const subtotalArbitragem = includeArbitragem ? 180 * durationHours : 0;
  const subtotalChurrasqueira = includeChurrasqueira && court !== 'gourmet' && court !== 'complexo' ? 450 : 0;
  const subtotalFotografo = includeFotografo ? 350 : 0;
  const totalEstimate = subtotalCourt + subtotalArbitragem + subtotalChurrasqueira + subtotalFotografo;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Olá Bola 5! Gostaria de pré-agendar:\n` +
      `• Serviço: ${serviceType}\n` +
      `• Instalação: ${court}\n` +
      `• Data: ${date} (${timeSlot}, ${durationHours}h)\n` +
      `• Adicionais: ${[
        includeArbitragem ? 'Arbitragem' : '',
        includeChurrasqueira ? 'Churrasqueira' : '',
        includeFotografo ? 'Fotografia' : ''
      ].filter(Boolean).join(', ') || 'Nenhum'}\n` +
      `• Estimativa: R$ ${totalEstimate.toLocaleString('pt-BR')}\n` +
      `• Contato: ${userName} (${userCompany || 'Pessoa Física'}) - Tel: ${userPhone}`
    );

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=5511964628404&text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#16191E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-6 text-[#e2e2e6] flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0B0C0E]/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#EB4E2C]">sports_soccer</span>
            <div>
              <h3 className="font-headline font-bold text-base md:text-lg uppercase text-white leading-none">
                Reserva & Orçamento Instantâneo
              </h3>
              <p className="text-[11px] text-[#94A3B8] font-body mt-0.5">
                Espaço B5 Oficial • São Paulo - SP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="w-8 h-8 rounded-full bg-[#21262F] hover:bg-[#333538] text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-4 md:p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center text-[#10B981]">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h4 className="font-headline text-xl uppercase font-bold text-white">
                Solicitação Gerada com Sucesso!
              </h4>
              <p className="text-sm text-[#bfc7d5] max-w-sm">
                Redirecionando para nossa equipe no WhatsApp com o resumo da sua reserva...
              </p>
              <div className="mt-4 p-4 rounded-xl bg-[#21262F] w-full text-left text-xs space-y-1 border border-white/5">
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Data/Horário:</span>
                  <span className="text-white font-medium">{date} às {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Estimativa Total:</span>
                  <span className="text-[#EB4E2C] font-bold text-sm">R$ {totalEstimate.toLocaleString('pt-BR')}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-2 px-6 py-2.5 rounded-lg bg-[#EB4E2C] text-white font-headline text-xs uppercase font-bold"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Selection */}
              <div>
                <label className="block font-headline text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  1. Finalidade do Agendamento
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'locacao', label: 'Locação Quadra' },
                    { id: 'corporativo', label: 'Evento / Team Building' },
                    { id: 'torneio', label: 'Copa / Torneio' },
                    { id: 'festa', label: 'Churrasco & Festa' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setServiceType(item.id)}
                      className={`p-2.5 rounded-lg text-xs font-headline font-bold uppercase transition-all border ${
                        serviceType === item.id
                          ? 'bg-[#EB4E2C] text-white border-[#EB4E2C] shadow-md'
                          : 'bg-[#0B0C0E] text-[#bfc7d5] border-white/5 hover:border-white/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Space Selection */}
              <div>
                <label className="block font-headline text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  2. Espaço Desejado
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setCourt('quadra1')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      court === 'quadra1'
                        ? 'border-[#EB4E2C] bg-[#21262F]'
                        : 'border-white/5 bg-[#0B0C0E]'
                    }`}
                  >
                    <div className="font-headline font-bold text-white uppercase">Quadra 1</div>
                    <div className="text-[11px] text-[#94A3B8]">Futsal & Piso Amortecido</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCourt('quadra2')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      court === 'quadra2'
                        ? 'border-[#EB4E2C] bg-[#21262F]'
                        : 'border-white/5 bg-[#0B0C0E]'
                    }`}
                  >
                    <div className="font-headline font-bold text-white uppercase">Quadra 2</div>
                    <div className="text-[11px] text-[#94A3B8]">Society Sintético 50mm</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCourt('gourmet')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      court === 'gourmet'
                        ? 'border-[#EB4E2C] bg-[#21262F]'
                        : 'border-white/5 bg-[#0B0C0E]'
                    }`}
                  >
                    <div className="font-headline font-bold text-white uppercase">Espaço Gourmet</div>
                    <div className="text-[11px] text-[#94A3B8]">Churrasqueira & Bar VIP</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCourt('complexo')}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      court === 'complexo'
                        ? 'border-[#EB4E2C] bg-[#21262F]'
                        : 'border-white/5 bg-[#0B0C0E]'
                    }`}
                  >
                    <div className="font-headline font-bold text-white uppercase">Complexo Todo</div>
                    <div className="text-[11px] text-[#94A3B8]">Quadras + Salão + Camarote</div>
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-headline text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1">
                    Data Pretendida
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full h-11 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EB4E2C]"
                  />
                </div>

                <div>
                  <label className="block font-headline text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1">
                    Horário Principal
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#EB4E2C]"
                  >
                    <option value="08:00 - 09:00">08:00 às 09:00</option>
                    <option value="12:00 - 13:00">12:00 às 13:00 (Almoço)</option>
                    <option value="18:00 - 19:00">18:00 às 19:00</option>
                    <option value="19:00 - 20:00">19:00 às 20:00 (Nobre)</option>
                    <option value="20:00 - 21:00">20:00 às 21:00 (Nobre)</option>
                    <option value="21:00 - 22:00">21:00 às 22:00</option>
                  </select>
                </div>
              </div>

              {/* Duration Slider */}
              <div>
                <div className="flex justify-between text-xs font-headline uppercase font-semibold text-[#94A3B8] mb-1">
                  <span>Duração do Horário:</span>
                  <span className="text-white font-bold">{durationHours} hora{durationHours > 1 ? 's' : ''}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={durationHours}
                  onChange={(e) => setDurationHours(Number(e.target.value))}
                  className="w-full accent-[#EB4E2C] cursor-pointer"
                />
              </div>

              {/* Optional Addons */}
              <div>
                <label className="block font-headline text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5">
                  3. Serviços Adicionais
                </label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0B0C0E] border border-white/5 cursor-pointer hover:border-white/20">
                    <input
                      type="checkbox"
                      checked={includeArbitragem}
                      onChange={(e) => setIncludeArbitragem(e.target.checked)}
                      className="accent-[#EB4E2C] w-4 h-4"
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium">Quadro de Arbitragem Federada</span>
                      <span className="block text-[11px] text-[#94A3B8]">Árbitro e anotador com súmula digital (+R$ 180/h)</span>
                    </div>
                  </label>

                  {court !== 'gourmet' && court !== 'complexo' && (
                    <label className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0B0C0E] border border-white/5 cursor-pointer hover:border-white/20">
                      <input
                        type="checkbox"
                        checked={includeChurrasqueira}
                        onChange={(e) => setIncludeChurrasqueira(e.target.checked)}
                        className="accent-[#EB4E2C] w-4 h-4"
                      />
                      <div className="flex-1">
                        <span className="text-white font-medium">Churrasqueira Gourmet Pós-Jogo</span>
                        <span className="block text-[11px] text-[#94A3B8]">Área social com freezer e mesas inclusas (+R$ 450)</span>
                      </div>
                    </label>
                  )}

                  <label className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0B0C0E] border border-white/5 cursor-pointer hover:border-white/20">
                    <input
                      type="checkbox"
                      checked={includeFotografo}
                      onChange={(e) => setIncludeFotografo(e.target.checked)}
                      className="accent-[#EB4E2C] w-4 h-4"
                    />
                    <div className="flex-1">
                      <span className="text-white font-medium">Cobertura Fotográfica Digital</span>
                      <span className="block text-[11px] text-[#94A3B8]">Fotos profissionais dos lances e premiação (+R$ 350)</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Contact Data */}
              <div className="pt-2 border-t border-white/10 space-y-2.5">
                <label className="block font-headline text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                  4. Dados do Responsável
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Seu Nome *"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    className="h-10 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white text-xs placeholder:text-[#555] focus:outline-none focus:border-[#EB4E2C]"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Celular *"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    required
                    className="h-10 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white text-xs placeholder:text-[#555] focus:outline-none focus:border-[#EB4E2C]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Nome da Empresa ou Time (Opcional)"
                  value={userCompany}
                  onChange={(e) => setUserCompany(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white text-xs placeholder:text-[#555] focus:outline-none focus:border-[#EB4E2C]"
                />
              </div>

              {/* Estimate Summary Box */}
              <div className="p-3.5 rounded-xl bg-[#0B0C0E] border border-[#EB4E2C]/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] block font-headline">
                    Estimativa Prévia
                  </span>
                  <div className="font-headline text-2xl font-bold text-white leading-none">
                    R$ {totalEstimate.toLocaleString('pt-BR')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] text-[10px] font-bold uppercase">
                    Sem taxa de adesão
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full h-12 py-3 px-4 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all"
              >
                <span>Enviar para Confirmação no WhatsApp</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
