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
}
