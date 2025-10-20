package dev.jake.springtodo.todo.models.dto.responses;

import dev.jake.springtodo.todo.models.TodoItem;
import dev.jake.springtodo.todo.models.TodoList;

import java.util.List;

public class TodoMapper {

    public static TodoListDto toDto(TodoList list) {
        List<TodoItemDto> dtoList = list.getTodos().stream().map(TodoMapper::toDto).toList();

        return new TodoListDto(list.getId(), list.getTitle(), dtoList);
    }

    public static TodoItemDto toDto(TodoItem item) {
        return new TodoItemDto(item.getId(), item.getTitle(), item.getDescription(),
                item.getAssignee(), item.getPoints(), item.getCompleted());
    }
}
