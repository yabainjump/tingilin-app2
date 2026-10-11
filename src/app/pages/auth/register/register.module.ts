import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchModule } from 'src/app/shared/language-switch/language-switch.module';
import { RegionPickerModule } from 'src/app/shared/region-picker/region-picker.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    LanguageSwitchModule,
    RegionPickerModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
