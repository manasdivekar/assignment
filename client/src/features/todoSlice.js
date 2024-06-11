import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from './todoAPI';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
};

export const getTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const todos = await fetchTodos();
  return todos;
});

export const createTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const newTodo = await addTodo(todo);
  return newTodo;
});

export const editTodo = createAsyncThunk('todos/updateTodo', async ({ id, todo }) => {
  const updatedTodo = await updateTodo(id, todo);
  return updatedTodo;
});

export const removeTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await deleteTodo(id);
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        console.log("now loading")
        state.status = 'loading';
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        console.log("now succeeded")

        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createTodo.pending, (state, action) => {
        console.log("now loading create todos")
        state.status = 'loading';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(todo => todo._id === action.payload._id);
        state.todos[index] = action.payload;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
