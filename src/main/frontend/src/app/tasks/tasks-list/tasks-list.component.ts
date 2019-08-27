import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  providers: [TaskService],
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[]=[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
      // this.tasks.push( new Task(1,"Task 1", true, "25/08/2019"));
      // this.tasks.push( new Task(2,"Task 2", false, "25/08/2019"));
      // this.tasks.push( new Task(3,"Task 3", false, "25/08/2019"));

      return this.taskService.getTasks()
          .subscribe(
              (tasks: any[]) => {
                  (this.tasks = tasks)
              },
              (error) => console.log(error)
          );
  }

  getDueDateLabel(task: Task){
      return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task){
      this.taskService.saveTask(task,event.target.checked).subscribe();
      console.log('Task has changed');
  }

}
