package dev.jake.springtodo.todo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class TodoItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private Integer points;
    private String assignee;
    private Boolean completed = false; // default to not complete

    @ManyToOne
    @JoinColumn(name = "todo_list_id")
    private TodoList todoList;
}
