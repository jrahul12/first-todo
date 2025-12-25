import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo9Component } from './todo9.component';

describe('Todo9Component', () => {
  let component: Todo9Component;
  let fixture: ComponentFixture<Todo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
