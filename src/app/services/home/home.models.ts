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
}

export interface DrawCard {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;

  sold?: number;
  total?: number;

  endsAt?: string;       // ISO date si tu as
  badgeText?: string;    // ex: "Closing in 2h"
  badgeType?: 'danger' | 'warn' | 'hot';
}
