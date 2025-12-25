import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo6Component } from './todo6.component';

describe('Todo6Component', () => {
  let component: Todo6Component;
  let fixture: ComponentFixture<Todo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
