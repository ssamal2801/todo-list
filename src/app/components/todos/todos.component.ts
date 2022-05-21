import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/TodoModel';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: TodoModel[];
  constructor() {
    this.todos = [
      {
        slno: 1,
        title: 'Task 1',
        desc: 'Get milk',
        active: true,
      },
      {
        slno: 2,
        title: 'Task 2',
        desc: 'Get eggs',
        active: true,
      },
      {
        slno: 3,
        title: 'Task 3',
        desc: 'Get chocolates',
        active: true,
      },
      {
        slno: 4,
        title: 'Task 4',
        desc: 'Get cereals',
        active: true,
      },
    ];
  }
  deleteItemEvent(todo: TodoModel) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  ngOnInit(): void {}
}
