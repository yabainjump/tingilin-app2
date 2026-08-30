import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { skeletonController } from '../shared/utils/skeleton-timing';
import { HomeApiService } from '../services/home/home-api.service';
import { DrawCard, UserSummary } from '../services/home/home.models';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { NotificationsStateService } from '../services/notifications/notifications-state.service';
import { RafflesApiService } from '../services/raffles/raffles-api.service';
import { raffleCategoryLabel } from '../core/constants/raffle-categories';
import { TranslateService } from '@ngx-translate/core';
import { toAbsoluteMediaUrl } from '../shared/utils/media-url';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth/auth.service';
import { NetworkStatusService } from '../services/offline/network-status.service';

type HomeCategory = { id: string; label: string };
type DrawLoadReason = 'init' | 'refresh' | 'category' | 'background';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit, OnDestroy {
  private readonly autoRefreshMs = 90000;
  private hasEnteredView = false;
  private raffleRefreshSub?: Subscription;
  private autoRefreshSub?: Subscription;
  readonly isOffline$ = this.networkStatus.offline$;

  ionViewWillEnter(): void {
    this.startClock();
    this.startAutoRefresh();
    this.notifState.refresh();
    this.loadAll(this.hasEnteredView ? 'refresh' : 'init');
    this.hasEnteredView = true;
  }

  ionViewWillLeave(): void {
    this.stopClock();
    this.stopAutoRefresh();
  }

  doRefresh(ev: any): void {
    this.loadAll('refresh');
    setTimeout(() => ev.target.complete(), 300);
  }

  // Skeleton flags
  showFeaturedSkeleton = true;
  showEndingSoonSkeleton = true;
  showRowsSkeleton = true;

  heroCards: DrawCard[] = [];

  // Header
  loadingHeader = true;
  loadingCategories = true;
  user: UserSummary | null = null;

  // Data
  categories: HomeCategory[] = [{ id: 'all', label: 'All' }];
  selectedCategoryId: string = 'all';

  endingSoon: DrawCard[] = [];
  featured: DrawCard | null = null;
  liveRows: DrawCard[] = [];

  constructor(
    private api: HomeApiService,
    private router: Router,
    public notifState: NotificationsStateService,
    private rafflesService: RafflesApiService,
    private translate: TranslateService,
    private auth: AuthService,
    private networkStatus: NetworkStatusService,
  ) {}

  ngOnInit(): void {
    this.subscribeToRaffleRefresh();
  }

  ngOnDestroy(): void {
    this.stopClock();
    this.stopAutoRefresh();
    this.raffleRefreshSub?.unsubscribe();
    this.raffleRefreshSub = undefined;
  }

  loadAll(
    reason: 'init' | 'refresh' | 'category',
    refresher?: HTMLIonRefresherElement,
  ): void {
    this.loadHeader();
    this.loadCategories();
    this.loadDraws(reason, () => refresher?.complete());
  }

  loadHeader(): void {
    if (!this.auth.isLoggedIn()) {
      this.user = null;
      this.loadingHeader = false;
      return;
    }

    const sk = skeletonController(0, 350);
    sk.scheduleShow((v) => (this.loadingHeader = v));

    this.api
      .getUserSummary()
      .pipe(finalize(() => void sk.hide((v) => (this.loadingHeader = v))))
      .subscribe({
        next: (data) => (this.user = data),
        error: () => (this.user = null),
      });
  }

  loadCategories(): void {
    const sk = skeletonController(0, 350);
    sk.scheduleShow((v) => (this.loadingCategories = v));

    this.api
      .getCategories()
      .pipe(finalize(() => void sk.hide((v) => (this.loadingCategories = v))))
      .subscribe({
        next: (data) => {
          this.categories = data?.length ? data : [{ id: 'all', label: 'All' }];
          if (!this.categories.some((c) => c.id === this.selectedCategoryId)) {
            this.selectedCategoryId = this.categories[0].id;
          }
        },
        error: () => (this.categories = [{ id: 'all', label: 'All' }]),
      });
  }

  loadDraws(
    reason: DrawLoadReason,
    done?: () => void,
    showSkeleton = true,
  ): void {
    const skHero = skeletonController(0, 350);
    const skFeatured = skeletonController(0, 350);
    const skRows = skeletonController(0, 350);

    if (showSkeleton) {
      skHero.scheduleShow((v) => (this.showEndingSoonSkeleton = v));
      skFeatured.scheduleShow((v) => (this.showFeaturedSkeleton = v));
      skRows.scheduleShow((v) => (this.showRowsSkeleton = v));
    }

    this.api
      .getHomeFeed(this.selectedCategoryId, {
        forceRefresh: reason === 'refresh',
      })
      .pipe(
        finalize(() => {
          void skHero.hide((v) => (this.showEndingSoonSkeleton = v));
          void skRows.hide((v) => (this.showRowsSkeleton = v));
          void skFeatured.hide((v) => (this.showFeaturedSkeleton = v));
          done?.();
        }),
      )
      .subscribe({
        next: (feed) => {
          const endingSoonRows = (feed?.endingSoon ?? []).filter((x) =>
            this.isVisibleOnHome(x),
          );
          this.endingSoon = endingSoonRows.filter((x) => this.isPurchasable(x));
          this.heroCards = this.endingSoon;

          const all = (feed?.liveRows ?? []).filter((x) =>
            this.isVisibleOnHome(x),
          );
          const featured = all.find((x) => this.isPurchasable(x)) ?? null;
          this.featured = featured;

          const fid = featured?.id;
          this.liveRows = fid ? all.filter((x) => x?.id !== fid) : all;
        },
        error: () => {
          this.featured = null;
          this.liveRows = [];
        },
      });
  }

  selectCategory(catId: string): void {
    if (catId === this.selectedCategoryId) return;
    this.selectedCategoryId = catId;
    this.loadAll('category');
  }

  onRefresh(ev: CustomEvent): void {
    const refresher = ev.target as HTMLIonRefresherElement;
    this.loadAll('refresh', refresher);
  }

  // trackById(_: number, x: { id: string }): string {
  //   return x.id;
  // }

  trackById(_: number, x: any): string {
    return x?._id || x?.id || x?.raffleId || String(_);
  }

  timeProgress(d: DrawCard): number {
    const end = this.getEndMs(d);
    if (!Number.isFinite(end)) return 0;

    const start = this.getStartMs(d);
    if (Number.isFinite(start) && end > start) {
      const elapsed = Math.max(0, Math.min(end - start, this.nowMs - start));
      return Math.max(0, Math.min(100, (elapsed / (end - start)) * 100));
    }

    // fallback if startAt is missing: animate over a rolling 24h window
    const remaining = Math.max(0, end - this.nowMs);
    const fallbackWindow = 24 * 60 * 60 * 1000;
    const elapsedFallback = Math.max(0, fallbackWindow - remaining);
    return Math.max(0, Math.min(100, (elapsedFallback / fallbackWindow) * 100));
  }

  openRaffle(d: DrawCard): void {
    this.router.navigate(['/tabs/raffle-details', d.id]);
  }

  openLiveDraws(): void {
    this.router.navigate(['/tabs/winners']);
  }

  retryLoad(): void {
    this.loadAll('refresh');
  }

  private clockSub?: Subscription;
  nowMs = Date.now();

  private startClock(): void {
    if (this.clockSub) return;
    this.clockSub = interval(1000).subscribe(() => {
      this.nowMs = Date.now();
    });
  }

  private stopClock(): void {
    this.clockSub?.unsubscribe();
    this.clockSub = undefined;
  }

  private startAutoRefresh(): void {
    if (this.autoRefreshSub) return;
    this.autoRefreshSub = interval(this.autoRefreshMs).subscribe(() => {
      if (!this.canAutoRefresh()) return;
      this.loadDraws('background', undefined, false);
    });
  }

  private stopAutoRefresh(): void {
    this.autoRefreshSub?.unsubscribe();
    this.autoRefreshSub = undefined;
  }

  private subscribeToRaffleRefresh(): void {
    if (this.raffleRefreshSub) return;
    this.raffleRefreshSub = this.rafflesService.refresh$.subscribe(() => {
      if (!this.canAutoRefresh()) return;
      this.loadDraws('background', undefined, false);
    });
  }

  private canAutoRefresh(): boolean {
    if (!this.router.url.includes('/tabs/home')) {
      return false;
    }

    if (typeof document !== 'undefined' && document.hidden) {
      return false;
    }

    if (
      typeof navigator !== 'undefined' &&
      'onLine' in navigator &&
      navigator.onLine === false
    ) {
      return false;
    }

    if (this.networkStatus.isConstrained()) {
      return false;
    }

    return true;
  }

  remainingMs(d: DrawCard): number {
    const end = this.getEndMs(d);
    if (Number.isNaN(end)) return 0;

    return Math.max(0, end - this.nowMs);
  }

  countdownText(d: DrawCard): string {
    const ms = this.remainingMs(d);
    if (!ms) return this.translate.instant('HOME_PAGE.ENDED');

    const totalSec = Math.floor(ms / 1000);
    const hh = Math.floor(totalSec / 3600);
    const mm = Math.floor((totalSec % 3600) / 60);
    const ss = totalSec % 60;

    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
  }

  private getEndMs(x: any): number {
    const raw = x?.endsAt ?? x?.endAt ?? x?.end_at;
    const ms = raw ? new Date(raw).getTime() : NaN;
    return Number.isFinite(ms) ? ms : NaN;
  }

  private getStartMs(x: any): number {
    const raw = x?.startAt ?? x?.start_at;
    const ms = raw ? new Date(raw).getTime() : NaN;
    return Number.isFinite(ms) ? ms : NaN;
  }

  private isVisibleOnHome(x: any): boolean {
    // visible si pas de date fin (fallback) OU fin >= maintenant - 7 jours
    const end = this.getEndMs(x);
    if (!Number.isFinite(end)) return true;
    const keepMs = 7 * 24 * 60 * 60 * 1000;
    return end >= Date.now() - keepMs;
  }

  isPurchasable(x: any): boolean {
    // achetable si pas terminé + status LIVE (si disponible)
    const st = String(x?.status ?? '').toUpperCase();
    const end = this.getEndMs(x);
    const ended = Number.isFinite(end) ? end <= Date.now() : false;

    if (ended) return false;
    if (st && st !== 'LIVE') return false;

    // stock tickets si dispo
    const total = Number(x?.total ?? x?.totalTickets ?? 0);
    const sold = Number(x?.sold ?? x?.ticketsSold ?? 0);
    if (total > 0 && sold >= total) return false;

    return true;
  }

  safeImg(u?: string | null): string {
    const absolute = toAbsoluteMediaUrl(u, environment.apiBaseUrl);
    if (!absolute) {
      return 'assets/img/placeholder.png';
    }
    return absolute;
  }

  categoryLabel(x: any): string {
    return raffleCategoryLabel(x?.categoryId);
  }

  categoryDisplayLabel(category: HomeCategory): string {
    if (String(category.id).toLowerCase() !== 'all') return category.label;
    return this.translate.instant('HOME_PAGE.CATEGORY_ALL');
  }
}
