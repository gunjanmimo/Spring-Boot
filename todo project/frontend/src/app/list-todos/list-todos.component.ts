import { Component, OnInit } from '@angular/core';

export class Todos {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todos(1, "learn to dance", false, new Date),
    new Todos(2, "learn to play", false, new Date),
    new Todos(3, "visit Uganda", false, new Date),
    new Todos(4, "learn to cook", false, new Date),
    new Todos(5, "MacBook Pro 16", false, new Date),
    new Todos(6, "buy apple watch", false, new Date),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
