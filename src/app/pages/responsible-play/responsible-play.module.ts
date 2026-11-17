import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ResponsiblePlayPageRoutingModule } from './responsible-play-routing.module';
import { ResponsiblePlayPage } from './responsible-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsiblePlayPageRoutingModule,
    TranslateModule,
  ],
  declarations: [ResponsiblePlayPage],
})
export class ResponsiblePlayPageModule {}
