import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, forkJoin, interval } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { HomeApiService } from 'src/app/services/home/home-api.service';
import { DrawCard } from 'src/app/services/home/home.models';

type HomeCategory = { id: string; label: string };
type StatusFilter = 'all' | 'active' | 'ended';

@Component({
  selector: 'app-all-raffles',
  templateUrl: './all-raffles.page.html',
  styleUrls: ['./all-raffles.page.scss'],
  standalone: false,
})
export class AllRafflesPage implements OnDestroy {
  loading = true;
  categories: HomeCategory[] = [{ id: 'all', label: 'Tout' }];
  selectedCategoryId = 'all';
  statusFilter: StatusFilter = 'all';

  private allRaffles: DrawCard[] = [];
  raffles: DrawCard[] = [];
  nowMs = Date.now();

  private clockSub?: Subscription;

  constructor(
    private api: HomeApiService,
    private router: Router,
    private translate: TranslateService,
  ) {}

  ionViewWillEnter(): void {
    this.startClock();
    this.api.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats?.length ? cats : [{ id: 'all', label: 'Tout' }];
      },
    });
    this.loadRaffles(this.selectedCategoryId);
  }

  ionViewWillLeave(): void {
    this.clockSub?.unsubscribe();
    this.clockSub = undefined;
  }

  ngOnDestroy(): void {
    this.clockSub?.unsubscribe();
  }

  selectCategory(id: string): void {
    if (id === this.selectedCategoryId) return;
    this.selectedCategoryId = id;
    this.loadRaffles(id);
  }

  setStatusFilter(f: StatusFilter): void {
    if (f === this.statusFilter) return;
    this.statusFilter = f;
    this.applyFilter();
  }

  loadRaffles(categoryId: string): void {
    this.loading = true;
    forkJoin({
      live: this.api.getLiveRows(categoryId),
      ending: this.api.getEndingSoon(categoryId),
    }).subscribe({
      next: ({ live, ending }) => {
        const seen = new Set<string>();
        const merged: DrawCard[] = [];
        for (const card of [...live, ...ending]) {
          if (!seen.has(card.id)) {
            seen.add(card.id);
            merged.push(card);
          }
        }
        merged.sort((a, b) => {
          const aMs = a.endsAt ? new Date(a.endsAt).getTime() : Infinity;
          const bMs = b.endsAt ? new Date(b.endsAt).getTime() : Infinity;
          return aMs - bMs;
        });
        this.allRaffles = merged;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.allRaffles = [];
        this.raffles = [];
        this.loading = false;
      },
    });
  }

  private applyFilter(): void {
    if (this.statusFilter === 'all') {
      this.raffles = this.allRaffles;
      return;
    }
    const now = this.nowMs;
    this.raffles = this.allRaffles.filter((d) => {
      const endMs = d.endsAt ? new Date(d.endsAt).getTime() : Infinity;
      const isEnded = endMs <= now;
      return this.statusFilter === 'ended' ? isEnded : !isEnded;
    });
  }

  openRaffle(d: DrawCard): void {
    this.router.navigate(['/tabs/raffle-details', d.id]);
  }

  countdownText(d: DrawCard): string {
    const raw = (d as any).endsAt ?? (d as any).endAt;
    if (!raw) return '';
    const end = new Date(raw).getTime();
    const ms = Math.max(0, end - this.nowMs);
    if (!ms) return this.translate.instant('HOME_PAGE.ENDED');
    const totalSec = Math.floor(ms / 1000);
    const hh = Math.floor(totalSec / 3600);
    const mm = Math.floor((totalSec % 3600) / 60);
    const ss = totalSec % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
  }

  isEnded(d: DrawCard): boolean {
    const raw = (d as any).endsAt ?? (d as any).endAt;
    if (!raw) return false;
    return new Date(raw).getTime() <= this.nowMs;
  }

  categoryDisplayLabel(c: HomeCategory): string {
    if (String(c.id).toLowerCase() !== 'all') return c.label;
    return this.translate.instant('HOME_PAGE.CATEGORY_ALL');
  }

  trackById(_: number, x: { id: string }): string {
    return x.id;
  }

  private startClock(): void {
    if (this.clockSub) return;
    this.clockSub = interval(1000).subscribe(() => {
      this.nowMs = Date.now();
      this.applyFilter();
    });
  }
}
