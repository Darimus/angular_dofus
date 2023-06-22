export interface Item {
  id: number,
  nome_item: string,
  qnt_item: number,
  modelo: string,
  coeficiente: number,
  receitas: Array<{item: string, qnt_item: number, qnt_item_kamas: number}>
}
