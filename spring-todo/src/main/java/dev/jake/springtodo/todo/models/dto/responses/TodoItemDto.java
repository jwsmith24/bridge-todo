package dev.jake.springtodo.todo.models.dto.responses;

public record TodoItemDto(
        Long id,
        String title,
        String description,
        String assignee,
        Integer points,
        Boolean completed
) {
}
