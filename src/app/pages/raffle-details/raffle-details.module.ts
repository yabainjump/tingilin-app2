import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaffleDetailsPageRoutingModule } from './raffle-details-routing.module';


import { RaffleDetailsPage } from './raffle-details.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaffleDetailsPageRoutingModule,
    TranslateModule
  ],
  declarations: [RaffleDetailsPage]
})
export class RaffleDetailsPageModule {}
