import TodoList from "../components/TodoList.tsx";
import {render, screen} from "@testing-library/react";
import {expect} from "vitest";
import userEvent from "@testing-library/user-event";

describe("TodoList", () => {
    it("renders all todos", () => {
        render(<TodoList/>);

        // count how many articles are rendered
        const todoItems = screen.getAllByRole("article");
        expect(todoItems).toHaveLength(2);
    });

    it("toggles todo completion when toggle button is clicked", async ()=> {
        const user = userEvent.setup();
        render(<TodoList/>);

        const checkboxes = await screen.findAllByRole("checkbox", {name: /not done/i});

        expect(checkboxes[0]).not.toBeChecked();
        await user.click(checkboxes[0]);

        expect(checkboxes[0]).toBeChecked();
    })
})