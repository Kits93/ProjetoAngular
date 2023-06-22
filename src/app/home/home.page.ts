import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {
  resultado: number = 0;
  operacao: string = '';

  adicionar(num:string) {
    this.operacao += num;
  }

  limparTela() {
    this.resultado = 0;
    this.operacao = '';
  }

  resultadoOperacao() {
    this.resultado = (eval(this.operacao.toString()));
    console.log(this.resultado);
  }
}
