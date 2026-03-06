import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { skeletonController } from '../shared/utils/skeleton-timing';
import { HomeApiService } from '../services/home/home-api.service';
import { DrawCard, UserSummary } from '../services/home/home.models';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { NotificationsStateService } from '../services/notifications/notifications-state.service';
import { RafflesApiService } from '../services/raffles/raffles-api.service';

type HomeCategory = { id: string; label: string };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  raffles$ = this.rafflesService.triggerRefresh;

  ionViewWillEnter(): void {
    this.startClock();
    this.notifState.refresh();
    this.rafflesService.triggerRefresh();
  }

  ionViewWillLeave(): void {
    this.stopClock();
  }

  doRefresh(ev: any): void {
    this.loadAll('refresh');
    this.rafflesService.triggerRefresh();
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
  ) {}

  ngOnInit(): void {
    this.loadAll('init');
  }

  loadAll(
    reason: 'init' | 'refresh' | 'category',
    refresher?: HTMLIonRefresherElement,
  ): void {
    this.loadHeader();
    this.loadCategories();
    this.loadDraws(() => refresher?.complete());
  }

  loadHeader(): void {
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

  loadDraws(done?: () => void): void {
    const skHero = skeletonController(0, 350);
    const skFeatured = skeletonController(0, 350);
    const skRows = skeletonController(0, 350);

    skHero.scheduleShow((v) => (this.showEndingSoonSkeleton = v));
    skFeatured.scheduleShow((v) => (this.showFeaturedSkeleton = v));
    skRows.scheduleShow((v) => (this.showRowsSkeleton = v));

    // 1) Ending Soon
    this.api
      .getEndingSoon(this.selectedCategoryId)
      .pipe(
        finalize(
          () => void skHero.hide((v) => (this.showEndingSoonSkeleton = v)),
        ),
      )
      .subscribe({
        next: (rows: any[]) => {
          const all = (rows ?? []).filter((x) => this.isVisibleOnHome(x));

          this.endingSoon = all.filter((x) => this.isPurchasable(x));

          this.heroCards = this.endingSoon;
        },
        error: () => {
          this.endingSoon = [];
          this.heroCards = [];
        },
      });

    // 2) Live rows (featured + list)
    this.api
      .getLiveRows(this.selectedCategoryId)
      .pipe(
        finalize(() => {
          void skRows.hide((v) => (this.showRowsSkeleton = v));
          void skFeatured.hide((v) => (this.showFeaturedSkeleton = v));
          done?.();
        }),
      )
      .subscribe({
        next: (rows: any[]) => {
          const all = (rows ?? []).filter((x) => this.isVisibleOnHome(x));

          const featured = all.find((x) => this.isPurchasable(x)) ?? null;
          this.featured = featured;

          const fid = featured?._id || featured?.id || featured?.raffleId;
          this.liveRows = fid
            ? all.filter((x) => (x?._id || x?.id || x?.raffleId) !== fid)
            : all;
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
    return Math.max(
      0,
      Math.min(100, (elapsedFallback / fallbackWindow) * 100),
    );
  }

  openRaffle(d: DrawCard): void {
    this.router.navigate(['/tabs/raffle-details', d.id]);
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

  remainingMs(d: DrawCard): number {
    const end = this.getEndMs(d);
    if (Number.isNaN(end)) return 0;

    return Math.max(0, end - this.nowMs);
  }

  countdownText(d: DrawCard): string {
    const ms = this.remainingMs(d);
    if (!ms) return 'Terminé';

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
    // visible si pas de date fin (fallback) OU fin >= maintenant - 2 jours
    const end = this.getEndMs(x);
    if (!Number.isFinite(end)) return true;
    const keepMs = 2 * 24 * 60 * 60 * 1000;
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
    const s = String(u ?? '').trim();
    if (!s || s === 'null' || s === 'undefined') {
      return 'assets/img/placeholder.png';
    }
    return s;
  }
}
