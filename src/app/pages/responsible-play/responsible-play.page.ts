import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { finalize, firstValueFrom } from 'rxjs';
import { AuthStateService } from 'src/app/services/auth/auth-state.service';
import {
  apiErrorMessage,
  ResponsiblePlayApiService,
  SpendingLimitStatus,
  SpendingPeriod,
} from 'src/app/services/responsible-play/responsible-play-api.service';
import { ResponsiblePlayGuardService } from 'src/app/services/responsible-play/responsible-play-guard.service';

export const LIMIT_PRESETS = [2000, 5000, 10000, 25000];
export const LIMIT_MIN = 100;
export const LIMIT_MAX = 10_000_000;

/**
 * Jeu responsable: limite de depense choisie par le joueur, visibilite dans
 * le fil d'activite et confirmation 18+. L'API applique tout (les baisses
 * tout de suite, les hausses apres un delai de reflexion).
 */
@Component({
  selector: 'app-responsible-play',
  templateUrl: './responsible-play.page.html',
  styleUrls: ['./responsible-play.page.scss'],
  standalone: false,
})
export class ResponsiblePlayPage {
  readonly presets = LIMIT_PRESETS;
  readonly periods: SpendingPeriod[] = ['DAY', 'WEEK', 'MONTH'];

  loading = true;
  saving = false;
  status: SpendingLimitStatus | null = null;

  period: SpendingPeriod = 'WEEK';
  amount: number | null = 5000;

  showInLiveFeed = true;
  adultConfirmed = false;

  constructor(
    private api: ResponsiblePlayApiService,
    private guard: ResponsiblePlayGuardService,
    private authState: AuthStateService,
    private toast: ToastController,
    private translate: TranslateService,
    private nav: NavController,
  ) {}

  ionViewWillEnter(): void {
    this.load();
    this.authState.ensureCurrentUser(true).subscribe((me) => {
      this.showInLiveFeed = me?.showInLiveFeed !== false;
      this.adultConfirmed = me?.adultConfirmed === true;
    });
  }

  back(): void {
    this.nav.back();
  }

  load(): void {
    this.loading = true;
    this.api
      .status()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (s) => {
          this.status = s;
          if (s.limit) {
            this.period = s.limit.period;
            this.amount = s.limit.amount;
          }
        },
        error: () => (this.status = null),
      });
  }

  get spentPercent(): number {
    const s = this.status;
    if (!s?.limit?.amount) return 0;
    return Math.min(100, Math.round((s.spent / s.limit.amount) * 100));
  }

  get amountValid(): boolean {
    const n = Number(this.amount);
    return Number.isInteger(n) && n >= LIMIT_MIN && n <= LIMIT_MAX;
  }

  pickPreset(value: number): void {
    this.amount = value;
  }

  periodLabel(p: SpendingPeriod): string {
    return this.translate.instant(`RESPONSIBLE_PLAY.PERIOD_${p}`);
  }

  formatXaf(n: number | null | undefined): string {
    const v = Math.max(0, Math.floor(Number(n) || 0));
    return `${v.toLocaleString('fr-FR')} FCFA`;
  }

  async save(): Promise<void> {
    if (this.saving || !this.amountValid) return;
    this.saving = true;
    try {
      const res = await firstValueFrom(
        this.api.setLimit({ period: this.period, amount: Number(this.amount) }),
      );
      this.status = res.status;
      await this.showToast(
        this.translate.instant(
          res.applied === 'IMMEDIATE'
            ? 'RESPONSIBLE_PLAY.SAVED_NOW'
            : 'RESPONSIBLE_PLAY.SAVED_LATER',
          { hours: res.status.loosenDelayHours },
        ),
      );
    } catch (err) {
      await this.showToast(apiErrorMessage(err) || this.translate.instant('RESPONSIBLE_PLAY.SAVE_FAILED'));
    } finally {
      this.saving = false;
    }
  }

  async removeLimit(): Promise<void> {
    if (this.saving) return;
    this.saving = true;
    try {
      const res = await firstValueFrom(this.api.removeLimit());
      this.status = res.status;
      await this.showToast(
        this.translate.instant('RESPONSIBLE_PLAY.SAVED_LATER', {
          hours: res.status.loosenDelayHours,
        }),
      );
    } catch (err) {
      await this.showToast(apiErrorMessage(err) || this.translate.instant('RESPONSIBLE_PLAY.SAVE_FAILED'));
    } finally {
      this.saving = false;
    }
  }

  async cancelPending(): Promise<void> {
    if (this.saving) return;
    this.saving = true;
    try {
      this.status = await firstValueFrom(this.api.cancelPending());
      await this.showToast(this.translate.instant('RESPONSIBLE_PLAY.PENDING_CANCELLED'));
    } catch (err) {
      await this.showToast(apiErrorMessage(err) || this.translate.instant('RESPONSIBLE_PLAY.SAVE_FAILED'));
    } finally {
      this.saving = false;
    }
  }

  async toggleLiveFeed(show: boolean): Promise<void> {
    const previous = this.showInLiveFeed;
    this.showInLiveFeed = show;
    try {
      await firstValueFrom(this.api.setShowInLiveFeed(show));
      this.authState.refreshMe();
    } catch {
      this.showInLiveFeed = previous;
      await this.showToast(this.translate.instant('RESPONSIBLE_PLAY.SAVE_FAILED'));
    }
  }

  async confirmAdult(): Promise<void> {
    if (await this.guard.askAdultConfirmation()) this.adultConfirmed = true;
  }

  private async showToast(message: string): Promise<void> {
    const t = await this.toast.create({ message, duration: 2600, position: 'top' });
    await t.present();
  }
}
