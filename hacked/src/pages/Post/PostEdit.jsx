import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react';
import {axios} from 'axios';


const PostEdit = ({setPost}) => {
    let { id } = useParams();
    let navigate = useNavigate();

    const postState = {
        username: '',
        title: '',
        image_link: '',
        video_link: '',
        description: '',

    };

    const [formData, setFormData] = useState(postState);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}`)
            .then((res) => {
                setFormData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/posts/${id}`, formData)
            .then((res) => {
                setFormData(postState);
                setPost(res.data);
                navigate(`/posts/${id}`, { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
     <form onSubmit={handleSubmit}>  
        <h1> Edit Post {formData.username} </h1>

        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        <input type="link" name="image_link" value={formData.image_link} onChange={handleChange} />
        <input type="link" name="video_link" value={formData.video_link} onChange={handleChange} />
        <input htmlFor="description" name="description" value={formData.description} onChange={handleChange} />
       <button type= 'Submit' value='Edit'>Changed my mind again</button>
    </form>
    )
}

export default PostEdit;