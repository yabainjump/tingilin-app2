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
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { AuthStateService } from 'src/app/services/auth/auth-state.service';
import {
  PushNotificationsService,
  shouldShowPushOptin,
} from 'src/app/services/push/push-notifications.service';

/**
 * Soft opt-in "Ne rate aucun tirage": n'apparait que sur Android natif (Firebase
 * configure), connecte, autorisation jamais accordee/refusee, et pas reporte
 * dans les 7 derniers jours. Le prompt OS n'est declenche que par "Activer".
 */
@Component({
  selector: 'app-push-optin-banner',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="banner" *ngIf="visible" role="status">
      <ion-icon name="notifications-outline" aria-hidden="true"></ion-icon>
      <div class="text">
        <strong>{{ 'PUSH_OPTIN.TITLE' | translate }}</strong>
        <span>{{ 'PUSH_OPTIN.TEXT' | translate }}</span>
      </div>
      <div class="actions">
        <button type="button" class="primary" (click)="enable()" [disabled]="busy">
          {{ 'PUSH_OPTIN.ENABLE' | translate }}
        </button>
        <button type="button" class="ghost" (click)="later()" [disabled]="busy">
          {{ 'PUSH_OPTIN.LATER' | translate }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .banner {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 10px 0;
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
      .actions {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      button {
        border: 0;
        border-radius: 999px;
        padding: 8px 12px;
        font-weight: 700;
        font-size: 12px;
      }
      button.primary {
        background: var(--app-primary);
        color: #fff;
      }
      button.ghost {
        background: transparent;
        color: var(--app-muted);
        padding: 4px 12px;
      }
      button[disabled] {
        opacity: 0.6;
      }
    `,
  ],
})
export class PushOptinBannerComponent implements OnInit, OnDestroy {
  visible = false;
  busy = false;
  private readonly dismissedAt$ = new BehaviorSubject<number | null>(null);
  private sub?: Subscription;

  constructor(
    private readonly push: PushNotificationsService,
    private readonly authState: AuthStateService,
    private readonly toast: ToastController,
    private readonly translate: TranslateService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.push.init();
    if (!this.push.isAvailable) return; // web / Firebase absent: jamais affiche
    this.dismissedAt$.next(await this.push.getOptinDismissedAt());
    this.sub = combineLatest([
      this.authState.isLoggedIn$,
      this.push.permission$,
      this.dismissedAt$,
    ]).subscribe(([loggedIn, permission, dismissedAt]) => {
      this.visible = shouldShowPushOptin({
        available: this.push.isAvailable,
        loggedIn,
        permission,
        dismissedAt,
        now: Date.now(),
      });
      this.cdr.markForCheck();
    });
    void this.push.refreshPermission();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  async enable(): Promise<void> {
    if (this.busy) return;
    this.busy = true;
    this.cdr.markForCheck();
    const outcome = await this.push.requestAndEnable();
    this.busy = false;
    this.cdr.markForCheck();

    const key =
      outcome === 'granted'
        ? 'PUSH.ENABLED_TOAST'
        : outcome === 'denied'
          ? 'PUSH.DENIED_TOAST'
          : 'PUSH.ERROR_TOAST';
    // Refus: l'etat passe a denied/prompt-with-rationale; on reporte aussi le
    // bandeau pour ne pas re-solliciter tout de suite.
    if (outcome !== 'granted') await this.snooze();
    const t = await this.toast.create({
      message: this.translate.instant(key),
      duration: 3500,
      position: 'top',
    });
    await t.present();
  }

  async later(): Promise<void> {
    await this.snooze();
  }

  private async snooze(): Promise<void> {
    const now = Date.now();
    await this.push.dismissOptin(now);
    this.dismissedAt$.next(now);
  }
}
