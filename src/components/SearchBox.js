// src/components/SearchBox.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/users/usersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search users by name..."
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  );
};

export default SearchBox;
