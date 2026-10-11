import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AuthService } from '../../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

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
          const redirect =
            this.route.snapshot.queryParamMap.get('redirect') || '/home';
          this.router.navigateByUrl(redirect);
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

    const isWeb = Capacitor.getPlatform() === 'web';
    if (isWeb && !environment.googleWebClientId) {
      await this.showToast(
        this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_NOT_CONFIGURED'),
      );
      return;
    }

    this.googleLoading = true;
    try {
      if (isWeb) {
        await GoogleAuth.initialize({
          clientId: environment.googleWebClientId,
          scopes: ['profile', 'email'],
          grantOfflineAccess: false,
        });
      }

      const res = await GoogleAuth.signIn();
      const idToken = res?.authentication?.idToken;
      if (!idToken) {
        throw new Error('missing Google idToken');
      }

      this.auth
        .loginWithGoogle(idToken)
        .pipe(
          finalize(() => {
            this.googleLoading = false;
          }),
        )
        .subscribe({
          next: () => {
            const redirect =
              this.route.snapshot.queryParamMap.get('redirect') || '/home';
            this.router.navigateByUrl(redirect);
          },
          error: async (err) => {
            await this.showToast(
              this.readError(err) ||
                this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_FAILED'),
            );
          },
        });
    } catch (err) {
      this.googleLoading = false;
      await this.showToast(
        this.readError(err) ||
          this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_FAILED'),
      );
    }
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
