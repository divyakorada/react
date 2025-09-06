// src/features/users/UsersList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  selectFilteredUsers
} from './usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  if (userStatus === 'loading') return <p>Loading...</p>;
  if (userStatus === 'failed') return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
