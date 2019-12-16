import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddToDoComponent implements OnInit {
  @Output() addTodo:EventEmitter<any> = new EventEmitter();
  title:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmitHandler(){
    const todo = {
      title: this.title,
      completed: false
    }
    if (this.title !== undefined ){
      this.addTodo.emit(todo)
    }
    
  }

}
