import TodoList from "@/components/TodoList.tsx";
import { Button } from "@/components/ui/button.tsx";
import { type FormEvent, useState } from "react";
import TodoDialog from "@/components/TodoDialog.tsx";
import type { Todo } from "@/types/Todo.ts";

interface TodoPageProps {
  setActiveTodo: () => void;
}

export default function TodoPage({ setActiveTodo }: TodoPageProps) {
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

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => {
    setDialogOpen(true);
    setActiveTodo();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("hi");
  };

  return (
    <>
      <Button
        className={
          "bg-gray-500 hover:bg-blue-400 hover:scale-105 " +
          "transition-transform ease-in-out w-1/3 place-self-end"
        }
        onClick={handleOpen}
      >
        New Todo
      </Button>
      <TodoList />

      {dialogOpen && (
        <TodoDialog
          handleClose={() => setDialogOpen(false)}
          handleSubmit={() => handleSubmit}
        />
      )}
    </>
  );
}
