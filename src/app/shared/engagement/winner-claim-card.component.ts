import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

export type WinnerClaimDto = {
  raffleId: string;
  fulfillmentStatus: string;
  claimCode: string | null;
  issuedAt: string | null;
  claimedAt: string | null;
};

/** "123456" -> "123 456" ; toute autre valeur est ignoree. */
export function formatClaimCode(code: unknown): string | null {
  const s = typeof code === 'string' ? code : '';
  return /^\d{6}$/.test(s) ? `${s.slice(0, 3)} ${s.slice(3)}` : null;
}

/**
 * Carte "Ton code de retrait" sur le ticket gagnant. L'API ne renvoie le code
 * qu'au gagnant lui-meme (404 sinon) et plus du tout une fois le lot remis.
 */
@Component({
  selector: 'app-winner-claim-card',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="claim" *ngIf="claim as c" aria-live="polite">
      <ng-container *ngIf="c.claimedAt || c.fulfillmentStatus === 'DELIVERED'; else pending">
        <div class="head">
          <ion-icon name="checkmark-circle" class="ok" aria-hidden="true"></ion-icon>
          <div>
            <div class="title">{{ 'WINNER_CLAIM.DELIVERED_TITLE' | translate }}</div>
            <div class="sub" *ngIf="c.claimedAt">
              {{ 'WINNER_CLAIM.DELIVERED_ON' | translate: { date: (c.claimedAt | date: 'd MMM y, HH:mm') } }}
            </div>
          </div>
        </div>
      </ng-container>

      <ng-template #pending>
        <div class="head">
          <ion-icon name="trophy" class="trophy" aria-hidden="true"></ion-icon>
          <div>
            <div class="title">{{ 'WINNER_CLAIM.TITLE' | translate }}</div>
            <div class="sub">{{ 'WINNER_CLAIM.SUBTITLE' | translate }}</div>
          </div>
        </div>

        <ng-container *ngIf="formatted; else noCode">
          <button type="button" class="code" (click)="revealed = !revealed"
                  [attr.aria-label]="'WINNER_CLAIM.TOGGLE' | translate">
            <span class="digits">{{ revealed ? formatted : '••• •••' }}</span>
            <ion-icon [name]="revealed ? 'eye-off-outline' : 'eye-outline'" aria-hidden="true"></ion-icon>
          </button>
          <ol class="steps">
            <li>{{ 'WINNER_CLAIM.STEP_1' | translate }}</li>
            <li>{{ 'WINNER_CLAIM.STEP_2' | translate }}</li>
            <li>{{ 'WINNER_CLAIM.STEP_3' | translate }}</li>
          </ol>
          <p class="warn">🔒 {{ 'WINNER_CLAIM.SECRET' | translate }}</p>
        </ng-container>
        <ng-template #noCode>
          <p class="sub">{{ 'WINNER_CLAIM.NO_CODE' | translate }}</p>
        </ng-template>
      </ng-template>
    </section>
  `,
  styles: [
    `
      .claim {
        margin: 14px 0;
        padding: 16px;
        border-radius: 18px;
        background: var(--app-surface);
        border: 1px solid var(--app-border);
        color: var(--app-ink);
      }
      .head {
        display: flex;
        gap: 12px;
        align-items: center;
      }
      .head ion-icon {
        font-size: 30px;
        flex: 0 0 auto;
      }
      .trophy {
        color: #f59e0b;
      }
      .ok {
        color: var(--app-success);
      }
      .title {
        font-weight: 800;
        font-size: 16px;
      }
      .sub {
        color: var(--app-muted);
        font-size: 13px;
        margin-top: 2px;
      }
      .code {
        width: 100%;
        margin: 14px 0 10px;
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        border-radius: 14px;
        border: 2px dashed var(--app-primary);
        background: var(--app-surface-2);
        color: var(--app-primary);
      }
      .digits {
        font-family: 'Courier New', ui-monospace, monospace;
        font-size: 32px;
        font-weight: 800;
        letter-spacing: 5px;
      }
      .code ion-icon {
        font-size: 22px;
        color: var(--app-muted);
      }
      .steps {
        margin: 0 0 8px;
        padding-left: 20px;
        font-size: 13.5px;
        line-height: 1.5;
      }
      .warn {
        margin: 0;
        font-size: 12.5px;
        color: var(--app-muted);
      }
    `,
  ],
})
export class WinnerClaimCardComponent implements OnChanges {
  @Input() raffleId = '';

  claim: WinnerClaimDto | null = null;
  formatted: string | null = null;
  /** Masque par defaut: personne ne le lit par-dessus l'epaule. */
  revealed = false;

  constructor(
    private readonly http: HttpClient,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  async ngOnChanges(): Promise<void> {
    this.claim = null;
    this.formatted = null;
    this.revealed = false;
    if (!/^[a-f0-9]{24}$/i.test(this.raffleId)) return;
    try {
      const res = await firstValueFrom(
        this.http.get<WinnerClaimDto>(
          `${environment.apiBaseUrl}/raffles/${this.raffleId}/winner-claim`,
        ),
      );
      this.claim = res ?? null;
      this.formatted = formatClaimCode(res?.claimCode);
    } catch {
      // 404 = ce compte n'a pas gagne cette tombola: rien a afficher.
      this.claim = null;
    }
    this.cdr.markForCheck();
  }
}
