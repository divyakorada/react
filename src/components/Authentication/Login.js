import { useState } from "react";
import {useNavigate, useLocation} from "react-router-dom"
import { useAuth } from "./auth"

export const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  console.log('location', location)
  const redirectPath = location.state?.path || '/'
 // console.log('redirectPath', location.state?.path)


  const handleLogin = () => {
    console.log('hi')
      auth.login(user)
      navigate(redirectPath, {replace: true})
  }

  return (
    <div className="nav-container">
      <label>
        Username:{' '}
        <input type="text" className="loginBox" onChange={(e) => setUser(e.target.value)}/>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}