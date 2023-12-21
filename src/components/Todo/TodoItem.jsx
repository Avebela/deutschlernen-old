import React from "react";
import classes from "./Todopage.module.css";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice";

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onClick={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span
        className={classes.delete}
        onClick={() => dispatch(removeTodo({ id }))}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
