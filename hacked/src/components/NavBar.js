import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <Link to='/'>Home</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/login'>Login</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/signup'>Signup</Link>

    </div>
  )
}

export default Header