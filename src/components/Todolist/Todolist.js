import React, { useState } from 'react'

const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
      if(input.trim() === '') return; // Prevent empty todos

      const newTodo = {
        id: Date.now(),
        text: input
      }
      setTodos([...todos, newTodo]); // Add new todo
      setInput('') // clear input

    }
    const handleDeleteTodo = (id) => {
      
      const updateTodos = todos.filter((todo) =>  todo.id !== id);
      setTodos(updateTodos);
    }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
        <h5>TodoList</h5>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a todo'/>
            <button onClick={handleAddTodo}>Add</button>
        </div>

        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
            {todos.map((todo) => (
                <li
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    borderRadius: '4px',
                  }}
                  key={todo.id}
                >{todo.text}
                <button onClick={(e) => handleDeleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Todolist
