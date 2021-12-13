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

  nomes = ['Henrique', 'Vanessa', 'Rosemeri', 'Karina', 'Pedro'];
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

  showAviso = true;
  avisoMsg = 'Este é um aviso';

  hideInput = true;

  imagem = 'https://www.google.com.br/google.jpg';

  tamanhoFonte = '20px';

  corPrincipal = '#FF0000';

  trocarCor() {
    this.corPrincipal = '#00FF00';
  }

  trocarCorComParametro(cor: string) {
    this.corPrincipal = cor;
  }

  clicou(pessoa: Pessoa) {
    alert(`Clicou em: ${pessoa.nome}`);
  }
}
