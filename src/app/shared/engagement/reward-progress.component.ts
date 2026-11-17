import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import {
  ReferralApiService,
  ReferralSummaryDto,
} from 'src/app/services/referral/referral-api.service';

export type RewardGoal = {
  count: number;
  target: number;
  /** Pas encore faits avant le prochain ticket gratuit (1..target). */
  remaining: number;
  percent: number;
};

/** Calcule l'avancement vers le PROCHAIN ticket gratuit. */
export function rewardGoal(count: number, target: number): RewardGoal {
  const safeTarget = Math.max(1, Math.floor(Number(target) || 1));
  const safeCount = Math.max(0, Math.floor(Number(count) || 0));
  const done = safeCount % safeTarget;
  return {
    count: safeCount,
    target: safeTarget,
    remaining: safeTarget - done,
    percent: Math.round((done / safeTarget) * 100),
  };
}

/** "Encore 2 tombolas avant ton ticket gratuit" + parrainage, sur l'accueil. */
@Component({
  selector: 'app-reward-progress',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" class="rewards" *ngIf="loyalty && referral" (click)="open()">
      <div class="head">
        <span class="title">
          <ion-icon name="gift-outline" aria-hidden="true"></ion-icon>
          {{ 'ENGAGEMENT.REWARDS_TITLE' | translate }}
        </span>
        <span class="balance" *ngIf="freeTickets > 0">
          {{ 'ENGAGEMENT.FREE_TICKETS_BALANCE' | translate: { n: freeTickets } }}
        </span>
      </div>

      <div class="goal">
        <div class="label">
          {{ (loyalty.remaining === 1 ? 'ENGAGEMENT.LOYALTY_REMAINING_ONE' : 'ENGAGEMENT.LOYALTY_REMAINING') | translate: { n: loyalty.remaining } }}
        </div>
        <div class="bar" role="progressbar" [attr.aria-valuenow]="loyalty.percent" aria-valuemin="0" aria-valuemax="100">
          <div class="fill" [style.width.%]="loyalty.percent"></div>
        </div>
      </div>

      <div class="goal">
        <div class="label">
          {{ (referral.remaining === 1 ? 'ENGAGEMENT.REFERRAL_REMAINING_ONE' : 'ENGAGEMENT.REFERRAL_REMAINING') | translate: { n: referral.remaining } }}
        </div>
        <div class="bar" role="progressbar" [attr.aria-valuenow]="referral.percent" aria-valuemin="0" aria-valuemax="100">
          <div class="fill alt" [style.width.%]="referral.percent"></div>
        </div>
      </div>
    </button>
  `,
  styles: [
    `
      .rewards {
        display: block;
        width: 100%;
        margin: 12px 0 4px;
        padding: 14px;
        text-align: left;
        border-radius: var(--app-radius-lg, 18px);
        background: var(--app-surface);
        border: 1px solid var(--app-border);
        color: var(--app-ink);
        font: inherit;
      }
      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 10px;
      }
      .title {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-weight: 800;
        font-size: 14px;
      }
      .title ion-icon {
        color: var(--app-warning);
        font-size: 18px;
      }
      .balance {
        padding: 3px 9px;
        border-radius: var(--app-radius-pill, 999px);
        background: var(--app-warning-soft);
        color: var(--app-ink);
        font-size: 11.5px;
        font-weight: 700;
        white-space: nowrap;
      }
      .goal + .goal {
        margin-top: 10px;
      }
      .label {
        font-size: 12.5px;
        color: var(--app-muted);
        margin-bottom: 5px;
      }
      .bar {
        height: 8px;
        border-radius: 99px;
        background: var(--app-surface-3, var(--app-surface-2));
        overflow: hidden;
      }
      .fill {
        height: 100%;
        min-width: 6px;
        border-radius: inherit;
        background: var(--app-gradient-gold, var(--app-warning));
        transition: width 0.6s var(--app-ease-out, ease-out);
      }
      .fill.alt {
        background: var(--app-gradient-brand, var(--app-primary));
      }
    `,
  ],
})
export class RewardProgressComponent implements OnInit {
  loyalty: RewardGoal | null = null;
  referral: RewardGoal | null = null;
  freeTickets = 0;

  constructor(
    private api: ReferralApiService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.api.summary().subscribe({
      next: (s: ReferralSummaryDto) => {
        this.freeTickets = Math.max(0, Number(s?.freeTicketsBalance ?? 0));
        this.loyalty = rewardGoal(s?.loyalty?.playedRafflesCount, s?.loyalty?.target);
        this.referral = rewardGoal(s?.referral?.qualifiedReferrals, s?.referral?.target);
        this.cdr.markForCheck();
      },
      error: () => {
        this.loyalty = null;
        this.referral = null;
        this.cdr.markForCheck();
      },
    });
  }

  open(): void {
    void this.router.navigate(['/tabs/referral']);
  }
}
