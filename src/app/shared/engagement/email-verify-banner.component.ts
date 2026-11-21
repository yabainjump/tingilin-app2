import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription, firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthStateService } from 'src/app/services/auth/auth-state.service';

/**
 * Bandeau "Confirme ton adresse email" avec bouton "Renvoyer le lien".
 * Visible uniquement quand l'API dit explicitement emailVerified === false
 * (un profil pas encore charge ne declenche rien).
 */
@Component({
  selector: 'app-email-verify-banner',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="banner" *ngIf="visible" role="status">
      <ion-icon name="mail-unread-outline" aria-hidden="true"></ion-icon>
      <div class="text">
        <strong>{{ 'EMAIL_VERIFY_BANNER.TITLE' | translate }}</strong>
        <span>{{ 'EMAIL_VERIFY_BANNER.TEXT' | translate: { email: email } }}</span>
      </div>
      <button type="button" (click)="resend()" [disabled]="sending || sent">
        {{ (sent ? 'EMAIL_VERIFY_BANNER.SENT' : 'EMAIL_VERIFY_BANNER.RESEND') | translate }}
      </button>
    </div>
  `,
  styles: [
    `
      .banner {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
        border-radius: 14px;
        background: var(--app-surface-2);
        border: 1px solid var(--app-border);
        color: var(--app-ink);
      }
      ion-icon {
        flex: 0 0 auto;
        font-size: 24px;
        color: var(--app-primary);
      }
      .text {
        flex: 1 1 auto;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
        font-size: 12.5px;
        line-height: 1.35;
      }
      .text span {
        color: var(--app-muted);
        overflow-wrap: anywhere;
      }
      button {
        flex: 0 0 auto;
        border: 0;
        border-radius: 999px;
        padding: 8px 12px;
        background: var(--app-primary);
        color: #fff;
        font-weight: 700;
        font-size: 12px;
      }
      button[disabled] {
        opacity: 0.6;
      }
    `,
  ],
})
export class EmailVerifyBannerComponent implements OnInit, OnDestroy {
  visible = false;
  email = '';
  sending = false;
  sent = false;
  private sub?: Subscription;

  constructor(
    private readonly auth: AuthService,
    private readonly authState: AuthStateService,
    private readonly toast: ToastController,
    private readonly translate: TranslateService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.sub = this.authState.me$.subscribe((me) => {
      this.visible = !!me && me.emailVerified === false;
      this.email = String(me?.email ?? '');
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  async resend(): Promise<void> {
    if (this.sending || this.sent) return;
    this.sending = true;
    this.cdr.markForCheck();
    let message: string;
    try {
      const res = await firstValueFrom(this.auth.resendEmailVerification());
      if (res?.alreadyVerified) {
        this.authState.refreshMe();
        message = this.translate.instant('EMAIL_VERIFY_BANNER.ALREADY');
      } else {
        this.sent = true;
        message = this.translate.instant('EMAIL_VERIFY_BANNER.TOAST_SENT', {
          email: this.email,
        });
      }
    } catch (err: any) {
      const raw = err?.error?.message;
      message =
        (typeof raw === 'string' && raw.length <= 160 ? raw : '') ||
        this.translate.instant('EMAIL_VERIFY_BANNER.TOAST_FAILED');
    } finally {
      this.sending = false;
      this.cdr.markForCheck();
    }
    const t = await this.toast.create({ message, duration: 3000, position: 'top' });
    await t.present();
  }
}
