import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

import { todoReducer } from "./todo.reducer";
import { TodoEffects } from "./todo.effects"

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
          todos: todoReducer
        }, {}),
        EffectsModule.forRoot([ TodoEffects ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
