package dev.jake.springtodo.todo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TodoItem {
    private Long id;
    private String title;
    private Boolean completed;
}
