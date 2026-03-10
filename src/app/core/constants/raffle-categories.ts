export interface RaffleCategoryOption {
  id: string;
  label: string;
}

export const RAFFLE_CATEGORY_OPTIONS: RaffleCategoryOption[] = [
  { id: 'GENERAL', label: 'General' },
  { id: 'ELECTRONICS', label: 'Electronique' },
  { id: 'VEHICLES', label: 'Vehicules' },
  { id: 'HOME', label: 'Maison' },
  { id: 'GAMING', label: 'Gaming' },
  { id: 'FASHION', label: 'Mode' },
  { id: 'SERVICES', label: 'Services' },
];

export const HOME_CATEGORY_OPTIONS: RaffleCategoryOption[] = [
  { id: 'all', label: 'All' },
  ...RAFFLE_CATEGORY_OPTIONS,
];

export function raffleCategoryLabel(categoryId: string | null | undefined): string {
  const raw = String(categoryId ?? '').trim().toUpperCase();
  if (!raw) return 'General';
  const match = RAFFLE_CATEGORY_OPTIONS.find((item) => item.id === raw);
  if (match) return match.label;
  return raw.replace(/_/g, ' ');
}
