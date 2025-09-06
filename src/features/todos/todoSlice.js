import { createSlice, nanoid } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'; // For memoized selectors

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.items.find((item) => item.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;

// --- Selectors ---

// Basic selector to get all todo items
const selectTodoItems = (state) => state.todos.items;

// Memoized selector to get active todos
export const selectActiveTodos = createSelector(
  [selectTodoItems],
  (items) => items.filter((todo) => !todo.completed)
);

// Memoized selector to get completed todos
export const selectCompletedTodos = createSelector(
  [selectTodoItems],
  (items) => items.filter((todo) => todo.completed)
);

// Memoized selector to get a specific todo by ID (example)
export const selectTodoById = createSelector(
  [selectTodoItems, (state, todoId) => todoId], // Pass todoId as an argument
  (items, todoId) => items.find(todo => todo.id === todoId)
);


export default todoSlice.reducer;