import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PaymentMethodCode,
  PaymentsApiService,
} from 'src/app/core/api/payments-api.service';
import { detectCameroonMobileOperator } from 'src/app/shared/utils/mobile-operator';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { toAbsoluteMediaUrl } from 'src/app/shared/utils/media-url';

type PaymentOverlayState =
  | 'STARTING'
  | 'FALLBACK_WAITING'
  | 'WAITING'
  | 'SUCCESS'
  | 'FAILED'
  | 'EXPIRED'
  | 'CANCELLED';

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
  readonly fallbackImage = 'assets/img/placeholder.png';

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
  paymentExpiresAt?: string;
  directChargePending = false;
  fallbackCountdownSeconds = 0;
  hostedCheckoutAvailable = false;
  paymentOverlayVisible = false;
  paymentOverlayState: PaymentOverlayState = 'STARTING';
  private intentKey = '';
  private paymentContext = '';
  private verificationTimer?: ReturnType<typeof setTimeout>;
  private expirationTimer?: ReturnType<typeof setTimeout>;
  private fallbackTimer?: ReturnType<typeof setTimeout>;
  private fallbackCountdownTimer?: ReturnType<typeof setInterval>;
  private fallbackLaunchAt?: number;
  private successNavigationTimer?: ReturnType<typeof setTimeout>;
  private verificationInFlight = false;
  private readonly verificationIntervalMs = 10_000;
  private readonly hostedFallbackDelayMs = 30_000;
  private readonly defaultPaymentTtlMs = 10 * 60 * 1000;

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
    this.stopHostedCheckoutFallback(false);
    this.stopSuccessNavigation();
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

    const nextPaymentContext = `${this.raffleId}:${this.quantity}:${this.amount}`;
    const isTerminalPayment =
      this.paymentStatus === 'SUCCESS' || this.paymentStatus === 'FAILED';
    if (
      !this.paymentContext ||
      this.paymentContext !== nextPaymentContext ||
      isTerminalPayment
    ) {
      this.resetPaymentState();
      this.intentKey = this.buildIntentKey();
    }
    this.paymentContext = nextPaymentContext;

    if (!this.raffleId) {
      this.presentToast(
        this.translate.instant(
          'PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_RAFFLE_ID',
        ),
      );
    }

    await this.prefillPayerProfile();
    this.pageLoading = false;

    if (
      this.directChargePending &&
      this.transactionId &&
      (this.paymentOverlayState === 'WAITING' ||
        this.paymentOverlayState === 'FALLBACK_WAITING')
    ) {
      this.paymentOverlayVisible = true;
      this.startVerificationPolling();
      if (this.paymentOverlayState === 'FALLBACK_WAITING' && this.paymentLink) {
        this.scheduleHostedCheckoutFallback();
      }
    }
  }
  back() {
    history.back();
  }

  onProductImageError(event: Event) {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    if (image.getAttribute('src') === this.fallbackImage) return;

    image.src = this.fallbackImage;
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

    // Le prelevement part sur le portefeuille du numero: un numero MTN facture
    // en Orange Money (ou l'inverse) est refuse par l'operateur.
    const phoneOperator = detectCameroonMobileOperator(cleanedPhone);
    if (phoneOperator && phoneOperator !== this.paymentMethod) {
      const label = (op: PaymentMethodCode) =>
        op === 'MTN' ? 'MTN Mobile Money' : 'Orange Money';
      return this.presentToast(
        `Ce numéro est un numéro ${label(phoneOperator)}. Choisis ${label(phoneOperator)} ou utilise un numéro ${label(this.paymentMethod)}.`,
      );
    }

    this.loading = true;
    this.directChargePending = false;
    this.paymentStatus = undefined;
    this.paymentOverlayState = 'STARTING';
    this.paymentOverlayVisible = true;

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
      this.paymentExpiresAt = this.normalizePaymentExpiry(res?.expiresAt);

      console.info('[PaymentFlow] Payment intent response received', {
        flow: res?.paymentFlow ?? 'UNKNOWN',
        status: res?.status ?? 'PENDING',
        hasHostedFallback: Boolean(this.paymentLink),
      });

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
          this.paymentStatus = 'SUCCESS';
          this.showPaymentSuccess();
          return;
        }
      }

      if (this.paymentLink) {
        this.directChargePending = true;
        this.paymentOverlayState = 'FALLBACK_WAITING';
        await this.presentToast(
          this.translate.instant(
            'PAYMENT_CONFIRMATION_PAGE.TOAST_CHECKOUT_FALLBACK',
          ),
        );
        this.startVerificationPolling();
        this.scheduleHostedCheckoutFallback(true);
        return;
      }

      if (
        res?.provider === 'DIGIKUNTZ' &&
        res?.paymentFlow === 'DIRECT_CHARGE' &&
        this.transactionId
      ) {
        this.directChargePending = true;
        this.paymentOverlayState = 'WAITING';
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
      console.warn('[PaymentFlow] Payment intent failed', {
        httpStatus: status || 'unknown',
      });

      if (
        status === 401 ||
        /no refresh token|unauthorized|jwt/i.test(message)
      ) {
        this.paymentOverlayVisible = false;
        this.auth.logout();
        await this.presentToast('Session expirée. Connecte-toi puis réessaie.');
        await this.router.navigate(['/auth/login'], {
          queryParams: {
            redirect: `/tabs/payment-confirmation?raffleId=${encodeURIComponent(this.raffleId)}`,
          },
        });
        return;
      }

      this.directChargePending = false;
      this.paymentOverlayState = 'FAILED';
      this.paymentOverlayVisible = true;

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
        this.onPhoneChange(phone);
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
      console.info('[PaymentFlow] Payment status checked', {
        status: this.paymentStatus,
      });

      if (res?.status === 'SUCCESS') {
        this.showPaymentSuccess();
        return 'SUCCESS';
      }

      if (res?.status === 'FAILED') {
        this.directChargePending = false;
        this.stopVerificationPolling();
        this.stopHostedCheckoutFallback();
        this.paymentOverlayState =
          res?.remoteStatus === 'payment_expired' ? 'EXPIRED' : 'FAILED';
        this.paymentOverlayVisible = true;
      }

      // Prelevement direct refuse par l'operateur: Digikuntz cree un lien de
      // checkout de secours, visible seulement via verify. Sans cela, l'app
      // attendait une validation USSD qui n'arrivera jamais (jusqu'a expiration).
      const fallbackLink = this.safePaymentLink(res?.paymentLink);
      if (
        fallbackLink &&
        !this.paymentLink &&
        this.directChargePending &&
        (res?.status ?? 'PENDING') === 'PENDING'
      ) {
        this.paymentLink = fallbackLink;
        this.paymentOverlayState = 'FALLBACK_WAITING';
        this.paymentOverlayVisible = true;
        void this.presentToast(
          this.translate.instant(
            'PAYMENT_CONFIRMATION_PAGE.TOAST_CHECKOUT_FALLBACK',
          ),
        );
        this.scheduleHostedCheckoutFallback(true);
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
      const status = Number(e?.status ?? e?.error?.statusCode ?? 0);
      console.warn('[PaymentFlow] Payment status check failed', {
        httpStatus: status || 'unknown',
      });
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
    this.stopHostedCheckoutFallback(false);
    this.stopSuccessNavigation();
  }

  cancelPaymentWaiting() {
    if (
      this.paymentOverlayState !== 'WAITING' &&
      this.paymentOverlayState !== 'FALLBACK_WAITING'
    ) {
      return;
    }

    // Digikuntz ne fournit pas d'endpoint d'annulation. On arrête seulement
    // l'attente locale et on conserve la transaction pour pouvoir la vérifier.
    this.stopVerificationPolling();
    this.stopHostedCheckoutFallback();
    this.paymentOverlayState = 'CANCELLED';
    this.paymentOverlayVisible = true;
  }

  closePaymentOverlay() {
    if (
      this.paymentOverlayState === 'STARTING' ||
      this.paymentOverlayState === 'FALLBACK_WAITING' ||
      this.paymentOverlayState === 'WAITING' ||
      this.paymentOverlayState === 'SUCCESS'
    ) {
      return;
    }

    if (
      this.paymentOverlayState === 'FAILED' &&
      this.paymentStatus === 'FAILED'
    ) {
      this.resetPaymentState();
      this.intentKey = this.buildIntentKey();
      return;
    }

    if (this.paymentOverlayState === 'EXPIRED') {
      this.resetPaymentState();
      this.intentKey = this.buildIntentKey();
      return;
    }

    this.paymentOverlayVisible = false;
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

  /**
   * Selectionne automatiquement l'operateur d'apres le numero saisi.
   * Avant: ORANGE par defaut, donc un client MTN qui ne changeait pas le
   * choix envoyait un prelevement Orange sur un numero MTN (refuse).
   */
  onPhoneChange(value: unknown) {
    const operator = detectCameroonMobileOperator(value);
    if (operator) this.paymentMethod = operator;
  }

  private normalizeCameroonPhone(value: unknown): string | undefined {
    let digits = String(value ?? '').replace(/\D/g, '');
    if (digits.startsWith('00237')) digits = digits.slice(2);
    if (/^6\d{8}$/.test(digits)) digits = `237${digits}`;
    return /^2376\d{8}$/.test(digits) ? digits : undefined;
  }

  private startVerificationPolling() {
    this.stopVerificationPolling();
    this.paymentExpiresAt ??= new Date(
      Date.now() + this.defaultPaymentTtlMs,
    ).toISOString();

    const deadline = new Date(this.paymentExpiresAt).getTime();
    const remainingMs = deadline - Date.now();
    if (!Number.isFinite(deadline) || remainingMs <= 0) {
      void this.expirePaymentWaiting();
      return;
    }

    this.expirationTimer = setTimeout(
      () => void this.expirePaymentWaiting(),
      remainingMs,
    );

    const poll = async () => {
      if (!this.directChargePending || !this.transactionId) return;
      if (Date.now() >= deadline) {
        await this.expirePaymentWaiting();
        return;
      }

      const status = await this.verifyPayment(true);
      if (status === 'SUCCESS' || status === 'FAILED') return;

      this.verificationTimer = setTimeout(
        poll,
        this.verificationIntervalMs,
      );
    };

    this.verificationTimer = setTimeout(poll, this.verificationIntervalMs);
  }

  private stopVerificationPolling() {
    if (this.verificationTimer) {
      clearTimeout(this.verificationTimer);
      this.verificationTimer = undefined;
    }
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
      this.expirationTimer = undefined;
    }
  }

  private scheduleHostedCheckoutFallback(resetDeadline = false) {
    if (!this.paymentLink || !this.directChargePending) return;

    this.stopHostedCheckoutFallback(false);
    if (resetDeadline || !this.fallbackLaunchAt) {
      this.fallbackLaunchAt = Date.now() + this.hostedFallbackDelayMs;
    }

    const updateCountdown = () => {
      const remainingMs = Math.max(0, this.fallbackLaunchAt! - Date.now());
      this.fallbackCountdownSeconds = Math.ceil(remainingMs / 1000);
    };

    updateCountdown();
    console.info(
      `[PaymentFlow] Direct Pay observation window started (${this.fallbackCountdownSeconds}s)`,
    );

    const remainingMs = Math.max(0, this.fallbackLaunchAt - Date.now());
    this.fallbackCountdownTimer = setInterval(updateCountdown, 1_000);
    this.fallbackTimer = setTimeout(
      () => void this.launchHostedCheckoutAfterGracePeriod(),
      remainingMs,
    );
  }

  private stopHostedCheckoutFallback(resetState = true) {
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = undefined;
    }
    if (this.fallbackCountdownTimer) {
      clearInterval(this.fallbackCountdownTimer);
      this.fallbackCountdownTimer = undefined;
    }
    if (resetState) {
      this.fallbackLaunchAt = undefined;
      this.fallbackCountdownSeconds = 0;
      this.hostedCheckoutAvailable = false;
    }
  }

  private async launchHostedCheckoutAfterGracePeriod() {
    if (!this.paymentLink || !this.directChargePending) return;

    this.stopHostedCheckoutFallback(false);
    this.fallbackCountdownSeconds = 0;

    // Do a final status check before opening the hosted checkout. This avoids
    // sending a customer to Flutterwave if Direct Pay just succeeded.
    const status = await this.verifyPayment(true);
    if (status === 'SUCCESS' || status === 'FAILED') return;

    this.paymentOverlayState = 'WAITING';
    this.hostedCheckoutAvailable = true;
    console.info(
      '[PaymentFlow] Direct Pay is still pending after 30s; requesting hosted checkout',
    );
    this.openHostedCheckout();
  }

  openHostedCheckout() {
    const paymentLink = this.safePaymentLink(this.paymentLink);
    if (!paymentLink) {
      void this.presentToast(
        this.translate.instant(
          'PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_PAYMENT_LINK',
        ),
      );
      return;
    }

    console.info('[PaymentFlow] Hosted checkout open requested');
    window.open(paymentLink, '_blank', 'noopener,noreferrer');
  }

  private async expirePaymentWaiting() {
    if (!this.directChargePending || !this.transactionId) return;

    this.stopVerificationPolling();
    this.stopHostedCheckoutFallback();
    const finalStatus = await this.verifyPayment(true);
    if (finalStatus === 'SUCCESS' || finalStatus === 'FAILED') return;

    this.directChargePending = false;
    this.paymentStatus = 'EXPIRED';
    this.paymentOverlayState = 'EXPIRED';
    this.paymentOverlayVisible = true;
  }

  private showPaymentSuccess() {
    this.directChargePending = false;
    this.paymentOverlayState = 'SUCCESS';
    this.paymentOverlayVisible = true;
    this.stopVerificationPolling();
    this.stopHostedCheckoutFallback();
    this.stopSuccessNavigation();

    this.successNavigationTimer = setTimeout(() => {
      this.successNavigationTimer = undefined;
      void this.router.navigateByUrl('/tabs/participations');
    }, 1800);
  }

  private stopSuccessNavigation() {
    if (this.successNavigationTimer) {
      clearTimeout(this.successNavigationTimer);
      this.successNavigationTimer = undefined;
    }
  }

  private resetPaymentState() {
    this.stopVerificationPolling();
    this.stopHostedCheckoutFallback();
    this.paymentOverlayVisible = false;
    this.paymentOverlayState = 'STARTING';
    this.directChargePending = false;
    this.transactionId = undefined;
    this.paymentLink = undefined;
    this.paymentWithTaxes = undefined;
    this.paymentStatus = undefined;
    this.paymentExpiresAt = undefined;
  }

  private normalizePaymentExpiry(value: unknown): string {
    const timestamp = new Date(String(value ?? '')).getTime();
    return Number.isFinite(timestamp)
      ? new Date(timestamp).toISOString()
      : new Date(Date.now() + this.defaultPaymentTtlMs).toISOString();
  }
}
