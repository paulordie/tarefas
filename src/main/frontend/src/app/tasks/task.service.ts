import {HttpClient, HttpRequest} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
//import "rxjs/add/operator/map";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Task} from "./task.model";


@Injectable()
export class TaskService {

    onTaskAdded =  new EventEmitter<Task>();

    taskUrl = '/api/tasks/';
    posttaskUrl = '/api/tasks/save/';

    constructor(private http: HttpClient){

    }

    getTasks(): Observable<Task[]>{
        // return this.http.get('/api/tasks').map(response => response.json());
        return this.http.get<Task[]>(this.taskUrl).pipe(map(response => response));
    }
    saveTask(task: Task, checked: boolean){
        task.completed = checked;
        return this.http.post<Task>(this.posttaskUrl, task).pipe(map(response => response));
    }
    addTask(task: Task){
        return this.http.post<Task>(this.posttaskUrl, task).pipe(map(response => response));
    }
}
