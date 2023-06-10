import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;
  const [title, setTitle] = useState("");
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    });
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} style={style}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo ..."
        value={title}
        onChange={changeTitle}
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
