import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize, firstValueFrom } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';
import {
  GoogleSignInError,
  GoogleSignInService,
} from '../../../services/auth/google-sign-in.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  loading = false;
  googleLoading = false;
  showPassword = false;

  form = this.fb.group({
    // UI dit "téléphone", mais l’API actuelle attend "email" (comme dans ton historique)
    identifier: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private googleSignIn: GoogleSignInService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastController,
    private translate: TranslateService,
  ) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  async submit(): Promise<void> {
    if (this.loading) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      await this.showToast(this.translate.instant('LOGIN_PAGE.TOAST_FILL_FIELDS'));
      return;
    }

    const identifier = (this.form.value.identifier || '').trim();
    const password = this.form.value.password || '';

    this.loading = true;

    this.auth
      .login(String(identifier).trim().toLowerCase(), String(password))
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: () => {
          void this.router.navigateByUrl(this.safeRedirectUrl());
        },
        error: async (err) => {
          await this.showToast(
            this.readError(err) || this.translate.instant('LOGIN_PAGE.TOAST_INVALID_CREDENTIALS'),
          );
        },
      });
  }

  async signInWithGoogle(): Promise<void> {
    if (this.googleLoading) return;

    this.googleLoading = true;
    try {
      const idToken = await this.googleSignIn.signIn();
      await firstValueFrom(this.auth.loginWithGoogle(idToken));
      await this.router.navigateByUrl(this.safeRedirectUrl());
    } catch (err) {
      if (this.googleSignIn.isUserCancellation(err)) return;

      const message =
        err instanceof GoogleSignInError && err.code === 'NOT_CONFIGURED'
          ? this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_NOT_CONFIGURED')
          : this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_FAILED');
      await this.showToast(
        message,
      );
    } finally {
      this.googleLoading = false;
    }
  }

  private safeRedirectUrl(): string {
    const redirect =
      this.route.snapshot.queryParamMap.get('redirect')?.trim() || '/home';
    return redirect.startsWith('/') && !redirect.startsWith('//')
      ? redirect
      : '/home';
  }

  private readError(err: any): string | null {
    if (err?.error?.message) {
      return Array.isArray(err.error.message)
        ? err.error.message.join(', ')
        : String(err.error.message);
    }
    return null;
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
