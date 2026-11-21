import { InjectionToken } from '@angular/core';
import { App } from '@capacitor/app';
import { Capacitor, registerPlugin } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import {
  PushNotifications,
  PushNotificationsPlugin,
} from '@capacitor/push-notifications';

export type PushDevicePlatform = 'android' | 'ios' | 'web';

/** Plugin natif local (MainActivity): Firebase est-il configure dans ce build ? */
interface TinguilinPushConfigPlugin {
  isConfigured(): Promise<{ configured: boolean }>;
}

const PushConfig = registerPlugin<TinguilinPushConfigPlugin>('TinguilinPushConfig');

/**
 * Facade des API Capacitor utilisees par le service push, injectable pour
 * pouvoir la remplacer en test (aucun prompt OS, aucun appel natif).
 */
export interface PushPlatform {
  isNative(): boolean;
  platform(): PushDevicePlatform;
  /** false si google-services.json n'etait pas present au build (register() planterait). */
  isConfigured(): Promise<boolean>;
  push: Pick<
    PushNotificationsPlugin,
    | 'checkPermissions'
    | 'requestPermissions'
    | 'register'
    | 'unregister'
    | 'createChannel'
    | 'addListener'
  >;
  /** Rappel quand l'app revient au premier plan (natif). */
  onResume(cb: () => void): void;
  prefs: {
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
  };
}

export const capacitorPushPlatform: PushPlatform = {
  isNative: () => Capacitor.isNativePlatform(),
  platform: () => {
    const p = Capacitor.getPlatform();
    return p === 'android' || p === 'ios' ? p : 'web';
  },
  isConfigured: async () => {
    // Seul Android est configure (FCM). iOS: pas de projet ni de config APNs/FCM.
    if (Capacitor.getPlatform() !== 'android') return false;
    try {
      const res = await PushConfig.isConfigured();
      return res?.configured === true;
    } catch {
      // APK plus ancien sans le plugin local: on ne prend aucun risque.
      return false;
    }
  },
  push: PushNotifications,
  onResume: (cb) => {
    App.addListener('resume', cb).catch(() => undefined);
  },
  prefs: {
    get: async (key) => (await Preferences.get({ key })).value,
    set: async (key, value) => {
      await Preferences.set({ key, value });
    },
  },
};

export const PUSH_PLATFORM = new InjectionToken<PushPlatform>('PUSH_PLATFORM', {
  providedIn: 'root',
  factory: () => capacitorPushPlatform,
});
