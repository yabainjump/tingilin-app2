import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SupportPageRoutingModule } from './support-routing.module';
import { SupportPage } from './support.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SupportPageRoutingModule, TranslateModule],
  declarations: [SupportPage],
})
export class SupportPageModule {}
