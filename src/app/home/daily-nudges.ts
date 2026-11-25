/**
 * Rappels de l'accueil (verification email, progression des tickets gratuits):
 * affiches une seule fois par jour, pendant quelques secondes, a la premiere
 * ouverture de l'accueil de la journee (jour local de l'appareil).
 *
 * Stockage: uniquement la date du dernier affichage (aucune donnee
 * personnelle). Si le stockage est indisponible, on affiche quand meme.
 */
export const DAILY_NUDGES_KEY = 'tg_home_nudges_day';
export const DAILY_NUDGES_VISIBLE_MS = 10_000;
/** Duree du fondu de sortie (doit correspondre au CSS .daily-nudges). */
export const DAILY_NUDGES_FADE_MS = 400;

/** "2026-11-25" selon le fuseau de l'appareil. */
export function localDayKey(now: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

type DayStore = Pick<Storage, 'getItem' | 'setItem'>;

function defaultStore(): DayStore | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

/**
 * Vrai si les rappels n'ont pas encore ete montres aujourd'hui; dans ce cas,
 * la journee est marquee comme faite (un seul affichage par jour).
 */
export function claimDailyNudges(
  now: Date = new Date(),
  store: DayStore | null = defaultStore(),
): boolean {
  const today = localDayKey(now);
  try {
    if (store?.getItem(DAILY_NUDGES_KEY) === today) return false;
    store?.setItem(DAILY_NUDGES_KEY, today);
  } catch {
    // Stockage bloque (navigation privee...): on affiche sans memoriser.
  }
  return true;
}
