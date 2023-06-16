import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit{

  @Input() item: Item = {
    id: 0,
    nome_item: "Cinto",
    qnt_item: 10,
    modelo: "modelo2",
    receitas: {
      item1: "Linho",
      qnt_item: 3,
      coeficiente: 200
    }
  }

  ngOnInit(): void {
  }

  larguraItem(): string {
    if (this.item.nome_item.length >= 256) {
      return "pensamentp-g"
    }
    return "pensamento-p"
  }
}
