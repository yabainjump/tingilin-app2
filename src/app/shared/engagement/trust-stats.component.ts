import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import {
  EngagementApiService,
  TrustStatsDto,
} from 'src/app/services/engagement/engagement-api.service';

/** Compteur public "37 lots remis · 2,1 M FCFA de lots · tirages verifiables". */
@Component({
  selector: 'app-trust-stats',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="trust" *ngIf="stats && stats.winners > 0">
      <div class="tile">
        <ion-icon name="gift-outline" aria-hidden="true"></ion-icon>
        <div class="v">{{ stats.prizesDelivered | number }}</div>
        <div class="k">{{ 'ENGAGEMENT.TRUST_DELIVERED' | translate }}</div>
      </div>
      <div class="tile" *ngIf="stats.prizesValueXaf > 0">
        <ion-icon name="cash-outline" aria-hidden="true"></ion-icon>
        <div class="v">{{ compactXaf(stats.prizesValueXaf) }}</div>
        <div class="k">{{ 'ENGAGEMENT.TRUST_VALUE' | translate }}</div>
      </div>
      <div class="tile">
        <ion-icon name="shield-checkmark-outline" aria-hidden="true"></ion-icon>
        <div class="v">{{ stats.verifiableDraws | number }}</div>
        <div class="k">{{ 'ENGAGEMENT.TRUST_VERIFIABLE' | translate }}</div>
      </div>
    </section>
  `,
  styles: [
    `
      .trust {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(92px, 1fr));
        gap: 8px;
        margin: 14px 0;
      }
      .tile {
        padding: 12px 10px;
        border-radius: var(--app-radius, 14px);
        background: var(--app-surface);
        border: 1px solid var(--app-border);
        text-align: center;
        min-width: 0;
      }
      ion-icon {
        font-size: 18px;
        color: var(--app-warning);
      }
      .v {
        margin-top: 4px;
        font-size: 18px;
        font-weight: 800;
        color: var(--app-ink);
        font-variant-numeric: tabular-nums;
      }
      .k {
        margin-top: 2px;
        font-size: 11px;
        color: var(--app-muted);
        line-height: 1.25;
      }
    `,
  ],
})
export class TrustStatsComponent implements OnInit {
  stats: TrustStatsDto | null = null;

  constructor(
    private api: EngagementApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.api.trustStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.cdr.markForCheck();
      },
      error: () => {
        this.stats = null;
        this.cdr.markForCheck();
      },
    });
  }

  /** 2 100 000 -> "2,1 M FCFA", 850 000 -> "850 k FCFA". */
  compactXaf(amount: number): string {
    const n = Math.max(0, Number(amount) || 0);
    const fmt = (v: number) =>
      v.toLocaleString('fr-FR', { maximumFractionDigits: 1 });
    if (n >= 1_000_000) return `${fmt(n / 1_000_000)} M FCFA`;
    if (n >= 10_000) return `${fmt(n / 1000)} k FCFA`;
    return `${fmt(n)} FCFA`;
  }
}
