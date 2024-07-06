"use client";
import { useState } from "react";

export default function Todos() {
  const [todoText, setTodoText] = useState([]);
  const [textInput, setTextInput] = useState("");
  const handleTodo = () => {
    if (textInput) {
      setTodoText([textInput, ...todoText]);
      setTextInput("");
    } else {
      alert("Please type a into the text field");
    }
  };

  const deleteTodo = (e) => {
    const index = parseInt(e.target.parentNode.id);
    setTodoText(todoText.filter((item, i) => i !== index));

    // setTodoText(todoText.filter((item, i) => i !== index));
  };
  return (
    <>
      <div>
        <input
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
          type="text"
          className="mr-4 p-1 rounded"
        />
        <button
          onClick={handleTodo}
          className="bg-sky-400 p-1 rounded text-white"
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todoText.map((myTodos, index) => {
          return (
            <div
              key={index}
              id={index}
              className="flex items-center gap-2 mt-4"
            >
              <li className="text-lg bg-white min-w-96 max-w-96 rounded p-2">
                {myTodos}
              </li>
              <button
                onClick={deleteTodo}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
