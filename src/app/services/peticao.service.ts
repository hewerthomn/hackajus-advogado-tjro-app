import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticaoService {

  peticao = {
    uuid: 'F1D44E3C-68CD-402B-90C9-B33742658727',
    classe: { id: 1, nome: 'Procedimento do Juizado Especial Cível' },
    competencia: { id: 1, nome: 'Juizado Especial Cível' },
    assuntos: [
      { id: 1, nome: 'INDENIZAÇÃO POR DANO MORAL', principal: true },
      { id: 2, nome: 'ATRASO DE VOO', principal: false }
    ],
    partes: {
      poloAtivo: [{
        doc: '242.244.244-91',
        nome: 'MAICON CÉSAR BATISTA CUCCHI',
        endereco: 'Rua Anápolis, no 9327, Jardim Santana'
      }],
      poloPassivo: [{
        doc: '3333333323/0001',
        nome: 'LATAM AIRLINES BRASIL',
        endereco: 'Av. Lauro Sodré, Aeroporto Internacional Governador Jorge Teixeira de Oliveira'
      }]
    }
  };

  constructor() { }

  get(id) {
    return new Promise((res, rej) => {
      res(this.peticao);
    });
  }

  getDocumentos() {
    return [
      { id: 1, nome: 'Comprovante de Viagem', required: true },
      { id: 2, nome: 'Documentos Pessoais', required: true },
      { id: 3, nome: 'Comprovante de Residência', required: true },
      { id: 4, nome: 'Documentos diversos', required: false  }
    ];
  }

  getProcesso() {
    return new Promise((res, rej) => {
      res({
        numero: '7999999-99.2019.8.22.0001',
        orgaoJulgador: { id: 1, nome: 'Porto Velho - 2o Juizado Especial Cível' },
        classe: { id: 1, nome: 'Procedimento do Juizado Especial Cível' },
        competencia: { id: 1, nome: 'Juizado Especial Cível' },
        assuntos: [
          { id: 1, nome: 'INDENIZAÇÃO POR DANO MORAL', principal: true },
          { id: 2, nome: 'ATRASO DE VOO', principal: false }
        ],
      });
    });
  }
}
