import React, { useState } from 'react';
import { ASSETS, BLOG_POSTS, FAQ_ITEMS } from '../../data/mockData';
import { BlogPost } from '../../types';

interface ServicosScreenProps {
  onOpenReservation: (type?: string) => void;
  onOpenArticle: (article: BlogPost) => void;
  onNavigateToTab: (tab: 'espaco-b5' | 'eventos' | 'contato') => void;
}

export const ServicosScreen: React.FC<ServicosScreenProps> = ({
  onOpenReservation,
  onOpenArticle,
  onNavigateToTab,
}) => {
  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmpresa, setFormEmpresa] = useState('');
  const [formTipo, setFormTipo] = useState('locacao');
  const [formWhatsapp, setFormWhatsapp] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const message = encodeURIComponent(
      `Olá Bola 5! Gostaria de uma proposta:\n` +
      `• Nome: ${formName}\n` +
      `• Empresa: ${formEmpresa || 'Não informado'}\n` +
      `• Tipo: ${formTipo}\n` +
      `• WhatsApp: ${formWhatsapp}`
    );

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=5511964628404&text=${message}`, '_blank');
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full text-[#e2e2e6] pb-12">
      {/* Top Ambient Glow Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#EB4E2C] to-transparent opacity-80" />

      {/* SECTION 1: HERO */}
      <section className="relative px-4 md:px-6 pt-6 pb-10 overflow-hidden max-w-4xl mx-auto w-full">
        {/* Subtle athletic geometric aura */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#EB4E2C]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-28 w-72 h-72 rounded-full bg-[#FF5733]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-4">
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#16191E] border border-white/5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#EB4E2C] animate-pulse" />
            <span className="font-headline text-[12px] uppercase tracking-wider text-white font-semibold">
              Liderança em Gestão Esportiva
            </span>
          </div>

          {/* Main Catchphrase */}
          <h1 className="font-headline text-3xl md:text-5xl uppercase text-white font-bold tracking-tight leading-[1.15]">
            Transforme <span className="text-[#EB4E2C]">Eventos</span> em Vitórias Memoráveis
          </h1>

          <p className="font-body text-base text-[#bfc7d5] max-w-2xl">
            Mais de 33 anos conectando cultura esportiva, alta performance e experiências corporativas definitivas na capital paulista.
          </p>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-xl bg-[#16191E] border border-white/5 shadow-md">
            <div className="flex flex-col items-center text-center p-1">
              <span className="font-headline text-2xl md:text-3xl text-[#EB4E2C] font-bold">33+</span>
              <span className="font-headline text-[10px] md:text-xs uppercase text-[#94A3B8] font-semibold">
                Anos de Tradição
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-1 bg-[#1a1c1f] rounded-lg border border-white/5">
              <span className="font-headline text-2xl md:text-3xl text-white font-bold">500+</span>
              <span className="font-headline text-[10px] md:text-xs uppercase text-[#94A3B8] font-semibold">
                Torneios Oficiais
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-1">
              <span className="font-headline text-2xl md:text-3xl text-[#FFB800] font-bold">100k+</span>
              <span className="font-headline text-[10px] md:text-xs uppercase text-[#94A3B8] font-semibold">
                Atletas & Líderes
              </span>
            </div>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <button
              onClick={() => onOpenReservation('locacao')}
              className="w-full sm:flex-1 h-13 py-3.5 px-4 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline text-sm font-bold uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#EB4E2C]/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">sports_soccer</span>
              <span>Reservar Quadra / Espaço B5</span>
            </button>

            <a
              className="w-full sm:flex-1 h-12 py-3 px-4 rounded-lg bg-[#16191E] text-white font-headline text-sm font-bold uppercase flex items-center justify-center gap-2 shadow-sm hover:bg-[#21262F] active:scale-[0.98] transition-all border border-white/5"
              href="https://api.whatsapp.com/send?phone=5511964628404&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Bola%205."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[#10B981] text-[20px]">chat</span>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND IDENTITY TEASER */}
      <section className="px-4 md:px-6 py-4 max-w-4xl mx-auto w-full">
        <div className="relative rounded-xl overflow-hidden bg-[#16191E] p-4 md:p-6 border border-white/5 shadow-md">
          <div className="flex items-center justify-between pb-2">
            <span className="font-headline text-xs uppercase tracking-wider text-[#EB4E2C] font-bold">
              Arena Corporativa Bola 5
            </span>
            <span className="material-symbols-outlined text-[#94A3B8] text-[18px]">verified</span>
          </div>

          <div
            onClick={() => onNavigateToTab('espaco-b5')}
            className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden my-2 cursor-pointer group"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              alt="Espaço B5 Oficial arena com gramado e iluminação esportiva"
              src={ASSETS.arenaHero}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-headline text-base md:text-xl uppercase font-bold text-white leading-tight">
                  Espaço B5 Oficial
                </span>
                <span className="font-body text-xs md:text-sm text-[#94A3B8]">
                  São Paulo • Interlagos
                </span>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#EB4E2C] text-white font-headline text-xs uppercase font-bold tracking-wider">
                Ao Vivo
              </span>
            </div>
          </div>

          <p className="font-body text-sm text-[#bfc7d5]">
            Estrutura de ponta com vestiários climatizados, área gourmet, churrasqueiras integradas e camarotes VIP para sua confraternização ou competição.
          </p>
        </div>
      </section>

      {/* SECTION 3: CORE PILLARS & SERVICES */}
      <section className="px-4 md:px-6 py-8 flex flex-col gap-5 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-1">
          <span className="font-headline text-xs uppercase text-[#EB4E2C] tracking-widest font-bold">
            O Método & Infraestrutura
          </span>
          <h2 className="font-headline text-2xl md:text-3xl uppercase text-white font-bold leading-tight">
            Soluções Esportivas de Alto Impacto
          </h2>
          <p className="font-body text-sm text-[#bfc7d5]">
            Desenvolvido para times corporativos que exigem organização milimétrica, arbitragem homologada e ambiente premium.
          </p>
        </div>

        {/* Service Card 1: Locação de Quadras */}
        <div className="rounded-xl bg-[#16191E] p-4 md:p-6 flex flex-col gap-3.5 border border-white/5 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#282a2d] flex items-center justify-center text-[#EB4E2C] shrink-0">
              <span className="material-symbols-outlined text-[26px]">stadium</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-xs text-[#94A3B8] uppercase tracking-wider font-semibold">
                Espaço B5
              </span>
              <h3 className="font-headline text-lg md:text-xl text-white uppercase font-bold">
                Locação de Quadras & Complexo
              </h3>
            </div>
          </div>

          <div className="w-full h-40 md:h-52 rounded-lg overflow-hidden relative">
            <img
              className="w-full h-full object-cover"
              alt="Quadras sintéticas e de piso amortecido Bola 5"
              src={ASSETS.courtRental}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16191E] via-transparent to-transparent" />
          </div>

          <ul className="flex flex-col gap-2 font-body text-sm text-[#bfc7d5]">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Gramados sintéticos certificados e piso amortecido</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Churrasqueira gourmet, bar integrado e camarotes</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Vestiários completos com duchas aquecidas</span>
            </li>
          </ul>

          <button
            onClick={() => onOpenReservation('locacao')}
            className="mt-1 py-2.5 px-4 rounded bg-[#282a2d] hover:bg-[#21262F] text-[#EB4E2C] font-headline text-xs uppercase font-bold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#EB4E2C]/20"
          >
            <span>Solicitar Horário Disponível</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Service Card 2: Eventos Corporativos */}
        <div className="rounded-xl bg-[#16191E] p-4 md:p-6 flex flex-col gap-3.5 border border-white/5 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#282a2d] flex items-center justify-center text-[#EB4E2C] shrink-0">
              <span className="material-symbols-outlined text-[26px]">groups</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-xs text-[#94A3B8] uppercase tracking-wider font-semibold">
                Team Building
              </span>
              <h3 className="font-headline text-lg md:text-xl text-white uppercase font-bold">
                Eventos & Dinâmicas Corporativas
              </h3>
            </div>
          </div>

          <div className="w-full h-40 md:h-52 rounded-lg overflow-hidden relative">
            <img
              className="w-full h-full object-cover"
              alt="Eventos de integração e dinâmicas corporativas Bola 5"
              src={ASSETS.corporateEvents}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16191E] via-transparent to-transparent" />
          </div>

          <ul className="flex flex-col gap-2 font-body text-sm text-[#bfc7d5]">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Dinâmicas de liderança, sinergia e superação</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Convenções integradas com buffet & som profissional</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Ativações personalizadas para grandes marcas</span>
            </li>
          </ul>

          <button
            onClick={() => onOpenReservation('corporativo')}
            className="mt-1 py-2.5 px-4 rounded bg-[#282a2d] hover:bg-[#21262F] text-[#EB4E2C] font-headline text-xs uppercase font-bold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#EB4E2C]/20"
          >
            <span>Planejar Evento Corporativo</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Service Card 3: Torneios & Copas */}
        <div className="rounded-xl bg-[#16191E] p-4 md:p-6 flex flex-col gap-3.5 border border-white/5 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#282a2d] flex items-center justify-center text-[#EB4E2C] shrink-0">
              <span className="material-symbols-outlined text-[26px]">military_tech</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-xs text-[#94A3B8] uppercase tracking-wider font-semibold">
                Competições
              </span>
              <h3 className="font-headline text-lg md:text-xl text-white uppercase font-bold">
                Organização de Torneios & Copas
              </h3>
            </div>
          </div>

          <div className="w-full h-40 md:h-52 rounded-lg overflow-hidden relative">
            <img
              className="w-full h-full object-cover"
              alt="Troféus e arbitragem de torneios esportivos Bola 5"
              src={ASSETS.tournaments}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16191E] via-transparent to-transparent" />
          </div>

          <ul className="flex flex-col gap-2 font-body text-sm text-[#bfc7d5]">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Copa Bola Cinco de Futsal, Society e Tranca</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Arbitragem federada, súmula digital e tabelas em tempo real</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#10B981] text-[18px]">check_circle</span>
              <span>Cerimônias de premiação, troféus e cobertura fotográfica</span>
            </li>
          </ul>

          <button
            onClick={() => onOpenReservation('torneio')}
            className="mt-1 py-2.5 px-4 rounded bg-[#282a2d] hover:bg-[#21262F] text-[#EB4E2C] font-headline text-xs uppercase font-bold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#EB4E2C]/20"
          >
            <span>Organizar Campeonato</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* SECTION 4: CLIENT CASES & CREDIBILITY */}
      <section className="px-4 md:px-6 py-8 bg-[#0c0e11] border-y border-white/5">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col gap-1 mb-5">
            <span className="font-headline text-xs uppercase text-[#EB4E2C] tracking-wider font-bold">
              Histórico Comprovado
            </span>
            <h2 className="font-headline text-2xl md:text-3xl uppercase text-white font-bold">
              Cases & Parcerias de Sucesso
            </h2>
            <p className="font-body text-sm text-[#bfc7d5]">
              Empresas líderes e grandes clubes confiam na curadoria e na infraestrutura do Bola 5 para suas temporadas.
            </p>
          </div>

          {/* Interactive Cases Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3.5 rounded-lg bg-[#16191E] border border-white/5 flex flex-col gap-1 hover:border-[#EB4E2C]/30 transition-all">
              <div className="flex items-center justify-between text-[#EB4E2C]">
                <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                <span className="font-headline text-[11px] text-[#94A3B8]">2024 / 2019</span>
              </div>
              <span className="font-headline text-sm md:text-base font-bold leading-tight text-white uppercase">
                Jogos ALPA
              </span>
              <span className="font-body text-xs text-[#bfc7d5]">Alpargatas Corporativo</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#16191E] border border-white/5 flex flex-col gap-1 hover:border-[#EB4E2C]/30 transition-all">
              <div className="flex items-center justify-between text-[#EB4E2C]">
                <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                <span className="font-headline text-[11px] text-[#94A3B8]">Anual</span>
              </div>
              <span className="font-headline text-sm md:text-base font-bold leading-tight text-white uppercase">
                ChrisCup
              </span>
              <span className="font-body text-xs text-[#bfc7d5]">Edições 2023 a 2026</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#16191E] border border-white/5 flex flex-col gap-1 hover:border-[#EB4E2C]/30 transition-all">
              <div className="flex items-center justify-between text-[#EB4E2C]">
                <span className="material-symbols-outlined text-[20px]">maps_ar</span>
                <span className="font-headline text-[11px] text-[#94A3B8]">Especial</span>
              </div>
              <span className="font-headline text-sm md:text-base font-bold leading-tight text-white uppercase">
                EC Pinheiros
              </span>
              <span className="font-body text-xs text-[#bfc7d5]">Torneios de Tranca & Futsal</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#16191E] border border-white/5 flex flex-col gap-1 hover:border-[#EB4E2C]/30 transition-all">
              <div className="flex items-center justify-between text-[#EB4E2C]">
                <span className="material-symbols-outlined text-[20px]">local_cafe</span>
                <span className="font-headline text-[11px] text-[#94A3B8]">OfnerCup</span>
              </div>
              <span className="font-headline text-sm md:text-base font-bold leading-tight text-white uppercase">
                Ofner Brasil
              </span>
              <span className="font-body text-xs text-[#bfc7d5]">Torneio Empresarial</span>
            </div>
          </div>

          {/* Highlight Quote / Testimonial Card */}
          <div className="mt-5 p-5 md:p-6 rounded-xl bg-[#16191E] relative overflow-hidden border border-white/5 shadow-lg">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#EB4E2C]/10 pointer-events-none" />
            <div className="flex items-center gap-1 text-[#FFB800] mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[18px]">
                  star
                </span>
              ))}
            </div>
            <p className="font-body text-sm md:text-base text-white italic leading-relaxed">
              "Mais do que locar quadras, o Bola 5 entrega coordenação de torneio impecável, segurança para nossa equipe e um clima acolhedor incomparável no Espaço B5."
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-[#333538] flex items-center justify-center font-bold text-[#EB4E2C] font-headline text-sm shrink-0">
                CB
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xs md:text-sm font-bold text-white uppercase">
                  Coordenação de Ligas Corporativas
                </span>
                <span className="font-headline text-[11px] text-[#94A3B8]">
                  Copa Interempresarial Bola Cinco
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BLOG & CONTEÚDO */}
      <section className="px-4 md:px-6 py-8 flex flex-col gap-5 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#16191E] border border-white/5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#EB4E2C] animate-pulse" />
            <span className="font-headline text-xs uppercase tracking-wider text-[#EB4E2C] font-bold">
              Conteúdo & Insights
            </span>
          </div>
          <h2 className="font-headline text-2xl md:text-3xl uppercase text-white font-bold mt-1">
            Blog Bola 5
          </h2>
          <p className="font-body text-sm text-[#bfc7d5]">
            Artigos sobre liderança corporativa, gestão de torneios e bastidores do esporte.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Artigo 1: Destaque */}
          <article className="rounded-xl bg-[#16191E] overflow-hidden border border-white/5 shadow-md flex flex-col group">
            <div
              className="w-full h-48 md:h-56 relative overflow-hidden cursor-pointer"
              onClick={() => onOpenArticle(BLOG_POSTS[0])}
            >
              <img
                alt="Corporate team building through sports"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={BLOG_POSTS[0].imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16191E] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#EB4E2C] text-white font-headline text-[11px] uppercase tracking-wider font-bold shadow-sm">
                {BLOG_POSTS[0].category}
              </span>
            </div>

            <div className="p-4 md:p-5 flex flex-col gap-2">
              <h3
                onClick={() => onOpenArticle(BLOG_POSTS[0])}
                className="font-headline text-base md:text-lg text-white uppercase font-bold leading-snug hover:text-[#EB4E2C] transition-colors cursor-pointer"
              >
                {BLOG_POSTS[0].title}
              </h3>
              <p className="font-body text-sm text-[#bfc7d5]">
                {BLOG_POSTS[0].excerpt}
              </p>
              <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#333538] text-[#94A3B8] font-body text-xs">
                <span>{BLOG_POSTS[0].date} • {BLOG_POSTS[0].readTime}</span>
                <button
                  onClick={() => onOpenArticle(BLOG_POSTS[0])}
                  className="font-headline text-xs font-bold text-[#EB4E2C] uppercase flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Ler artigo</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>

          {/* Artigo 2 */}
          <article className="rounded-xl bg-[#16191E] overflow-hidden border border-white/5 shadow-md flex flex-col group">
            <div
              className="w-full h-44 md:h-52 relative overflow-hidden cursor-pointer"
              onClick={() => onOpenArticle(BLOG_POSTS[1])}
            >
              <img
                alt="Sports tournament trophies and schedule board"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={BLOG_POSTS[1].imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16191E] via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#282a2d] text-[#EB4E2C] font-headline text-[11px] uppercase tracking-wider font-bold shadow-sm border border-white/5">
                {BLOG_POSTS[1].category}
              </span>
            </div>

            <div className="p-4 md:p-5 flex flex-col gap-2">
              <h3
                onClick={() => onOpenArticle(BLOG_POSTS[1])}
                className="font-headline text-base md:text-lg text-white uppercase font-bold leading-snug hover:text-[#EB4E2C] transition-colors cursor-pointer"
              >
                {BLOG_POSTS[1].title}
              </h3>
              <p className="font-body text-sm text-[#bfc7d5]">
                {BLOG_POSTS[1].excerpt}
              </p>
              <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#333538] text-[#94A3B8] font-body text-xs">
                <span>{BLOG_POSTS[1].date} • {BLOG_POSTS[1].readTime}</span>
                <button
                  onClick={() => onOpenArticle(BLOG_POSTS[1])}
                  className="font-headline text-xs font-bold text-[#EB4E2C] uppercase flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Ler artigo</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>

          {/* Artigo 3: Compacto */}
          <article className="rounded-xl bg-[#16191E] p-4 md:p-5 border border-white/5 shadow-md flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-headline text-[11px] text-[#EB4E2C] uppercase tracking-wider font-bold">
                {BLOG_POSTS[2].category}
              </span>
              <span className="material-symbols-outlined text-[#94A3B8] text-[18px]">fitness_center</span>
            </div>
            <h3
              onClick={() => onOpenArticle(BLOG_POSTS[2])}
              className="font-headline text-base md:text-lg text-white uppercase font-bold leading-snug hover:text-[#EB4E2C] transition-colors cursor-pointer"
            >
              {BLOG_POSTS[2].title}
            </h3>
            <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#333538] text-[#94A3B8] font-body text-xs">
              <span>{BLOG_POSTS[2].date} • {BLOG_POSTS[2].readTime}</span>
              <button
                onClick={() => onOpenArticle(BLOG_POSTS[2])}
                className="font-headline text-xs font-bold text-[#EB4E2C] uppercase flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              >
                <span>Ler artigo</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </article>
        </div>

        {/* CTA Blog Completo */}
        <button
          onClick={() => onOpenArticle(BLOG_POSTS[0])}
          className="w-full h-12 py-3 px-4 rounded-lg bg-[#282a2d] hover:bg-[#21262F] text-white font-headline text-xs font-bold uppercase flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-[0.98] border border-white/5 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[#EB4E2C] text-[20px]">newspaper</span>
          <span>Acessar Artigos do Blog</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </section>

      {/* SECTION 6: INFRASTRUCTURE & LOCATION */}
      <section className="px-4 md:px-6 py-8 flex flex-col gap-5 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-1">
          <span className="font-headline text-xs uppercase text-[#EB4E2C] tracking-widest font-bold">
            Endereço & Acesso
          </span>
          <h2 className="font-headline text-2xl md:text-3xl uppercase text-white font-bold">
            Conheça o Espaço B5
          </h2>
          <p className="font-body text-sm text-[#bfc7d5]">
            Localização estratégica na Zona Sul de São Paulo com fácil estacionamento e suporte dedicado.
          </p>
        </div>

        {/* Map representation card */}
        <div className="rounded-xl overflow-hidden bg-[#16191E] border border-white/5 shadow-md">
          <div
            className="w-full h-48 md:h-60 bg-cover bg-center relative"
            style={{ backgroundImage: `url('${ASSETS.mapBackground}')` }}
          >
            <div className="absolute inset-0 bg-[#0B0C0E]/30" />
            <div className="absolute top-3 left-3 bg-[#0B0C0E]/85 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm border border-white/10">
              <span className="material-symbols-outlined text-[#EB4E2C] text-[18px]">location_on</span>
              <span className="font-headline text-[11px] text-white uppercase font-bold">
                Jd. Ipanema • SP
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6 flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="font-headline text-lg md:text-xl font-bold text-white uppercase">
                Rua Antônio Mariano, 269
              </span>
              <span className="font-body text-xs md:text-sm text-[#94A3B8]">
                Jardim Ipanema, São Paulo - SP, CEP 04783-000
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2 text-[#bfc7d5] font-body text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#EB4E2C] text-[18px]">schedule</span>
                <span>09h00 às 18h00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#EB4E2C] text-[18px]">call</span>
                <span>(11) 5523-1100</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-1">
              <a
                className="flex-1 py-3 px-4 rounded-lg bg-[#282a2d] hover:bg-[#21262F] text-white font-headline text-xs font-bold uppercase text-center flex items-center justify-center gap-1.5 transition-colors border border-white/5"
                href="https://goo.gl/maps/HARvkzx2iAp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">directions</span>
                <span>Como Chegar</span>
              </a>

              <a
                className="flex-1 py-3 px-4 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline text-xs font-bold uppercase text-center flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                href="https://api.whatsapp.com/send?phone=5511964628404&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20de%20como%20chegar%20ao%20Espa%C3%A7o%20B5."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: QUICK BUDGET & CONTACT FORM */}
      <section className="px-4 md:px-6 py-10 bg-[#16191E] border-y border-white/5" id="orcamento">
        <div className="max-w-xl mx-auto w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1 text-center items-center">
            <div className="w-12 h-12 rounded-full bg-[#282a2d] flex items-center justify-center text-[#EB4E2C] mb-1">
              <span className="material-symbols-outlined text-[26px]">edit_calendar</span>
            </div>
            <span className="font-headline text-xs uppercase tracking-widest text-[#EB4E2C] font-bold">
              Atendimento Exclusivo
            </span>
            <h2 className="font-headline text-2xl md:text-3xl uppercase text-white font-bold">
              Vamos Conversar?
            </h2>
            <p className="font-body text-xs md:text-sm text-[#bfc7d5] max-w-sm">
              Preencha os dados abaixo e nossa equipe técnica entrará em contato em menos de 15 minutos úteis.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-headline text-xs uppercase text-[#94A3B8] font-semibold" htmlFor="nome">
                Nome Completo *
              </label>
              <input
                id="nome"
                required
                type="text"
                placeholder="Ex: Roberto Silva"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-[#0B0C0E] text-white placeholder:text-[#555] border border-white/5 focus:outline-none focus:border-[#EB4E2C] transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-headline text-xs uppercase text-[#94A3B8] font-semibold" htmlFor="empresa">
                Empresa ou Equipe
              </label>
              <input
                id="empresa"
                type="text"
                placeholder="Ex: Alpargatas, Grupo XP, Time Amador"
                value={formEmpresa}
                onChange={(e) => setFormEmpresa(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-[#0B0C0E] text-white placeholder:text-[#555] border border-white/5 focus:outline-none focus:border-[#EB4E2C] transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-headline text-xs uppercase text-[#94A3B8] font-semibold" htmlFor="tipo_servico">
                Tipo de Necessidade *
              </label>
              <select
                id="tipo_servico"
                required
                value={formTipo}
                onChange={(e) => setFormTipo(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-[#0B0C0E] text-white border border-white/5 focus:outline-none focus:border-[#EB4E2C] transition-colors text-sm"
              >
                <option value="locacao">Locação Quadra / Espaço B5</option>
                <option value="corporativo">Evento Corporativo / Team Building</option>
                <option value="torneio">Gestão de Copa / Torneio Esportivo</option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-headline text-xs uppercase text-[#94A3B8] font-semibold" htmlFor="whatsapp">
                WhatsApp Profissional *
              </label>
              <input
                id="whatsapp"
                required
                type="tel"
                placeholder="(11) 99999-9999"
                value={formWhatsapp}
                onChange={(e) => setFormWhatsapp(e.target.value)}
                className="w-full h-12 px-4 rounded-lg bg-[#0B0C0E] text-white placeholder:text-[#555] border border-white/5 focus:outline-none focus:border-[#EB4E2C] transition-colors text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full h-13 mt-2 py-3.5 px-4 rounded-lg bg-[#EB4E2C] hover:bg-[#FF5733] text-white font-headline text-xs md:text-sm uppercase font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#EB4E2C]/25 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Enviar Solicitação de Proposta</span>
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>

            {formSubmitted && (
              <div className="p-3.5 rounded-lg bg-[#21262F] border border-[#10B981] text-[#10B981] flex items-center gap-2.5 mt-2 animate-fade-in">
                <span className="material-symbols-outlined text-[22px] shrink-0">check_circle</span>
                <span className="font-body text-xs text-white">
                  Recebido com sucesso! Conectando com nossa equipe técnica pelo WhatsApp...
                </span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section className="px-4 md:px-6 py-8 flex flex-col gap-4 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-1">
          <span className="font-headline text-xs uppercase text-[#EB4E2C] tracking-widest font-bold">
            Dúvidas Frequentes
          </span>
          <h2 className="font-headline text-2xl md:text-3xl uppercase text-white font-bold">
            Perguntas Rápidas
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#16191E] border border-white/5 rounded-xl p-4 shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left cursor-pointer font-headline text-sm md:text-base font-bold text-white uppercase"
                >
                  <span className="pr-3">{item.question}</span>
                  <span
                    className={`material-symbols-outlined text-[#EB4E2C] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 font-body text-xs md:text-sm text-[#bfc7d5] leading-relaxed border-t border-white/5 pt-3">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: CORPORATE FOOTER */}
      <footer className="px-4 md:px-6 pt-8 pb-4 bg-[#0B0C0E] border-t border-white/5 flex flex-col gap-4 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-headline text-base md:text-lg text-white font-bold uppercase">
              Bola 5 Esportes
            </span>
            <span className="font-headline text-xs text-[#94A3B8]">
              Desde 1991 • São Paulo, Brasil
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#94A3B8]">
            <a
              className="w-9 h-9 rounded-full bg-[#16191E] border border-white/5 flex items-center justify-center hover:text-[#EB4E2C] transition-colors"
              href="http://www.facebook.com/BolaCincoEsportes"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Facebook Bola 5"
            >
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a
              className="w-9 h-9 rounded-full bg-[#16191E] border border-white/5 flex items-center justify-center hover:text-[#EB4E2C] transition-colors"
              href="https://www.instagram.com/bolacinco"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram Bola 5"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-[#333538]" />

        <div className="flex flex-col gap-1 text-[11px] text-[#94A3B8] font-body">
          <span>Bola 5 Esportes LTDA EPP • CNPJ registrado</span>
          <span>Rua Antonio Mariano, nº 269 - Jd. Ipanema - São Paulo - SP</span>
          <span>Atendimento: 9h00 às 18h00 • contato@bola5.com.br</span>
        </div>
      </footer>
    </div>
  );
};
