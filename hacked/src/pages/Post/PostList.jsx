import React, {useEffect, useState} from 'react'


const PostList = ({posts}) => {
    
console.log(posts)

    // const addPost = (post) => {
    //   setPosts([...posts, post]);
    // };
const postList = posts.map(post => (
  <div key={post.user}> 
  <h1>{post.user}</h1>
          <p>{post.user}</p>
          <img src= {post.image_link}></img>
          <p>{post.video_uploads}</p>
          <p>{post.video_link}</p>
          <p>{post.description}</p>
  </div>
))


  return (
  <div className='main'>
    {postList}
  </div>
  )
}

export default PostList