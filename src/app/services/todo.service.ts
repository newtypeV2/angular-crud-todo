import { Todo } from './../models/Todos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoLimit = '?_limit=3';
  todoUrl:string = 'https://my-json-server.typicode.com/newtypeV2/ToDoAPI/Todos';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
      return this.http.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`)
  }

  toggleCompleted(todo: Todo):Observable<any>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url,todo, httpOptions);
  }

  deleteTodo(todo: Todo):Observable<any>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete(url,httpOptions);
  }

  addTodo(todo:Todo):Observable<any>{
    const url = `${this.todoUrl}`;
    return this.http.post(url,todo,httpOptions)
  }

}
