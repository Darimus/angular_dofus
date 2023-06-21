import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  private readonly API: string = 'http://localhost:3000/itens'

  constructor(private http: HttpClient) { }

  listar(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API)
  }

  criar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.API, item)
  }

  excluir(id: number): Observable<Item>{
    const url = `${this.API}/${id}`
    return this.http.delete<Item>(url)
  }

  editar(pensamento: Item): Observable<Item> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Item>(url, pensamento )
  }


  buscarPorId(id: number): Observable<Item> {
    const url = `${this.API}/${id}`
    return this.http.get<Item>(url)
  }
}
