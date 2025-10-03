import type { Todo } from "../types/Todo.ts";
import { TableCell, TableRow } from "@/components/ui/table.tsx";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <TableRow className={"cursor-pointer"}>
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
    </TableRow>
  );
}
