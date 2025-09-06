import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { selectActiveTodos, selectCompletedTodos } from './todoSlice'; // Import selectors

function TodoList() {
  // Use the memoized selectors to get filtered lists
  const activeTodos = useSelector(selectActiveTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  return (
    <div>
      <h5>Active Todos</h5>
      <ul>
        {activeTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <h5>Completed Todos</h5>
      <ul>
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;