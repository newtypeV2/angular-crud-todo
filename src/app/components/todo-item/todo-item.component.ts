import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todos';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { 
  }

  ngOnInit() {
    // console.log(this.task)
  }

  //Setting classes
  setClasses = () => {
    let classes = {
      todo: true,
      'is-complete' : this.task.completed
    }
    return classes;
  }

  //Checkbox Toggle handler
  onToggle = (task) => {
    //Optimistic Render - UI Only
    task.completed = !task.completed;
    //Post request
    this.todoService.toggleCompleted(task).subscribe(task => console.log(task))
    
  }

  //Button Click handler
  onClick = (task) => {
    this.deleteTodo.emit(task)
  }
  

}
