import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      if (!response.ok) {
        throw new Error("Server error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Cant delete task. Server error");
      }

      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleStatus = createAsyncThunk(
  "todos/toggleStatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.todos.find((todo) => todo.id === id);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: !todo.completed }),
        }
      );
      if (!response.ok) {
        throw new Error("Cant toggle status. Server error");
      }
      // const data = await response.json()
      // console.log(data)

      dispatch(toggleTodoComplete({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",

  async function (text, { rejectWithValue, dispatch, getState }) {
    try {
      const todo = {
        title: text,
        completed: false,
        userId: 1,
      };
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        }
      );
      if (!response.ok) {
        throw new Error("Cant add task. Server error");
      }
      const data = await response.json();
      console.log(data);
      dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const SetError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(
        action.payload

        //  {id: new Date().toISOString(),
        // text: action.payload.text,
        // completed: false,}
      );
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchCards.pending, (state) => {
  //     state.status = "loading";
  //   });

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(addNewTodo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(deleteTodo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(toggleStatus.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.status = "resolved";
      state.error = null;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.status = "resolved";
      state.error = null;
    });
    builder.addCase(toggleStatus.fulfilled, (state, action) => {
      state.status = "resolved";
      state.error = null;
    });
    builder.addCase(fetchTodos.rejected, SetError);
    builder.addCase(addNewTodo.rejected, SetError);
    builder.addCase(deleteTodo.rejected, SetError);
    builder.addCase(toggleStatus.rejected, SetError);
  },
});

const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
//export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
