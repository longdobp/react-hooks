import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  const { delTodo } = useContext(TodoContext);

  return (
    <>
      <li onClick={delTodo.bind(this, todo.id)} style={style}>
        {todo.title}
      </li>
    </>
  );
};

export default TodoItem;
