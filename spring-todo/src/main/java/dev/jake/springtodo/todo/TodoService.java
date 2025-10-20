package dev.jake.springtodo.todo;

import dev.jake.springtodo.todo.models.TodoItem;
import dev.jake.springtodo.todo.models.TodoList;
import dev.jake.springtodo.todo.models.dto.requests.AddTodoListRequest;
import dev.jake.springtodo.todo.models.dto.requests.AddTodoRequest;
import dev.jake.springtodo.todo.models.dto.responses.TodoItemDto;
import dev.jake.springtodo.todo.models.dto.responses.TodoListDto;
import dev.jake.springtodo.todo.models.dto.responses.TodoMapper;
import dev.jake.springtodo.todo.repos.TodoItemRepository;
import dev.jake.springtodo.todo.repos.TodoListRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoListRepository todoListRepository;
    private final TodoItemRepository todoItemRepository;

    public TodoService(TodoListRepository todoListRepository, TodoItemRepository todoItemRepository) {
        this.todoListRepository = todoListRepository;
        this.todoItemRepository = todoItemRepository;
    }

    @Transactional
    public TodoListDto createTodoList(AddTodoListRequest request) {
        TodoList list = new TodoList();
        list.setTitle(request.title());

        TodoList saved = todoListRepository.save(list);

        return TodoMapper.toDto(saved);
    }

    public List<TodoListDto> getAllLists() {
        List<TodoList> lists = todoListRepository.findAll();
        return lists.stream().map(TodoMapper::toDto).toList();
    }

    @Transactional
    public TodoItemDto createTodoItem(AddTodoRequest request, Long listId) {

        TodoList list = todoListRepository.findById(listId).orElseThrow();

        TodoItem todo = new TodoItem();
        todo.setTitle(request.title());
        todo.setDescription(request.description());
        todo.setPoints(request.points());
        todo.setAssignee(request.assignee());

        todo.setTodoList(list);
        list.addTodo(todo);

        TodoItem saved = todoItemRepository.save(todo);

        return TodoMapper.toDto(saved);

    }

    public TodoListDto getTodoList(Long listId) {
        TodoList list = todoListRepository.findById(listId).orElseThrow();

        return TodoMapper.toDto(list);
    }
}
