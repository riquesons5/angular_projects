import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angularaulas';
  nome = "Henrique";
  idade = 26

  nomes = ['Henrique', 'Vanessa', 'Rosemeri', 'Karina'];
  nomePrincipal = this.nomes[0];

  nomeIdade = [
    { nome: 'Henrique', idade: 26 },
    { nome: 'Vanessa', idade: 21 },
    { nome: 'Karina', idade: 21 },
    { nome: 'Rosemeri', idade: 52 }
  ]
}
