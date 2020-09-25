import { Component, OnInit } from '@angular/core';
export class Todos {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = [
    new Todos(1, "learn Angular", false, new Date()),
    new Todos(2, "learn to dance", false, new Date()),
    new Todos(3, "learn to spring boot", false, new Date()),
    new Todos(4, "time to go to germnay", false, new Date()),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
