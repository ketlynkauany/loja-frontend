import { Injectable, signal } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

export interface Item {
  id: number;
  produto: Produto;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens = signal<Item[]>([]);

  adicionar(produto: Produto) {
    const itens = this.itens();

    const item = itens.find(i => i.id === produto.id);

    if (item) {
      item.quantidade++;
      this.itens.set([...itens]);
    } else {
      this.itens.set([
        ...itens,
        {
          id: produto.id,
          produto: produto,
          quantidade: 1
        }
      ]);
    }
  }
}