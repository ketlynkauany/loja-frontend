import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './inicio/inicio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Inicio],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loja-frontend';
}