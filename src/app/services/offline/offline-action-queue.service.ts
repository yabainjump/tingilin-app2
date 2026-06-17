import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppStorageService } from 'src/app/shared/storage/app-storage.service';
import { NetworkStatusService } from './network-status.service';
import { AuthService } from '../auth/auth.service';

type OfflineActionType =
  | 'notifications.mark-read'
  | 'notifications.mark-all-read';

type OfflineAction = {
  id: string;
  type: OfflineActionType;
  payload?: Record<string, any>;
  dedupeKey?: string;
  createdAt: string;
};

@Injectable({ providedIn: 'root' })
export class OfflineActionQueueService {
  private readonly storageKey = 'offline-action-queue:v1';
  private readonly queueSubject = new BehaviorSubject<OfflineAction[]>([]);
  private readonly baseUrl = environment.apiBaseUrl;
  private isInitialized = false;
  private isFlushing = false;
  // Incremente a chaque changement de session: invalide tout flush en cours.
  private sessionEpoch = 0;

  readonly queue$ = this.queueSubject.asObservable();
  readonly pendingCount$ = this.queue$.pipe(map((items) => items.length));

  constructor(
    private readonly storage: AppStorageService,
    private readonly http: HttpClient,
    private readonly networkStatus: NetworkStatusService,
    private readonly auth: AuthService,
  ) {
    this.networkStatus.online$.subscribe((online) => {
      if (online) {
        void this.flush();
      }
    });

    // Changement de compte: on purge les actions en attente du compte precedent
    // (sinon elles pourraient s'executer sous le nouveau compte).
    this.auth.sessionReset$.subscribe(() => void this.clearForSession());
  }

  /** Vide la file (memoire + stockage) lors d'un changement de session. */
  async clearForSession(): Promise<void> {
    this.sessionEpoch++; // invalide tout flush() en cours (anti-course)
    this.queueSubject.next([]);
    try {
      await this.storage.remove(this.storageKey);
    } catch {
      // best-effort
    }
  }

  async init(): Promise<void> {
    if (this.isInitialized) return;
    this.isInitialized = true;
    const stored = await this.storage.getJson<OfflineAction[]>(this.storageKey);
    this.queueSubject.next(Array.isArray(stored) ? stored : []);
    if (this.networkStatus.isOnline()) {
      await this.flush();
    }
  }

  async enqueueNotificationMarkRead(id: string): Promise<void> {
    await this.enqueue({
      id: this.makeId(),
      type: 'notifications.mark-read',
      payload: { id },
      dedupeKey: `notifications:mark-read:${id}`,
      createdAt: new Date().toISOString(),
    });
  }

  async enqueueNotificationMarkAllRead(): Promise<void> {
    const nextQueue = this.queueSubject.value.filter(
      (item) => item.type !== 'notifications.mark-read',
    );
    this.queueSubject.next(nextQueue);
    await this.persist();

    await this.enqueue({
      id: this.makeId(),
      type: 'notifications.mark-all-read',
      dedupeKey: 'notifications:mark-all-read',
      createdAt: new Date().toISOString(),
    });
  }

  async flush(): Promise<void> {
    if (!this.isInitialized || this.isFlushing || this.networkStatus.isOffline()) {
      return;
    }

    this.isFlushing = true;
    const epoch = this.sessionEpoch;
    try {
      let queue = [...this.queueSubject.value];
      while (queue.length > 0) {
        const current = queue[0];
        const success = await this.process(current);

        // Changement de compte pendant le traitement: on abandonne SANS
        // re-persister (la purge clearForSession fait foi).
        if (this.sessionEpoch !== epoch) return;
        if (!success) break;

        queue = this.queueSubject.value.filter((item) => item.id !== current.id);
        if (current.type === 'notifications.mark-all-read') {
          queue = queue.filter((item) => item.type !== 'notifications.mark-read');
        }

        this.queueSubject.next(queue);
        await this.persist();
      }
    } finally {
      this.isFlushing = false;
    }
  }

  private async enqueue(action: OfflineAction): Promise<void> {
    const queue = [...this.queueSubject.value];
    const existingIndex = action.dedupeKey
      ? queue.findIndex((item) => item.dedupeKey === action.dedupeKey)
      : -1;

    if (existingIndex >= 0) {
      queue.splice(existingIndex, 1, action);
    } else {
      queue.push(action);
    }

    this.queueSubject.next(queue);
    await this.persist();
  }

  private async process(action: OfflineAction): Promise<boolean> {
    try {
      switch (action.type) {
        case 'notifications.mark-read': {
          const id = String(action.payload?.['id'] ?? '').trim();
          if (!id) return true;
          await firstValueFrom(
            this.http.patch(`${this.baseUrl}/notifications/${id}/read`, {}),
          );
          return true;
        }

        case 'notifications.mark-all-read':
          await firstValueFrom(
            this.http.patch(`${this.baseUrl}/notifications/read-all`, {}),
          );
          return true;

        default:
          return true;
      }
    } catch (error: any) {
      return this.shouldDropFailedAction(error);
    }
  }

  private shouldDropFailedAction(error: any): boolean {
    if (this.networkStatus.isOffline()) {
      return false;
    }

    const status = Number(error?.status ?? 0);
    return status !== 0;
  }

  private async persist(): Promise<void> {
    await this.storage.setJson(this.storageKey, this.queueSubject.value);
  }

  private makeId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }
}
