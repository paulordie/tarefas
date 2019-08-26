import {HttpClient, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
//import "rxjs/add/operator/map";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Task} from "./task.model";


@Injectable()
export class TaskService {

    taskUrl = '/api/tasks/';

    constructor(private http: HttpClient){

    }

    getTasks(): Observable<Task[]>{
        // return this.http.get('/api/tasks').map(response => response.json());
        return this.http.get<Task[]>(this.taskUrl).pipe(map((response: any) => response.json()));
    }
}
