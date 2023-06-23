import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { InputCalculadoraComponent } from './componentes/calculadora/input-calculadora/input-calculadora.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ListarItensComponent } from './componentes/calculadora/listar-itens/listar-itens.component';
import { ItemComponent } from './componentes/calculadora/item/item.component';
import { ExcluirItemComponent } from './componentes/calculadora/excluir-item/excluir-item.component';
import { EditarItemComponent } from './componentes/calculadora/editar-item/editar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InputCalculadoraComponent,
    RodapeComponent,
    ListarItensComponent,
    ItemComponent,
    ExcluirItemComponent,
    EditarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
