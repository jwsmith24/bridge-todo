import type { Todo } from "../types/Todo.ts";
import { TableCell, TableRow } from "@/components/ui/table.tsx";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  removeTodo?: (id: number) => void;
}

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <TableRow className={"cursor-pointer text-white"}>
      <TableCell>{todo.title}</TableCell>

      <TableCell>{todo.points}</TableCell>

      <TableCell>{todo.assignee ?? "-"}</TableCell>

      <TableCell>
        <label className={"flex gap-2 grow"}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id!)}
          />
          {todo.completed ? "Done" : "Not done"}
        </label>
      </TableCell>
      <TableCell>
        <button className={" hover:bg-red-500 hover:opacity-100"}>
          Remove
        </button>
      </TableCell>
    </TableRow>
  );
}
