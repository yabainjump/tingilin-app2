import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Capacitor } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { WinnerDto } from './winners-api.service';

export type LiveDrawState = {
  viewersLive: number;
  provablyFair: boolean;
  analysisProgress: number;
  analysisLabel: 'SCANNING...' | 'VERIFYING...';
  scan: {
    tickets: string[];
    activeIndex: number;
  };
  recent: WinnerDto[];
};

/** "Paul M. · Littoral vient de prendre 3 tickets" (aucune donnee sensible). */
export type LiveActivity = {
  id: string;
  displayName: string;
  region: string | null;
  quantity: number;
  raffleId: string;
  prizeTitle: string;
  at: string;
};

const MAX_ACTIVITY = 10;

@Injectable({ providedIn: 'root' })
export class WinnersLiveSocketService {
  private socket?: Socket;
  // Plusieurs ecrans (accueil, tirages, fiche tombola) partagent UNE connexion:
  // la socket n'est fermee que lorsque le dernier ecran la libere.
  private users = 0;
  private readonly stateSubject = new BehaviorSubject<LiveDrawState | null>(null);
  private readonly activitySubject = new BehaviorSubject<LiveActivity[]>([]);

  stream(): Observable<LiveDrawState | null> {
    return this.stateSubject.asObservable();
  }

  /** Activites recentes, la plus recente en dernier. */
  activity(): Observable<LiveActivity[]> {
    return this.activitySubject.asObservable();
  }

  connect(): void {
    this.users += 1;
    if (this.socket) {
      if (!this.socket.connected) this.socket.connect();
      return;
    }

    const origin = this.apiOriginFromBase(environment.apiBaseUrl);
    const transports =
      Capacitor.getPlatform() === 'web'
        ? ['websocket', 'polling']
        : ['websocket'];
    this.socket = io(`${origin}/live-draws`, {
      path: '/socket.io',
      transports,
      withCredentials: true,
      reconnection: true,
      reconnectionDelay: 2_000,
      reconnectionDelayMax: 10_000,
      timeout: 15_000,
    });

    this.socket.on('live_draw:update', (payload: LiveDrawState) => {
      this.stateSubject.next(payload);
    });
    this.socket.on('live_activity', (batch: unknown) => {
      this.pushActivity(batch);
    });
  }

  disconnect(): void {
    this.users = Math.max(0, this.users - 1);
    if (this.users > 0 || !this.socket) return;
    this.socket.off('live_draw:update');
    this.socket.off('live_activity');
    this.socket.disconnect();
    this.socket = undefined;
  }

  /** Valide chaque evenement recu (donnees serveur = non fiables). */
  pushActivity(batch: unknown): void {
    if (!Array.isArray(batch)) return;
    const known = new Set(this.activitySubject.value.map((a) => a.id));
    const fresh: LiveActivity[] = [];
    for (const raw of batch) {
      const item = normalizeActivity(raw);
      if (item && !known.has(item.id)) {
        known.add(item.id);
        fresh.push(item);
      }
    }
    if (!fresh.length) return;
    this.activitySubject.next(
      [...this.activitySubject.value, ...fresh].slice(-MAX_ACTIVITY),
    );
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
}

function normalizeActivity(raw: unknown): LiveActivity | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  const text = (v: unknown, max: number) =>
    typeof v === 'string' ? v.trim().slice(0, max) : '';
  const id = text(r['id'], 64);
  const displayName = text(r['displayName'], 32);
  if (!id || !displayName) return null;
  const quantity = Math.max(1, Math.min(999, Math.floor(Number(r['quantity']) || 1)));
  return {
    id,
    displayName,
    region: text(r['region'], 24) || null,
    quantity,
    raffleId: text(r['raffleId'], 64),
    prizeTitle: text(r['prizeTitle'], 80),
    at: text(r['at'], 40),
  };
}
