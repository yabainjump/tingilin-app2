import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRafflePageRoutingModule } from './create-raffle-routing.module';

import { CreateRafflePage } from './create-raffle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateRafflePageRoutingModule
  ],
  declarations: [CreateRafflePage]
})
export class CreateRafflePageModule {}
