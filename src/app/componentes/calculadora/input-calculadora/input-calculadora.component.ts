import { Component } from '@angular/core';

@Component({
  selector: 'app-input-calculadora',
  templateUrl: './input-calculadora.component.html',
  styleUrls: ['./input-calculadora.component.scss']
})
export class InputCalculadoraComponent {

  calculadora = {
    id: 1,
    nome: "Cinto",
    qnt_item: 2,
    receita: "Tecido",
    qnt_receita: 3
  }
}
