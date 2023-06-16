import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputCalculadoraComponent } from './componentes/calculadora/input-calculadora/input-calculadora.component';
import { ListarItensComponent } from './componentes/calculadora/listar-itens/listar-itens.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
