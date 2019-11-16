import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadDocumentosPage } from './upload-documentos.page';

const routes: Routes = [
  {
    path: '',
    component: UploadDocumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadDocumentosPageRoutingModule {}
