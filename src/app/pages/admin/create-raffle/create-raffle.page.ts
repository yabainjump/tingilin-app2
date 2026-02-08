import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { RafflesApiService } from 'src/app/services/raffles/raffles-api.service';

@Component({
  selector: 'app-create-raffle',
  templateUrl: './create-raffle.page.html',
  styleUrls: ['./create-raffle.page.scss'],
  standalone: false,
})
export class CreateRafflePage {
  submitting = false;
  previewUrl: string | null = null;

  form = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    imageUrl: ['', [Validators.required]],
    categoryId: [''],
    realValue: [0],

    ticketPrice: [100, [Validators.required, Validators.min(1)]],
    currency: ['XAF'],
    endAt: ['', [Validators.required]],

    publishNow: [true],
  });

  constructor(
    private fb: FormBuilder,
    private api: RafflesApiService,
    private loadingCtrl: LoadingController,
    private toast: ToastController,
    private nav: NavController,
  ) {}

  async pickImage(): Promise<void> {
    const photo = await Camera.getPhoto({
      source: CameraSource.Prompt,       // caméra ou galerie
      resultType: CameraResultType.DataUrl,
      quality: 80,
    });

    if (!photo?.dataUrl) return;

    this.previewUrl = photo.dataUrl;
    this.form.patchValue({ imageUrl: photo.dataUrl });
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      const t = await this.toast.create({ message: 'Formulaire incomplet', duration: 1500 });
      await t.present();
      return;
    }

    this.submitting = true;
    const loading = await this.loadingCtrl.create({ message: 'Création...' });
    await loading.present();

    const v = this.form.value;

    this.api
      .adminCreateWithProduct({
        publishNow: !!v.publishNow,
        product: {
          title: String(v.title),
          description: v.description ?? '',
          imageUrl: String(v.imageUrl),
          categoryId: v.categoryId ?? undefined,
          realValue: Number(v.realValue ?? 0),
        },
        raffle: {
          ticketPrice: Number(v.ticketPrice),
          currency: v.currency ?? 'XAF',
          endAt: String(v.endAt),
        },
      })
      .subscribe({
        next: async () => {
          await loading.dismiss();
          this.submitting = false;

          const t = await this.toast.create({ message: 'Raffle créée ✅', duration: 1200 });
          await t.present();

          // retour home + refresh (Home doit reload en ionViewWillEnter)
          this.nav.navigateBack('/tabs/home');
        },
        error: async (err) => {
          await loading.dismiss();
          this.submitting = false;
          const t = await this.toast.create({
            message: err?.error?.message ?? 'Erreur création',
            duration: 2000,
          });
          await t.present();
        },
      });
  }
}
