import type {Todo} from "../types/Todo.ts";

type TodoItemProps = {
    todoItem: Todo;
}
export default function TodoItem({todoItem}: TodoItemProps) {
    return (
        <article className={"flex gap-4"}>
            <p>{todoItem.title}</p>
            <p>{todoItem.completed ? "DONE" : "NOT DONE"}</p>
        </article>
    );
}