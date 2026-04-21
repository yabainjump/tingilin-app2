import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({ providedIn: 'root' })
export class AppStorageService {
  private readonly isNative = Capacitor.getPlatform() !== 'web';
  private readonly memory = new Map<string, string | null>();

  async get(key: string): Promise<string | null> {
    if (this.memory.has(key)) {
      return this.memory.get(key) ?? null;
    }

    if (!this.isNative) {
      const value = localStorage.getItem(key);
      this.memory.set(key, value);
      return value;
    }

    const { value } = await Preferences.get({ key });
    this.memory.set(key, value ?? null);
    return value ?? null;
  }

  async set(key: string, value: string): Promise<void> {
    this.memory.set(key, value);

    if (!this.isNative) {
      localStorage.setItem(key, value);
      return;
    }

    await Preferences.set({ key, value });
  }

  async remove(key: string): Promise<void> {
    this.memory.delete(key);

    if (!this.isNative) {
      localStorage.removeItem(key);
      return;
    }

    await Preferences.remove({ key });
  }

  async getJson<T>(key: string): Promise<T | null> {
    const raw = await this.get(key);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async setJson<T>(key: string, value: T): Promise<void> {
    await this.set(key, JSON.stringify(value));
  }
}
