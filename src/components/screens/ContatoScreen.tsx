import React, { useState } from 'react';
import { ASSETS } from '../../data/mockData';

export const ContatoScreen: React.FC = () => {
  const [messageTopic, setMessageTopic] = useState('locacao');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    const whatsappMessage = encodeURIComponent(
      `Olá Bola 5! Mensagem do site:\n` +
      `• Assunto: ${messageTopic}\n` +
      `• Nome: ${name}\n` +
      `• WhatsApp: ${phone}\n` +
      `• Mensagem: ${notes || 'Sem observações adicionais.'}`
    );

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=5511964628404&text=${whatsappMessage}`, '_blank');
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full text-[#e2e2e6] pb-16 max-w-4xl mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="pt-6 pb-4 flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#16191E] border border-white/5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#EB4E2C] animate-pulse" />
          <span className="font-headline text-xs uppercase tracking-wider text-[#EB4E2C] font-bold">
            Canais Diretos de Contendimento
          </span>
        </div>
        <h1 className="font-headline text-3xl md:text-4xl uppercase text-white font-bold tracking-tight">
          Fale com a <span className="text-[#EB4E2C]">Bola 5</span>
        </h1>
        <p className="font-body text-sm text-[#bfc7d5]">
          Nossa equipe operacional está à disposição para dúvidas sobre reservas, orçamentos corporativos e visitas ao Espaço B5.
        </p>
      </div>

      {/* Quick Action Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
        <a
          href="https://api.whatsapp.com/send?phone=5511964628404&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20Bola%205."
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl bg-[#16191E] border border-white/5 hover:border-[#10B981]/50 flex flex-col gap-2 transition-all group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">chat</span>
          </div>
          <div>
            <span className="font-headline text-sm font-bold uppercase text-white block group-hover:text-[#10B981] transition-colors">
              WhatsApp Central
            </span>
            <span className="text-xs text-[#94A3B8]">(11) 96462-8404</span>
          </div>
          <span className="text-[11px] text-[#10B981] font-semibold mt-auto flex items-center gap-1">
            Resposta em até 15 min <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </span>
        </a>

        <a
          href="tel:551155231100"
          className="p-4 rounded-xl bg-[#16191E] border border-white/5 hover:border-[#EB4E2C]/50 flex flex-col gap-2 transition-all group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#EB4E2C]/20 text-[#EB4E2C] flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">call</span>
          </div>
          <div>
            <span className="font-headline text-sm font-bold uppercase text-white block group-hover:text-[#EB4E2C] transition-colors">
              Telefone Fixo
            </span>
            <span className="text-xs text-[#94A3B8]">(11) 5523-1100</span>
          </div>
          <span className="text-[11px] text-[#bfc7d5] font-semibold mt-auto flex items-center gap-1">
            Seg à Sex das 9h às 18h <span className="material-symbols-outlined text-[14px]">call</span>
          </span>
        </a>

        <a
          href="mailto:contato@bola5.com.br"
          className="p-4 rounded-xl bg-[#16191E] border border-white/5 hover:border-[#FFB800]/50 flex flex-col gap-2 transition-all group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">mail</span>
          </div>
          <div>
            <span className="font-headline text-sm font-bold uppercase text-white block group-hover:text-[#FFB800] transition-colors">
              E-mail Comercial
            </span>
            <span className="text-xs text-[#94A3B8]">contato@bola5.com.br</span>
          </div>
          <span className="text-[11px] text-[#bfc7d5] font-semibold mt-auto flex items-center gap-1">
            Envio de RFPs e editais <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </span>
        </a>
      </div>

      {/* Location Map View */}
      <div className="my-4 rounded-2xl overflow-hidden bg-[#16191E] border border-white/5 shadow-md">
        <div
          className="w-full h-52 md:h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url('${ASSETS.mapBackground}')` }}
        >
          <div className="absolute inset-0 bg-[#0B0C0E]/30" />
          <div className="absolute top-4 left-4 bg-[#0B0C0E]/90 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center gap-2 border border-white/10">
            <span className="material-symbols-outlined text-[#EB4E2C]">location_on</span>
            <div>
              <span className="font-headline text-xs text-white uppercase font-bold block">
                Espaço B5 • Interlagos
              </span>
              <span className="text-[10px] text-[#94A3B8]">Fácil acesso pela Av. Interlagos e Nações Unidas</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 flex flex-col gap-3">
          <div>
            <h3 className="font-headline text-lg font-bold text-white uppercase">
              Rua Antônio Mariano, nº 269
            </h3>
            <p className="text-xs md:text-sm text-[#94A3B8]">
              Jardim Ipanema, São Paulo - SP • CEP 04783-000
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-[#bfc7d5] py-1 border-t border-white/5">
            <div>
              <span className="text-[#94A3B8] block">Horário de Quadras:</span>
              <span className="text-white font-medium">Seg a Dom: 07h00 às 00h00</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block">Administração & Atendimento:</span>
              <span className="text-white font-medium">Seg a Sex: 09h00 às 18h00</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <a
              href="https://goo.gl/maps/HARvkzx2iAp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-lg bg-[#282a2d] hover:bg-[#21262F] text-white font-headline text-xs uppercase font-bold text-center flex items-center justify-center gap-2 border border-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              <span>Abrir no Google Maps</span>
            </a>
            <a
              href="https://waze.com/ul?q=Rua+Antonio+Mariano+269+Sao+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-lg bg-[#282a2d] hover:bg-[#21262F] text-white font-headline text-xs uppercase font-bold text-center flex items-center justify-center gap-2 border border-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">navigation</span>
              <span>Navegar via Waze</span>
            </a>
          </div>
        </div>
      </div>

      {/* Fast Message Form */}
      <div className="my-4 p-5 md:p-6 rounded-2xl bg-[#16191E] border border-white/5 shadow-md">
        <h3 className="font-headline text-lg font-bold uppercase text-white mb-1">
          Envie sua Mensagem Direta
        </h3>
        <p className="text-xs text-[#bfc7d5] mb-4">
          Responderemos com disponibilidade de agenda e proposta detalhada.
        </p>

        {sent ? (
          <div className="p-4 rounded-xl bg-[#21262F] border border-[#10B981] text-[#10B981] flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl">check_circle</span>
            <div className="text-xs text-white">
              Sua mensagem foi enviada com sucesso! Redirecionando para o WhatsApp...
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="font-headline uppercase text-[#94A3B8] font-semibold block mb-1">
                Motivo do Contato
              </label>
              <select
                value={messageTopic}
                onChange={(e) => setMessageTopic(e.target.value)}
                className="w-full h-11 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white focus:outline-none focus:border-[#EB4E2C]"
              >
                <option value="locacao">Locação de Quadra (Mensal ou Avulsa)</option>
                <option value="torneio">Organização de Torneio Corporativo</option>
                <option value="visita">Agendar Visita Técnica no Espaço B5</option>
                <option value="outro">Parcerias e Patrocínios</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-headline uppercase text-[#94A3B8] font-semibold block mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome e Sobrenome"
                  className="w-full h-11 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white focus:outline-none focus:border-[#EB4E2C]"
                />
              </div>

              <div>
                <label className="font-headline uppercase text-[#94A3B8] font-semibold block mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="w-full h-11 px-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white focus:outline-none focus:border-[#EB4E2C]"
                />
              </div>
            </div>

            <div>
              <label className="font-headline uppercase text-[#94A3B8] font-semibold block mb-1">
                Detalhes ou Dúvidas
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex: número de convidados, data estimada, horários preferidos..."
                className="w-full p-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-white focus:outline-none focus:border-[#EB4E2C]"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 py-3 px-4 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98] transition-all"
            >
              <span>Transmitir Mensagem</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
