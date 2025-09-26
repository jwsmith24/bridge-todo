import {expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import type {Todo} from "../types/Todo.ts";
import TodoItem from "../components/TodoItem.tsx";
import {userEvent} from "@testing-library/user-event";

describe("TodoItem", () => {
    it("has a title and completed state", async () => {
        const mockTodo: Todo = {
            id: 1,
            title:"Test me",
            completed: false
        }

        const user = userEvent.setup();
        const onToggle = vi.fn();

        render(<TodoItem todo={mockTodo} onToggle={onToggle}/>)

        expect(screen.getByRole("heading", {name: /test me/i })).toBeInTheDocument();

        const checkbox = screen.getByRole("checkbox", {name: /not done/i });
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        await user.click(checkbox);
        // verify mock fn was called with correct id (1)
        expect(onToggle).toHaveBeenCalledWith(1);

    })
})