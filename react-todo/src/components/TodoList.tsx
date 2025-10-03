import { useState } from "react";
import type { Todo } from "../types/Todo.ts";
import TodoItem from "./TodoItem.tsx";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";

export default function TodoList() {
  const mockTodos: Todo[] = [
    {
      id: 1,
      title: "first thing",
      description: "",
      completed: false,
      points: 10,
      assignee: "Wyson",
    },
    {
      id: 2,
      title: "second thing",
      description: "",
      completed: false,
      points: 20,
      assignee: "Tyler",
    },
    {
      id: 3,
      title: "third thing",
      description: "",
      completed: true,
      points: 30,
      assignee: "Jake",
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(mockTodos);

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
    <div className={"bg-gray-500 p-4 rounded-2xl shadow-xl"}>
      <section
        aria-label={"points summary"}
        className={
          "bg-blue-400 text-white rounded-xl flex justify-end px-2 py-1"
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
