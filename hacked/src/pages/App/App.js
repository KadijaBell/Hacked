import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
  

import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import Home from '../Home/Home';
import userService from '../../utils/userService';
import PostCreate from '../Post/PostCreate';
import PostList from '../Post/PostList';
import PostEdit from '../Post/PostEdit';
import Layout from '../../components/Layout';


function App() {
 const HACKED_BACKEND_= `${process.env.HACKED_BACKEND_}`;

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

    useEffect(() => {
    fetch(HACKED_BACKEND_)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err))
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

  return (
   <Layout>
      <Routes>        
        <Route path='' element={<Home />} />
        <Route path='/login' element={<LoginPage handleSignUporLogin={handleSignUporLogin} />} />
        <Route path='/signup'  element={<SignUpPage handleSignUporLogin={handleSignUporLogin}/>} />
        <Route path='/create' element={<PostCreate />} />
        <Route path='/list' element={<PostList posts={posts} />} />
      <Route path='/post/edit/:id' element={<PostEdit setPosts={setPosts} posts={posts} />} />
         
      </Routes>
   </Layout>
  );
}
  

export default App;
