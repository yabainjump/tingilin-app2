import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { AuthService } from '../../../services/auth/auth';

const PASSWORD_RULE = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
// 8+ caractères, 1 majuscule, 1 caractère spécial

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  loading = false;
  showPassword = false;

  // mini liste (tu pourras l’étendre)
  countryCodes = [
    { code: '+225', label: '🇨🇮 +225' },
    { code: '+237', label: '🇨🇲 +237' },
    { code: '+221', label: '🇸🇳 +221' },
    { code: '+234', label: '🇳🇬 +234' },
    { code: '+33',  label: '🇫🇷 +33'  },
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
    terms: [false, [Validators.requiredTrue]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: ToastController
  ) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  async submit(): Promise<void> {
    if (this.loading) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      await this.showToast(
        "Vérifie les champs. Mot de passe: 8+ caractères, 1 majuscule, 1 caractère spécial."
      );
      return;
    }

    const v = this.form.value;

    // Téléphone complet
    const phoneFull = `${v.countryCode}${String(v.phone).replace(/\s+/g, '')}`;

    this.loading = true;

    // ⚠️ IMPORTANT:
    // Dans ton historique, tu voulais que le backend accepte ces champs.
    // Si ton endpoint /auth/register n’accepte pas encore ces champs, tu auras 400.
    // => Dans ce cas, envoie seulement {email, password} le temps d’adapter le DTO NestJS.

    const payloadFull: any = {
      lastName: v.lastName?.trim(),
      firstName: v.firstName?.trim(),
      username: v.username?.trim(),
      email: v.email?.trim(),
      phone: phoneFull,
      country: v.country?.trim(),
      city: v.city?.trim(),
      password: v.password,
      avatar: 'defpic.jpg', // comme l’historique
    };

    const payloadMinimal: any = {
      email: v.email?.trim(),
      password: v.password,
    };

    this.auth
      .register(payloadFull, false) // <- si backend OK
      // .register(payloadMinimal, false) // <- si backend pas encore OK
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: async () => {
          await this.showToast('Compte créé. Connecte-toi maintenant.');
          this.router.navigateByUrl('/auth/login');
        },
        error: async (err) => {
          await this.showToast(this.readError(err) || "Impossible de créer le compte.");
        },
      });
  }

  private readError(err: any): string | null {
    const msg = err?.error?.message;
    if (!msg) return null;
    return Array.isArray(msg) ? msg.join(', ') : String(msg);
  }

  private async showToast(message: string): Promise<void> {
    const t = await this.toast.create({ message, duration: 2400, position: 'top' });
    await t.present();
  }
}
