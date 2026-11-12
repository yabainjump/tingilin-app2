import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaffleDetailsPageRoutingModule } from './raffle-details-routing.module';


import { RaffleDetailsPage } from './raffle-details.page';
import { TranslateModule } from '@ngx-translate/core';
import { CountdownEnergyComponent } from '../../shared/ui/countdown-energy/countdown-energy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaffleDetailsPageRoutingModule,
    TranslateModule,
    CountdownEnergyComponent,
  ],
  declarations: [RaffleDetailsPage]
})
export class RaffleDetailsPageModule {}
