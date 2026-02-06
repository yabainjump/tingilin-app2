import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: false,
})
export class ForgotPasswordPage implements OnDestroy {
  loading = false;

  form = this.fb.group({
    identifier: ['', [Validators.required]], // email OU téléphone
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: ToastController,
  ) {}

  ngOnDestroy(): void {}

  async submit(): Promise<void> {
    if (this.loading) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      await this.showToast('Entre un email ou un numéro.');
      return;
    }

    const identifier = String(this.form.value.identifier || '').trim();

    this.loading = true;

    // 🔥 IMPORTANT: on garde ton backend NestJS.
    // Si ton endpoint n’accepte que email, on envoie email quand il y a "@",
    // sinon on envoie phone. (Tu adaptes le DTO backend ensuite.)
    const payload = identifier.includes('@')
      ? { email: identifier }
      : { phone: identifier };

    this.auth
      .forgotPassword(payload as any)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/auth/forgot-password-sent', {
            state: { identifier },
          });
        },
        error: async (err) => {
          const msg = err?.error?.message;
          await this.showToast(
            Array.isArray(msg) ? msg.join(', ') : msg || 'Erreur. Réessaie.',
          );
        },
      });
  }

  backToLogin(): void {
    this.router.navigateByUrl('/auth/login');
  }

  private async showToast(message: string): Promise<void> {
    const t = await this.toast.create({
      message,
      duration: 2400,
      position: 'top',
    });
    await t.present();
  }
}
