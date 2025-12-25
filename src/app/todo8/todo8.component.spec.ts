import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo8Component } from './todo8.component';

describe('Todo8Component', () => {
  let component: Todo8Component;
  let fixture: ComponentFixture<Todo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
