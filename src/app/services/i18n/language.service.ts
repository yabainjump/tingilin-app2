import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly storageKey = 'tingilin_lang';
  private readonly supportedLanguages: AppLanguage[] = ['fr', 'en'];

  constructor(
    private readonly translate: TranslateService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setFallbackLang('fr');
  }

  init(): void {
    const stored = this.safeGetLocalStorage(this.storageKey);
    const detected = this.detectBrowserLanguage();
    this.use(this.normalize(stored) ?? detected ?? 'fr');
  }

  use(language: string): void {
    const normalized = this.normalize(language) ?? 'fr';
    this.translate.use(normalized);
    this.document.documentElement.setAttribute('lang', normalized);
    this.safeSetLocalStorage(this.storageKey, normalized);
  }

  toggle(): void {
    this.use(this.current === 'fr' ? 'en' : 'fr');
  }

  get current(): AppLanguage {
    const active = this.normalize(this.translate.currentLang);
    if (active) return active;

    const fallback = this.normalize(this.translate.getFallbackLang());
    return fallback ?? 'fr';
  }

  is(language: AppLanguage): boolean {
    return this.current === language;
  }

  private detectBrowserLanguage(): AppLanguage | null {
    if (typeof navigator === 'undefined') return null;
    const raw = String(navigator.language ?? '').trim().toLowerCase();
    if (!raw) return null;
    if (raw.startsWith('en')) return 'en';
    return 'fr';
  }

  private normalize(language: string | null | undefined): AppLanguage | null {
    const value = String(language ?? '')
      .trim()
      .toLowerCase();
    if (value === 'fr' || value.startsWith('fr-')) return 'fr';
    if (value === 'en' || value.startsWith('en-')) return 'en';
    return null;
  }

  private safeGetLocalStorage(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private safeSetLocalStorage(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore storage errors on restricted environments
    }
  }
}
