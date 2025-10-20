package dev.jake.springtodo.todo.models.dto.requests;

public record AddTodoRequest(
        String title,
        String description,
        Integer points,
        String assignee
) {
}
