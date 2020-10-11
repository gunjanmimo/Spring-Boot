import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from 'src/app/list-todos/list-todos.component';
import { TodoDataService } from './../services/data/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = 1
  todo: Todos
  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todos(1, "", false, new Date())
    this.todoService.retriveTodo("gunjan", this.id).subscribe(
      data => this.todo = data
    )
  }
  saveTodo() {
    this.todoService.updateTodo("gunjan", this.id, this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])
      }
    )
  }
}
