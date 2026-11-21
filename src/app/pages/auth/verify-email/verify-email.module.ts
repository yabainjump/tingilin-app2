import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { VerifyEmailPageRoutingModule } from './verify-email-routing.module';
import { VerifyEmailPage } from './verify-email.page';

@NgModule({
  imports: [CommonModule, IonicModule, TranslateModule, VerifyEmailPageRoutingModule],
  declarations: [VerifyEmailPage],
})
export class VerifyEmailPageModule {}
