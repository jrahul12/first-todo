import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../component/type';
import { todoData } from '../models/data';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.scss']
})
export class Todo2Component {

  todoArr:ITodo[]=todoData
  @ViewChild('todoItem') todoItem!:ElementRef<HTMLInputElement>
  onAddTodo():void{
    const value=this.todoItem.nativeElement.value.trim();
    if(!value) return;
    const todoObj:ITodo={
      id:Date.now().toString(),
      todoItem:value
    }
    this.todoArr.push(todoObj);
    this.todoItem.nativeElement.value="";
  }

  onRemove(id:string):void{
    const index=this.todoArr.findIndex(t=>t.id===id);
    if (index>-1) {
      this.todoArr.splice(index,1)
    }
  }

}
