import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RegionPickerComponent } from './region-picker.component';

@NgModule({
  declarations: [RegionPickerComponent],
  imports: [CommonModule, IonicModule, TranslateModule],
  exports: [RegionPickerComponent],
})
export class RegionPickerModule {}