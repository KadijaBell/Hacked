import React, { useState  } from 'react'
import { useNavigate, } from 'react-router-dom';
import {axios} from 'axios';



const PostCreate = () => {
  const HACKED_BACKEND_= `${process.env.HACKED_BACKEND_}`;
  const postState = {
  
    title: '',
    image_link: '',
    description: '',
  }


  const [formData, setFormData] = useState(postState);
  const navigate = useNavigate();

  let handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${HACKED_BACKEND_}list/`, formData)
    .then(res => {
      setFormData(postState);
      navigate('', {replace: true})
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
    <>
  
    <form >
      <h1>Create Post</h1>
      <div>
      
     
      </div>

      <div>
      <input type="text" name="title" placeholder="title" value={formData.title} onChange={handleChange} />
      </div>

      <div>
      <input type="link" name="image_link" placeholder="image link"value={formData.image_link} onChange={handleChange} />
      </div>

      <div>
      <input type="description" name="description" placeholder="description" value={formData.description} onChange={handleChange} />
      </div>
      <button type="submit" value="Create" onClick={handleSubmit}>Hack It!</button>
    </form>

    
    </>
  )
  }



export default PostCreate;

