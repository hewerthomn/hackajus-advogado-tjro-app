import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    cpf: '',
    senha: ''
  };

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  login() {
    this.showLoading().then(() => {
      setTimeout(() => {
        const token = 'alksjaljf902384lkjs;dflkjasdfja';
        this.storageService.setAuthToken(token);
        this.loadingCtrl.dismiss();
        this.router.navigate(['/'], { replaceUrl: true });
      }, 1000)
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create();
    return await loading.present();
  }
}
