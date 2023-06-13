export interface Item {
  id: number,
  nome_item: string,
  qnt_item: number,
  receitas: {
    item1: string,
    qnt_item: number,
    coeficiente: number
  }
}
