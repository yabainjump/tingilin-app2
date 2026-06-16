import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { NotificationsApiService } from './notifications-api.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class NotificationsStateService {
  private _unread = new BehaviorSubject<number>(0);
  unreadCount$ = this._unread.asObservable();

  constructor(
    private api: NotificationsApiService,
    private auth: AuthService,
  ) {
    // Changement de compte: on remet le compteur a zero pour eviter d'afficher
    // les non-lus du compte precedent.
    this.auth.sessionReset$.subscribe(() => this._unread.next(0));
  }

  async refresh() {
    if (!this.auth.isLoggedIn()) {
      this._unread.next(0);
      return;
    }

    try {
      const res = await firstValueFrom(this.api.unreadCount());
      this._unread.next(res.count || 0);
    } catch {
      // ignore
    }
  }

  setLocal(count: number) {
    this._unread.next(Math.max(0, Number(count || 0)));
  }

  markOneReadLocal() {
    this._unread.next(Math.max(0, this._unread.value - 1));
  }

  markAllReadLocal() {
    this._unread.next(0);
  }
}
