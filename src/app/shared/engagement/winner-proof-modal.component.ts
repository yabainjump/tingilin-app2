import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import {
  WinnerDto,
  WinnersApiService,
} from 'src/app/services/winners/winners-api.service';
import {
  DrawVerificationResult,
  isWebCryptoAvailable,
  verifyDrawLocally,
} from 'src/app/shared/utils/provably-fair-verify';

type VerifyState = 'IDLE' | 'RUNNING' | 'DONE' | 'PENDING' | 'ERROR';

/**
 * Fiche d'un gagnant: lot, preuve de remise (photo + temoignage) et
 * verification du tirage refaite SUR LE TELEPHONE, expliquee simplement.
 */
@Component({
  selector: 'app-winner-proof-modal',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>{{ 'ENGAGEMENT.WINNER_SHEET_TITLE' | translate }}</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="close()" [attr.aria-label]="'COMMON.CLOSE' | translate">
            <ion-icon name="close-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="sheet">
      <div class="wrap">
        <div class="prize">
          <img *ngIf="winner.prizeImageUrl" [src]="winner.prizeImageUrl" [alt]="winner.prizeTitle" />
          <div>
            <div class="prize-title">{{ winner.prizeTitle }}</div>
            <div class="who">
              {{ 'ENGAGEMENT.WON_BY' | translate: { name: winner.winnerName } }}
              <span class="code">#{{ winner.ticketCode }}</span>
            </div>
            <span class="delivered" *ngIf="winner.delivered">
              <ion-icon name="checkmark-circle"></ion-icon>
              {{ 'ENGAGEMENT.DELIVERED_BADGE' | translate }}
            </span>
          </div>
        </div>

        <section class="proof" *ngIf="winner.deliveryProof as p">
          <img [src]="p.imageUrl" [alt]="'ENGAGEMENT.DELIVERY_PHOTO_ALT' | translate: { name: winner.winnerName }" />
          <blockquote *ngIf="p.testimonial">« {{ p.testimonial }} »</blockquote>
        </section>

        <section class="verify">
          <h3>{{ 'ENGAGEMENT.VERIFY_TITLE' | translate }}</h3>
          <p class="explain">{{ 'ENGAGEMENT.VERIFY_EXPLAIN' | translate }}</p>

          <button
            type="button"
            class="verify-btn"
            (click)="verify()"
            [disabled]="state === 'RUNNING'"
            *ngIf="state !== 'DONE'"
          >
            <ion-icon name="shield-checkmark-outline"></ion-icon>
            <span>{{ 'ENGAGEMENT.VERIFY_BUTTON' | translate }}</span>
            <ion-spinner *ngIf="state === 'RUNNING'" name="dots"></ion-spinner>
          </button>

          <p class="note" *ngIf="state === 'PENDING'">{{ 'ENGAGEMENT.VERIFY_PENDING' | translate }}</p>
          <p class="note ko" *ngIf="state === 'ERROR'">{{ 'ENGAGEMENT.VERIFY_ERROR' | translate }}</p>

          <ol class="checks" *ngIf="state === 'DONE' && result as r">
            <li [class.ok]="r.commitmentOk" [class.ko]="!r.commitmentOk">
              <ion-icon [name]="r.commitmentOk ? 'checkmark-circle' : 'close-circle'"></ion-icon>
              <div>
                <strong>{{ 'ENGAGEMENT.CHECK_COMMITMENT' | translate }}</strong>
                <span>{{ 'ENGAGEMENT.CHECK_COMMITMENT_HELP' | translate }}</span>
              </div>
            </li>
            <li [class.ok]="r.ticketsetOk" [class.ko]="!r.ticketsetOk">
              <ion-icon [name]="r.ticketsetOk ? 'checkmark-circle' : 'close-circle'"></ion-icon>
              <div>
                <strong>{{ 'ENGAGEMENT.CHECK_TICKETS' | translate: { n: ticketCount } }}</strong>
                <span>{{ 'ENGAGEMENT.CHECK_TICKETS_HELP' | translate }}</span>
              </div>
            </li>
            <li [class.ok]="r.winnerOk" [class.ko]="!r.winnerOk">
              <ion-icon [name]="r.winnerOk ? 'checkmark-circle' : 'close-circle'"></ion-icon>
              <div>
                <strong>{{ 'ENGAGEMENT.CHECK_WINNER' | translate: { serial: r.computedSerial } }}</strong>
                <span>{{ 'ENGAGEMENT.CHECK_WINNER_HELP' | translate }}</span>
              </div>
            </li>
          </ol>
          <div class="verdict" *ngIf="state === 'DONE' && result as r" [class.ok]="r.valid" [class.ko]="!r.valid">
            {{ (r.valid ? 'ENGAGEMENT.VERDICT_OK' : 'ENGAGEMENT.VERDICT_KO') | translate }}
          </div>
        </section>
      </div>
    </ion-content>
  `,
  styles: [
    `
      .sheet {
        --background: var(--app-bg);
      }
      .wrap {
        padding: 8px 16px 28px;
        color: var(--app-ink);
      }
      .prize {
        display: flex;
        gap: 12px;
        align-items: center;
      }
      .prize img {
        width: 72px;
        height: 72px;
        border-radius: 14px;
        object-fit: cover;
        flex: 0 0 auto;
      }
      .prize-title {
        font-weight: 800;
        font-size: 17px;
      }
      .who {
        font-size: 13px;
        color: var(--app-muted);
        margin-top: 2px;
      }
      .code {
        font-family: ui-monospace, monospace;
        margin-left: 4px;
      }
      .delivered {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-top: 6px;
        padding: 3px 8px;
        border-radius: 99px;
        background: var(--app-success-soft);
        color: var(--app-success);
        font-size: 12px;
        font-weight: 700;
      }
      .proof {
        margin-top: 16px;
      }
      .proof img {
        width: 100%;
        max-height: 360px;
        object-fit: cover;
        border-radius: var(--app-radius-lg, 18px);
      }
      blockquote {
        margin: 10px 0 0;
        padding: 10px 12px;
        border-left: 3px solid var(--app-warning);
        background: var(--app-surface);
        border-radius: 0 12px 12px 0;
        font-style: italic;
        font-size: 14px;
      }
      .verify {
        margin-top: 20px;
        padding: 14px;
        border-radius: var(--app-radius-lg, 18px);
        background: var(--app-surface);
        border: 1px solid var(--app-border);
      }
      h3 {
        margin: 0 0 4px;
        font-size: 16px;
        font-weight: 800;
      }
      .explain,
      .note {
        margin: 0 0 10px;
        font-size: 13px;
        color: var(--app-muted);
        line-height: 1.45;
      }
      .note.ko {
        color: var(--app-danger);
      }
      .verify-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 44px;
        padding: 0 16px;
        border-radius: 99px;
        border: 0;
        background: var(--app-primary);
        color: var(--app-on-primary, #fff);
        font: inherit;
        font-weight: 700;
      }
      .checks {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;
      }
      .checks li {
        display: flex;
        gap: 10px;
        align-items: flex-start;
      }
      .checks ion-icon {
        flex: 0 0 auto;
        font-size: 20px;
        margin-top: 1px;
      }
      .checks li.ok ion-icon {
        color: var(--app-success);
      }
      .checks li.ko ion-icon {
        color: var(--app-danger);
      }
      .checks strong {
        display: block;
        font-size: 13.5px;
      }
      .checks span {
        display: block;
        font-size: 12px;
        color: var(--app-muted);
        line-height: 1.4;
      }
      .verdict {
        margin-top: 12px;
        padding: 10px 12px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 13.5px;
      }
      .verdict.ok {
        background: var(--app-success-soft);
        color: var(--app-success);
      }
      .verdict.ko {
        background: var(--app-danger-soft);
        color: var(--app-danger);
      }
    `,
  ],
})
export class WinnerProofModalComponent {
  @Input({ required: true }) winner!: WinnerDto;

  state: VerifyState = 'IDLE';
  result: DrawVerificationResult | null = null;
  ticketCount = 0;

  constructor(
    private modal: ModalController,
    private api: WinnersApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  close(): void {
    void this.modal.dismiss();
  }

  async verify(): Promise<void> {
    if (!this.winner?.raffleId || !isWebCryptoAvailable()) {
      this.state = 'ERROR';
      return;
    }
    this.state = 'RUNNING';
    this.cdr.markForCheck();
    try {
      const proof = await firstValueFrom(this.api.fairness(this.winner.raffleId));
      const rev = proof?.revealed;
      if (!rev?.serverSeed || !rev.orderedSerials?.length) {
        this.state = 'PENDING';
        return;
      }
      this.ticketCount = rev.orderedSerials.length;
      // Calcul independant: on n'utilise PAS le champ "verified" du serveur.
      this.result = await verifyDrawLocally({
        raffleId: proof.raffleId,
        commitment: proof.commitment,
        serverSeed: rev.serverSeed,
        orderedSerials: rev.orderedSerials,
        ticketsetHash: rev.ticketsetHash,
        winningIndex: rev.winningIndex,
        winningTicketSerial: rev.winningTicketSerial,
      });
      this.state = 'DONE';
    } catch {
      this.state = 'ERROR';
    } finally {
      this.cdr.markForCheck();
    }
  }
}
