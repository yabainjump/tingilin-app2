import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

@Injectable({ providedIn: 'root' })
export class AuthTokenStorageService {
  private readonly isNative = Capacitor.getPlatform() !== 'web';
  private readonly managedKeys = [
    'tingilin_access_token',
    'tingilin_refresh_token',
    'tingilin_token',
  ];
  private readonly cache = new Map<string, string>();
  private initialized = false;

  async init(): Promise<void> {
    if (this.initialized || !this.isNative) {
      this.initialized = true;
      return;
    }

    await Promise.all(
      this.managedKeys.map(async (key) => {
        const { value } = await Preferences.get({ key });
        if (value != null) {
          this.cache.set(key, value);
        } else {
          this.cache.delete(key);
        }
      }),
    );

    this.initialized = true;
  }

  get(key: string): string | null {
    if (!this.isNative) {
      return localStorage.getItem(key);
    }

    return this.cache.get(key) ?? null;
  }

  set(key: string, value: string): void {
    if (!this.isNative) {
      localStorage.setItem(key, value);
      return;
    }

    this.cache.set(key, value);
    void Preferences.set({ key, value });
  }

  remove(key: string): void {
    if (!this.isNative) {
      localStorage.removeItem(key);
      return;
    }

    this.cache.delete(key);
    void Preferences.remove({ key });
  }
}
