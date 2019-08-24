package com.pcorrea.tasks.service;

import com.pcorrea.tasks.domain.Task;

public interface TaskService {

    Iterable <Task> list();

    Task save(Task task);

}
