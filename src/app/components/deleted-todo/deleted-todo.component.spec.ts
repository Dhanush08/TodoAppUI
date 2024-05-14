import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedTodoComponent } from './deleted-todo.component';

describe('DeletedTodoComponent', () => {
  let component: DeletedTodoComponent;
  let fixture: ComponentFixture<DeletedTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletedTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletedTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
