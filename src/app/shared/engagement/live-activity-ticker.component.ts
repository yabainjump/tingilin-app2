import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription, interval } from 'rxjs';
import {
  LiveActivity,
  WinnersLiveSocketService,
} from 'src/app/services/winners/winners-live-socket.service';

/**
 * Bandeau "Paul M. · Littoral vient de prendre 3 tickets".
 * Fait tourner les 5 derniers achats; si `raffleId` est fourni, seuls les
 * achats de cette tombola sont affiches. Invisible tant qu'il n'y a rien.
 */
@Component({
  selector: 'app-live-activity-ticker',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ticker" *ngIf="current as a" role="status" aria-live="polite">
      <span class="pulse" aria-hidden="true"></span>
      <ion-icon name="ticket-outline" aria-hidden="true"></ion-icon>
      <span class="text">
        <strong>{{ a.displayName }}</strong>
        <span class="region" *ngIf="a.region"> · {{ a.region }}</span>
        {{ (a.quantity > 1 ? 'ENGAGEMENT.ACTIVITY_MANY' : 'ENGAGEMENT.ACTIVITY_ONE') | translate: { n: a.quantity } }}
        <span class="prize" *ngIf="!raffleId && a.prizeTitle">· {{ a.prizeTitle }}</span>
      </span>
      <span class="ago">{{ ago(a) }}</span>
    </div>
  `,
  styles: [
    `
      .ticker {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 9px 12px;
        border-radius: var(--app-radius-pill, 999px);
        background: var(--app-surface-2);
        border: 1px solid var(--app-border);
        color: var(--app-ink);
        font-size: 12.5px;
        line-height: 1.3;
        animation: tickerIn 0.35s var(--app-ease-out, ease-out);
        overflow: hidden;
      }
      .pulse {
        flex: 0 0 auto;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--app-success);
        box-shadow: 0 0 0 0 var(--app-success);
        animation: pulse 1.8s infinite;
      }
      ion-icon {
        flex: 0 0 auto;
        color: var(--app-primary);
        font-size: 15px;
      }
      .text {
        flex: 1 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .region,
      .prize,
      .ago {
        color: var(--app-muted);
      }
      .ago {
        flex: 0 0 auto;
        font-size: 11px;
      }
      @keyframes tickerIn {
        from {
          opacity: 0;
          transform: translateY(4px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
        }
        70% {
          box-shadow: 0 0 0 7px rgba(34, 197, 94, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .ticker,
        .pulse {
          animation: none;
        }
      }
    `,
  ],
})
export class LiveActivityTickerComponent implements OnInit, OnDestroy {
  @Input() raffleId?: string | null;

  current: LiveActivity | null = null;
  private items: LiveActivity[] = [];
  private index = 0;
  private subs = new Subscription();

  constructor(
    private socket: WinnersLiveSocketService,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.socket.connect();
    this.subs.add(
      this.socket.activity().subscribe((all) => {
        const filtered = this.raffleId
          ? all.filter((a) => a.raffleId === this.raffleId)
          : all;
        const latest = filtered.slice(-5);
        const last = (list: LiveActivity[]) => list[list.length - 1]?.id;
        const isNew = last(latest) !== last(this.items);
        this.items = latest;
        if (isNew) this.index = Math.max(0, latest.length - 1);
        this.render();
      }),
    );
    this.subs.add(
      interval(4500).subscribe(() => {
        if (this.items.length < 2) return;
        this.index = (this.index + 1) % this.items.length;
        this.render();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.socket.disconnect();
  }

  ago(a: LiveActivity): string {
    const ms = Date.now() - new Date(a.at).getTime();
    if (!Number.isFinite(ms) || ms < 60_000) {
      return this.translate.instant('ENGAGEMENT.JUST_NOW');
    }
    const min = Math.floor(ms / 60_000);
    if (min < 60) return this.translate.instant('ENGAGEMENT.MINUTES_AGO', { n: min });
    return this.translate.instant('ENGAGEMENT.HOURS_AGO', { n: Math.floor(min / 60) });
  }

  private render(): void {
    this.current = this.items[this.index] ?? null;
    this.cdr.markForCheck();
  }
}
