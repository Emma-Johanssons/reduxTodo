import { createReduxModule } from "hooks-for-redux";

const initialStateTodos = {
  todoList: [],
};

export const [useTodo, { addTodo, deleteTodo, completedTodo }] =
  createReduxModule("todos", initialStateTodos, {
    addTodo: (state, todo) => {
      return {
        ...state,
        todoList: [...state.todoList, todo],
      };
    },
    deleteTodo: (state, id) => {
      const deletedTodos = state.todoList.filter((todo) => todo.id !== id);
      return {
        ...state,
        todoList: deletedTodos,
      };
    },
    completedTodo: (state, id) => {
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    },
  });
