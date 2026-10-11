import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OnboardingPageRoutingModule } from './onboarding-routing.module';
import { OnboardingPage } from './onboarding.page';
import { TranslateModule } from '@ngx-translate/core';
import { RegionPickerModule } from 'src/app/shared/region-picker/region-picker.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OnboardingPageRoutingModule, TranslateModule, RegionPickerModule],
  declarations: [OnboardingPage],
})
export class OnboardingPageModule {}
