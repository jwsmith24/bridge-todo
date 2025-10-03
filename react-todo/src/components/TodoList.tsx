import TodoItem from "./TodoItem.tsx";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import type { Todo } from "@/types/Todo.ts";
import type { Dispatch, SetStateAction } from "react";

interface TodoListProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}
//todo: wire up add todo and test
export default function TodoList({ todos, addTodo, setTodos }: TodoListProps) {
  const totalPoints = todos.reduce((sum, item) => sum + item.points, 0);
  const completedPoints = todos
    .filter((item) => item.completed)
    .reduce((sum, item) => sum + item.points, 0);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev
        .map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        )
        .sort((a, b) => Number(a.completed) - Number(b.completed)),
    );
  };

  return (
    <div
      className={"bg-gray-500 p-5 rounded-2xl shadow-xl w-[60vw] flex flex-col"}
    >
      <section
        aria-label={"points summary"}
        className={
          "bg-blue-400 text-white rounded-xl flex justify-end px-2 py-1 place-self-end"
        }
      >
        Completed {completedPoints} / {totalPoints} points
      </section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={"text-white"}>Task</TableHead>
            <TableHead className={"text-white"}>Points</TableHead>
            <TableHead className={"text-white"}>Assigned to</TableHead>
            <TableHead className={"text-white"}>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((item, index) => (
            <TodoItem
              todo={item}
              onToggle={toggleTodo}
              key={`${item?.id ?? index}`}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
