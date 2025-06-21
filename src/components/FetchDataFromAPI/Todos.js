import React, { useEffect, useState } from 'react'
import axios from "axios"

export const Todos = () => {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          console.log(response);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const json = await response.json();

          setTodos(json);
          setLoading(false);
        } catch (err) {
          console.log("err", err);
          setError(err.message);
          setLoading(false);
        }
      };

        fetchData();
    }, []) //Runs only for the first time
    return (
        <div className='main-Wrapper-Api'>
        <h5>UseEffect fetch method</h5>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
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
      <h5>useEffect Axios fetch</h5>
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
      try {
        const response = await fetch(url);
        if(!response.ok) {
          console.log('errooodd', response)
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch(err) {
        setError('err', err.message)
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

 // if (loading) return <p>Loading...</p>;
 // if (error) return <p>Error: {error}</p>;

  return (
    <div className='main-Wrapper-Api'>
      <h5>Custom hook fetch</h5>
      {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    <ul className='list-group divScroll'>
      {data?.map((user) => (
        <li key={user.id} className='list-group-item'>{user.name}</li>
      ))}
    </ul>
    </div>
  );
};


export const TimerComponent = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [count, setCounter] = useState(0)

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  useEffect(() => {
    let timer;
    if(isRunning) {
      timer = setInterval(e => {
        setCounter(prev => prev + 1)
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isRunning])

  return(
    <>
    <p>{count}</p>
    <button onClick={handleStart}>Start Timer</button>
    <button onClick={handleStop}>Stop Timer</button>
    </>
  )
}

//export default Todos
