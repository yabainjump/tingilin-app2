import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchModule } from 'src/app/shared/language-switch/language-switch.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    TranslateModule,
    LanguageSwitchModule
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
