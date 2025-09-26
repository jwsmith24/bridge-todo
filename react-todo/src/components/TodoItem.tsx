import type {Todo} from "../types/Todo.ts";

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
}
export default function TodoItem({todo, onToggle}: TodoItemProps) {
    return (
        <article className={"flex gap-4"}>
            <h2>{todo.title}</h2>

            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id!)}/>
                {todo.completed ? "Done" : "Not done"}
            </label>

        </article>
    );
}