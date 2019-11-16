import { PeticaoService } from '../../services/peticao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.page.html',
  styleUrls: ['./processo.page.scss'],
})
export class ProcessoPage implements OnInit {
  processo;

  constructor(private peticaoService: PeticaoService) { }

  ngOnInit() {
    setTimeout(() => {
      this.peticaoService.getProcesso().then(processo => {
        this.processo = processo;
      });
    }, 2000);
  }

}
