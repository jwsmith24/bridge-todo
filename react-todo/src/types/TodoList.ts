import type { Todo } from "@/types/Todo.ts";

export type TodoList = {
  id: number;
  title: string;
  todos: Todo[];
};
