import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {axios} from 'axios';
import styled from 'styled-components';


const PostEdits = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #e2e8d5;
padding: 3%;
margin: 0 2%;
width: 100%;
height: 100vh;
h1 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
}
input {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
}
button {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    background: #2b6cb0;
    color: #fff;
    cursor: pointer;
}
`
const PostEdit = ({setPost, posts}) => {
let { id } = useParams();
let navigate = useNavigate();
const HACKED_BACKEND_= `${process.env.HACKED_BACKEND_}`;

    const postState = {
       
        title: '',
        image_link: '',
        description: '',

    };

    const [post, setPosts] = useState(postState);

    useEffect(() => {
       fetch(`${HACKED_BACKEND_}/list/${id}/`)
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleChange = (event) => {
        setPosts({
            ...post,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${HACKED_BACKEND_}/list/${id}/`, post)
            .then((res) => {
                setPosts(postState);
                setPost(res.data);
                navigate(`/list/${id}`, { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    let deleteIt = (id) => {
        axios.delete(`${HACKED_BACKEND_}/delete/${id}/`)
        navigate('/list', {replace:true})
      
      }

    return (
        <PostEdits>

        <form onSubmit={handleSubmit}>  
            <h1> Edit Post </h1>
        
           
            <input type="text" name="title" value={posts.title} placeholder="title" onChange={handleChange} />
            <input type="link" name="image_link" value={posts.image_link}placeholder="image link "onChange={handleChange} />
            <input type="description" name="description" value={posts.description} placeholder="description" onChange={handleChange} />
           <button type= 'Submit' value='Edit'>Changed my mind again</button>
           <button className='destroy' onClick={deleteIt}>Delete</button>
        </form>
        </PostEdits> 
    )
}

export default PostEdit;