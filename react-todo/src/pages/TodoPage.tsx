import TodoList from "@/components/TodoList.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import TodoDialog from "@/components/TodoDialog.tsx";
import { useTodos } from "@/hooks/useTodos.ts";

interface TodoPageProps {
  setActiveTodo: () => void;
}

export default function TodoPage({ setActiveTodo }: TodoPageProps) {
  const DEFAULT_LIST_ID = 1;
  const { data: todoList, loading, error, refetch } = useTodos(DEFAULT_LIST_ID);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => {
    setDialogOpen(true);
    setActiveTodo();
  };

  if (loading) return <div>loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (!todoList) return null;

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
      <TodoList todoList={todoList} />

      {dialogOpen && (
        <TodoDialog
          refetch={refetch}
          handleClose={() => {
            setDialogOpen(false);
          }}
        />
      )}
    </>
  );
}
