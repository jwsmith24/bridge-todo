import { useCallback, useEffect, useState } from "react";
import { getTodos } from "@/api/todos.ts";
import type { TodoList } from "@/types/TodoList.ts";

export function useTodos(listId: number) {
  const [data, setData] = useState<TodoList>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true);
      const todos = await getTodos(listId);
      setData(todos);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [listId]);

  useEffect(() => {
    if (!listId) return;

    void fetchTodos();
  }, [fetchTodos, listId]);

  return { data, loading, error, refetch: fetchTodos };
}
