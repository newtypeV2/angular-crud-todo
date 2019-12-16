import { TodoService } from './../../services/todo.service';
import { Todo } from '../../models/Todos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private TodoService:TodoService) { }

  ngOnInit() {
    this.TodoService.getTodos().subscribe(todos =>{
      this.todos = todos;
    });
  }

  PdeleteTodo(task){
    //Optimistic Rendering
    let index = this.todos.findIndex(todo => todo.id === task.id);
    this.todos.splice(index,1);
    this.TodoService.deleteTodo(task).subscribe(log => {
      //Pessimistic Rendering
      // let index = this.todos.findIndex(todo => todo.id === task.id);
      // this.todos.splice(index,1);
    })
  }

  PaddTodo(task){
    this.TodoService.addTodo(task).subscribe(task =>{
      console.log('new task', task);
      this.todos.push(task);
    })
  }
  
}
