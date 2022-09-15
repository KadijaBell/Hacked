import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





const PostCreate = ({addPost}) => {
// this function will allow us to create a post and view timeline
//need a axios post request to create a post
 

const Navigate = useNavigate();

const postState = {
  user: '',
  image_upload: '',
  image_link: '',
  video_upload: '',
  video_link: '',
  description: '',
};

const [formData, setFormData] = useState(postState);


const handleChange = (event) => {
  setFormData({...formData, [event.target.name]: event.target.value});
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData)
  axios.post('http://localhost:8000/posts/', formData)
  .then((res) => {
    setFormData(postState);
    addPost(res.data);
    console.log(res.data)
    Navigate('/posts', { replace: true })
  })
  }




return (
<form onSubmit={handleSubmit}>
  <h1> Create a Post </h1>


  <label>Username</label>
  <h2>{formData.user}</h2>
  {/* <input type="text" name="user" onChange={handleChange} /> */}
  <div className='createForm'>

  <label>Media  Upload</label>
  <select className='selectlist'>
    <option value="image_uploads">Image</option>
    <option value="video_uploads">Video</option>
    <option value="image_link">Image Link</option>
    <option value="video_link">Video Link</option>
  </select>
  {/* <label>Image Upload</label>
  <input type="text" name="image_upload"  onChange={handleChange} />
  <label>Image Link</label>
  <input type="text" name="image_link"  onChange={handleChange} />
  <label>Video Upload</label>
  <input type="text" name="video_upload"  onChange={handleChange} />
  <label>Video Link</label>
  <input type="text" name="video_link"  onChange={handleChange} /> */}
  <label>Description</label>
  <input htmlFor="description" name="description"  onChange={handleChange} />

  <input type= 'Submit' value='Create'/>

  </div>
</form>
  )
}




export default PostCreate

