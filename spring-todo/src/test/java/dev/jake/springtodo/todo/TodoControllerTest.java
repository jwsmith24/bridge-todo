package dev.jake.springtodo.todo;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.jake.springtodo.todo.models.dto.requests.AddTodoListRequest;
import dev.jake.springtodo.todo.models.dto.requests.AddTodoRequest;
import dev.jake.springtodo.todo.models.dto.responses.TodoItemDto;
import dev.jake.springtodo.todo.models.dto.responses.TodoListDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(TodoController.class)
class TodoControllerTest {


    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private TodoService todoService;

    private TodoListDto mockTodoList;

    @BeforeEach
    void setup() {
        mockTodoList = new TodoListDto(1L, "todos", List.of());
    }

    @Test
    void getAllTodoLists_ShouldReturnAllTodoLists() throws Exception {
        List<TodoListDto> mockTodoLists = List.of(
                new TodoListDto(1L, "work todos", List.of()),
                new TodoListDto(1L, "school todos", List.of()),
                new TodoListDto(1L, "home todos", List.of())
        );

        when(todoService.getAllLists()).thenReturn(mockTodoLists);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/lists"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(3));

        verify(todoService).getAllLists();
    }

    @Test
    void createTodoList_shouldAddNewList() throws Exception {
        AddTodoListRequest mockRequest = new AddTodoListRequest("todos");

        when(todoService.createTodoList(any(AddTodoListRequest.class)))
                .thenReturn(mockTodoList);

        mockMvc.perform(MockMvcRequestBuilders
                .post("/api/v1/lists")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(mockRequest))
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("todos"))
                .andExpect(jsonPath("$.id").value(1L))
                .andExpect(jsonPath("$.todos").isArray());

        verify(todoService).createTodoList(any(AddTodoListRequest.class));
    }

    @Test
    void createTodoItem_shouldAddNewItemToList() throws Exception {
        TodoItemDto mockTodoItem = new TodoItemDto(1L, "todo", "desc", "person", 30, false);
        AddTodoRequest mockRequest = new AddTodoRequest("todo", "desc", 30, "person");


        when(todoService.createTodoItem(any(AddTodoRequest.class), eq(1L)))
                .thenReturn(mockTodoItem);

        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/lists/1/todos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(mockRequest))
        ).andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1L))
                .andExpect(jsonPath("$.title").value("todo"))
                .andExpect(jsonPath("$.description").value("desc"))
                .andExpect(jsonPath("$.assignee").value("person"))
                .andExpect(jsonPath("$.points").value(30));

        verify(todoService).createTodoItem(any(AddTodoRequest.class), any(Long.class));

    }

    @Test
    void getAllTodos_ShouldReturnAllItemsInList() throws Exception {
        when(todoService.getTodoList(any(Long.class)))
                .thenReturn(mockTodoList);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/lists/1/todos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1L))
                .andExpect(jsonPath("$.todos").isArray())
                .andExpect(jsonPath("$.title").value("todos"));

        verify(todoService).getTodoList(any(Long.class));
    }

}