export interface Item {
  id: number,
  nome_item: string,
  qnt_item: number,
  modelo: string,
  receitas: {
    item1: string,
    qnt_item: number,
    coeficiente: number
  }
}
