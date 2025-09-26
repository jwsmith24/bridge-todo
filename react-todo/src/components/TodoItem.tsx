import type {Todo} from "../types/Todo.ts";

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
}
export default function TodoItem({todo, onToggle}: TodoItemProps) {
    return (
        <article className={"flex gap-4 justify-between"}>
            <h2>{todo.title}</h2>

            <label className={"flex gap-2"}>
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id!)}/>
                {todo.completed ? "Done" : "Not done"}
            </label>

        </article>
    );
}