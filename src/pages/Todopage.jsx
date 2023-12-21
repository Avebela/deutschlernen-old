import React from "react";
import { useState, useEffect } from "react";
import MyButton from "../components/Commen/UI/button/MyButton";
import MyInput from "../components/Commen/UI/input/MyInput";
import { typeAPI } from "../api/api";
import classes from "./Todopage.module.css";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const editText = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      })
    );
  };
  return (
    <div className={classes.todo}>
      <h1>Список дел</h1>
      <label>
        <MyInput name="todoName" type="text" value={text} onChange={editText} />

        <MyButton //disabled={}
          onClick={addTodo}
        >
          Добавить задание
        </MyButton>
      </label>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => toggleTodoComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <span
              className={classes.delete}
              onClick={() => removeTodo(todo.id)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Todo };
