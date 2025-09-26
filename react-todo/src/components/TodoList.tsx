import {useState} from "react";
import type {Todo} from "../types/Todo.ts";
import TodoItem from "./TodoItem.tsx";

export default function TodoList() {

    const mockTodos: Todo[] = [
        {
            id: 1,
            title: "first thing",
            completed: false
        },
        {
            id: 2,
            title: "second thing",
            completed: false
        }
    ]

    const [todos] = useState<Todo[]>(mockTodos);

    return (
        <div className={"border border-black p-4 "}>
            {todos.map((item, index) => (
                <TodoItem todoItem={item} key={`${item.title}-${index}`}/>
            ))}
        </div>
    )
}