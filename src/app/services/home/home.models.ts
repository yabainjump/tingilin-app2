export interface HomeCategory {
  id: string;
  label: string;
}

export interface UserSummary {
  id: string;
  firstName: string;
  lastName?: string;
  balance?: number;
  avatarUrl?: string;
  avatar?: string; 
}

export interface DrawCard {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;

  sold?: number;
  total?: number;

  endsAt?: string;       
  endAt?: string;        

  badgeText?: string;
  badgeType?: 'danger' | 'warn' | 'hot';

  ticketPrice?: number;  
  currency?: string;     
  status?: 'DRAFT' | 'LIVE' | 'CLOSED' | 'DRAWN';
}

