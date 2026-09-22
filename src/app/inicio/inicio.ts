import { Component, OnInit, inject, signal } from '@angular/core';
import { ProdutoService } from '../services/produto';
import { CarrinhoService } from '../services/carrinho-service.service';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
})
export class Inicio implements OnInit {

  private produtoService = inject(ProdutoService);
  readonly carrinho = inject(CarrinhoService);

  produtos = signal<Produto[]>([]);

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(res => {
      this.produtos.set(res);
    });
  }

  adicionar(produto: Produto) {
    this.carrinho.adicionar(produto);
  }
}