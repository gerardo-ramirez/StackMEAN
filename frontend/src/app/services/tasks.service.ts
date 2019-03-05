import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Tasks } from './../models/tasks';
//import { TasksComponent } from './../component/tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
 selectedtasks :Tasks  ;
  arrayTask:Tasks[];
 readonly URL_API = "http://localhost:8080/api/tasks";
// readonly URL_API = `mongodb://den1.mongo1.gear.host:27001/taskcoderhouse/`;

  constructor( private http: HttpClient) {
    this.selectedtasks = new Tasks();
   }
  getTaskService(){
    return this.http.get(this.URL_API);
   
  }
  postTaskServer(task){
    return this.http.post(this.URL_API,task);
  }
  putTaskServer(task: Tasks){
    return this.http.put(this.URL_API + `/${task._id}`, task);

  }
  deleteTaskServer(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  statusTaskServer(_id:string){
    return this.http.get(this.URL_API + `/${_id}`);
  }

}
