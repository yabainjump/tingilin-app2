import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController, Platform } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import {
  ProfileApiService,
  ProfileUser,
} from 'src/app/services/profile/profile-api.service';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: false,
})
export class EditProfilePage {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  loading = true;
  submitting = false;

  user: ProfileUser | null = null;

  defaultAvatar = 'src/assets/img/profile.svg';

  avatarPreview: string | null = null; // preview + payload (base64/url)
  private avatarToSave: string | null = null;

  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: [{ value: '', disabled: true }],
  });

  constructor(
    private fb: FormBuilder,
    private api: ProfileApiService,
    private nav: NavController,
    private toast: ToastController,
    private platform: Platform,
  ) {}

  ionViewWillEnter() {
    this.load();
  }

  back() {
    this.nav.back();
  }

  async load() {
    this.loading = true;
    this.api
      .me()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((u) => {
        this.user = u;
        this.form.patchValue({
          firstName: u?.firstName ?? '',
          lastName: u?.lastName ?? '',
          phone: u?.phone ?? '',
          email: u?.email ?? '',
        });
      });
  }

  async pickAvatar() {
    // ✅ Mobile/Android/iOS : Camera plugin
    if (this.platform.is('hybrid')) {
      try {
        const photo = await Camera.getPhoto({
          source: CameraSource.Prompt,
          resultType: CameraResultType.DataUrl,
          quality: 80,
        });

        if (photo?.dataUrl) {
          this.avatarPreview = photo.dataUrl;
          this.avatarToSave = photo.dataUrl; // pour l’instant on stocke en string (à améliorer plus tard)
        }
      } catch (e) {
        const t = await this.toast.create({
          message: 'Impossible d’ouvrir la caméra',
          duration: 1500,
        });
        await t.present();
      }
      return;
    }

    // ✅ Web : file picker
    this.fileInput?.nativeElement?.click();
  }

  onFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || '');
      this.avatarPreview = dataUrl;
      this.avatarToSave = dataUrl;
    };
    reader.readAsDataURL(file);

    // reset (pour permettre re-sélection du même fichier)
    input.value = '';
  }

  goChangePassword() {
    // tu pourras router vers une page dédiée plus tard
    // this.nav.navigateForward('/tabs/profile/change-password');
  }

  async save() {
    if (this.form.invalid || this.submitting) return;

    this.submitting = true;

    const dto = {
      firstName: String(this.form.value.firstName || ''),
      lastName: String(this.form.value.lastName || ''),
      phone: String(this.form.value.phone || ''),
      ...(this.avatarToSave ? { avatar: this.avatarToSave } : {}),
    };

    this.api
      .updateMe(dto)
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: async (updated) => {
          this.user = updated;
          const t = await this.toast.create({
            message: 'Profil mis à jour ✅',
            duration: 1200,
          });
          await t.present();
          this.nav.back();
        },
        error: async (err) => {
          const t = await this.toast.create({
            message: err?.error?.message ?? 'Erreur mise à jour',
            duration: 2000,
          });
          await t.present();
        },
      });
  }
}
