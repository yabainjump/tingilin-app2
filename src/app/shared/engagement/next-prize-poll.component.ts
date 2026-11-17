import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs';
import {
  EngagementApiService,
  PollDto,
} from 'src/app/services/engagement/engagement-api.service';
import { apiErrorMessage } from 'src/app/services/responsible-play/responsible-play-api.service';

/** "Choisis le prochain lot": un vote par joueur, resultats apres le vote. */
@Component({
  selector: 'app-next-prize-poll',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="poll" *ngIf="poll">
      <div class="kicker">
        <ion-icon name="sparkles-outline" aria-hidden="true"></ion-icon>
        {{ 'ENGAGEMENT.POLL_KICKER' | translate }}
      </div>
      <h3>{{ poll.question }}</h3>
      <p class="desc" *ngIf="poll.description">{{ poll.description }}</p>

      <div class="options">
        <button
          type="button"
          class="option"
          *ngFor="let o of poll.options; trackBy: trackById"
          [class.mine]="o.id === myOptionId"
          [class.results]="!!myOptionId"
          [disabled]="voting || !!myOptionId"
          (click)="vote(o.id)"
        >
          <img *ngIf="o.imageUrl" [src]="o.imageUrl" [alt]="o.label" loading="lazy" />
          <span class="label">{{ o.label }}</span>
          <span class="pct" *ngIf="myOptionId">{{ o.percent }}%</span>
          <span class="fill" *ngIf="myOptionId" [style.width.%]="o.percent" aria-hidden="true"></span>
          <ion-icon *ngIf="o.id === myOptionId" name="checkmark-circle" class="check"></ion-icon>
        </button>
      </div>

      <div class="foot">
        <span *ngIf="myOptionId">{{ 'ENGAGEMENT.POLL_THANKS' | translate }}</span>
        <span>{{ 'ENGAGEMENT.POLL_VOTES' | translate: { n: poll.totalVotes } }}</span>
      </div>
    </section>
  `,
  styles: [
    `
      .poll {
        margin: 18px 0;
        padding: 16px;
        border-radius: var(--app-radius-lg, 18px);
        background: var(--app-surface);
        border: 1px solid var(--app-border);
        color: var(--app-ink);
      }
      .kicker {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 11.5px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--app-primary);
      }
      h3 {
        margin: 6px 0 4px;
        font-size: 17px;
        font-weight: 800;
      }
      .desc {
        margin: 0 0 10px;
        font-size: 13px;
        color: var(--app-muted);
      }
      .options {
        display: grid;
        gap: 8px;
        margin-top: 10px;
      }
      .option {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        min-height: 48px;
        padding: 8px 12px;
        border-radius: var(--app-radius, 14px);
        border: 1px solid var(--app-border);
        background: var(--app-surface-2);
        color: var(--app-ink);
        font: inherit;
        text-align: left;
        overflow: hidden;
      }
      .option:not(.results):active {
        transform: scale(0.99);
      }
      .option.mine {
        border-color: var(--app-primary);
      }
      .option[disabled] {
        opacity: 1;
      }
      img {
        position: relative;
        z-index: 1;
        width: 36px;
        height: 36px;
        object-fit: cover;
        border-radius: 10px;
        flex: 0 0 auto;
      }
      .label {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        font-weight: 700;
        font-size: 14px;
      }
      .pct {
        position: relative;
        z-index: 1;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
      }
      .check {
        position: relative;
        z-index: 1;
        color: var(--app-primary);
        font-size: 18px;
      }
      .fill {
        position: absolute;
        inset: 0 auto 0 0;
        background: var(--app-primary-soft);
        opacity: 0.35;
        transition: width 0.6s var(--app-ease-out, ease-out);
      }
      .foot {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        margin-top: 10px;
        font-size: 12px;
        color: var(--app-muted);
      }
    `,
  ],
})
export class NextPrizePollComponent implements OnInit {
  @Input() loggedIn = false;

  poll: PollDto | null = null;
  myOptionId: string | null = null;
  voting = false;

  constructor(
    private api: EngagementApiService,
    private router: Router,
    private toast: ToastController,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.api.activePoll().subscribe({
      next: (poll) => {
        this.poll = poll;
        this.cdr.markForCheck();
        if (poll && this.loggedIn) this.loadMyVote(poll.id);
      },
      error: () => {
        this.poll = null;
        this.cdr.markForCheck();
      },
    });
  }

  trackById(_: number, o: { id: string }): string {
    return o.id;
  }

  async vote(optionId: string): Promise<void> {
    if (!this.poll || this.voting || this.myOptionId) return;
    if (!this.loggedIn) {
      await this.showToast(this.translate.instant('ENGAGEMENT.POLL_LOGIN'));
      await this.router.navigate(['/auth/login'], {
        queryParams: { redirect: '/tabs/home' },
      });
      return;
    }

    this.voting = true;
    this.cdr.markForCheck();
    this.api
      .vote(this.poll.id, optionId)
      .pipe(
        finalize(() => {
          this.voting = false;
          this.cdr.markForCheck();
        }),
      )
      .subscribe({
        next: (updated) => {
          this.myOptionId = optionId;
          if (updated) this.poll = updated;
          this.cdr.markForCheck();
        },
        error: async (err) => {
          if (Number(err?.status) === 409) {
            // Deja vote (autre appareil): on affiche simplement les resultats.
            this.loadMyVote(this.poll!.id);
          }
          await this.showToast(
            apiErrorMessage(err) || this.translate.instant('ENGAGEMENT.POLL_ERROR'),
          );
        },
      });
  }

  private loadMyVote(pollId: string): void {
    this.api.myVote().subscribe({
      next: (res) => {
        if (res?.pollId === pollId && res.optionId) {
          this.myOptionId = res.optionId;
          this.cdr.markForCheck();
        }
      },
      error: () => undefined,
    });
  }

  private async showToast(message: string): Promise<void> {
    const t = await this.toast.create({ message, duration: 2200, position: 'top' });
    await t.present();
  }
}
