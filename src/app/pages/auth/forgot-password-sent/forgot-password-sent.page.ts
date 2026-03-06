import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-forgot-password-sent',
  templateUrl: './forgot-password-sent.page.html',
  styleUrls: ['./forgot-password-sent.page.scss'],
  standalone: false,
})
export class ForgotPasswordSentPage implements OnDestroy {
  secondsLeft = 59;
  loading = false;
  resending = false;
  private timerId: any;
  identifier = '';

  form = this.fb.group({
    code: ['', [Validators.required, Validators.minLength(4)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly router: Router,
    private readonly toast: ToastController,
  ) {
    const nav = this.router.getCurrentNavigation();
    this.identifier =
      String(
        (nav?.extras?.state as any)?.identifier ?? history.state?.identifier,
      ).trim() || '';
  }

  ionViewDidEnter(): void {
    this.startCountdown();
  }

  ionViewWillLeave(): void {
    this.stopCountdown();
  }

  ngOnDestroy(): void {
    this.stopCountdown();
  }

  async submit(): Promise<void> {
    if (this.loading) return;

    if (!this.identifier) {
      await this.showToast('Identifiant manquant. Recommence la procédure.');
      this.backToForgot();
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      await this.showToast('Vérifie le code et le nouveau mot de passe.');
      return;
    }

    const code = String(this.form.value.code ?? '').trim();
    const newPassword = String(this.form.value.newPassword ?? '');
    const confirmPassword = String(this.form.value.confirmPassword ?? '');

    if (newPassword !== confirmPassword) {
      await this.showToast('Les mots de passe ne correspondent pas.');
      return;
    }

    const payload = this.identifier.includes('@')
      ? { identifier: this.identifier, email: this.identifier, code, newPassword }
      : { identifier: this.identifier, phone: this.identifier, code, newPassword };

    this.loading = true;
    this.auth
      .resetPassword(payload)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: async () => {
          await this.showToast('Mot de passe réinitialisé.');
          this.router.navigateByUrl('/auth/login');
        },
        error: async (err) => {
          const msg = err?.error?.message;
          await this.showToast(
            Array.isArray(msg) ? msg.join(', ') : msg || 'Code invalide ou expiré.',
          );
        },
      });
  }

  resend(): void {
    if (this.secondsLeft > 0 || this.resending || !this.identifier) return;

    const payload = this.identifier.includes('@')
      ? { identifier: this.identifier, email: this.identifier }
      : { identifier: this.identifier, phone: this.identifier };

    this.resending = true;
    this.auth
      .forgotPassword(payload)
      .pipe(finalize(() => (this.resending = false)))
      .subscribe({
        next: async () => {
          this.startCountdown();
          await this.showToast('Code renvoyé.');
        },
        error: async (err) => {
          const msg = err?.error?.message;
          await this.showToast(
            Array.isArray(msg) ? msg.join(', ') : msg || 'Impossible de renvoyer le code.',
          );
        },
      });
  }

  backToLogin(): void {
    this.router.navigateByUrl('/auth/login');
  }

  backToForgot(): void {
    this.router.navigateByUrl('/auth/forgot-password');
  }

  startCountdown(): void {
    this.stopCountdown();
    this.secondsLeft = 59;
    this.timerId = setInterval(() => {
      this.secondsLeft = Math.max(0, this.secondsLeft - 1);
      if (this.secondsLeft === 0) this.stopCountdown();
    }, 1000);
  }

  stopCountdown(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  get mmss(): string {
    const mm = String(Math.floor(this.secondsLeft / 60)).padStart(2, '0');
    const ss = String(this.secondsLeft % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }

  private async showToast(message: string): Promise<void> {
    const t = await this.toast.create({
      message,
      duration: 2200,
      position: 'top',
    });
    await t.present();
  }
}
