import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentsApiService } from 'src/app/core/api/payments-api.service';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.page.html',
  styleUrls: ['./payment-confirmation.page.scss'],
  standalone: false,
})
export class PaymentConfirmationPage {
  // Data affichée
  raffleId!: string;
  title = 'iPhone 15 Pro Max';
  imageUrl?: string;
  fallbackImage = 'assets/placeholder-product.png';

  quantity = 1;
  ticketUnitPrice = 100;
  amount = 100;

  // Form
  paymentMethod: 'ORANGE' | 'MTN' = 'ORANGE';
  userPhone = '';
  userCountry = 'CM';
  payerEmail = '';
  payerName = '';

  // Résultats paiement
  transactionId?: string;
  paymentLink?: string;
  paymentWithTaxes?: number;

  loading = false;
  pageLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentsApi: PaymentsApiService,
    private toastCtrl: ToastController,
    private translate: TranslateService,
    private auth: AuthService,
  ) {}

  async ionViewWillEnter() {
    this.pageLoading = true;

    // ✅ récupère les paramètres depuis navigation (à adapter selon ton flow)
    // Exemple: /payment-confirmation?raffleId=...&title=...&qty=...&unit=...
    const qp = this.route.snapshot.queryParamMap;

    this.raffleId = qp.get('raffleId') || '';
    this.title = qp.get('title') || this.title;
    this.imageUrl = toAbsoluteMediaUrl(qp.get('imageUrl'), environment.apiBaseUrl);

    this.quantity = Number(qp.get('qty') || 1);
    this.ticketUnitPrice = Number(qp.get('unit') || 100);
    this.amount = this.quantity * this.ticketUnitPrice;

    if (!this.raffleId) {
      this.presentToast(this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_RAFFLE_ID'));
    }

    await this.prefillPayerProfile();
    this.pageLoading = false;
  }
  back() {
    history.back();
  }
  async confirmPayment() {
    if (!this.raffleId) return;

    // validation simple
    const cleanedPhone = (this.userPhone || '').replace(/\s+/g, '');
    if (!cleanedPhone || cleanedPhone.length < 8) {
      return this.presentToast(this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_INVALID_PHONE'));
    }

    if (!this.payerEmail) {
      return this.presentToast('Adresse e-mail introuvable. Reconnecte-toi puis réessaie.');
    }

    this.loading = true;

    try {
      const userEmail = this.payerEmail;
      const senderName = this.payerName || 'Tingilin User';

      const res = await this.paymentsApi
        .createIntent({
          raffleId: this.raffleId,
          amount: this.amount,
          provider: 'DIGIKUNTZ',
          userEmail,
          userPhone: cleanedPhone,
          userCountry: this.userCountry,
          senderName,
        })
        .toPromise();

      this.transactionId = res?.transactionId;
      this.paymentLink = res?.paymentLink;
      this.paymentWithTaxes = res?.paymentWithTaxes;

      if (!this.paymentLink) {
        throw new Error(this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_PAYMENT_LINK'));
      }

      await this.presentToast(
        this.paymentWithTaxes
          ? this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_AMOUNT_TTC', { amount: this.paymentWithTaxes })
          : this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_LINK_GENERATED'),
      );

      // Ouvre le lien (web)
      window.open(this.paymentLink, '_blank');

      // Option UX : tu laisses un bouton "Vérifier le paiement" visible
    } catch (e: any) {
      await this.presentToast(
        e?.error?.message || e?.message || this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_PAYMENT_ERROR'),
      );
    } finally {
      this.loading = false;
    }
  }

  private async prefillPayerProfile() {
    try {
      const me = await firstValueFrom(this.auth.me<any>());
      const email = String(me?.email ?? '').trim();
      const firstName = String(me?.firstName ?? '').trim();
      const lastName = String(me?.lastName ?? '').trim();
      const fullName = `${firstName} ${lastName}`.trim();
      const username = String(me?.username ?? '').trim();
      const phone = String(me?.phone ?? '')
        .replace(/\s|-/g, '')
        .trim();

      this.payerEmail = email;
      this.payerName = fullName || username || 'Tingilin User';

      if (!this.userPhone && phone) {
        this.userPhone = phone;
      }
    } catch {
      // user profile fetch can fail when token expires; keep manual phone entry.
    }
  }

  async verifyPayment() {
    if (!this.transactionId) return;

    this.loading = true;

    try {
      const res = await this.paymentsApi
        .verifyDigikuntz(this.transactionId)
        .toPromise();

      if (res?.status === 'SUCCESS') {
        await this.presentToast(this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_PAYMENT_CONFIRMED'));
        // exemple : redirige vers mes tickets
        this.router.navigateByUrl('/tabs/participations');
        return;
      }

      await this.presentToast(
        this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_STATUS', {
          status: res?.status || 'PENDING',
        }),
      );
    } catch (e: any) {
      await this.presentToast(
        e?.error?.message || e?.message || this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_VERIFY_ERROR'),
      );
    } finally {
      this.loading = false;
    }
  }

  private async presentToast(message: string) {
    const t = await this.toastCtrl.create({
      message,
      duration: 1800,
      position: 'top',
    });
    await t.present();
  }

  private visibilityHandler = async () => {
    // Quand l’onglet redevient visible, on verify
    if (document.visibilityState === 'visible' && this.transactionId) {
      await this.verifyPayment();
    }
  };

  ionViewDidEnter() {
    document.addEventListener('visibilitychange', this.visibilityHandler);
  }

  ionViewWillLeave() {
    document.removeEventListener('visibilitychange', this.visibilityHandler);
  }
}
