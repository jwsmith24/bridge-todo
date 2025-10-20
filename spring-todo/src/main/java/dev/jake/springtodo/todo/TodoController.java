package dev.jake.springtodo.todo;

import dev.jake.springtodo.todo.models.dto.requests.AddTodoListRequest;
import dev.jake.springtodo.todo.models.dto.requests.AddTodoRequest;
import dev.jake.springtodo.todo.models.dto.responses.TodoItemDto;
import dev.jake.springtodo.todo.models.dto.responses.TodoListDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/lists")
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST,
        RequestMethod.PATCH, RequestMethod.PUT, RequestMethod.DELETE})
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping()
    public ResponseEntity<TodoListDto> createTodoList(@RequestBody AddTodoListRequest request) {
        TodoListDto list = todoService.createTodoList(request);


    return ResponseEntity.ok(list);
    }

    @GetMapping
    public ResponseEntity<List<TodoListDto>> getAllTodoLists() {
        return ResponseEntity.ok(todoService.getAllLists());
    }

    @PostMapping("/{listId}/todos")
    public ResponseEntity<TodoItemDto> createTodoItem(@RequestBody AddTodoRequest request,
                                                      @PathVariable Long listId) {

        TodoItemDto todo = todoService.createTodoItem(request, listId);

        return ResponseEntity.ok(todo);

    }

    @GetMapping("/{listId}/todos")
    public ResponseEntity<TodoListDto> getAllTodos(@PathVariable Long listId) {

        return ResponseEntity.ok(todoService.getTodoList(listId));

    }


}
