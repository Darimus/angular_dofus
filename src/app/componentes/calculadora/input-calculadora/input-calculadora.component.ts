import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../item';
import { CalculadoraService } from '../calculadora.service';

@Component({
  selector: 'app-input-calculadora',
  templateUrl: './input-calculadora.component.html',
  styleUrls: ['./input-calculadora.component.scss']
})
export class InputCalculadoraComponent implements OnInit{

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

  ngOnInit(): void {
  }

  criarItem(){
    this.service.criar(this.item).subscribe(() => {
      this.route.navigate(["/listarItens"])
    })
  }

  cancelar() {
    this.route.navigate(["/listarItens"])
  }
}
