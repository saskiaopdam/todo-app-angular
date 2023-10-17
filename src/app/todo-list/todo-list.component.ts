import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";

import { Todo } from "../todo.model";
import { Observable } from "rxjs";
import {requestDeleteAction, requestLoadAction, toggleItemChecked} from "../todo.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todo$ = store.pipe(select('todos'));
  }

  ngOnInit(): void {
    this.store.dispatch(requestLoadAction());
  }

  onToggle(todo: Todo) {
    this.store.dispatch(toggleItemChecked({ todo: todo }));
  }

  delete(id: number): void {
    this.store.dispatch(requestDeleteAction({ id: id }));
  }
}
