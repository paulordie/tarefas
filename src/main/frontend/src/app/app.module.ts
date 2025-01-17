import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { HttpClientModule } from "@angular/common/http";
import {TaskService} from "./tasks/task.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule, // adicionado!!!
        FormsModule
    ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
