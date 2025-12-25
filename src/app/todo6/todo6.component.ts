import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../component/type';
import { todoData } from '../models/data';

@Component({
  selector: 'app-todo6',
  templateUrl: './todo6.component.html',
  styleUrls: ['./todo6.component.scss']
})
export class Todo6Component {

  todoArr: ITodo[] = todoData
  @ViewChild('todoItem') todoItem!: ElementRef<HTMLInputElement>

  onAdd(): void {
    let result = this.todoItem.nativeElement.value.trim();
    if (!result) return;
    let createObj: ITodo = {
      todoItem: result,
      id: Date.now().toString()
    }
    this.todoArr.push(createObj);
    this.todoItem.nativeElement.value = "";
  }
  onRemove(id: string): void {
    let value = this.todoArr.findIndex(t => t.id === id);
    if (value > -1) {
      this.todoArr.splice(value, 1);
    }
  }
}
