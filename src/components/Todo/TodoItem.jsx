import React from "react";
import classes from "./Todopage.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../../store/todoSlice";

const TodoItem = ({ id, completed, title }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        //   onClick={() => dispatch(toggleTodoComplete({ id }))}
        onClick={() => dispatch(toggleStatus(id))}
        toggleStatus
      />
      <span>{title}</span>
      <span
        className={classes.delete}
        //    onClick={() => dispatch(removeTodo({ id }))}
        onClick={() => dispatch(deleteTodo(id))}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
