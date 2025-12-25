import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo7Component } from './todo7.component';

describe('Todo7Component', () => {
  let component: Todo7Component;
  let fixture: ComponentFixture<Todo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
