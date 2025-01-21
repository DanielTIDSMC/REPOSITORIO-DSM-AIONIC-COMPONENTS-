import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegradoraPageRoutingModule } from './integradora-routing.module';

import { IntegradoraPage } from './integradora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegradoraPageRoutingModule
  ],
  declarations: [IntegradoraPage]
})
export class IntegradoraPageModule {}
