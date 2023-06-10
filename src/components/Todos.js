import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated && (
        <div className="todo-list">
          <TodoForm />
          <ul>
            {todos &&
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
          </ul>
        </div>
      )}
    </>
  );
};

export default Todos;
