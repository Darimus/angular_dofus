import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputCalculadoraComponent } from './componentes/calculadora/input-calculadora/input-calculadora.component';
import { ListarItensComponent } from './componentes/calculadora/listar-itens/listar-itens.component';
import { ExcluirItemComponent } from './componentes/calculadora/excluir-item/excluir-item.component';
import { EditarItemComponent } from './componentes/calculadora/editar-item/editar-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarItens',
    pathMatch: 'full'
  },
  {
    path: 'criarItem',
    component: InputCalculadoraComponent
  },
  {
    path: 'listarItens',
    component: ListarItensComponent
  },
  {
    path: 'itens/excluirItem/:id',
    component: ExcluirItemComponent
  },
  {
    path: 'itens/editarItem/:id',
    component: EditarItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
