import {useNavigate} from "react-router-dom"
import { useAuth } from "./auth"


export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()  
  
// const handleLogout = () => {
//   auth.logout()
//   navigate('/')
//  }


const handleLogout = async () => {
  await auth.logout();
  navigate('/');
}

//  // Redirect to Home when user logs out
//  useEffect(() => {
//   if (!auth.user) {
//     navigate("/");
//   }
// }, [auth.user, navigate]);

  return (
        <div className="nav-container">Welcome <h3>{auth.user}</h3>
        <button onClick = {handleLogout}>Logout</button>
        </div>
  )
}