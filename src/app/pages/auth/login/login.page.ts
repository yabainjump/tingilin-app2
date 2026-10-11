import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { AuthService } from '../../../services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: { credential: string }) => void }) => void;
          renderButton: (parent: HTMLElement, options: { theme: string; size: string }) => void;
          prompt: (notificationCb?: (notification: { isNotDisplayed: boolean; isSkippedMoment: boolean }) => void) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}

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

    const clientId = environment.googleWebClientId;
    if (!clientId) {
      await this.showToast(
        this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_NOT_CONFIGURED'),
      );
      return;
    }

    this.googleLoading = true;
    try {
      // Load Google Identity Services script and initialize if not loaded
      await this.loadGoogleSdk();

      // Create a hidden container for the Google button
      const container = document.createElement('div');
      container.id = 'google-signin-button-login';
      container.style.cssText = 'position:fixed;top:-50px;left:-50px;width:1px;height:1px;opacity:0.01;pointer-events:none;z-index:-1;';
      document.body.appendChild(container);

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: (response: { credential: string }) => {
          document.body.removeChild(container);
          const idToken = response.credential;
          if (!idToken) {
            this.googleLoading = false;
            this.showToast(
              this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_FAILED'),
            );
            return;
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
        },
      });

      window.google.accounts.id.renderButton(container, {
        theme: 'outline',
        size: 'large',
      });

      // Trigger the button click programmatically
      const googleButton = container.querySelector('div');
      if (googleButton) {
        (googleButton as HTMLElement).click();
      } else {
        // Fallback: use prompt() which shows One Tap UI
        window.google.accounts.id.prompt();
      }
    } catch (err) {
      this.googleLoading = false;
      await this.showToast(
        this.readError(err) ||
          this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_FAILED'),
      );
    }
  }

  private googleScriptLoaded = false;

  private async loadGoogleSdk(): Promise<void> {
    // On web platform (Capacitor), GIS works directly in the webview.
    // If the script is already loaded, skip re-loading.
    if (window.google && window.google.accounts) {
      return;
    }

    if (this.googleScriptLoaded) {
      // Script tag added but not yet loaded; wait for it
      return this.waitForGoogleSdk();
    }

    this.googleScriptLoaded = true;
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.google && window.google.accounts) {
          resolve();
        } else {
          reject(new Error('Google SDK failed to initialize'));
        }
      };
      script.onerror = () => {
        reject(new Error('Failed to load Google SDK'));
      };
      document.head.appendChild(script);
    });
  }

  private waitForGoogleSdk(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const check = () => {
        if (window.google && window.google.accounts) {
          resolve();
        } else {
          setTimeout(check, 100);
        }
      };
      const timeout = setTimeout(() => {
        reject(new Error('Google SDK took too long to load'));
      }, 10000);
      check();
      // Clear timeout after resolution
      const orig = setTimeout(() => {}, 0);
      clearTimeout(orig);
      clearTimeout(timeout);
    });
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
