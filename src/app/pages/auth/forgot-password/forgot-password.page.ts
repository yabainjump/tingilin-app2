import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

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
    private translate: TranslateService,
  ) {}

  ngOnDestroy(): void {}

  async submit(): Promise<void> {
    if (this.loading) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      await this.showToast(
        this.translate.instant('FORGOT_PASSWORD_PAGE.TOAST_IDENTIFIER_REQUIRED'),
      );
      return;
    }

    const identifier = String(this.form.value.identifier || '').trim();

    this.loading = true;

    const payload = identifier.includes('@')
      ? { identifier, email: identifier }
      : { identifier, phone: identifier };

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
            Array.isArray(msg)
              ? msg.join(', ')
              : msg || this.translate.instant('FORGOT_PASSWORD_PAGE.TOAST_ERROR'),
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
