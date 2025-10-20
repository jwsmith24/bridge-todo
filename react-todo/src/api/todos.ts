import axios from "axios";
import type { Todo } from "@/types/Todo.ts";

const BASE_URL = "http://localhost:8080/api/v1/lists";

export const getTodos = async (listId: number) => {
  const response = await axios.get(`${BASE_URL}/${listId}/todos`);

  console.log("got todos: ", response.data);
  return response.data;
};

export const addTodo = async (todo: Todo, listId: number) => {
  const response = await axios.post(BASE_URL + `/${listId}/todos`, todo);

  return response.data;
};
