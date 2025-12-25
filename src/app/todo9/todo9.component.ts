import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../component/type';
import { todoData } from '../models/data';

@Component({
  selector: 'app-todo9',
  templateUrl: './todo9.component.html',
  styleUrls: ['./todo9.component.scss']
})
export class Todo9Component  {

  todoArr:ITodo[]=todoData

  @ViewChild('todoItem') todoItem!:ElementRef<HTMLInputElement>

  onAdd():void{
    let value=this.todoItem.nativeElement.value.trim();
    if(!value) return;
    let createObj:ITodo={
      todoItem:value,
      id:Date.now().toString()
    }
    this.todoArr.push(createObj);
    this.todoItem.nativeElement.value="";
  }

  onRemove(id:string):void{
    let result=this.todoArr.findIndex(t=>t.id===id);
    if (result>-1) {
      this.todoArr.splice(result,1);
    }
  }

}
