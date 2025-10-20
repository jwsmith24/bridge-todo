import TodoList from "../components/TodoList.tsx";
import { render, screen, waitFor } from "@testing-library/react";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";
import type { Todo } from "@/types/Todo.ts";

const mockTodos: Todo[] = [
  {
    id: 101,
    title: "first thing",
    description: "",
    completed: false,
    points: 10,
    assignee: "Wyson",
  },
  {
    id: 102,
    title: "second thing",
    description: "",
    completed: false,
    points: 20,
    assignee: "Tyler",
  },
  {
    id: 103,
    title: "third thing",
    description: "",
    completed: false,
    points: 30,
    assignee: "Jake",
  },
];

describe("TodoList", () => {
  it("renders all todos", () => {
    render(
      <TodoList todoList={mockTodos} setTodos={vi.fn()} removeTodo={vi.fn()} />,
    );

    // count how many list items are rendered (plus header row)
    const todoItems = screen.getAllByRole("row");
    expect(todoItems).toHaveLength(4);
  });

  it("toggles todo completion when toggle button is clicked", async () => {
    const user = userEvent.setup();
    const setTodos = vi.fn();
    render(
      <TodoList
        todoList={mockTodos}
        setTodos={setTodos}
        removeTodo={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("region", { name: /points summary/i }),
    ).toBeVisible();

    const checkboxes = screen.getAllByRole("checkbox", { name: /not done/i });
    expect(checkboxes[0]).not.toBeChecked();

    await waitFor(() => user.click(checkboxes[0]));

    expect(setTodos).toHaveBeenCalled();
  });
});
