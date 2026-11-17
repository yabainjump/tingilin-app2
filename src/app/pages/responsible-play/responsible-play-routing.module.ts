import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiblePlayPage } from './responsible-play.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsiblePlayPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsiblePlayPageRoutingModule {}
