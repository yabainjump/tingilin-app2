import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { RafflesApiService } from 'src/app/services/raffles/raffles-api.service';
import { Capacitor } from '@capacitor/core';

type CreateRaffleForm = {
  title: string;
  description: string;
  imageUrl: string;
  categoryId: string;
  realValue: number;

  ticketPrice: number;
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
export class CreateRafflePage {
  submitting = false;
  previewUrl: string | null = null;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: RafflesApiService,
    private loadingCtrl: LoadingController,
    private toast: ToastController,
    private nav: NavController,
  ) {
    this.form = this.fb.group({
      title: this.fb.nonNullable.control('', [Validators.required]),
      description: this.fb.nonNullable.control(''),
      imageUrl: this.fb.nonNullable.control('', [Validators.required]),
      categoryId: this.fb.nonNullable.control(''),
      realValue: this.fb.nonNullable.control(0),

      ticketPrice: this.fb.nonNullable.control(100, [
        Validators.required,
        Validators.min(1),
      ]),
      currency: this.fb.nonNullable.control('XAF'),
      endAt: this.fb.nonNullable.control('', [Validators.required]),

      publishNow: this.fb.nonNullable.control(true),
    });
  }

  async pickImage(): Promise<void> {
    try {
      // ✅ Web: ne pas appeler requestPermissions (pas implémenté)
      if (Capacitor.getPlatform() !== 'web') {
        await Camera.requestPermissions();
      }

      const photo = await Camera.getPhoto({
        source: CameraSource.Prompt, // web => galerie via PWA elements, mobile => prompt natif
        resultType: CameraResultType.DataUrl,
        quality: 80,
      });

      if (!photo?.dataUrl) return;

      this.previewUrl = photo.dataUrl;
      this.form.patchValue({ imageUrl: photo.dataUrl });
      this.form.markAsDirty();
    } catch (err) {
      console.error('Camera error:', err);
      const t = await this.toast.create({
        message: 'Impossible d’ouvrir la caméra/galerie sur ce support',
        duration: 2200,
      });
      await t.present();
    }
  }

  async submit(): Promise<void> {
    if (this.submitting) return;

    if (this.form.invalid) {
      const t = await this.toast.create({
        message: 'Formulaire incomplet',
        duration: 1500,
      });
      await t.present();
      return;
    }

    this.submitting = true;
    const loading = await this.loadingCtrl.create({ message: 'Création...' });
    await loading.present();

    const v = this.form.getRawValue() as CreateRaffleForm;

    // Normalisation date -> ISO (évite les surprises backend)
    const endAtDate = new Date(v.endAt);
    const endAtIso = Number.isNaN(endAtDate.getTime())
      ? String(v.endAt)
      : endAtDate.toISOString();

    this.api
      .adminCreateWithProduct({
        publishNow: !!v.publishNow,
        product: {
          title: v.title.trim(),
          description: (v.description ?? '').trim(),
          imageUrl: v.imageUrl,
          categoryId: v.categoryId ? v.categoryId : undefined,
          realValue: Number(v.realValue ?? 0),
        },
        raffle: {
          ticketPrice: Number(v.ticketPrice ?? 0),
          currency: v.currency || 'XAF',
          endAt: endAtIso,
        },
      })
      .subscribe({
        next: async () => {
          await loading.dismiss();
          this.submitting = false;

          const t = await this.toast.create({
            message: 'Raffle créée ✅',
            duration: 1200,
          });
          await t.present();

          // Retour home
          this.nav.navigateBack('/tabs/home');
        },
        error: async (err: unknown) => {
          await loading.dismiss();
          this.submitting = false;

          const message =
            (err as any)?.error?.message ??
            (err as any)?.message ??
            'Erreur création';

          const t = await this.toast.create({
            message,
            duration: 2200,
          });
          await t.present();
        },
      });
  }
}
