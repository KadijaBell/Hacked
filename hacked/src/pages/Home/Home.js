import React from 'react'
import '../../pages/Home/Home.css'
// import NavBar from '../../components/NavBar'


const Home = () => {
  
  return (
    <div>
     {/* <NavBar /> */}

      <h2>Welcome to Hacking It</h2>
    
     <a className="button" href="http://localhost:3000/signup">Register </a>
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;

      <a className="button" href="http://localhost:3000/login">Login</a>
      

      
    </div>
  )
}

export default Home