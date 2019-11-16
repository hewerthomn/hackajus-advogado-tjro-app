import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeticaoInicialPageRoutingModule } from './peticao-inicial-routing.module';

import { PeticaoInicialPage } from './peticao-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeticaoInicialPageRoutingModule
  ],
  declarations: [PeticaoInicialPage]
})
export class PeticaoInicialPageModule {}
