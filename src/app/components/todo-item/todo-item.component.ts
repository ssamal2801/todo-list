import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/TodoModel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() deleteItemEvent: EventEmitter<TodoModel> = new EventEmitter();
  constructor() {}
  deleteItem(todo: TodoModel) {
    this.deleteItemEvent.emit(todo);
  }
  ngOnInit(): void {}
}
