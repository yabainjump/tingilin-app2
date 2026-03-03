import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentsApiService } from 'src/app/core/api/payments-api.service';
import { ToastController, LoadingController } from '@ionic/angular';

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
  userCountry = 'Cameroon';

  // Résultats paiement
  transactionId?: string;
  paymentLink?: string;
  paymentWithTaxes?: number;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentsApi: PaymentsApiService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) {}

  ionViewWillEnter() {
    // ✅ récupère les paramètres depuis navigation (à adapter selon ton flow)
    // Exemple: /payment-confirmation?raffleId=...&title=...&qty=...&unit=...
    const qp = this.route.snapshot.queryParamMap;

    this.raffleId = qp.get('raffleId') || '';
    this.title = qp.get('title') || this.title;
    this.imageUrl = qp.get('imageUrl') || undefined;

    this.quantity = Number(qp.get('qty') || 1);
    this.ticketUnitPrice = Number(qp.get('unit') || 100);
    this.amount = this.quantity * this.ticketUnitPrice;

    if (!this.raffleId) {
      this.presentToast('raffleId manquant');
    }
  }
  back() {
    history.back();
  }
  async confirmPayment() {
    if (!this.raffleId) return;

    // validation simple
    const cleanedPhone = (this.userPhone || '').replace(/\s+/g, '');
    if (!cleanedPhone || cleanedPhone.length < 8) {
      return this.presentToast('Entre un numéro valide');
    }

    const loader = await this.loadingCtrl.create({
      message: 'Création du paiement...',
    });
    await loader.present();
    this.loading = true;

    try {
      // ⚠️ ces champs doivent venir de ton user connecté (email / name)
      // -> remplace par ton AuthService / user profile
      const userEmail = 'email@example.com';
      const senderName = 'Kevin';

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
        throw new Error('paymentLink manquant');
      }

      await this.presentToast(
        this.paymentWithTaxes
          ? `Montant TTC: ${this.paymentWithTaxes} XAF`
          : 'Lien de paiement généré',
      );

      // Ouvre le lien (web)
      window.open(this.paymentLink, '_blank');

      // Option UX : tu laisses un bouton "Vérifier le paiement" visible
    } catch (e: any) {
      await this.presentToast(
        e?.error?.message || e?.message || 'Erreur paiement',
      );
    } finally {
      this.loading = false;
      await loader.dismiss();
    }
  }

  async verifyPayment() {
    if (!this.transactionId) return;

    const loader = await this.loadingCtrl.create({
      message: 'Vérification du paiement...',
    });
    await loader.present();
    this.loading = true;

    try {
      const res = await this.paymentsApi
        .verifyDigikuntz(this.transactionId)
        .toPromise();

      if (res?.status === 'SUCCESS') {
        await this.presentToast('Paiement confirmé ✅');
        // exemple : redirige vers mes tickets
        this.router.navigateByUrl('/tabs/tickets');
        return;
      }

      await this.presentToast(`Statut: ${res?.status || 'PENDING'}`);
    } catch (e: any) {
      await this.presentToast(
        e?.error?.message || e?.message || 'Erreur verify',
      );
    } finally {
      this.loading = false;
      await loader.dismiss();
    }
  }

  private async presentToast(message: string) {
    const t = await this.toastCtrl.create({
      message,
      duration: 1800,
      position: 'bottom',
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
