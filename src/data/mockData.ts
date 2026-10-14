import { BlogPost, ClientCase, CourtSlot } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn5HwOkj4C3sGLCu7WIW79d7h9gWEE7DUaRB3jUFP-aHJSAiLw96FSFQl8SKjLt6ukm3sO1SOY9VWA-bgZOmgm6di31CuanhL_KD7loMgwG3OFdL9Q4AfxkDcFYcVo4T53ksfP5a8QGWC9H-z8Q_iXCzmoF1J-8TFGqNPJ1y4fr4e5zTtPN5pV0tmsWknTYN9EVpRr_luopnloKj-rHTjVhq4H-b7lZVSBjRXEJP2r8wY_KrzRLUHS',
  arenaHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArh9fYpYl6H8g8fmX0pMPMDTSueN-61lJVjerCB-tsn8CbG5k9EgtIcHIEtQv_1vz8knLN5wVdlkGNB80B68_WAlzS8GxOL4scdYdEjGORJSwpbazvI442Tr0rL1nmLDqzKAHf1OLJqJrp5fFF20wNLxyLnHQStfKYQ061UwlF6h1VrS5p0oDSK97977nHprT5ltl7YoPURyMX7zDcIMSybGrwkGu9Hat8mVBmMA28bithupBNaLfL',
  courtRental: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhUVbqyO-xumxo24vAdbHzyx6_u-NVnhc8DC6p_9mGacHweX8JGk8ZXhzcPbjBvK3_wJsoo5uOdnGw8oLAGoTMqLUUBXxNjtk-qD2lHpONacdDsBiWs4kbejE5svYSM5ZSReRnXdFHBTWVOEvfDRJdGjLTb3ogngP_2leVAIGPheHz6lvlSXWRt3sbLV6Hn_aqJ9MbXZOKtthqyuvoCK3Q4Z1Buxjp3Vb1yP8c-WKtWn1fKOwmihXi',
  corporateEvents: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-VY4t8SGRp1szd1eDka1hW7h_tsoQ5Xa57NtyRek4e3orhqPZbcq8DiQ4ruoMIh-754vMUs0FBhJwbVYf2AFkRVCQIYGo3ll1kmH81C30dgFChTV8x20BdQvKhdxWmhKPyCkEgPtythM0kRTHlZyZtFHXt1r4vNBVDbcG6ElQnJNrQLaydacls3jGsb4It0RW4gT1KuYNV4WGlRmThfaWrEpVi7ibCKzQbraTdp5sp2PbkK2FBGKb',
  tournaments: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJJhhoPzUt94SXu5K4NLk5QMHK-Qev6IHH0CCWH1yTx0LrhbFt1uCFz-pDEyIJicvhbu7lcBGqEBVKxQ6g_FmknB_N-O_eEC8sXls_lkrCSH2dhbH8Lel7WxrlVynSfTRnxQl-RvKSyS7ihXZ435kbHsx8Ei0YIndJqmS64RRH-3nBFetk_SrzKMvZSROHwM1BWjJGNuhMfoUnd93ozbdDPseg3Y2qabG_ozu4yaRfmDbSe-OuOYMl',
  blogTurnover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQE9_DBfhuEsjdI2o49MiORUiI8hWvzyQflePPruflkMEwtt5Rw9uzp657vd60T2scuBfUyeYYYlRAp5KdquSNr3ONTUSDLDgyF1-JwBPBwsYW_ggYP0Ze4qDiakMww4z1oBWfjcbxEpN9tWc-jLhnZoSgA3pdvJFcYYO1Oyp2Pyg8PN4KfWevd3a8017e2vVCoSFNT6sh7q8MhnQa4dYYXkKFV0qWJDZ2rWnKY_NIHxa74ZynTKPa',
  blogArbitragem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6VtmBmmUYn6aQULP7cl19m64aSUVDnDxw0L5bj8kfSOGPx4QnYUhW48TWg3CfG0dkxWVOG65Q8I9hsKf1LWkWD60AayRjkoiUqgG8j4hHV3N18xDWyaX5mS8ga9Xo3S7p07dAKEFKpxnBCDCw1p38Lse5CWQFUrs4ct_DtyqEo07vbLxRnlRHQYQySy8ReJFMpJc4CTa9HM1a8Ruv93AawWuvx9xupwNdA-_UmC883m0EF0yjTgL3',
  mapBackground: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRlPlHS465YS13M1QieEh_eWTuL8oQeah5gWVCCVrJyJDgzTPKf9DnYpRQwh6tk8qitAd3eRooJRQmWtP3IYDPn8VSZ9HJJXOG23_gocBJPl_MFE-MKG7c9InKpPTRK_gIf-3sbpj-xkiqVYny-S0RARoFhsD4t20I0X6xtcLQcIUz5eK3EP7cvp4Gr5wEIJcBa-16ET_yV30FvOO-q22Xn-r34ca-VaBHHpK2BX8MraWvWbSqlLUr'
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'turnover-esporte-corporativo',
    category: 'Cultura & RH',
    categoryColor: '#EB4E2C',
    title: 'Como o esporte corporativo reduz o turnover e forma grandes líderes',
    excerpt: 'Entenda como dinâmicas esportivas e copas internas aceleram a sinergia e integração entre diferentes departamentos.',
    readTime: 'Leitura de 4 min',
    date: '04 Mar 2025',
    imageUrl: ASSETS.blogTurnover,
    author: 'Equipe de Gestão Bola 5',
    content: [
      'Em um mercado cada vez mais competitivo, a retenção de talentos tornou-se a métrica de sobrevivência para as principais companhias.',
      'O esporte corporativo vai muito além do simples entretenimento de final de semana: ele funciona como um catalisador de empatia, quebra de silos hierárquicos e construção de resiliência sob pressão.',
      'Quando diretores, estagiários e gerentes dividem o mesmo campo de jogo ou a mesma bancada de torcida, as barreiras de comunicação desaparecem. O sentimento de pertencimento ao time se traduz em lealdade à organização.',
      'Estudos internos realizados com mais de 40 empresas parceiras do Bola 5 mostram uma redução de até 27% nos índices de turnover em departamentos que implementaram ligas esportivas e campeonatos semestrais integrados.'
    ]
  },
  {
    id: 'guia-organizacao-arbitragem',
    category: 'Gestão Esportiva',
    categoryColor: '#EB4E2C',
    title: 'Guia de organização: do regulamento à arbitragem federada',
    excerpt: 'O passo a passo para planejar um campeonato impecável de Futsal, Society ou Tranca para sua empresa ou clube.',
    readTime: 'Leitura de 6 min',
    date: '28 Fev 2025',
    imageUrl: ASSETS.blogArbitragem,
    author: 'Comissão Técnica Bola 5',
    content: [
      'Organizar um torneio amador ou corporativo com padrão profissional exige planejamento de alta precisão.',
      '1. Regulamento Claro e Transparente: Critérios de desempate, tempo de tolerância para W.O., transferências entre equipes e conduta disciplinar precisam ser documentados e homologados antes do pontapé inicial.',
      '2. Arbitragem Federada e Isenção: Contar com juízes cadastrados em federações oficiais previne conflitos em lances capitais e garante seriedade à disputa.',
      '3. Tecnologia e Súmula em Tempo Real: No Bola 5, utilizamos súmulas eletrônicas e tabelas atualizadas imediatamente após o apito final, permitindo que todos acompanhem classificação, artilharia e cartões.',
      '4. Cerimonial e Confraternização: A premiação com troféus de alto nível e um espaço acolhedor com churrasqueira gourmet fecha o ciclo esportivo com chave de ouro.'
    ]
  },
  {
    id: 'recuperacao-muscular-atletas',
    category: 'Performance & Saúde',
    categoryColor: '#EB4E2C',
    title: 'Recuperação muscular e dicas de preparação para atletas amadores',
    excerpt: 'Dicas práticas para manter o rendimento nos jogos de meio de semana e evitar lesões articulares e contraturas.',
    readTime: 'Leitura de 3 min',
    date: '22 Fev 2025',
    imageUrl: ASSETS.courtRental,
    author: 'Fisioterapia Esportiva B5',
    content: [
      'A transição da rotina de escritório em frente ao computador para uma partida de alta intensidade exige cuidados preventivos específicos.',
      'O aquecimento dinâmico de 10 minutos (mobilidade de tornozelo, ativação de glúteos e acelerações curtas) reduz em mais de 60% a incidência de estiramentos musculares.',
      'A escolha do calçado adequado para piso amortecido ou gramado sintético também é determinante para a saúde dos ligamentos do joelho.',
      'No pós-jogo, hidratação rápida com eletrólitos e 15 minutos de desaquecimento são indispensáveis para garantir que o atleta esteja 100% recuperado para o dia útil seguinte.'
    ]
  }
];

export const CLIENT_CASES: ClientCase[] = [
  {
    id: 'alpa',
    title: 'Jogos ALPA',
    tag: '2024 / 2019',
    icon: 'workspace_premium',
    client: 'Alpargatas Corporativo',
    description: 'Mais de 12 equipes em modalidades de Futsal e Tranca com integração total entre as fábricas e matriz.',
    stats: '12 Equipes • 180 Atletas'
  },
  {
    id: 'chriscup',
    title: 'ChrisCup',
    tag: 'Anual',
    icon: 'emoji_events',
    client: 'Edições 2023 a 2026',
    description: 'Torneio tradicional de longa data com transmissão ao vivo, arquibancada personalizada e camarotes.',
    stats: '4 Edições • 32 Jogos'
  },
  {
    id: 'pinheiros',
    title: 'EC Pinheiros',
    tag: 'Especial',
    icon: 'maps_ar',
    client: 'Torneios de Tranca & Futsal',
    description: 'Etapas seletivas com regulamento oficial, súmula eletrônica e troféus de precisão para associados.',
    stats: '360 Participantes'
  },
  {
    id: 'ofner',
    title: 'Ofner Brasil',
    tag: 'OfnerCup',
    icon: 'local_cafe',
    client: 'Torneio Empresarial',
    description: 'Confraternização de final de ano com torneio relâmpago, churrasco gourmet integrado e DJ oficial.',
    stats: '100% de Satisfação'
  }
];

export const COURT_SLOTS: CourtSlot[] = [
  {
    id: 'quadra-1',
    name: 'Quadra 1 - Futsal & Society Amortecido',
    courtType: 'futsal',
    image: ASSETS.courtRental,
    features: ['Piso amortecido profissional', 'Iluminação LED sem sombras', 'Placar eletrônico wireless', 'Bancos de reservas acolchoados'],
    availableTimes: [
      { time: '08:00 - 09:00', price: 210, status: 'available' },
      { time: '12:00 - 13:00', price: 190, status: 'available' },
      { time: '18:00 - 19:00', price: 280, status: 'reserved' },
      { time: '19:00 - 20:00', price: 310, status: 'reserved' },
      { time: '20:00 - 21:00', price: 310, status: 'available' },
      { time: '21:00 - 22:00', price: 290, status: 'available' },
    ]
  },
  {
    id: 'quadra-2',
    name: 'Quadra 2 - Sintético Society Premium',
    courtType: 'society',
    image: ASSETS.arenaHero,
    features: ['Grama sintética monofilamento 50mm', 'Redes de proteção reforçadas', 'Vestiário exclusivo integrado', 'Área lateral para torcida'],
    availableTimes: [
      { time: '09:00 - 10:00', price: 220, status: 'available' },
      { time: '14:00 - 15:00', price: 200, status: 'available' },
      { time: '17:00 - 18:00', price: 260, status: 'available' },
      { time: '18:00 - 19:00', price: 320, status: 'reserved' },
      { time: '19:00 - 20:00', price: 320, status: 'available' },
      { time: '21:00 - 22:00', price: 300, status: 'available' },
    ]
  },
  {
    id: 'quiosque-gourmet',
    name: 'Espaço B5 Gourmet & Churrasqueira',
    courtType: 'churrasqueira',
    image: ASSETS.corporateEvents,
    features: ['Churrasqueira em alvenaria', 'Geladeiras industriais', 'Mesas e cadeiras inclusas', 'Capacidade para até 80 pessoas'],
    availableTimes: [
      { time: 'Turno Diurno (11h às 16h)', price: 850, status: 'available' },
      { time: 'Turno Noturno (17h às 23h)', price: 1100, status: 'available' },
      { time: 'Diária Completa (11h às 23h)', price: 1750, status: 'available' }
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona a locação de quadras avulsas ou mensais?',
    answer: 'Atendemos tanto horários fixos corporativos/mensalistas quanto reservas avulsas de finais de semana. A locação inclui acesso completo aos vestiários climatizados, chuveiros aquecidos e suporte presencial de nossa equipe.'
  },
  {
    question: 'Vocês oferecem estrutura completa para churrasco e festa?',
    answer: 'Sim, o Espaço B5 dispõe de quiosques gourmet, churrasqueiras independentes, geladeiras industriais, freezers e jogos de mesas confortáveis para confraternizações familiares e de empresas de pequeno a grande porte.'
  },
  {
    question: 'O Bola 5 organiza o campeonato do início ao fim?',
    answer: 'Sim! Cuidamos de todo o processo: elaboração do regulamento oficial, quadro de arbitragem homologada e federada, súmula digital e tabelas atualizadas online, cerimônia de premiação com troféus de luxo e cobertura fotográfica profissional.'
  },
  {
    question: 'É possível agendar uma visita técnica no Espaço B5?',
    answer: 'Com certeza! Nosso coordenador operacional está disponível de segunda a sexta, das 9h às 18h, e aos sábados para apresentar as instalações, vestiários e opções de cenografia esportiva para sua empresa.'
  }
];
