import React from "react";
import { useState, useEffect } from "react";
import MyButton from "../components/Commen/UI/button/MyButton";
import MyInput from "../components/Commen/UI/input/MyInput";
import { typeAPI } from "../api/api";
import classes from "./Todopage.module.css";
import TodoList from "../components/Todo/TodoList";
import InputField from "../components/Commen/UI/InputField";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "../store/todoSlice";

const Todo = () => {
  //const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
    }
    setText("");
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  //const addTodo = () => {
  //   if (text.trim().length) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: new Date().toISOString(),
  //         text,
  //         completed: false,
  //       },
  //     ]);
  //     setText("");
  //   }
  //};
  //const removeTodo = (todoId) => {
  //  setTodos(todos.filter((todo) => todo.id !== todoId));
  //};
  //const toggleTodoComplete = (todoId) => {
  // setTodos(
  //   todos.map((todo) => {
  //     if (todo.id !== todoId) {
  //       return todo;
  //     }
  //     return { ...todo, completed: !todo.completed };
  //   })
  // );
  //};
  return (
    <div className={classes.todo}>
      <h1>Список дел</h1>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2> An error has occurred</h2>}

      <TodoList />
    </div>
  );
};

export { Todo };
