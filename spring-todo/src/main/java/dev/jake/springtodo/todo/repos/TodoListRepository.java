package dev.jake.springtodo.todo.repos;

import dev.jake.springtodo.todo.models.TodoList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoListRepository extends JpaRepository<TodoList, Long> {
}
