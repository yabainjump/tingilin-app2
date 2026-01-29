import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordSentPageRoutingModule } from './forgot-password-sent-routing.module';

import { ForgotPasswordSentPage } from './forgot-password-sent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordSentPageRoutingModule
  ],
  declarations: [ForgotPasswordSentPage]
})
export class ForgotPasswordSentPageModule {}
