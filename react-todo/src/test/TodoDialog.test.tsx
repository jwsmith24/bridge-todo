import TodoDialog from "@/components/TodoDialog.tsx";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("Todo dialog", () => {
  const handleClose = vi.fn();
  const handleSubmit = vi.fn();

  it("displays 'add todo' header", () => {
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );

    expect(screen.getByRole("heading", { name: /add todo/i })).toBeVisible();
  });

  it("displays a close button", () => {
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );
    expect(screen.getByRole("button", { name: /x/i })).toBeVisible();
  });

  it("fires the handle close event when close button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );
    const closeButton = screen.getByRole("button", { name: /x/i });
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalled();
  });

  it("displays a title input", () => {
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );

    expect(screen.getByRole("textbox", { name: /title/i })).toBeVisible();
  });

  it("displays a description input", () => {
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );

    expect(screen.getByRole("textbox", { name: /description/i })).toBeVisible();
  });

  it("displays a points input", () => {
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );

    expect(screen.getByRole("spinbutton", { name: /points/i })).toBeVisible();
  });

  it("displays an assignee input", () => {
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );

    expect(screen.getByRole("textbox", { name: /assignee/i })).toBeVisible();
  });

  it("displays a submit button", () => {
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );

    expect(screen.getByRole("button", { name: /submit/i })).toBeVisible();
  });

  it('fires the "handleSubmit" event when submit is clicked', async () => {
    const user = userEvent.setup();
    render(
      <TodoDialog handleClose={handleClose} handleSubmit={handleSubmit} />,
    );

    const submitButton = screen.getByRole("button", { name: /submit/i });

    await user.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
