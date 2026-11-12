import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AllRafflesPageRoutingModule } from './all-raffles-routing.module';
import { AllRafflesPage } from './all-raffles.page';
import { CountdownEnergyComponent } from '../../shared/ui/countdown-energy/countdown-energy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllRafflesPageRoutingModule,
    TranslateModule,
    CountdownEnergyComponent,
  ],
  declarations: [AllRafflesPage],
})
export class AllRafflesPageModule {}
