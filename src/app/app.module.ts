import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { InputCalculadoraComponent } from './componentes/calculadora/input-calculadora/input-calculadora.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ListarItensComponent } from './componentes/calculadora/listar-itens/listar-itens.component';
import { ItemComponent } from './componentes/calculadora/item/item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InputCalculadoraComponent,
    RodapeComponent,
    ListarItensComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
