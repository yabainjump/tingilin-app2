import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map, merge } from 'rxjs';

export type NetworkConnectionInfo = {
  saveData?: boolean;
  effectiveType?: string;
  downlink?: number;
  addEventListener?: (type: 'change', listener: () => void) => void;
};

export function isConstrainedConnection(
  connection?: NetworkConnectionInfo,
): boolean {
  if (!connection) return false;
  if (connection.saveData === true) return true;

  const effectiveType = String(connection.effectiveType ?? '').toLowerCase();
  if (['slow-2g', '2g', '3g'].includes(effectiveType)) return true;

  const downlink = Number(connection.downlink ?? 0);
  return Number.isFinite(downlink) && downlink > 0 && downlink <= 1.5;
}

@Injectable({ providedIn: 'root' })
export class NetworkStatusService {
  private readonly connection = this.readConnection();
  private readonly onlineSubject = new BehaviorSubject<boolean>(
    typeof navigator === 'undefined' ? true : navigator.onLine,
  );
  private readonly constrainedSubject = new BehaviorSubject<boolean>(
    isConstrainedConnection(this.connection),
  );

  readonly online$ = this.onlineSubject.asObservable();
  readonly offline$ = this.online$.pipe(map((online) => !online));
  readonly constrained$ = this.constrainedSubject.asObservable();

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const refresh = () => {
      this.onlineSubject.next(navigator.onLine);
      this.constrainedSubject.next(isConstrainedConnection(this.connection));
    };

    merge(fromEvent(window, 'online'), fromEvent(window, 'offline')).subscribe(
      refresh,
    );
    this.connection?.addEventListener?.('change', refresh);
  }

  isOnline(): boolean {
    return this.onlineSubject.value;
  }

  isOffline(): boolean {
    return !this.isOnline();
  }

  isConstrained(): boolean {
    return this.constrainedSubject.value;
  }

  private readConnection(): NetworkConnectionInfo | undefined {
    if (typeof navigator === 'undefined') return undefined;
    return (navigator as Navigator & { connection?: NetworkConnectionInfo })
      .connection;
  }
}
