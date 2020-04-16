import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from 'src/app/todo/todo-routing.module';
import { TodoComponent } from 'src/app/todo/todo/todo.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TodoModule {}
