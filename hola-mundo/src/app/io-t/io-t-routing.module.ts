import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IoTPage } from './io-t.page';

const routes: Routes = [
  {
    path: '',
    component: IoTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IoTPageRoutingModule {}
