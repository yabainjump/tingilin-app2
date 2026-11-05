import { Injectable, OnDestroy } from '@angular/core';
import { AppStorageService } from '../../shared/storage/app-storage.service';

export type ThemeMode = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'tinguilin.theme';

/**
 * Gere le theme clair / sombre / systeme.
 *
 * Le CSS de `src/theme/variables.scss` applique automatiquement le theme
 * systeme via `prefers-color-scheme`. Ce service ne pose `data-theme` que
 * lorsqu'un choix explicite a ete fait, ce qui evite tout flash au demarrage.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {
  private mode: ThemeMode = 'system';
  private readonly media = window.matchMedia('(prefers-color-scheme: dark)');

  private readonly onSystemChange = () => {
    if (this.mode === 'system') this.apply();
  };

  constructor(private readonly storage: AppStorageService) {}

  get current(): ThemeMode {
    return this.mode;
  }

  async init(): Promise<void> {
    const stored = await this.storage.get(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      this.mode = stored;
    }

    this.media.addEventListener('change', this.onSystemChange);
    this.apply();
  }

  async set(mode: ThemeMode): Promise<void> {
    this.mode = mode;
    await this.storage.set(STORAGE_KEY, mode);
    this.apply();
  }

  private apply(): void {
    const root = document.documentElement;

    if (this.mode === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', this.mode);
    }

    // Couleur de la barre du navigateur / du systeme.
    const effective =
      this.mode === 'system' ? (this.media.matches ? 'dark' : 'light') : this.mode;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', effective === 'dark' ? '#0d0913' : '#f7f4fc');

    // Miroir synchrone pour le script anti-FOUC de index.html.
    try {
      localStorage.setItem(STORAGE_KEY, this.mode);
    } catch {
      /* stockage indisponible : le theme reste applique pour la session */
    }
  }

  ngOnDestroy(): void {
    this.media.removeEventListener('change', this.onSystemChange);
  }
}
