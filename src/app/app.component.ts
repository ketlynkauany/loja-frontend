import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrinhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'loja-frontend';

}