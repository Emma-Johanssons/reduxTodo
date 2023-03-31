import { useState } from "react";
import { useTodo, addTodo, deleteTodo, completedTodo } from "./redux/todos";

function App() {
  const [text, setText] = useState("");
  const { todoList } = useTodo();

  function handleChange(e) {
    setText(e.target.value);
  }
  const todo = {
    title: text,
    id: Date.now(),
    completed: false,
  };
  function handleAdd() {
    addTodo(todo);
  }

  function handleDelete(id) {
    return deleteTodo(id);
  }

  return (
    <div className=" h-screen bg-amber-300">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col w-3/2 h-2/3 p-8 bg-gradient-to-r from-orange-400 via-amber-600 to-orange-400 rounded-xl opacity-75 border-8 border-double  border-amber-300 overflow-y-scroll scrollbar-thin scrollbar-thumb-amber-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <h4 className="text-center font-bold text-2xl text-amber-300 p-6">
            To Do List
          </h4>
          <div className="mt-4 mb-4 flex items-center justify-center gap-3">
            <input
              className="p-2 pl-4 rounded-xl text-amber-600 font-bold"
              type="text"
              placeholder="Add todo..."
              onChange={handleChange}
            />
            <button
              className="pr-4 pl-4 pt-2 pb-2 border-2 border-double border-amber-200 rounded-xl bg-amber-300 text-white hover:bg-amber-400 font-bold"
              onClick={() => {
                handleAdd();
              }}
            >
              Add
            </button>
          </div>
          {todoList.map((todo) => {
            return (
              <div>
                <div className="mt-4 border-y-2 border-amber-300">
                  <li
                    className={`flex float-left font-bold text-amber-700 mt-4 text-2xl 
                  ${todo.completed === true ? "line-through" : ""}`}
                    key={todo.id}
                  >
                    {todo.title}
                  </li>
                </div>
                <div className="flex gap-3 float-right mt-4">
                  <button
                    className=" pr-4 pl-4 pt-2 pb-2 border-2 border-double border-amber-200 rounded-xl bg-amber-300 text-amber-600 hover:bg-amber-700 font-bold"
                    onClick={() => completedTodo(todo.id)}
                  >
                    {`${todo.completed ? "Undo" : "Done"}`}
                  </button>
                  <button
                    className="pr-4 pl-4 pt-2 pb-2 border-2 border-double border-amber-200 rounded-xl bg-amber-300 text-amber-600 hover:bg-amber-700 font-bold"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
