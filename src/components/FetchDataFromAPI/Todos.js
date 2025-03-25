import React, { useEffect, useState } from 'react'
import axios from "axios"

export const Todos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((json) => {
          //  console.log('fetch', json)
            setTodos(json)
        })
        .catch(error => console.error('Error fetching todos', error));
    }, []) //Runs only for the first time
    return (
        <div className='main-Wrapper-Api'>
        <h2>UseEffect fetch method</h2>
        <ul className='list-group divScroll'>
            {todos?.map(todo => 
            <li className='list-group-item' key={todo.id}><strong>{todo.title}</strong>- {todo.completed ? "✅ Completed" : "❌ Not Completed"}</li>
            )}
        </ul>
        </div>
    )
}

 export const AxiosPackage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          //  console.log('axios', response.data)
            setTodos(response.data)
        })
        .catch(error => console.error('Error to load todos', error))
    }, [])

  return (
    <div className='main-Wrapper-Api'>
      <h2>useEffect Axios fetch</h2>
      <ul className='list-group divScroll'>
        {todos?.map(todo => 
        <li className='list-group-item' key={todo.id}><strong>{todo.title}</strong>- 
        {todo.completed ? "✅ Completed" : "❌ Not Completed"}</li>
        )}
      </ul>
    </div>
  )
}

export const CustomHookFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect (() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url])

return { data, loading, error };
}


export const UserList = () => {
  const { data, loading, error } = CustomHookFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='main-Wrapper-Api'>
      <h2>Custom hook fetch</h2>
    <ul className='list-group divScroll'>
      {data.map((user) => (
        <li key={user.id} className='list-group-item'>{user.name}</li>
      ))}
    </ul>
    </div>
  );
};

//export default Todos
