import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegradoraPage } from './integradora.page';

const routes: Routes = [
  {
    path: '',
    component: IntegradoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegradoraPageRoutingModule {}
