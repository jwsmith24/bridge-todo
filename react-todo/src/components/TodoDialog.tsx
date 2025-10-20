import ReactDOM from "react-dom";
import { type FormEvent, useState } from "react";
import type { Todo } from "@/types/Todo.ts";
import { addTodo } from "@/api/todos.ts";

interface TodoDialogProps {
  handleClose: () => void;
  refetch: () => Promise<void>;
}

export default function TodoDialog({ handleClose, refetch }: TodoDialogProps) {
  const defaults: Todo = {
    title: "",
    description: "",
    points: 0,
    assignee: "",
    completed: false,
  };

  const [formData, setFormData] = useState<Todo>(defaults);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("submitting!", formData);
    await addTodo(formData, 1);
    await refetch();
    handleClose();
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
      role="dialog"
      aria-label="add todo dialog"
    >
      <div className="border border-black bg-gray-600 text-white w-1/2  shadow-xl rounded-xl p-4">
        <div className={"flex items-center justify-between"}>
          <h2 className="text-lg font-bold mb-2">Add Todo</h2>
          <button
            onClick={handleClose}
            className="mt-2 px-1 py-1 rounded bg-red-500 hover:bg-red-600 !hover:border-red-500"
          >
            X
          </button>
        </div>
        <form
          className={"grid gap-4"}
          onSubmit={(event) => handleSubmit(event)}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <label htmlFor="points">Points</label>
          <input
            type="number"
            name="points"
            id="points"
            min={0}
            value={formData.points}
            onChange={(e) =>
              setFormData({ ...formData, points: Number(e.target.value) })
            }
          />

          <label htmlFor="assignee">Assignee</label>
          <input
            type="text"
            name="assignee"
            id="assignee"
            value={formData.assignee}
            onChange={(e) =>
              setFormData({ ...formData, assignee: e.target.value })
            }
          />

          <button className={"bg-blue-400 place-self-end"} type={"submit"}>
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}
