import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // экспорт по умолчанию, поэтому называем как хотим

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
