import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: './app.component.html',
  // template: '<p>Meu template</p>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = []; // resultado: []; // o ':' é usado para tipar a variável. 'any' significa 'qualquer tipo'
  // public todos: any[]; // resultado: undefined
  public title: String = 'Minhas Tarefas';

  constructor() { // é chamado toda vez que o componente é iniciado
    this.todos.push('passear com o cachorro');
    this.todos.push('ir ao supermercado');
    this.todos.push('cortar o cabelo');
  }

  alterarTexto() {
    this.title = 'Teste';
  }

}
