import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo5Component } from './todo5.component';

describe('Todo5Component', () => {
  let component: Todo5Component;
  let fixture: ComponentFixture<Todo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
