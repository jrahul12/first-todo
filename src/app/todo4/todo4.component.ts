import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../component/type';
import { todoData } from '../models/data';

@Component({
  selector: 'app-todo4',
  templateUrl: './todo4.component.html',
  styleUrls: ['./todo4.component.scss']
})
export class Todo4Component  {

  todoArr:ITodo[]=todoData;

  @ViewChild('todoItem') todoItem!:ElementRef<HTMLInputElement>

  onAddTodo():void{
    let value=this.todoItem.nativeElement.value.trim();
    if(!value) return;
    let createObj:ITodo={
      todoItem:value,
      id:Date.now().toString()
    }
    this.todoArr.push(createObj);
    this.todoItem.nativeElement.value="";
  }
  onRemove(id:string){
    let index=this.todoArr.findIndex(t=>t.id===id);
    if (index>-1) {
      this.todoArr.splice(index,1)
    }
  }

}
