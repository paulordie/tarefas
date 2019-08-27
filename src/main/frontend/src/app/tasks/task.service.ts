import {HttpClient, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
//import "rxjs/add/operator/map";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Task} from "./task.model";


@Injectable()
export class TaskService {

    taskUrl = '/api/tasks/';
    posttaskUrl = '/api/tasks/save/';

    constructor(private http: HttpClient){

    }

    getTasks(): Observable<Task[]>{
        // return this.http.get('/api/tasks').map(response => response.json());
        return this.http.get<Task[]>(this.taskUrl).pipe(map(response => response));
    }
    saveTask(task: Task, _checked: boolean){
        task.completed = _checked;
        return this.http.post<Task>(this.posttaskUrl, task).pipe(map(response => response));
    }
}
