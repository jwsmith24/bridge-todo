import TodoPage from "@/pages/TodoPage.tsx";
import toDoLogo from "@/assets/todo_icon.png";
import { useState } from "react";

export default function App() {
  const todoOptions = [
    "fix bug by adding another bug",
    "ponder yarn's performance",
    "add comments",
    "think about sharks",
    "console.log everything",
    "commit directly to main",
  ];

  const getRandomIndex = () => {
    return Math.floor(Math.random() * todoOptions.length);
  };

  const handleAddTodoClick = () => {
    setActiveTodo(todoOptions[getRandomIndex()]);
  };

  const [activeTodo, setActiveTodo] = useState(todoOptions[getRandomIndex()]);
  return (
    <>
      <div className={"flex flex-col h-screen items-center bg-primary"}>
        <header>
          <div
            className={
              "flex gap-4 mt-4 w-[90vw] p-4 bg-blue-400 rounded-xl shadow-xl cursor-pointer"
            }
          >
            <img
              src={toDoLogo}
              alt="app logo"
              className={"h-16 w-16ß rounded-xl shadow"}
            />
            <h1 className={"font-semibold"}>// Todo: {activeTodo}</h1>
          </div>
        </header>
        <main className={"grow content-center grid gap-4 "}>
          <TodoPage setActiveTodo={handleAddTodoClick} />
        </main>
        <footer className={"text-sm"}>CH10 Bridge | 2025</footer>
      </div>
    </>
  );
}
