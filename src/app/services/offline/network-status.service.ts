import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map, merge } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NetworkStatusService {
  private readonly onlineSubject = new BehaviorSubject<boolean>(
    typeof navigator === 'undefined' ? true : navigator.onLine,
  );

  readonly online$ = this.onlineSubject.asObservable();
  readonly offline$ = this.online$.pipe(map((online) => !online));

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    merge(fromEvent(window, 'online'), fromEvent(window, 'offline')).subscribe(
      () => {
        this.onlineSubject.next(navigator.onLine);
      },
    );
  }

  isOnline(): boolean {
    return this.onlineSubject.value;
  }

  isOffline(): boolean {
    return !this.isOnline();
  }
}
