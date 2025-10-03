import { expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Todo } from "../types/Todo.ts";
import TodoItem from "../components/TodoItem.tsx";
import { userEvent } from "@testing-library/user-event";
import { Table, TableBody } from "@/components/ui/table.tsx";

describe("TodoItem", () => {
  const mockTodo: Todo = {
    id: 1,
    title: "Test me",
    description: "test todo item",
    completed: false,
    points: 99,
    assignee: "Steve",
  };

  const user = userEvent.setup();
  const onToggle = vi.fn();

  it("has a title", () => {
    render(
      <Table>
        <TableBody>
          <TodoItem todo={mockTodo} onToggle={onToggle} />
        </TableBody>
      </Table>,
    );

    expect(screen.getByRole("cell", { name: /test me/i })).toBeVisible();
  });
  it("should have a point value", () => {
    render(
      <Table>
        <TableBody>
          <TodoItem todo={mockTodo} onToggle={onToggle} />
        </TableBody>
      </Table>,
    );

    expect(screen.getByRole("cell", { name: /99/ })).toBeVisible();
  });
  it("should show an assignee", () => {
    render(
      <Table>
        <TableBody>
          <TodoItem todo={mockTodo} onToggle={onToggle} />
        </TableBody>
      </Table>,
    );
    expect(screen.getByRole("cell", { name: /steve/i })).toBeVisible();
  });

  it("should show - when there's not an assignee", () => {
    render(
      <Table>
        <TableBody>
          <TodoItem
            todo={{ ...mockTodo, assignee: undefined }}
            onToggle={onToggle}
          />
        </TableBody>
      </Table>,
    );
    expect(screen.getByRole("cell", { name: /-/ })).toBeVisible();
  });

  it("should call the toggle function when use clicks checkbox", async () => {
    render(
      <Table>
        <TableBody>
          <TodoItem
            todo={{ ...mockTodo, assignee: undefined }}
            onToggle={onToggle}
          />
        </TableBody>
      </Table>,
    );
    const checkbox = screen.getByRole("checkbox", { name: /not done/i });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    // verify mock fn was called with correct id (1)
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
