import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

/** Cross-field validator: newPassword must differ from currentPassword */
const differentFromCurrentValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const current = group.get('currentPassword')?.value;
  const next = group.get('newPassword')?.value;
  if (current && next && current === next) {
    return { samePassword: true };
  }
  return null;
};

/** Cross-field validator: confirmPassword must match newPassword */
const passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const next = group.get('newPassword')?.value;
  const confirm = group.get('confirmPassword')?.value;
  if (next && confirm && next !== confirm) {
    return { passwordMismatch: true };
  }
  return null;
};

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
  standalone: false,
})
export class ChangePasswordPage {
  submitting = false;

  showCurrent = false;
  showNew = false;
  showConfirm = false;

  form = this.fb.group(
    {
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: [differentFromCurrentValidator, passwordMatchValidator] }
  );

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private nav: NavController,
    private toast: ToastController,
    private translate: TranslateService,
  ) {}

  get currentPassword() { return this.form.get('currentPassword')!; }
  get newPassword() { return this.form.get('newPassword')!; }
  get confirmPassword() { return this.form.get('confirmPassword')!; }

  back() {
    this.nav.back();
  }

  async submit() {
    if (this.form.invalid || this.submitting) return;

    this.submitting = true;
    const { currentPassword, newPassword } = this.form.value as { currentPassword: string; newPassword: string };

    this.authService
      .changePassword(currentPassword, newPassword)
      .pipe(finalize(() => { this.submitting = false; }))
      .subscribe({
        next: async () => {
          const msg = await firstValueFrom(this.translate.get('CHANGE_PASSWORD_PAGE.TOAST_SUCCESS'));
          const t = await this.toast.create({
            message: msg,
            duration: 3000,
            color: 'success',
            position: 'top',
          });
          await t.present();
          this.nav.back();
        },
        error: async (err: any) => {
          const defaultMsg = await firstValueFrom(this.translate.get('CHANGE_PASSWORD_PAGE.TOAST_ERROR'));
          const serverMsg: string = err?.error?.message || defaultMsg;
          const t = await this.toast.create({
            message: serverMsg,
            duration: 4000,
            color: 'danger',
            position: 'top',
          });
          await t.present();
          this.currentPassword.reset('');
        },
      });
  }
}
