import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadDocumentosPageRoutingModule } from './upload-documentos-routing.module';

import { UploadDocumentosPage } from './upload-documentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadDocumentosPageRoutingModule
  ],
  declarations: [UploadDocumentosPage]
})
export class UploadDocumentosPageModule {}
