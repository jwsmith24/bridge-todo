package dev.jake.springtodo.todo;

import dev.jake.springtodo.todo.models.TodoItem;
import dev.jake.springtodo.todo.models.TodoList;
import dev.jake.springtodo.todo.models.dto.requests.AddTodoRequest;
import dev.jake.springtodo.todo.models.dto.responses.TodoItemDto;
import dev.jake.springtodo.todo.models.dto.responses.TodoListDto;
import dev.jake.springtodo.todo.repos.TodoItemRepository;
import dev.jake.springtodo.todo.repos.TodoListRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class TodoServiceTest {

    @Mock
    TodoItemRepository todoItemRepository;

    @Mock
    TodoListRepository todoListRepository;

    @InjectMocks
    TodoService todoService;

    private TodoList mockTodoList;
    private List<TodoList> mockTodoCollection;
    private TodoItem mockTodoItem;

    @BeforeEach
    void setup() {
        mockTodoList = new TodoList(1L, "todos", List.of());

        mockTodoCollection = List.of(
                new TodoList(1L, "work todos", List.of()),
                new TodoList(1L, "school todos", List.of()),
                new TodoList(1L, "home todos", List.of())
        );

        mockTodoItem = new TodoItem(1L, "todo", "desc",
                30, "person", false, mockTodoList);
    }

    @Test
    void getTodoList_ShouldReturnTargetList() {
        when(todoListRepository.findById(any(Long.class)))
                .thenReturn(Optional.ofNullable(mockTodoList));

        TodoListDto listDto = todoService.getTodoList(1L);

        assertEquals("todos", listDto.title());
        assertEquals(1L, listDto.id());
        assertNotNull(listDto.todos());

        verify(todoListRepository).findById(any(Long.class));
    }

    @Test
    void getAllLists_ShouldReturnAllLists() {
        when(todoListRepository.findAll()).thenReturn(mockTodoCollection);

        List<TodoListDto> listCollection = todoService.getAllLists();

        assertEquals(3, listCollection.size());

        verify(todoListRepository).findAll();
    }

    @Test
    void createTodoItem_ShouldAddNewTodo() {
        AddTodoRequest mockRequest = new AddTodoRequest("todos", "desc", 30, "person");


        when(todoListRepository.findById(any(Long.class))).thenReturn(Optional.ofNullable(mockTodoList));
        when(todoItemRepository.save(any(TodoItem.class))).thenReturn(mockTodoItem);

        TodoItemDto item = todoService.createTodoItem(mockRequest, 1L);

        assertEquals("todos", item.title());

        verify(todoListRepository).findById(any(Long.class));
        verify(todoItemRepository).save(any(TodoItem.class));
    }

}