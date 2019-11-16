import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Events, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-acompanhamento',
  templateUrl: './acompanhamento.page.html',
  styleUrls: ['./acompanhamento.page.scss'],
})
export class AcompanhamentoPage implements OnInit {
  processos = [{
    numero: '7999999-99.2019.8.22.0001',
    pontos: 'Obteve 1 ponto.`'
  }, {
    numero: '7999933-99.2019.8.22.0001',
    pontos: 'Não obteve pontos.`'
  }, {
    numero: '79992329-99.2019.8.22.0001',
    pontos: 'Obteve 1 ponto.`'
  }, {
    numero: '7444999-99.2019.8.22.0001',
    pontos: 'Obteve 1 ponto.`'
  }];

  constructor(
    private router: Router,
    private events: Events,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  testNotification() {
    this.events.publish('new_notification');
    this.toastCtrl.create({
      header: 'Nova movimentação',
      message: 'Veja movimento do processo 7999999-99.2019.8.22.0001.',
      position: 'top',
      duration: 10000,
      animated: true,
      buttons: [
        {
          text: 'Ver',
          handler: () => this.router.navigate(['processo'])
        }, {
          text: 'X',
          role: 'cancel'
        }
      ]
    }).then(alert => alert.present());
  }

}
