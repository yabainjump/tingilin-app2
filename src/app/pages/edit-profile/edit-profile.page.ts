import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
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
import { AuthStateService } from 'src/app/services/auth/auth-state.service';
import { UserRegion } from 'src/app/shared/region-picker/regions';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: false,
})
export class EditProfilePage implements OnDestroy {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  loading = true;
  submitting = false;

  user: ProfileUser | null = null;

  defaultAvatar = 'assets/img/profile.svg';

  avatarPreview: string | null = null;
  selectedRegion: UserRegion | null = null;
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
    private authState: AuthStateService,
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
        this.selectedRegion = this.toKnownRegion(u?.region);
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

    this.revokeAvatarPreview();
    this.avatarPreview = URL.createObjectURL(file);
    this.avatarFileToSave = file;

    // reset (pour permettre re-sélection du même fichier)
    input.value = '';
  }

  goChangePassword() {
    this.nav.navigateForward('/auth/forgot-password');
  }

  private toKnownRegion(value: unknown): UserRegion | null {
    const region = String(value ?? '').trim().toUpperCase();
    return (['CENTRE', 'LITTORAL', 'OUEST', 'SUD_OUEST'] as const).includes(
      region as UserRegion,
    )
      ? (region as UserRegion)
      : null;
  }

  async onRegionChange(region: UserRegion): Promise<void> {
    const previous = this.selectedRegion;
    this.selectedRegion = region;

    try {
      await firstValueFrom(this.authState.updateRegion(region));
      const t = await this.toast.create({
        message: this.translate.instant('EDIT_PROFILE_PAGE.TOAST_REGION_UPDATED'),
        duration: 1400,
      });
      await t.present();
    } catch {
      this.selectedRegion = previous;
      const t = await this.toast.create({
        message: this.translate.instant('EDIT_PROFILE_PAGE.TOAST_REGION_UPDATE_FAILED'),
        duration: 2000,
      });
      await t.present();
    }
  }

  async save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.submitting) return;

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

  ngOnDestroy() {
    this.revokeAvatarPreview();
  }

  private revokeAvatarPreview() {
    if (this.avatarPreview?.startsWith('blob:')) {
      URL.revokeObjectURL(this.avatarPreview);
    }
  }
}
