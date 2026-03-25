import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LanguageSwitchComponent } from './language-switch.component';

@NgModule({
  declarations: [LanguageSwitchComponent],
  imports: [CommonModule, IonicModule],
  exports: [LanguageSwitchComponent],
})
export class LanguageSwitchModule {}
