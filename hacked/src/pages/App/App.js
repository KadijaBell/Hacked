import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';


import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import Home from '../Home/Home';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import PostCreate from '../Post/PostCreate';
import PostList from '../Post/PostList';

function App() {

  const [posts, setPosts] = useState([]);
  const [state, setState] = useState([]);

    useEffect(() => {
    console.log('useEffect Ran!')
    fetch('http://localhost:8000/posts/')
    .then(res => {
      
      return res.json()
    })
    .then(res => {
      setPosts(res)
      console.log(res)
    })
    }, []) 

  const handleSignUporLogin = () => {
    setState({user: userService.getUser()})
  }


  return (
    <div className='App'>
    <Router>
      
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/login' element={<LoginPage handleSignUporLogin={handleSignUporLogin} />} />
        <Route path='/signup'  element={<SignUpPage handleSignUporLogin={handleSignUporLogin}/>} />
        
        <Route path='/home' element={<Home />} />
        <Route path='/post' element={<PostCreate />} />
        <Route path='/posts' element={<PostList posts={posts}/>} />
      </Routes>
    </Router>
    </div>
  );
}
  

export default App;
