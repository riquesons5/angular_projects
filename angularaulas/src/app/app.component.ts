import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

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
  ];

  nomeIdadePorClasse = [
    new Pessoa(1, 'HenriqueSons', 90),
    new Pessoa(2, 'Paulo', 20),
    new Pessoa(3, 'Victor', 80),
    new Pessoa(4, 'Patricia', 33),
    new Pessoa(5, 'Raquelson', 38),
    new Pessoa(6, 'João', 14),
  ];
}
