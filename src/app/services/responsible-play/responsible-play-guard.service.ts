import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { AuthStateService } from '../auth/auth-state.service';
import {
  AGE_CONFIRMATION_REQUIRED,
  apiErrorCode,
  apiErrorMessage,
  ResponsiblePlayApiService,
  SPENDING_LIMIT_REACHED,
} from './responsible-play-api.service';

export type PurchaseErrorOutcome = 'RETRY' | 'HANDLED' | 'UNHANDLED';

/**
 * Traduit les refus "jeu responsable" de l'API en dialogues clairs:
 *  - 18+ non confirme  -> le joueur confirme, puis on relance l'achat;
 *  - limite atteinte   -> message + acces direct a la page de limite.
 * L'API reste l'autorite: ce service ne fait qu'expliquer ses refus.
 */
@Injectable({ providedIn: 'root' })
export class ResponsiblePlayGuardService {
  constructor(
    private api: ResponsiblePlayApiService,
    private alerts: AlertController,
    private translate: TranslateService,
    private router: Router,
    private authState: AuthStateService,
  ) {}

  async handlePurchaseError(err: unknown): Promise<PurchaseErrorOutcome> {
    const code = apiErrorCode(err);
    if (code === AGE_CONFIRMATION_REQUIRED) {
      return (await this.askAdultConfirmation()) ? 'RETRY' : 'HANDLED';
    }
    if (code === SPENDING_LIMIT_REACHED) {
      await this.showLimitReached(apiErrorMessage(err));
      return 'HANDLED';
    }
    return 'UNHANDLED';
  }

  /** Vrai si le joueur a confirme ses 18 ans (et que l'API l'a enregistre). */
  async askAdultConfirmation(): Promise<boolean> {
    const t = (k: string) => this.translate.instant(`RESPONSIBLE_PLAY.${k}`);
    const alert = await this.alerts.create({
      header: t('AGE_TITLE'),
      message: t('AGE_MESSAGE'),
      backdropDismiss: false,
      buttons: [
        { text: t('CANCEL'), role: 'cancel' },
        { text: t('AGE_CONFIRM'), role: 'confirm' },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    if (role !== 'confirm') return false;

    try {
      await firstValueFrom(this.api.confirmAdult());
      this.authState.refreshMe();
      return true;
    } catch {
      const failed = await this.alerts.create({
        header: t('AGE_TITLE'),
        message: t('AGE_CONFIRM_FAILED'),
        buttons: [t('OK')],
      });
      await failed.present();
      return false;
    }
  }

  private async showLimitReached(serverMessage: string | null) {
    const t = (k: string) => this.translate.instant(`RESPONSIBLE_PLAY.${k}`);
    const alert = await this.alerts.create({
      header: t('LIMIT_REACHED_TITLE'),
      message: serverMessage || t('LIMIT_REACHED_MESSAGE'),
      buttons: [
        { text: t('OK'), role: 'cancel' },
        { text: t('MANAGE_LIMIT'), role: 'manage' },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    if (role === 'manage') {
      await this.router.navigate(['/tabs/responsible-play']);
    }
  }
}
