package dev.jake.springtodo.todo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class TodoList {
    private User user;
    private List<TodoItem> todos = new ArrayList<>();
}
