import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule}from '@angular/material/button'
import{MatCardModule}from '@angular/material/card'
import{MatIconModule}from '@angular/material/icon';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { Todo3Component } from './todo3/todo3.component';
import { Todo4Component } from './todo4/todo4.component';
import { Todo5Component } from './todo5/todo5.component';
import { Todo6Component } from './todo6/todo6.component';
import { Todo7Component } from './todo7/todo7.component';
import { Todo8Component } from './todo8/todo8.component';
import { Todo9Component } from './todo9/todo9.component'

@NgModule({
  declarations: [
    AppComponent,
    Todo1Component,
    Todo2Component,
    Todo3Component,
    Todo4Component,
    Todo5Component,
    Todo6Component,
    Todo7Component,
    Todo8Component,
    Todo9Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
