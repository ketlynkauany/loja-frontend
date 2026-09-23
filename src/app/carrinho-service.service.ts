import { Injectable, signal } from '@angular/core';

export type Produto = {
  id: number;
  nome: string;
  preco: number;
};

export type Item = {
  id: number;
  produto: Produto;
  quantidade: number;
};

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens = signal<Item[]>([]);

  adicionar(produto: Produto) {
    this.itens.update(itens => {
      const item = itens.find(item => item.produto.id === produto.id);

      if (item) {
        return itens.map(item =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [
        ...itens,
        {
          id: produto.id,
          produto: produto,
          quantidade: 1
        }
      ];
    });
  }

  aumentarQuantidade(id: number) {
    this.itens.update(itens =>
      itens.map(item =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  diminuirQuantidade(id: number) {
    this.itens.update(itens =>
      itens.map(item =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  }

  removerItem(id: number) {
    this.itens.update(itens =>
      itens.filter(item => item.id !== id)
    );
  }

  obterTotal() {
    return this.itens().reduce(
      (total, item) => total + item.produto.preco * item.quantidade,
      0
    );
  }
}