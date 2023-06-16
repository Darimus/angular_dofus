import { Component, Input } from '@angular/core';
import { Item } from '../item';
import { Router } from '@angular/router';
import { CalculadoraService } from '../calculadora.service';

@Component({
  selector: 'app-input-calculadora',
  templateUrl: './input-calculadora.component.html',
  styleUrls: ['./input-calculadora.component.scss']
})
export class InputCalculadoraComponent {

  @Input() item: Item = {
    id: 0,
    nome_item: "Manopla",
    qnt_item: 5,
    modelo: "modelo2",
    receitas: {
      item1: "Couro",
      qnt_item: 10,
      coeficiente: 500
    }
  }

  constructor(
    private service: CalculadoraService,
    private route: Router
  ){}

  criarItem(){
    this.service.criar(this.item).subscribe(() => {
      this.route.navigate(["/listarItens"])
    })
  }

  cancelar() {
    this.route.navigate(["/listarItens"])
  }
}
