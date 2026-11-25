import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RulesPage } from './rules.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: RulesPage }]),
  ],
  declarations: [RulesPage],
})
export class RulesPageModule {}
