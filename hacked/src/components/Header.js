import React from 'react'

const Header = () => {
  return (
    <div className="app">
    <div className="app__header">
      <div className="app__headerWrapper">
        <img
          src="/public/lifehacklogo.png"
           alt="Hacked logo"/>
        <button className="text_button">Logout</button>
        <div className="app_headerButtons">
          <button className="primary_button">Log in</button>
          <button className="text_button">Sign up</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header