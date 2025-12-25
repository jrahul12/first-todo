import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../component/type';
import { todoData } from '../models/data';

@Component({
  selector: 'app-todo3',
  templateUrl: './todo3.component.html',
  styleUrls: ['./todo3.component.scss']
})
export class Todo3Component  {

todoArr:ITodo[]=todoData;

@ViewChild('todoItem') todoItem!:ElementRef<HTMLInputElement>

onAddTodo():void{
  const value=this.todoItem.nativeElement.value.trim();
  if(!value) return;
  let todoObj:ITodo={
    id:Date.now().toString(),
    todoItem:value
  }
  this.todoArr.push(todoObj);
  this.todoItem.nativeElement.value=""
}

onRemove(id:string){
  const index=this.todoArr.findIndex(t=>t.id===id);
  if (index>-1) {
    this.todoArr.splice(index,1)
  }
}

}
