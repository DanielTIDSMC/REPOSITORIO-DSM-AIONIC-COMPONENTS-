import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IoTPageRoutingModule } from './io-t-routing.module';

import { IoTPage } from './io-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IoTPageRoutingModule
  ],
  declarations: [IoTPage]
})
export class IoTPageModule {}
