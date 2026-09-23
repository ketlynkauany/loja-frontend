import { Component, OnInit, inject, signal } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { CarrinhoService } from '../services/carrinho-service.service';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarrinhoComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
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

  adicionar(produto: Produto): void {
    this.carrinho.adicionar(produto);
  }
}