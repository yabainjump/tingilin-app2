import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoadingService } from './core/loading/loading.service';
import { AuthStateService } from './services/auth/auth-state.service';
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  Subscription,
} from 'rxjs';
import { LanguageService } from './services/i18n/language.service';
import { NetworkStatusService } from './services/offline/network-status.service';
import { OfflineActionQueueService } from './services/offline/offline-action-queue.service';

type ConnectivityBannerState = {
  offline: boolean;
  pending: number;
  syncing: boolean;
  constrained: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit, OnDestroy {
  loading$ = this.loading.loading$;
  private readonly bannerStateSubject =
    new BehaviorSubject<ConnectivityBannerState | null>(null);
  private bannerHideTimeout?: ReturnType<typeof setTimeout>;
  bannerState$ = this.bannerStateSubject.asObservable();
  private navigationStartSub?: Subscription;
  private bannerStateSub?: Subscription;

  constructor(
    private loading: LoadingService,
    private authState: AuthStateService,
    private language: LanguageService,
    private networkStatus: NetworkStatusService,
    private offlineQueue: OfflineActionQueueService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.language.init();
    this.authState.bootstrap();
    this.bannerStateSub = combineLatest([
      this.networkStatus.online$,
      this.offlineQueue.pendingCount$,
      this.networkStatus.constrained$,
    ])
      .pipe(
        map(([online, pending, constrained]) => ({
          online,
          pending,
          constrained,
        })),
        distinctUntilChanged(
          (a, b) =>
            a.online === b.online &&
            a.pending === b.pending &&
            a.constrained === b.constrained,
        ),
      )
      .subscribe(({ online, pending, constrained }) => {
        if (!online) {
          this.showBannerTemporarily({
            offline: true,
            pending,
            syncing: false,
            constrained: false,
          });
          return;
        }

        if (pending > 0) {
          this.showBannerTemporarily({
            offline: false,
            pending,
            syncing: true,
            constrained: false,
          });
          return;
        }

        if (constrained) {
          this.showBannerTemporarily({
            offline: false,
            pending: 0,
            syncing: false,
            constrained: true,
          });
          return;
        }

        this.clearBannerTimeout();
        this.bannerStateSubject.next(null);
      });

    this.navigationStartSub = this.router.events
      .pipe(
        filter(
          (event): event is NavigationStart => event instanceof NavigationStart,
        ),
      )
      .subscribe(() => this.blurActiveElement());
  }

  ngOnDestroy(): void {
    this.navigationStartSub?.unsubscribe();
    this.bannerStateSub?.unsubscribe();
    this.clearBannerTimeout();
  }

  private blurActiveElement(): void {
    const activeElement = this.document.activeElement;
    if (!(activeElement instanceof HTMLElement)) {
      return;
    }

    const isRootElement =
      activeElement.tagName === 'BODY' || activeElement.tagName === 'HTML';
    if (!isRootElement) {
      activeElement.blur();
    }
  }

  private showBannerTemporarily(state: ConnectivityBannerState): void {
    this.bannerStateSubject.next(state);
    this.clearBannerTimeout();
    this.bannerHideTimeout = setTimeout(() => {
      this.bannerStateSubject.next(null);
    }, 5000);
  }

  private clearBannerTimeout(): void {
    if (!this.bannerHideTimeout) return;
    clearTimeout(this.bannerHideTimeout);
    this.bannerHideTimeout = undefined;
  }
}
