import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-input-calculadora',
  templateUrl: './input-calculadora.component.html',
  styleUrls: ['./input-calculadora.component.scss']
})
export class InputCalculadoraComponent {

  @Input() calculadora: Item = {
    id: 0,
    nome_item: "Manopla",
    qnt_item: 5,
    receitas: {
      item1: "Couro",
      qnt_item: 10,
      coeficiente: 500
    }
  }
}
