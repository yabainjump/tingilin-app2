const FALLBACK_API_BASE_URL = 'https://backend.tinguilin.yaba-in.com/api/v1';

const PLACEHOLDER_DOMAIN_PATTERN =
  /(ton[_-]?domaine|your[_-]?domain|example\.com)/i;

export function resolveApiBaseUrl(rawUrl: string): string {
  const normalized = String(rawUrl ?? '').trim().replace(/\/+$/, '');

  if (!normalized || PLACEHOLDER_DOMAIN_PATTERN.test(normalized)) {
    return FALLBACK_API_BASE_URL;
  }

  return normalized;
}

