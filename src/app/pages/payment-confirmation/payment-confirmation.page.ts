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
  title = '';
  imageUrl?: string;
  fallbackImage = 'assets/placeholder-product.png';

  quantity = 1;
  ticketUnitPrice = 0;
  amount = 0;

  // Form
  paymentMethod: 'ORANGE' | 'MTN' = 'ORANGE';
  userPhone = '';
  userCountry = 'Cameroon';
  payerEmail = '';
  payerName = '';

  // Résultats paiement
  transactionId?: string;
  paymentLink?: string;
  paymentWithTaxes?: number;
  paymentStatus?: string;
  directChargePending = false;
  private intentKey = '';
  private verificationTimer?: ReturnType<typeof setTimeout>;
  private verificationAttempts = 0;
  private verificationInFlight = false;
  private readonly maxVerificationAttempts = 12;

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
    this.stopVerificationPolling();
    this.pageLoading = true;
    this.payerEmail = '';
    this.payerName = '';

    // ✅ récupère les paramètres depuis navigation (à adapter selon ton flow)
    // Exemple: /payment-confirmation?raffleId=...&title=...&qty=...&unit=...
    const qp = this.route.snapshot.queryParamMap;

    this.raffleId = qp.get('raffleId') || '';
    this.title = qp.get('title') || this.title;
    this.imageUrl = toAbsoluteMediaUrl(
      qp.get('imageUrl'),
      environment.apiBaseUrl,
    );

    this.quantity = Number(qp.get('qty') || 1);
    this.ticketUnitPrice = Number(qp.get('unit') || 0);
    this.amount = this.quantity * this.ticketUnitPrice;
    this.intentKey = this.buildIntentKey();

    if (!this.raffleId) {
      this.presentToast(
        this.translate.instant(
          'PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_RAFFLE_ID',
        ),
      );
    }

    await this.prefillPayerProfile();
    this.pageLoading = false;
  }
  back() {
    history.back();
  }
  async confirmPayment() {
    if (this.loading) return;
    if (!this.raffleId) return;
    if (!this.auth.isLoggedIn()) {
      await this.presentToast('Session expirée. Connecte-toi puis réessaie.');
      await this.router.navigate(['/auth/login'], {
        queryParams: {
          redirect: `/tabs/payment-confirmation?raffleId=${encodeURIComponent(this.raffleId)}`,
        },
      });
      return;
    }

    // validation simple
    const cleanedPhone = this.normalizeCameroonPhone(this.userPhone);
    if (!cleanedPhone) {
      return this.presentToast(
        this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_INVALID_PHONE'),
      );
    }

    if (!this.payerEmail) {
      return this.presentToast(
        'Adresse e-mail introuvable. Reconnecte-toi puis réessaie.',
      );
    }

    this.loading = true;
    this.directChargePending = false;
    this.paymentStatus = undefined;

    try {
      const userEmail = this.payerEmail;
      const senderName = this.payerName || 'Tingilin User';

      const res = await firstValueFrom(
        this.paymentsApi.createIntent({
          raffleId: this.raffleId,
          amount: this.amount,
          provider: environment.paymentProvider,
          userEmail,
          userPhone: cleanedPhone,
          userCountry: this.userCountry,
          senderName,
          paymentMethodCode: this.paymentMethod,
          idempotencyKey: this.intentKey,
        }),
      );

      this.transactionId = res?.transactionId;
      this.paymentLink = this.safePaymentLink(res?.paymentLink);
      this.paymentWithTaxes = res?.paymentWithTaxes;
      this.paymentStatus = res?.status;

      if (res?.provider === 'MOCK' && this.transactionId) {
        const mockProviderRef = [
          'MOCK',
          this.paymentMethod,
          Date.now().toString(),
        ].join('-');

        const mockResult = await firstValueFrom(
          this.paymentsApi.mockConfirm(this.transactionId, mockProviderRef),
        );

        if (mockResult?.status === 'SUCCESS') {
          await this.presentToast('Paiement test confirme localement.');
          await this.router.navigateByUrl('/tabs/participations');
          return;
        }
      }

      if (this.paymentLink) {
        await this.presentToast(
          this.translate.instant(
            'PAYMENT_CONFIRMATION_PAGE.TOAST_CHECKOUT_FALLBACK',
          ),
        );
        window.open(this.paymentLink, '_blank', 'noopener,noreferrer');
        return;
      }

      if (
        res?.provider === 'DIGIKUNTZ' &&
        res?.paymentFlow === 'DIRECT_CHARGE' &&
        this.transactionId
      ) {
        this.directChargePending = true;
        await this.presentToast(
          this.translate.instant(
            'PAYMENT_CONFIRMATION_PAGE.TOAST_DIRECT_CHARGE_SENT',
            { operator: this.paymentMethod },
          ),
        );
        this.startVerificationPolling();
        return;
      }

      throw new Error(
        this.translate.instant(
          'PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_PAYMENT_LINK',
        ),
      );
    } catch (e: any) {
      const status = Number(e?.status ?? e?.error?.statusCode ?? 0);
      const rawErrorMessage = e?.error?.message;
      const message = Array.isArray(rawErrorMessage)
        ? rawErrorMessage.filter(Boolean).join(', ').trim()
        : String(rawErrorMessage ?? e?.message ?? '').trim();

      if (
        status === 401 ||
        /no refresh token|unauthorized|jwt/i.test(message)
      ) {
        this.auth.logout();
        await this.presentToast('Session expirée. Connecte-toi puis réessaie.');
        await this.router.navigate(['/auth/login'], {
          queryParams: {
            redirect: `/tabs/payment-confirmation?raffleId=${encodeURIComponent(this.raffleId)}`,
          },
        });
        return;
      }

      if (status === 409) {
        await this.presentToast(
          message ||
            'Une tentative de paiement identique existe deja. Patiente quelques secondes puis reessaie.',
        );
        return;
      }

      await this.presentToast(
        message ||
          this.translate.instant(
            'PAYMENT_CONFIRMATION_PAGE.TOAST_PAYMENT_ERROR',
          ),
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

  async verifyPayment(silent = false): Promise<string | undefined> {
    if (!this.transactionId) return;
    if (this.verificationInFlight) return this.paymentStatus;

    this.verificationInFlight = true;
    if (!silent) this.loading = true;

    try {
      const res = await firstValueFrom(
        this.paymentsApi.verifyDigikuntz(this.transactionId),
      );
      this.paymentStatus = res?.status || 'PENDING';

      if (res?.status === 'SUCCESS') {
        this.directChargePending = false;
        this.stopVerificationPolling();
        await this.presentToast(
          this.translate.instant(
            'PAYMENT_CONFIRMATION_PAGE.TOAST_PAYMENT_CONFIRMED',
          ),
        );
        // exemple : redirige vers mes tickets
        await this.router.navigateByUrl('/tabs/participations');
        return 'SUCCESS';
      }

      if (res?.status === 'FAILED') {
        this.directChargePending = false;
        this.stopVerificationPolling();
      }

      if (!silent) {
        await this.presentToast(
          this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_STATUS', {
            status: res?.status || 'PENDING',
          }),
        );
      }
      return res?.status || 'PENDING';
    } catch (e: any) {
      if (!silent) {
        await this.presentToast(
          e?.error?.message ||
            e?.message ||
            this.translate.instant(
              'PAYMENT_CONFIRMATION_PAGE.TOAST_VERIFY_ERROR',
            ),
        );
      }
      return undefined;
    } finally {
      this.verificationInFlight = false;
      if (!silent) this.loading = false;
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
    this.stopVerificationPolling();
  }

  private buildIntentKey(): string {
    const safeRaffle = String(this.raffleId || 'raffle').replace(
      /[^a-zA-Z0-9_-]/g,
      '',
    );
    const randomPart =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID().replace(/-/g, '').slice(0, 16)
        : `${Date.now()}${Math.floor(Math.random() * 9999)}`;
    return `payment-${safeRaffle}-${this.amount}-${randomPart}`.slice(0, 80);
  }

  private safePaymentLink(value: unknown): string | undefined {
    try {
      const parsed = new URL(String(value ?? '').trim());
      const host = parsed.hostname.toLowerCase();
      const trustedHost =
        host === 'app.digikuntz.com' ||
        host === 'flutterwave.com' ||
        host.endsWith('.flutterwave.com');
      return parsed.protocol === 'https:' && trustedHost
        ? parsed.toString()
        : undefined;
    } catch {
      return undefined;
    }
  }

  private normalizeCameroonPhone(value: unknown): string | undefined {
    let digits = String(value ?? '').replace(/\D/g, '');
    if (digits.startsWith('00237')) digits = digits.slice(2);
    if (/^6\d{8}$/.test(digits)) digits = `237${digits}`;
    return /^2376\d{8}$/.test(digits) ? digits : undefined;
  }

  private startVerificationPolling() {
    this.stopVerificationPolling();
    this.verificationAttempts = 0;

    const poll = async () => {
      if (!this.directChargePending || !this.transactionId) return;
      if (this.verificationAttempts >= this.maxVerificationAttempts) return;

      this.verificationAttempts += 1;
      const status = await this.verifyPayment(true);
      if (status === 'SUCCESS' || status === 'FAILED') return;

      this.verificationTimer = setTimeout(poll, 5000);
    };

    this.verificationTimer = setTimeout(poll, 5000);
  }

  private stopVerificationPolling() {
    if (this.verificationTimer) {
      clearTimeout(this.verificationTimer);
      this.verificationTimer = undefined;
    }
  }
}
