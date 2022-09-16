import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





const PostCreate = ({addPost}) => {
  const postState = {
    username: '',
    title: '',
    image_link: '',
    video_link: '',
    description: '',
  }
  const [formData, setFormData] = useState(postState);
  const navigate = useNavigate();

  let handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/posts', formData)
    .then(res => {
      setFormData(postState);
      addPost(res.data);
      navigate('/posts', {replace: true})
    })
    .catch(err => console.log(err))
  }

  let handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
      <input type="link" name="image_link" value={formData.image_link} onChange={handleChange} />
      <input type="link" name="video_link" value={formData.video_link} onChange={handleChange} />
      <input htmlFor="description" name="description" value={formData.description} onChange={handleChange} />
      <button type="submit" value="Create">Hack It!</button>
    </form>
  )
  }



export default PostCreate;

