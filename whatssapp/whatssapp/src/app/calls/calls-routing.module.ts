import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { callsPage } from './calls.page';

const routes: Routes = [
  {
    path: '',
    component: callsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallsPageRoutingModule {}
