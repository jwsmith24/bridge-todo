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

    const [todos, setTodos] = useState<Todo[]>(mockTodos);

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
        prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    return (
        <div className={"border border-black p-4 grid gap-4 "}>
            {todos.map((item, index) => (
                <TodoItem todo={item} key={item.id ?? `${item.title}-${index}`} onToggle={toggleTodo}/>
            ))}
        </div>
    )
}