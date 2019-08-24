package com.pcorrea.tasks.service;

import com.pcorrea.tasks.domain.Task;
import com.pcorrea.tasks.repository.TaskRepository;

public class TaskServiceImpl implements TaskService{

    private TaskRepository taskRepository;


    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }
}
