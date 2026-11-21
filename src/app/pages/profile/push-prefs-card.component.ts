import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription, firstValueFrom } from 'rxjs';
import {
  AuthStateService,
  PushPrefs,
  pushPrefsOf,
} from 'src/app/services/auth/auth-state.service';
import {
  PushNotificationsService,
  PushPermissionState,
} from 'src/app/services/push/push-notifications.service';

/**
 * Carte "Notifications" du profil: preferences push optionnelles (l'API reste
 * l'autorite) + etat de l'autorisation OS sur Android natif.
 */
@Component({
  selector: 'app-push-prefs-card',
  standalone: true,
  imports: [CommonModule, IonicModule, TranslateModule],
  template: `
    <section class="push-card">
      <div class="label">{{ 'PROFILE_NOTIFICATIONS.TITLE' | translate }}</div>

      <div class="row">
        <span class="grow">{{ 'PROFILE_NOTIFICATIONS.REMINDERS' | translate }}</span>
        <ion-toggle
          [checked]="prefs.reminders"
          [disabled]="saving.reminders"
          (ionChange)="toggle('reminders', $event.detail.checked)"
          [attr.aria-label]="'PROFILE_NOTIFICATIONS.REMINDERS' | translate"
        ></ion-toggle>
      </div>

      <div class="row">
        <span class="grow">{{ 'PROFILE_NOTIFICATIONS.NEW_RAFFLES' | translate }}</span>
        <ion-toggle
          [checked]="prefs.newRaffles"
          [disabled]="saving.newRaffles"
          (ionChange)="toggle('newRaffles', $event.detail.checked)"
          [attr.aria-label]="'PROFILE_NOTIFICATIONS.NEW_RAFFLES' | translate"
        ></ion-toggle>
      </div>

      <p class="hint">{{ 'PROFILE_NOTIFICATIONS.ALWAYS_ON' | translate }}</p>

      <div class="perm" *ngIf="native">
        <div class="perm-line">
          <span>{{ 'PROFILE_NOTIFICATIONS.PERMISSION_LABEL' | translate }}</span>
          <strong [class.ok]="permission === 'granted'" [class.ko]="permission === 'denied'">
            {{ permissionLabelKey | translate }}
          </strong>
        </div>
        <p class="hint" *ngIf="permission === 'denied'">
          {{ 'PROFILE_NOTIFICATIONS.DENIED_HELP' | translate }}
        </p>
        <button
          *ngIf="permission === 'prompt' || permission === 'prompt-with-rationale'"
          type="button"
          class="enable"
          (click)="enable()"
          [disabled]="enabling"
        >
          <ion-icon name="notifications-outline" aria-hidden="true"></ion-icon>
          {{ 'PROFILE_NOTIFICATIONS.ENABLE' | translate }}
        </button>
      </div>
    </section>
  `,
  styles: [
    `
      .push-card {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 18px;
        padding: 14px;
        border: 1px solid var(--app-border);
        border-radius: var(--app-radius);
        background: var(--app-surface);
        color: var(--app-ink);
      }
      .label {
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--app-muted);
      }
      .row,
      .perm-line {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
      }
      .grow {
        flex: 1 1 auto;
        min-width: 0;
      }
      .perm-line span {
        flex: 1 1 auto;
        color: var(--app-muted);
        font-size: 13px;
      }
      .perm-line strong.ok {
        color: var(--ion-color-success, #16a34a);
      }
      .perm-line strong.ko {
        color: var(--ion-color-danger, #dc2626);
      }
      .hint {
        margin: 0;
        font-size: 12.5px;
        line-height: 1.4;
        color: var(--app-muted);
      }
      .perm {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-top: 10px;
        border-top: 1px solid var(--app-border);
      }
      .enable {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        border: 0;
        border-radius: 999px;
        padding: 10px 14px;
        background: var(--app-primary);
        color: #fff;
        font-weight: 700;
        font-size: 13px;
      }
      .enable[disabled] {
        opacity: 0.6;
      }
    `,
  ],
})
export class PushPrefsCardComponent implements OnInit, OnDestroy {
  prefs: PushPrefs = { reminders: true, newRaffles: true };
  saving: Record<keyof PushPrefs, boolean> = { reminders: false, newRaffles: false };
  native = false;
  permission: PushPermissionState = 'unsupported';
  enabling = false;
  private subs: Subscription[] = [];

  constructor(
    private readonly authState: AuthStateService,
    private readonly push: PushNotificationsService,
    private readonly toast: ToastController,
    private readonly translate: TranslateService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  get permissionLabelKey(): string {
    switch (this.permission) {
      case 'granted':
        return 'PROFILE_NOTIFICATIONS.STATE_GRANTED';
      case 'denied':
        return 'PROFILE_NOTIFICATIONS.STATE_DENIED';
      default:
        return 'PROFILE_NOTIFICATIONS.STATE_PROMPT';
    }
  }

  ngOnInit(): void {
    this.subs.push(
      this.authState.me$.subscribe((me) => {
        // Ne pas ecraser une bascule en cours d'enregistrement.
        if (this.saving.reminders || this.saving.newRaffles) return;
        this.prefs = pushPrefsOf(me);
      }),
      this.push.permission$.subscribe((p) => (this.permission = p)),
    );
    this.authState.ensureCurrentUser().subscribe();
    void this.refresh();
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  /** Appele a chaque entree sur le profil (l'autorisation a pu changer). */
  async refresh(): Promise<void> {
    await this.push.init();
    this.native = this.push.isAvailable;
    if (this.native) await this.push.refreshPermission();
  }

  async toggle(key: keyof PushPrefs, checked: boolean): Promise<void> {
    if (this.saving[key] || this.prefs[key] === checked) return;
    const previous = this.prefs[key];
    this.prefs = { ...this.prefs, [key]: checked };
    this.saving = { ...this.saving, [key]: true };
    this.cdr.detectChanges();
    try {
      await firstValueFrom(this.authState.updatePushPrefs({ [key]: checked }));
    } catch {
      this.prefs = { ...this.prefs, [key]: previous };
      const t = await this.toast.create({
        message: this.translate.instant('PROFILE_NOTIFICATIONS.SAVE_FAILED'),
        duration: 2500,
        position: 'top',
      });
      await t.present();
    } finally {
      this.saving = { ...this.saving, [key]: false };
      this.cdr.markForCheck();
    }
  }

  async enable(): Promise<void> {
    if (this.enabling) return;
    this.enabling = true;
    const outcome = await this.push.requestAndEnable();
    this.enabling = false;
    const key =
      outcome === 'granted'
        ? 'PUSH.ENABLED_TOAST'
        : outcome === 'denied'
          ? 'PUSH.DENIED_TOAST'
          : 'PUSH.ERROR_TOAST';
    const t = await this.toast.create({
      message: this.translate.instant(key),
      duration: 3500,
      position: 'top',
    });
    await t.present();
  }
}
