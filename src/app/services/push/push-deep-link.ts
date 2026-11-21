/** Route de repli quand le deepLink d'une notification est absent ou suspect. */
export const PUSH_FALLBACK_ROUTE = '/tabs/notifications';

// Uniquement des routes internes sous /tabs: pas de schema (https:, javascript:),
// pas d'URL protocole-relative (//evil), pas de '.', '%', '?', '#', ni '\'.
const PUSH_DEEP_LINK_RE = /^\/tabs\/[A-Za-z0-9/_-]{0,120}$/;

/**
 * Le deepLink vient du payload push: donnee non fiable. On ne navigue que vers
 * une route interne attendue, sinon vers la liste des notifications.
 */
export function safePushRoute(raw: unknown): string {
  if (typeof raw !== 'string') return PUSH_FALLBACK_ROUTE;
  const value = raw.trim();
  if (!PUSH_DEEP_LINK_RE.test(value)) return PUSH_FALLBACK_ROUTE;
  // Segments vides ("/tabs//x") refuses: aucun usage legitime.
  if (value.includes('//')) return PUSH_FALLBACK_ROUTE;
  return value;
}

/** Format du token FCM accepte par l'API (meme regle que le DTO serveur). */
export const PUSH_TOKEN_RE = /^[A-Za-z0-9:_-]{32,4096}$/;

export function isValidPushToken(token: unknown): token is string {
  return typeof token === 'string' && PUSH_TOKEN_RE.test(token);
}
