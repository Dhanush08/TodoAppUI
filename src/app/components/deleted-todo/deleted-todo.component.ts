import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrl: './deleted-todo.component.css'
})
export class DeletedTodoComponent implements OnInit{
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAllDeletedTodos();
  }

  getAllDeletedTodos() { 
    this.todoService.getAllDeletedTodos()
      .subscribe({
        next: (res) => { 
          this.todos = res;
        }
      });
  }
  
  undoDeletedTodo(id: string, todo: Todo) { 
    this.todoService.undoDeletedTodo(id, todo)
      .subscribe({
        next: (res) => { 
          this.getAllDeletedTodos();
        }
      });
  }
}
