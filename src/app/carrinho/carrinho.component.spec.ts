import { Component, computed, inject } from '@angular/core';
import { CarrinhoService } from '../services/carrinho-service.service';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  private carrinhoService = inject(CarrinhoService);

  quantidade = computed(() => {
    return this.carrinhoService.itens().reduce(
      (total, item) => total + item.quantidade,
      0
    );
  });

}