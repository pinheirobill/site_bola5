import React, { useState } from 'react';
import { ASSETS, COURT_SLOTS } from '../../data/mockData';

interface EspacoB5ScreenProps {
  onOpenReservation: (type?: string) => void;
}

export const EspacoB5Screen: React.FC<EspacoB5ScreenProps> = ({ onOpenReservation }) => {
  const [selectedCourtId, setSelectedCourtId] = useState<string>('quadra-1');
  const [selectedDayOffset, setSelectedDayOffset] = useState<number>(0);

  const activeCourt = COURT_SLOTS.find((c) => c.id === selectedCourtId) || COURT_SLOTS[0];

  const days = [
    { label: 'Hoje', dateStr: 'Qua, 15 Out' },
    { label: 'Amanhã', dateStr: 'Qui, 16 Out' },
    { label: 'Sexta', dateStr: 'Sex, 17 Out' },
    { label: 'Sábado', dateStr: 'Sáb, 18 Out' },
    { label: 'Domingo', dateStr: 'Dom, 19 Out' },
  ];

  return (
    <div className="flex flex-col w-full text-[#e2e2e6] pb-16 max-w-4xl mx-auto px-4 md:px-6">
      {/* Screen Header */}
      <div className="pt-6 pb-4 flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#16191E] border border-white/5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#EB4E2C] animate-pulse" />
          <span className="font-headline text-xs uppercase tracking-wider text-[#EB4E2C] font-bold">
            Complexo Esportivo Oficial
          </span>
        </div>
        <h1 className="font-headline text-3xl md:text-4xl uppercase text-white font-bold tracking-tight">
          Espaço B5 <span className="text-[#EB4E2C]">Arena</span>
        </h1>
        <p className="font-body text-sm text-[#bfc7d5]">
          Infraestrutura premium na Zona Sul de São Paulo projetada para alta performance, segurança articular e convivência corporativa.
        </p>
      </div>

      {/* Main Complex Feature Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-[#16191E] border border-white/5 shadow-xl my-2">
        <div className="w-full h-56 md:h-72 relative">
          <img
            src={activeCourt.image}
            alt={activeCourt.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/50 to-transparent" />
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0B0C0E]/80 backdrop-blur-md border border-white/10 text-white font-headline text-xs font-bold uppercase flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Padrão Homologado</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
            <span className="font-headline text-xs uppercase text-[#EB4E2C] font-bold tracking-wider">
              Destaque do Complexo
            </span>
            <h2 className="font-headline text-xl md:text-2xl font-bold uppercase text-white leading-tight">
              {activeCourt.name}
            </h2>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="p-4 bg-[#16191E] border-t border-white/5">
          <div className="grid grid-cols-2 gap-2 text-xs text-[#bfc7d5]">
            {activeCourt.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#10B981] text-[16px] shrink-0">
                  check_circle
                </span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Space Selector Tabs */}
      <div className="my-4">
        <label className="font-headline text-xs uppercase tracking-wider text-[#94A3B8] font-bold block mb-2">
          Selecione a Instalação
        </label>
        <div className="grid grid-cols-3 gap-2">
          {COURT_SLOTS.map((court) => (
            <button
              key={court.id}
              onClick={() => setSelectedCourtId(court.id)}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                selectedCourtId === court.id
                  ? 'bg-[#EB4E2C] text-white border-[#EB4E2C] shadow-lg shadow-[#EB4E2C]/20'
                  : 'bg-[#16191E] text-[#bfc7d5] border-white/5 hover:border-white/20'
              }`}
            >
              <span className="material-symbols-outlined text-[20px] block mb-1">
                {court.courtType === 'futsal'
                  ? 'sports_soccer'
                  : court.courtType === 'society'
                  ? 'stadium'
                  : 'outdoor_grill'}
              </span>
              <span className="font-headline text-[11px] uppercase font-bold block leading-tight">
                {court.name.split('-')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Live Availability Matrix */}
      <div className="my-4 p-4 md:p-6 rounded-2xl bg-[#16191E] border border-white/5 shadow-md flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-headline text-base md:text-lg font-bold uppercase text-white leading-tight">
              Grade de Horários & Tarifas
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Consulte a disponibilidade em tempo real para reservas avulsas
            </p>
          </div>
          <span className="material-symbols-outlined text-[#EB4E2C]">event_available</span>
        </div>

        {/* Day selection horizontal bar */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDayOffset(idx)}
              className={`px-3 py-2 rounded-lg text-xs font-headline font-bold uppercase shrink-0 transition-all cursor-pointer ${
                selectedDayOffset === idx
                  ? 'bg-white text-[#0B0C0E]'
                  : 'bg-[#0B0C0E] text-[#94A3B8] hover:text-white border border-white/5'
              }`}
            >
              <span className="block text-[10px] opacity-80">{day.label}</span>
              <span>{day.dateStr}</span>
            </button>
          ))}
        </div>

        {/* Slot rows */}
        <div className="space-y-2 mt-1">
          {activeCourt.availableTimes.map((slot, index) => {
            const isAvailable = slot.status === 'available';
            return (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-[#0B0C0E] border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isAvailable ? 'bg-[#10B981]' : 'bg-[#690005]'
                    }`}
                  />
                  <div>
                    <span className="font-headline text-sm font-bold text-white block">
                      {slot.time}
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">
                      {isAvailable ? 'Disponível para pré-reserva' : 'Horário já reservado'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="font-headline text-sm md:text-base font-bold text-white block">
                      R$ {slot.price}
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">/hora</span>
                  </div>

                  <button
                    disabled={!isAvailable}
                    onClick={() => onOpenReservation(activeCourt.id)}
                    className={`px-3 py-1.5 rounded-md font-headline text-xs font-bold uppercase transition-all ${
                      isAvailable
                        ? 'bg-[#EB4E2C] hover:bg-[#FF5733] text-white cursor-pointer active:scale-95'
                        : 'bg-[#21262F] text-[#555] cursor-not-allowed'
                    }`}
                  >
                    {isAvailable ? 'Reservar' : 'Ocupado'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Infrastructure Specs */}
      <div className="my-4 p-4 md:p-6 rounded-2xl bg-[#16191E] border border-white/5 shadow-md flex flex-col gap-4">
        <span className="font-headline text-xs uppercase text-[#EB4E2C] tracking-wider font-bold">
          Diferenciais Exclusivos
        </span>
        <h3 className="font-headline text-xl uppercase font-bold text-white">
          Por Que Escolher o Espaço B5?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="p-3.5 rounded-xl bg-[#0B0C0E] border border-white/5 flex gap-3">
            <span className="material-symbols-outlined text-[#EB4E2C] text-2xl shrink-0">
              shower
            </span>
            <div>
              <h4 className="font-headline text-xs font-bold text-white uppercase">
                Vestiários Climatizados
              </h4>
              <p className="text-xs text-[#bfc7d5] mt-1">
                Duchas aquecidas a gás sob pressão, armários individuais e secadores disponíveis.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B0C0E] border border-white/5 flex gap-3">
            <span className="material-symbols-outlined text-[#EB4E2C] text-2xl shrink-0">
              light_mode
            </span>
            <div>
              <h4 className="font-headline text-xs font-bold text-white uppercase">
                Iluminação LED 500 Lux
              </h4>
              <p className="text-xs text-[#bfc7d5] mt-1">
                Projetores sem ponto cego nem reflexos indesejados, calibrados para partidas noturnas e filmagens.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B0C0E] border border-white/5 flex gap-3">
            <span className="material-symbols-outlined text-[#EB4E2C] text-2xl shrink-0">
              outdoor_grill
            </span>
            <div>
              <h4 className="font-headline text-xs font-bold text-white uppercase">
                Área Gourmet Integrada
              </h4>
              <p className="text-xs text-[#bfc7d5] mt-1">
                Churrasqueiras amplas, bancadas de inox, geladeiras industriais e capacidade para até 120 convidados.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B0C0E] border border-white/5 flex gap-3">
            <span className="material-symbols-outlined text-[#EB4E2C] text-2xl shrink-0">
              local_parking
            </span>
            <div>
              <h4 className="font-headline text-xs font-bold text-white uppercase">
                Estacionamento Seguro
              </h4>
              <p className="text-xs text-[#bfc7d5] mt-1">
                Vagas exclusivas internas com monitoramento por câmeras 24h e portaria dedicada.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onOpenReservation('locacao')}
            className="flex-1 h-12 py-3 px-4 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#EB4E2C]/20"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Solicitar Reserva Online</span>
          </button>
          <a
            href="https://api.whatsapp.com/send?phone=5511964628404&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Espa%C3%A7o%20B5."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 py-3 px-4 rounded-lg bg-[#282a2d] hover:bg-[#21262F] text-white font-headline text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 border border-white/5"
          >
            <span className="material-symbols-outlined text-[#10B981] text-[18px]">chat</span>
            <span>Agendar Visita Técnica</span>
          </a>
        </div>
      </div>
    </div>
  );
};
