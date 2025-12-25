import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo4Component } from './todo4.component';

describe('Todo4Component', () => {
  let component: Todo4Component;
  let fixture: ComponentFixture<Todo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
