import { Component, ElementRef, ViewChild } from '@angular/core';
import { todoData } from './models/data';
import { ITodo } from './component/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
