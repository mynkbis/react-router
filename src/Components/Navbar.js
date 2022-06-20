import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
      <nav className='navBar'>
      <NavLink to='/home'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/about'>About</NavLink>

   </nav>
  )
}

export default Navbar