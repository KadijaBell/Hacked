import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';


import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import Home from '../Home/Home';
import userService from '../../utils/userService';
import PostCreate from '../Post/PostCreate';
import PostList from '../Post/PostList';
import PostEdit from '../Post/PostEdit';


function App() {

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

    useEffect(() => {
    fetch('http://localhost:8000/posts/')
    // .then(res => res.json())
    // .then(data => setPosts(data))
    .then(res => { 
      return res.json()
    })
    .then(res => {
      setPosts(res)
    })
    }, []) 

    const handleSignUporLogin = () => {
    
    setUser(userService.getUser())
  }

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  }

  return (
    <div className='App'>
      {/* user={user} setUser={setUser} handleLogout={handleLogout} */}
    <Router>
      
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Routes>
      

        
        <Route path='' element={<Home />} />
        <Route path='/login' element={<LoginPage handleSignUporLogin={handleSignUporLogin} />} />
        <Route path='/signup'  element={<SignUpPage handleSignUporLogin={handleSignUporLogin}/>} />
        
        <Route path='/post/create' element={<PostCreate />} />
        <Route path='/posts' element={<PostList posts={posts}/>} />
        <Route path='/post/edit/:id' element={<PostEdit/>} />
        
      
      </Routes>
    </Router>
    </div>
  );
}
  

export default App;
