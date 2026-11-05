import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRafflesPage } from './all-raffles.page';

const routes: Routes = [{ path: '', component: AllRafflesPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRafflesPageRoutingModule {}
