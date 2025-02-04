import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesPage } from './stories.page';

const routes: Routes = [
  {
    path: '',
    component: StoriesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesPageRoutingModule {}
