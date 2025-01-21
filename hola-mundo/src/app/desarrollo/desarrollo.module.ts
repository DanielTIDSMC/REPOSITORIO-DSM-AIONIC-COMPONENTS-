import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarrolloPageRoutingModule } from './desarrollo-routing.module';

import { DesarrolloPage } from './desarrollo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarrolloPageRoutingModule
  ],
  declarations: [DesarrolloPage]
})
export class DesarrolloPageModule {}
