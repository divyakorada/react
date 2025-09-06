// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import todoReducer from '../features/todos/todoSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todoReducer,
  },
});

