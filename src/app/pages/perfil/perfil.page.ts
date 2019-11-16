import { Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  ultimosProcessos = [{
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
  }]
    
  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.storageService.delAuthToken();
    this.router.navigate(['login'], { replaceUrl: true });
  }

}
