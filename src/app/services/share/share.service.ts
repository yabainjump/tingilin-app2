import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export type SharePayload = {
  title?: string;
  text?: string;
  url?: string;
};

@Injectable({ providedIn: 'root' })
export class ShareService {
  async share(payload: SharePayload): Promise<'shared' | 'copied'> {
    const title = String(payload.title ?? '').trim();
    const text = String(payload.text ?? '').trim();
    const url = String(payload.url ?? '').trim();

    const data: SharePayload = {};
    if (title) data.title = title;
    if (text) data.text = text;
    if (url) data.url = url;

    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share(data);
        return 'shared';
      } catch {
        // Continue with clipboard fallback.
      }
    }

    const fallback = [text, url].filter(Boolean).join(' ').trim() || title;
    await this.copyToClipboard(fallback);
    return 'copied';
  }

  raffleShareUrl(raffleId: string): string {
    const id = encodeURIComponent(String(raffleId ?? '').trim());
    const apiOrigin = this.apiOriginFromBase(environment.apiBaseUrl);
    return `${apiOrigin}/share/raffle/${id}`;
  }

  referralShareUrl(referralCode: string): string {
    const code = encodeURIComponent(
      String(referralCode ?? '').trim().toUpperCase(),
    );
    const appOrigin = this.appOriginFromRuntimeOrApi(environment.apiBaseUrl);
    return `${appOrigin}/auth/register?ref=${code}&referralCode=${code}`;
  }

  siteShareUrl(path = '/landing'): string {
    const normalized = this.normalizePath(path);
    const apiOrigin = this.apiOriginFromBase(environment.apiBaseUrl);
    if (normalized === '/landing') {
      return `${apiOrigin}/share/site`;
    }
    return `${apiOrigin}/share/site?to=${encodeURIComponent(normalized)}`;
  }

  liveShareUrl(): string {
    const apiOrigin = this.apiOriginFromBase(environment.apiBaseUrl);
    return `${apiOrigin}/share/live`;
  }

  private apiOriginFromBase(baseUrl: string): string {
    const raw = String(baseUrl ?? '').trim();
    if (!raw) return '';

    try {
      const u = new URL(raw);
      return `${u.protocol}//${u.host}`;
    } catch {
      return raw.replace(/\/api\/v1\/?$/i, '').replace(/\/+$/, '');
    }
  }

  private appOriginFromRuntimeOrApi(apiBaseUrl: string): string {
    if (typeof window !== 'undefined' && window.location?.origin) {
      return String(window.location.origin).replace(/\/+$/, '');
    }

    const apiOrigin = this.apiOriginFromBase(apiBaseUrl);
    if (!apiOrigin) return '';

    try {
      const u = new URL(apiOrigin);
      const host = String(u.host ?? '');
      if (host.toLowerCase().startsWith('backend.')) {
        const frontendHost = host.slice('backend.'.length);
        if (frontendHost) return `${u.protocol}//${frontendHost}`;
      }
      return `${u.protocol}//${u.host}`;
    } catch {
      return apiOrigin;
    }
  }

  private normalizePath(path: string): string {
    const value = String(path ?? '').trim();
    if (!value) return '/landing';
    return value.startsWith('/') ? value : `/${value}`;
  }

  private async copyToClipboard(value: string): Promise<void> {
    const text = String(value ?? '').trim();
    if (!text) return;

    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}
