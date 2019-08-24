package com.pcorrea.tasks.repository;

import com.pcorrea.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
}
