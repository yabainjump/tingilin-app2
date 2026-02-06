import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { skeletonController } from '../shared/utils/skeleton-timing';
import { HomeApiService } from '../services/home/home-api.service';
import { DrawCard, UserSummary } from '../services/home/home.models';

type HomeCategory = { id: string; label: string };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  // Skeleton flags (liés au HTML)
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

  liveRows: DrawCard[] = []; // ✅ UNE seule déclaration

  constructor(private api: HomeApiService) {}

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
      .pipe(
        finalize(() => {
          void sk.hide((v) => (this.loadingHeader = v));
        }),
      )
      .subscribe({
        next: (data: UserSummary) => (this.user = data),
        error: () => (this.user = null),
      });
  }

  loadCategories(): void {
    const sk = skeletonController(0, 350);
    sk.scheduleShow((v) => (this.loadingCategories = v));

    this.api
      .getCategories()
      .pipe(
        finalize(() => {
          void sk.hide((v) => (this.loadingCategories = v));
        }),
      )
      .subscribe({
        next: (data: any[]) => {
          // attend un format [{id,label}]
          this.categories = (
            data?.length ? data : [{ id: 'all', label: 'All' }]
          ) as HomeCategory[];
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

    // 1) Ending Soon (carousel)
    this.api
      .getEndingSoon(this.selectedCategoryId)
      .pipe(
        finalize(() => {
          void skHero.hide((v) => (this.showEndingSoonSkeleton = v));
        }),
      )
      .subscribe({
        next: (rows: DrawCard[]) => {
          this.endingSoon = rows ?? [];
          this.heroCards = this.endingSoon;
        },
        error: () => {
          this.endingSoon = [];
          this.heroCards = [];
        },
      });

    // 2) Live Draws (featured + rows)
    this.api
      .getLiveRows(this.selectedCategoryId)
      .pipe(
        finalize(() => {
          void skRows.hide((v) => (this.showRowsSkeleton = v));
        }),
      )
      .subscribe({
        next: (rows: DrawCard[]) => {
          const all = rows ?? [];
          this.featured = all.length ? all[0] : null;
          this.liveRows = all.slice(1);
        },
        error: () => {
          this.featured = null;
          this.liveRows = [];
        },
        complete: () => {
          void skFeatured.hide((v) => (this.showFeaturedSkeleton = v));
          done?.();
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

}
