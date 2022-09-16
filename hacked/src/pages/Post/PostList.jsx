import React, {useEffect, useState} from 'react';
import NavBar from '../../components/NavBar';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostContainer = styled.div`
  background-color: #eb0c0c;
  width: 50vw;

  img {

    width: 25px;
  }
    
    `
    

const PostList = ({posts}) => {
let navigate = useNavigate();
 const deletePost = (id) => {
    axios.delete(`http://localhost:8000/post/${id}`)
    .then(res => {
        console.log(res)
        navigate('/posts')
    })
    .catch(err => console.log(err))
}
let {id} = useParams();
const [post, setPost] = useState({})
useEffect(() => {
  fetch(`http://localhost:8000/posts/${id}`)
  .then(res => res.json())
  .then(data => setPost(data))
  .catch(err => console.log(err))
}, [id])

console.log(posts)
//ASK HOW TO RETURN USERNAME
    // const addPost = (post) => {
    //   setPosts([...posts, post]);
    // };
const postList = posts.map(post => (
  <div key={post.name}> 

  {
    post && (<>
    <h1>{post.username}</h1>
    <img src={post.image_link} alt='' />
    <img src={post.video_link} alt=''/>
    <img src={post.title} alt=''/>
    <p>{post.description}</p>
    <button id='edit'><Link>{`/post/edit/${post._id}`}</Link>Opps I change my mind</button>
    <button id='delete' onClick={() => deletePost(post._id)}> Destroy the cosmos</button>

    </>)
  }
  
         
        
  </div>
))


  return (
    <>

    <PostContainer>
    {postList}
  </PostContainer>
  </>
  )
}

export default PostList