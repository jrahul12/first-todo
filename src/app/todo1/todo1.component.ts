import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { todoData } from '../models/data';
import { ITodo } from '../component/type';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.scss']
})
export class Todo1Component {


  todoArr: ITodo[] = todoData;

  @ViewChild('todoItem') todoItem!: ElementRef<HTMLInputElement>

  onTodoAdd(): void {
    const value = this.todoItem.nativeElement.value.trim();
    if (!value) return;
    const todoObj: ITodo = {
      id: Date.now().toString(),
      todoItem: value
    };
    this.todoArr.push(todoObj);
    this.todoItem.nativeElement.value = "";
  }

  removeTodo(id: string): void {
    const index = this.todoArr.findIndex(t => t.id === id);
    if (index > -1) {
      this.todoArr.splice(index, 1)
    }
  }


}
