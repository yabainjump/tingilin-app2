export function apiOriginFromBase(apiBaseUrl: string): string {
  const raw = String(apiBaseUrl ?? '').trim();
  if (!raw) return '';

  try {
    return new URL(raw).origin;
  } catch {
    return '';
  }
}

export function toAbsoluteMediaUrl(
  rawValue: unknown,
  apiBaseUrl: string,
): string | undefined {
  const value = String(rawValue ?? '').trim();
  if (!value || value === 'null' || value === 'undefined') return undefined;

  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith('data:') || value.startsWith('blob:')) return value;

  if (value.startsWith('../assets/')) return value.replace('../', '');
  if (value.startsWith('assets/') || value.startsWith('/assets/')) return value;

  const origin = apiOriginFromBase(apiBaseUrl);
  if (!origin) return value;

  const trimmedDots = value.replace(/^(\.\.\/)+/, '');
  if (trimmedDots.startsWith('uploads/')) return `${origin}/${trimmedDots}`;
  if (trimmedDots.startsWith('api/')) return `${origin}/${trimmedDots}`;
  if (value.startsWith('/')) return `${origin}${value}`;

  return value;
}
