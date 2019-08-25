import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
//import "rxjs/add/operator/map";
import {map} from "rxjs/operators";

@Injectable()
export class TaskService {

    constructor(private http: HttpClient){

    }

    getTasks(){
        return this.http.get('/api/tasks').pipe(map(reponse => reponse.json()));

    }
}
