import TodoItem from "./TodoItem.tsx";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";

import type { TodoList } from "@/types/TodoList.ts";

interface TodoListProps {
  todoList: TodoList;
}

export default function TodoList({ todoList }: TodoListProps) {
  console.log("todolist from backend: ", todoList);
  const totalPoints = todoList.todos.reduce(
    (sum, item) => sum + item.points,
    0,
  );
  const completedPoints = todoList.todos
    .filter((item) => item.completed)
    .reduce((sum, item) => sum + item.points, 0);

  const toggleTodo = (id: number) => {
    console.log(
      "eventually will call backend to toggle complete on todo with id: ",
      id,
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
            <TableHead className={"text-white font-bold"}>Task</TableHead>
            <TableHead className={"text-white font-bold"}>Points</TableHead>
            <TableHead className={"text-white font-bold"}>
              Assigned to
            </TableHead>
            <TableHead className={"text-white font-bold"}>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoList.todos.map((item, index) => (
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
