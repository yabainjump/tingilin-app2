import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { WinnerDto } from './winners-api.service';

export type LiveDrawState = {
  viewersLive: number;
  trustPercent: number;
  analysisProgress: number;
  analysisLabel: 'SCANNING...' | 'VERIFYING...';
  scan: {
    tickets: string[];
    activeIndex: number;
  };
  recent: WinnerDto[];
};

@Injectable({ providedIn: 'root' })
export class WinnersLiveSocketService {
  private socket?: Socket;
  private readonly stateSubject = new BehaviorSubject<LiveDrawState | null>(null);

  stream(): Observable<LiveDrawState | null> {
    return this.stateSubject.asObservable();
  }

  connect(): void {
    if (this.socket) {
      if (!this.socket.connected) this.socket.connect();
      return;
    }

    const origin = this.apiOriginFromBase(environment.apiBaseUrl);
    this.socket = io(`${origin}/live-draws`, {
      transports: ['websocket', 'polling'],
      withCredentials: true,
      reconnection: true,
    });

    this.socket.on('live_draw:update', (payload: LiveDrawState) => {
      this.stateSubject.next(payload);
    });
  }

  disconnect(): void {
    if (!this.socket) return;
    this.socket.off('live_draw:update');
    this.socket.disconnect();
    this.socket = undefined;
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

