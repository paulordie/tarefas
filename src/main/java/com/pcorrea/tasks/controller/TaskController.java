package com.pcorrea.tasks.controller;


import com.pcorrea.tasks.domain.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @GetMapping( value = {"","/"})
    public Iterable<Task> list(){
        return null;
    }

}
