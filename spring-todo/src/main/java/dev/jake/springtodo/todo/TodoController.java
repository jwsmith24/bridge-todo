package dev.jake.springtodo.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/v1/todo")
public class TodoController {

    private final List<TodoItem> todos = List.of(
            new TodoItem(1L, "test", false),
            new TodoItem(2L, "another thing to do", false));

    @GetMapping()
    public ResponseEntity<List<TodoItem>> getTodos() {
        return ResponseEntity.ok(todos);
    }
}
