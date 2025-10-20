package dev.jake.springtodo.todo.repos;

import dev.jake.springtodo.todo.models.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoItemRepository extends JpaRepository<TodoItem, Long> {
}
