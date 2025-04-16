import {NavLink } from 'react-router-dom';
import { useAuth } from './auth';

export const Navbar = () => {
     const auth = useAuth()

    const navLinkStlyes = ({isActive}) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'none' : 'underline'
        }
      }

  return (
    <nav>
          <NavLink style={navLinkStlyes} to="/">Home</NavLink> 
          <NavLink style={navLinkStlyes} to="/about">About</NavLink>
          <NavLink style={navLinkStlyes} to="/products">Products </NavLink>
          <NavLink style={navLinkStlyes} to="/interview">Interview </NavLink>
          <NavLink style={navLinkStlyes} to="/profile">Profile </NavLink>
          {!auth.user && (<NavLink style={navLinkStlyes} to = "/login">Login</NavLink>)}
        </nav>
  )
}

export default Navbar
