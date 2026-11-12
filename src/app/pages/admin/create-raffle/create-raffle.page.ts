import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators, FormGroup } from '@angular/forms';
import {
  NavController,
  ToastController,
} from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { RafflesApiService } from 'src/app/services/raffles/raffles-api.service';
import { Capacitor } from '@capacitor/core';
import { RAFFLE_CATEGORY_OPTIONS } from 'src/app/core/constants/raffle-categories';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { blobFromUrl, fileFromBlob } from 'src/app/shared/utils/blob-file';
import {
  compressImageFile,
  ImageCompressionError,
} from 'src/app/shared/utils/image-compression';

function futureDateValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const date = new Date(value);
  if (isNaN(date.getTime())) return null;
  return date <= new Date() ? { pastDate: true } : null;
}

type CreateRaffleForm = {
  title: string;
  description: string;
  imageUrl: string;
  categoryId: string;
  realValue: number;

  ticketPrice: number;
  totalTickets: number;
  currency: string;
  endAt: string;

  publishNow: boolean;
};

@Component({
  selector: 'app-create-raffle',
  templateUrl: './create-raffle.page.html',
  styleUrls: ['./create-raffle.page.scss'],
  standalone: false,
})
export class CreateRafflePage implements OnDestroy {
  submitting = false;
  previewUrl: string | null = null;
  private selectedImageFile: File | null = null;
  private previewObjectUrl: string | null = null;
  readonly categoryOptions = RAFFLE_CATEGORY_OPTIONS;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: RafflesApiService,
    private toast: ToastController,
    private nav: NavController,
    private translate: TranslateService,
  ) {
    this.form = this.fb.group({
      title: this.fb.nonNullable.control('', [Validators.required]),
      description: this.fb.nonNullable.control(''),
      imageUrl: this.fb.nonNullable.control('', [Validators.required]),
      categoryId: this.fb.nonNullable.control('GENERAL', [Validators.required]),
      realValue: this.fb.nonNullable.control(0, [Validators.min(0)]),

      ticketPrice: this.fb.nonNullable.control(100, [
        Validators.required,
        Validators.min(1),
      ]),
      totalTickets: this.fb.nonNullable.control(1000, [
        Validators.required,
        Validators.min(1),
      ]),
      currency: this.fb.nonNullable.control('XAF', [Validators.required]),
      endAt: this.fb.nonNullable.control('', [Validators.required, futureDateValidator]),

      publishNow: this.fb.nonNullable.control(true),
    });
  }

  get titleControl() {
    return this.form.controls['title'];
  }

  get imageControl() {
    return this.form.controls['imageUrl'];
  }

  get safeTicketPrice(): number {
    const v = Number(this.form.controls['ticketPrice']?.value ?? 0);
    return Number.isFinite(v) ? Math.max(0, v) : 0;
  }

  get safeRealValue(): number {
    const v = Number(this.form.controls['realValue']?.value ?? 0);
    return Number.isFinite(v) ? Math.max(0, v) : 0;
  }

  // Seuil minimal pour couvrir le prix du produit.
  get coverageTicketTarget(): number {
    const ticketPrice = this.safeTicketPrice;
    if (ticketPrice <= 0) return 0;
    return Math.ceil(this.safeRealValue / ticketPrice);
  }

  get projectedCoverageAmount(): number {
    return this.coverageTicketTarget * this.safeTicketPrice;
  }

  async showHelp(): Promise<void> {
    const t = await this.toast.create({
      message: this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_HELP'),
      duration: 2400,
      position: 'top',
    });
    await t.present();
  }

  async pickImage(): Promise<void> {
    try {
      // ✅ Web: ne pas appeler requestPermissions (pas implémenté)
      if (Capacitor.getPlatform() !== 'web') {
        await Camera.requestPermissions();
      }

      const photo = await Camera.getPhoto({
        source: CameraSource.Prompt, // web => galerie via PWA elements, mobile => prompt natif
        resultType: CameraResultType.Uri,
        quality: 80,
      });

      if (!photo?.webPath) return;

      const blob = await blobFromUrl(photo.webPath);
      const sourceFile = fileFromBlob(blob, `raffle-${Date.now()}.jpg`);
      this.selectedImageFile = await compressImageFile(sourceFile);
      this.setPreview(this.selectedImageFile);
      this.form.patchValue({ imageUrl: this.previewUrl });
      this.form.markAsDirty();
    } catch (err: unknown) {
      const errorCode =
        err instanceof ImageCompressionError ? err.code : 'CAMERA_FAILED';
      console.warn('[CreateRaffle] Image selection failed', {
        code: errorCode,
      });
      const t = await this.toast.create({
        message: this.imageErrorMessage(errorCode),
        duration: 2200,
      });
      await t.present();
    }
  }

  ngOnDestroy(): void {
    this.revokePreview();
  }

  private setPreview(file: File): void {
    this.revokePreview();
    this.previewObjectUrl = URL.createObjectURL(file);
    this.previewUrl = this.previewObjectUrl;
  }

  private revokePreview(): void {
    if (this.previewObjectUrl) {
      URL.revokeObjectURL(this.previewObjectUrl);
      this.previewObjectUrl = null;
    }
  }

  private imageErrorMessage(code: string): string {
    if (code === 'SOURCE_TOO_LARGE') {
      return this.translate.instant(
        'CREATE_RAFFLE_PAGE.TOAST_IMAGE_TOO_LARGE',
      );
    }
    if (code === 'UNSUPPORTED_FORMAT') {
      return this.translate.instant(
        'CREATE_RAFFLE_PAGE.TOAST_IMAGE_UNSUPPORTED',
      );
    }
    if (code === 'DECODE_FAILED' || code === 'OUTPUT_TOO_LARGE') {
      return this.translate.instant(
        'CREATE_RAFFLE_PAGE.TOAST_IMAGE_COMPRESSION_FAILED',
      );
    }
    return this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_CAMERA_FAILED');
  }

  private readError(err: any): string {
    const msg = err?.error?.message;
    if (Array.isArray(msg)) return msg.join(' · ');
    if (msg != null) return String(msg);
    return this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_CREATE_ERROR');
  }

  async submit(): Promise<void> {
    if (this.submitting) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const t = await this.toast.create({
        message: this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_INCOMPLETE_FORM'),
        duration: 1500,
      });
      await t.present();
      return;
    }

    this.submitting = true;

    const v = this.form.getRawValue() as CreateRaffleForm;
    if (!this.selectedImageFile) {
      this.submitting = false;
      const t = await this.toast.create({
        message: this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_INCOMPLETE_FORM'),
        duration: 1500,
      });
      await t.present();
      return;
    }

    // Normalisation date -> ISO (évite les surprises backend)
    const endAtDate = new Date(v.endAt);
    const endAtIso = Number.isNaN(endAtDate.getTime())
      ? String(v.endAt)
      : endAtDate.toISOString();

    try {
      const upload = await firstValueFrom(
        this.api.uploadAdminProductImage(this.selectedImageFile),
      );

      await firstValueFrom(
        this.api.adminCreateWithProduct({
          publishNow: !!v.publishNow,
          product: {
            title: v.title.trim(),
            description: (v.description ?? '').trim(),
            imageUrl: upload.imageUrl,
            categoryId: v.categoryId ? v.categoryId : undefined,
            realValue: Number(v.realValue ?? 0),
          },
          raffle: {
            ticketPrice: Number(v.ticketPrice ?? 0),
            totalTickets: Number(v.totalTickets ?? 0),
            currency: v.currency || 'XAF',
            endAt: endAtIso,
          },
        }),
      );

      this.submitting = false;
      this.api.triggerRefresh();

      const t = await this.toast.create({
        message: this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_CREATED'),
        duration: 1200,
      });
      await t.present();

      this.nav.navigateBack('/tabs/home');
    } catch (err: unknown) {
      this.submitting = false;

      const message = this.readError(err as any);

      const t = await this.toast.create({
        message,
        duration: 2200,
      });
      await t.present();
    }
  }
}
