import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react';
import {axios} from 'axios';


const PostEdit = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const postState = {
        user: '',
        image_upload: '',
        image_link: '',
        video_upload: '',
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
                navigate(`/posts/${id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
     <form onSubmit={handleSubmit}>  
        <p>{username}</p>

        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <input type="text" name="image_upload" value={formData.image_upload} onChange={handleChange} />
        <input type="text" name="image_link" value={formData.image_link} onChange={handleChange} />
        <input type="text" name="video_upload" value={formData.video_upload} onChange={handleChange} />
        <input type="text" name="video_link" value={formData.video_link} onChange={handleChange} />
        <input htmlFor="description" name="description" value={formData.description} onChange={handleChange} />
       <input type= 'Submit' value='Edit'/>
    </form>
    )
}

export default PostEdit;