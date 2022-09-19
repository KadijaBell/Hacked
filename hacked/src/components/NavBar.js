import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        
        <Link to='/'>Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/login'>Login</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/signup'>Signup</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/list'>Post</Link>

    </div>
  )
}

export default NavBar