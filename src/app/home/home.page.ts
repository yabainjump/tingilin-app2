import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { skeletonController } from '../shared/utils/skeleton-timing';
import { HomeApiService } from '../services/home/home-api.service';
import { DrawCard, UserSummary } from '../services/home/home.models';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

type HomeCategory = { id: string; label: string };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  ionViewWillEnter(): void {
    this.startClock();
  }

  ionViewWillLeave(): void {
    this.stopClock();
  }

  doRefresh(ev: CustomEvent): void {
    this.loadAll('refresh');
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
        next: (rows) => {
          this.endingSoon = rows ?? [];
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
        next: (rows) => {
          const all = rows ?? [];
          this.featured = all.length ? all[0] : null;
          this.liveRows = all.slice(1);
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

  trackById(_: number, x: { id: string }): string {
    return x.id;
  }

  percent(d: DrawCard): number {
    const total = d.total ?? 0;
    const sold = d.sold ?? 0;
    if (!total) return 0;
    return Math.max(0, Math.min(100, (sold / total) * 100));
  }

  left(d: DrawCard): number {
    const total = d.total ?? 0;
    const sold = d.sold ?? 0;
    return Math.max(0, total - sold);
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
    const iso = d.endsAt;
    if (!iso) return 0;

    const end = new Date(iso).getTime();
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
}
