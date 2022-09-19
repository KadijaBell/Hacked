import React, {useEffect, useState} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PostCreate from './PostCreate';
import styled from 'styled-components';
import axios from 'axios';
import PostEdit from './PostEdit';


const PostContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

  div {
    
    background: #e2e8d5;
    display: flex;
    flex-direction: column;
    padding: 3%;
    margin: 0 2%;
 
    }

    img {
      width: 100%;
      height: 210px;
    }

    button{
      color: black;    }
`

  const PostCard =styled.div`
   
    min-width: 100vw;
    display:  flex;
    flex-wrap: wrap;
    gap: 10px;
  `

const PostList = ({posts}) => {




const postList = posts.map(post => (
  <div className='container' key={post?.name} > 

  {
    post && (<>
    <h1>{post?.username}</h1>
    <img src={post?.image_link} alt='' />
    <p>{post?.title}</p>
    <p>{post?.description}</p>

    </>)
  }
  
         
        
  </div>
))


  return (
    <div className='main'>
      <PostCreate />

        <PostCard>
      <PostContainer>
          {postList}
      </PostContainer>
        </PostCard>

        <PostEdit/>
        

    </div>

  
  

  
  )
}

export default PostList