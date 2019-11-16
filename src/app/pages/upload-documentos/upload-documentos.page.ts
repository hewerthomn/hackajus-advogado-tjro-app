import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PeticaoService } from '../../services/peticao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-documentos',
  templateUrl: './upload-documentos.page.html',
  styleUrls: ['./upload-documentos.page.scss'],
})
export class UploadDocumentosPage implements OnInit {
  peticao;
  documentos;
  senha;

  constructor(
    private router: Router,
    private peticaoService: PeticaoService,
    private loadingCtrl: LoadingController
  ) {
    this.documentos = this.peticaoService.getDocumentos();
  }

  ngOnInit() {
    this.peticaoService.get(1).then(peticao => this.peticao = peticao);
  }

  assinarProtocolar() {
    this.showLoading('Aguarde...').then(() => {
      setTimeout(() => {
        this.loadingCtrl.dismiss();
        this.router.navigate(['processo']);
      }, 2000);
    });
  }

  async showLoading(message: string) {
    const loading = await this.loadingCtrl.create({ message });
    return await loading.present();
  }
}
