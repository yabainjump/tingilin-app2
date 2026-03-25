import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth/auth.service';

const PASSWORD_RULE = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
// 8+ caractères, 1 majuscule, 1 caractère spécial

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  loading = false;
  showPassword = false;
  private redirectAfterOnboarding = '/tabs/home';

  // mini liste (tu pourras l’étendre)
  countryCodes = [
    { code: '+225', label: '🇨🇮 +225' },
    { code: '+237', label: '🇨🇲 +237' },
    { code: '+221', label: '🇸🇳 +221' },
    { code: '+234', label: '🇳🇬 +234' },
    { code: '+33', label: '🇫🇷 +33' },
  ];

  form = this.fb.group({
    lastName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    countryCode: ['+225', [Validators.required]],
    phone: ['', [Validators.required]],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_RULE)]],
    referralCode: [''],
    terms: [false, [Validators.requiredTrue]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastController,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    const ref = String(
      this.route.snapshot.queryParamMap.get('ref') ??
        this.route.snapshot.queryParamMap.get('referralCode') ??
        '',
    )
      .trim()
      .toUpperCase();
    if (ref) {
      this.form.patchValue({ referralCode: ref });
    }

    const redirect = String(
      this.route.snapshot.queryParamMap.get('redirect') ?? '',
    ).trim();
    if (redirect.startsWith('/')) {
      this.redirectAfterOnboarding = redirect;
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  async submit(): Promise<void> {
    if (this.loading) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      await this.showToast(
        this.translate.instant('REGISTER_PAGE.TOAST_INVALID_FORM'),
      );
      return;
    }

    const v = this.form.value;

    // Téléphone complet
    const phoneFull = `${v.countryCode}${String(v.phone).replace(/\s+/g, '')}`;

    this.loading = true;

    const dto = {
      email: String(v.email ?? '')
        .trim()
        .toLowerCase(),
      password: String(v.password ?? ''),
      firstName: String(v.firstName ?? '').trim(),
      lastName: String(v.lastName ?? '').trim(),
      phone: String(phoneFull),
      referralCode: String(v.referralCode ?? '').trim().toUpperCase() || undefined,
    };

    this.auth
      .register(dto)
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: async () => {
          await this.showToast(this.translate.instant('REGISTER_PAGE.TOAST_CREATED'));
          this.router.navigate(['/onboarding'], {
            replaceUrl: true,
            queryParams: { redirect: this.redirectAfterOnboarding },
          });
        },
        error: async (err) => {
          await this.showToast(
            this.readError(err) || this.translate.instant('REGISTER_PAGE.TOAST_CREATE_FAILED'),
          );
        },
      });
  }

  private readError(err: any): string | null {
    const msg = err?.error?.message;
    if (!msg) return null;
    return Array.isArray(msg) ? msg.join(', ') : String(msg);
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
