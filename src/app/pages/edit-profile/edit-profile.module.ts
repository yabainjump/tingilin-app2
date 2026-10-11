import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';
import { TranslateModule } from '@ngx-translate/core';
import { RegionPickerModule } from 'src/app/shared/region-picker/region-picker.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditProfilePageRoutingModule,
    TranslateModule,
    RegionPickerModule
  ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule {}
