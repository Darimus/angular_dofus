import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CalculadoraService } from '../calculadora.service';

@Component({
  selector: 'app-listar-itens',
  templateUrl: './listar-itens.component.html',
  styleUrls: ['./listar-itens.component.scss']
})
export class ListarItensComponent implements OnInit{

  listaItens: Item[] = [];

  constructor(private service: CalculadoraService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaItens)=> {
      this.listaItens = listaItens
    })
  }

}
