import {expect} from "vitest";
import {render, screen} from "@testing-library/react";
import type {Todo} from "../types/Todo.ts";
import TodoItem from "../components/TodoItem.tsx";

describe("TodoItem", () => {
    it("has a title and completed state", () => {
        const mockTodo: Todo = {
            id: 1,
            title:"Test me",
            completed: false
        }

        render(<TodoItem todoItem={mockTodo}/>)

        expect(screen.getByText("Test me")).toBeInTheDocument();
        expect(screen.getByText("NOT DONE")).toBeInTheDocument();

    })
})