import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController, Platform } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import {
  ProfileApiService,
  ProfileUser,
} from 'src/app/services/profile/profile-api.service';
import { TranslateService } from '@ngx-translate/core';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { firstValueFrom } from 'rxjs';
import { blobFromUrl, fileFromBlob } from 'src/app/shared/utils/blob-file';

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

  defaultAvatar = 'assets/img/profile.svg';

  avatarPreview: string | null = null;
  private avatarFileToSave: File | null = null;

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
    private translate: TranslateService,
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
          resultType: CameraResultType.Uri,
          quality: 80,
        });

        if (photo?.webPath) {
          const blob = await blobFromUrl(photo.webPath);
          this.avatarPreview = photo.webPath;
          this.avatarFileToSave = fileFromBlob(
            blob,
            `avatar-${Date.now()}.jpg`,
          );
        }
      } catch (e) {
        const t = await this.toast.create({
          message: this.translate.instant('EDIT_PROFILE_PAGE.TOAST_CAMERA_OPEN_FAILED'),
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

    this.avatarPreview = URL.createObjectURL(file);
    this.avatarFileToSave = file;

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
    };

    try {
      if (this.avatarFileToSave) {
        await firstValueFrom(this.api.uploadAvatar(this.avatarFileToSave));
      }

      const updated = await firstValueFrom(this.api.updateMe(dto));
      this.user = updated;
      this.submitting = false;

      const t = await this.toast.create({
        message: this.translate.instant('EDIT_PROFILE_PAGE.TOAST_UPDATED'),
        duration: 1200,
      });
      await t.present();
      this.nav.back();
    } catch (err: any) {
      this.submitting = false;
      const t = await this.toast.create({
        message:
          err?.error?.message ??
          this.translate.instant('EDIT_PROFILE_PAGE.TOAST_UPDATE_FAILED'),
        duration: 2000,
      });
      await t.present();
    }
  }
}
