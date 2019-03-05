import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../services/tasks.service';

import { Tasks} from '../../models/tasks';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [ TasksService ]
})
export class TasksComponent implements OnInit {
 

  constructor( private tasksService: TasksService) {}

  ngOnInit() {
    this.getTasks()
  }
  addTasks(form : NgForm){
    if(form.value._id){
      this.tasksService.putTaskServer(form.value)
      .subscribe(res =>{
        console.log(res);
        this.resetForm(form);
        this.getTasks();
      })
    }else{
    //console.log(form.value);
    this.tasksService.postTaskServer(form.value)
    .subscribe(res => {
      console.log(res);
      this.resetForm(form);
      this.getTasks();
    });
    }
  }
  editTask( task){
    this.tasksService.selectedtasks = task; 

  }
  getTasks(){
    this.tasksService.getTaskService()
    .subscribe(res =>{
      this.tasksService.arrayTask = res as Tasks[];
      console.log(res);
    })
  }
  resetForm(form ?: NgForm){
    if(form){
      form.reset();
      this.tasksService.selectedtasks = new Tasks();
    }
    
  }
  statusTask(_id){
    this.tasksService.statusTaskServer(_id)
    .subscribe(res =>{
      this.getTasks();

    })
  }
  deleteTask(_id){
    this.tasksService.deleteTaskServer(_id)
    .subscribe(res =>{
      this.getTasks();
    })

  }

}
