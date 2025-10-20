package dev.jake.springtodo.todo.models.dto.responses;

import java.util.List;

public record TodoListDto(
        Long id,
        String title,
        List<TodoItemDto> todos
) {
}
