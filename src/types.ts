export type TabType = 'servicos' | 'espaco-b5' | 'eventos' | 'contato';

export interface BlogPost {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  imageUrl: string;
  author: string;
}

export interface CourtSlot {
  id: string;
  name: string;
  courtType: 'futsal' | 'society' | 'churrasqueira' | 'camarote';
  availableTimes: { time: string; price: number; status: 'available' | 'reserved' }[];
  image: string;
  features: string[];
}

export interface ClientCase {
  id: string;
  title: string;
  tag: string;
  icon: string;
  client: string;
  description: string;
  stats: string;
}

export interface TournamentOption {
  id: string;
  name: string;
  modality: string;
  description: string;
  recommendedTeamCount: string;
  includesReferee: boolean;
  includesTrophies: boolean;
  basePricePerTeam: number;
}
