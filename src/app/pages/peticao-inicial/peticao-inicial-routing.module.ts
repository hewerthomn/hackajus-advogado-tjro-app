import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeticaoInicialPage } from './peticao-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: PeticaoInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeticaoInicialPageRoutingModule {}
