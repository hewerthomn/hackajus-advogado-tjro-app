import { PeticaoService } from '../../services/peticao.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticao-inicial',
  templateUrl: './peticao-inicial.page.html',
  styleUrls: ['./peticao-inicial.page.scss'],
})
export class PeticaoInicialPage implements OnInit {
  peticao: any;
  confirmed = false;

  constructor(
    private router: Router,
    private peticaoService: PeticaoService,
    private loadingCtrl: LoadingController
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.peticaoService.get(1).then(peticao => this.peticao = peticao);
    }, 1000);
  }

  send() {
    this.showLoading('Enviando...').then(() => {
      setTimeout(() => {
        this.loadingCtrl.dismiss();
        this.router.navigate(['upload-documentos']);
      }, 2000);
    });
  }

  async showLoading(message: string) {
    const loading = await this.loadingCtrl.create({ message });
    return await loading.present();
  }

}
