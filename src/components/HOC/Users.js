import React from 'react'
import { HigherOrder } from './Hoc'

function Users({ x }) {
  console.log('hello', x)
  return (
    <div>
        <h5>Hello from Users</h5>
        {x?.slice(0, 10).map((user) => {
          return <p>{user.name}</p>
        })}
    </div>
  )
}

const UserComp = HigherOrder("Users", Users, "users")

export default UserComp
