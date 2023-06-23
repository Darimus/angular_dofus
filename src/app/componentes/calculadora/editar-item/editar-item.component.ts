import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CalculadoraService } from '../calculadora.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.scss']
})
export class EditarItemComponent implements OnInit {

  item: Item = {
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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((item) => {
      this.item = item
    })
  }

  constructor(
    private service: CalculadoraService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  editarItem() {
    this.service.editar(this.item).subscribe(() => {
      this.router.navigate(["/listarItens"])
    })
  }

  cancelar() {
    this.router.navigate(["/listarItens"])
  }

  adicionarReceita() {
    this.item.receitas.push({ item: '', qnt_item: 0 , qnt_item_kamas: 0});
  }

  removerReceita(index: number) {
    this.item.receitas.splice(index, 1);
  }

}
