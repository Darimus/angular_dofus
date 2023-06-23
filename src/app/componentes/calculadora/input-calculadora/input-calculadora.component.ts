import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    nome_item: "",
    qnt_item: 0,
    modelo: "",
    coeficiente: 0,
    receitas: [{
      item: "",
      qnt_item: 0,
      qnt_item_kamas: 0
    }]
  }

  formulario!: FormGroup;

  constructor(
    private service: CalculadoraService,
    private route: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome_item: [""],
      qnt_item: [0],
      modelo: [""],
      coeficiente: [0],
      receitas: [{
        item: [""],
        qnt_item: [0],
        qnt_item_kamas: [0]
      }]
    })
  }

  criarItem(){
    this.service.criar(this.item).subscribe(() => {
      this.route.navigate(["/listarItens"])
    })
  }

  cancelar() {
    this.route.navigate(["/listarItens"])
  }

  adicionarReceita() {
    this.item.receitas.push({ item: '', qnt_item: 0 , qnt_item_kamas: 0});
  }

  removerReceita(index: number) {
    this.item.receitas.splice(index, 1);
  }


}
