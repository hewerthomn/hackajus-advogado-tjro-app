import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  send() {
    this.showLoading('Enviando petição...').then(() => {
      setTimeout(() => {
        this.loadingCtrl.dismiss();
        this.router.navigate(['peticao-inicial'])
      }, 2000);
    }); 
  }

  async showLoading(message: string) {
    const loading = await this.loadingCtrl.create({ message });
    return await loading.present();
  }
}
