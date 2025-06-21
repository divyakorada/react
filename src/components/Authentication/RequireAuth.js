import {Navigate, useLocation} from 'react-router-dom'
import { useAuth } from './auth'

 const RequireAuth = ({ children }) => {
    const auth = useAuth()
    const location = useLocation()
    console.log('auth', auth);
    if(!auth.user) {
       
        console.log('localtion::', location);
        return <Navigate to='/login' state={{path: location.pathname}}/>
    }

  return children
}

export default RequireAuth
