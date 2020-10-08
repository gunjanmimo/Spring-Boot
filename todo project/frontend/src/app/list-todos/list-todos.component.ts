import { TodoDataService } from './../services/data/todo-data.service';
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
  todos: Todos[]

  message = ""
  constructor(private service: TodoDataService) { }

  ngOnInit(): void {
    this.refreshTodos()
  }
  refreshTodos() {
    this.service.retrieveAllTodos('gunjan').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  deleteTodo(id) {
    this.service.deleteTodo("gunjan", id).subscribe(
      response => {
        console.log(response);
        this.message = `Task ${id} is deleted`
        this.refreshTodos()
      }
    )
  }

}
