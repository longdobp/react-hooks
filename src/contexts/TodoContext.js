import React, { createContext, useEffect, useState } from "react";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodo = localStorage.getItem("todos");

    if (getTodo) setTodos(JSON.parse(getTodo));
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    if (todo) localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  };

  const delTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
    if (newTodo) localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  const todoContextData = {
    todos,
    addTodo,
    delTodo,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
