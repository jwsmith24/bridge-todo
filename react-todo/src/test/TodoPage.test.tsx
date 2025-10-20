import { render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import TodoPage from "@/pages/TodoPage.tsx";
import { userEvent } from "@testing-library/user-event";

const setActiveTodo = vi.fn();

describe("Todo page", () => {
  it("should show a button to add todo", () => {
    render(<TodoPage setActiveTodo={setActiveTodo} />);
    expect(screen.getByRole("button", { name: /new todo/i })).toBeVisible();
  });

  it("should display an 'add todo' modal when user clicks add button", async () => {
    const user = userEvent.setup();
    render(<TodoPage setActiveTodo={setActiveTodo} />);

    const newButton = screen.getByRole("button", { name: /new todo/i });
    await user.click(newButton);

    expect(
      screen.getByRole("dialog", { name: "add todo dialog" }),
    ).toBeVisible();
  });

  it("should close modal when close button is clicked", async () => {
    const user = userEvent.setup();
    render(<TodoPage setActiveTodo={setActiveTodo} />);

    const addTodoButton = screen.getByRole("button", { name: /new todo/i });
    await user.click(addTodoButton);

    const closeButton = await screen.findByRole("button", { name: /X/i });
    await user.click(closeButton);

    expect(
      screen.queryByRole("dialog", { name: "add todo dialog" }),
    ).toBeNull();
  });

  it("should call handleClose when close button is clicked", async () => {
    const mockHandleClose = vi.fn();
    const user = userEvent.setup();

    render(<TodoPage setActiveTodo={mockHandleClose} />);

    await user.click(screen.getByRole("button", { name: /new todo/i }));

    await user.click(screen.getByRole("button", { name: /X/i }));
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
