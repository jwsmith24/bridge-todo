import TodoList from "../components/TodoList.tsx";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("TodoList", () => {
  it("renders all todos", () => {
    render(<TodoList />);

    // count how many list items are rendered (plus header row)
    const todoItems = screen.getAllByRole("row");
    expect(todoItems).toHaveLength(4);
  });

  it("toggles todo completion when toggle button is clicked", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    expect(
      screen.getByRole("region", { name: /points summary/i }),
    ).toBeVisible();

    const checkboxes = screen.getAllByRole("checkbox", { name: /not done/i });
    expect(checkboxes[0]).not.toBeChecked();
    await user.click(checkboxes[0]);

    expect(checkboxes[0]).toBeChecked();
  });

  it("sorts a completed item below incomplete items", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const rowsBefore = screen.getAllByRole("row").slice(1);

    expect(rowsBefore.map((row) => row.textContent)).toEqual([
      expect.stringContaining("first thing"),
      expect.stringContaining("second thing"),
      expect.stringContaining("third thing"),
    ]);

    // mark first item as completed
    const checkboxes = screen.getAllByRole("checkbox");
    await user.click(checkboxes[0]);

    const rowsAfter = screen.getAllByRole("row").slice(1);

    expect(rowsAfter.map((row) => row.textContent)).toEqual([
      expect.stringContaining("second thing"),
      expect.stringContaining("first thing"),
      expect.stringContaining("third thing"),
    ]);
  });
});
