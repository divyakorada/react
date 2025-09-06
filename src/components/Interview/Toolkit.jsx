import React from 'react'
import UsersList from '../../features/users/UsersList';
import SearchBox from '../SearchBox';
import TodoInput from '../../features/todos/TodoInput';
import TodoList from '../../features/todos/TodoList';
import QueryExample from '../FetchDataFromAPI/tanstackQuery';

const Toolkit = () => {
  return (
    <div>
      <SearchBox />
      <UsersList />
      <h5>My Todo List</h5>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default Toolkit
