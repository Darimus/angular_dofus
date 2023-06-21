import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CalculadoraService } from '../calculadora.service';
import { Item } from '../item';

@Component({
  selector: 'app-excluir-item',
  templateUrl: './excluir-item.component.html',
  styleUrls: ['./excluir-item.component.scss']
})
export class ExcluirItemComponent implements OnInit{

  item: Item = {
    id: 0,
    nome_item: "Manopla",
    qnt_item: 5,
    modelo: "modelo2",
    coeficiente: 500,
    receitas: [{
      item: "Couro",
      qnt_item: 10,
    }]
  }

  constructor(
    private service: CalculadoraService,
    private router: Router,
    private route: ActivatedRoute
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((item) => {
        this.item = item
      })
    }

    excluirItem() {
      if(this.item.id) {
        this.service.excluir(this.item.id).subscribe(() => {
          this.router.navigate(["/listarItens"])
        })
      }
    }

    cancelar(){
      this.router.navigate(["/listarItens"])
    }

}
