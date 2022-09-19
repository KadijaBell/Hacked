import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import {useState} from 'react';


function LoginPage(props) {

    const [state, setState] = useState({
        email: "",
        password: "",
    });

   const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(state);
            props.handleSignUporLogin();
            navigate('/list');
        } catch (err) {
            console.log(err)
            alert("Invalid Credentials");
        }
       
    }

    

    return (  
        <div className="LoginPage" onSubmit={handleSubmit}>
            <header className="header-footer">Log In</header>
            <form className="form-horizontal" >
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="text" className="form-control" placeholder="Username" value={props.username} name="username" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="password" className="form-control" placeholder="Password" value={props.password} name="password" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                        
                        <Link to=''>Cancel</Link>
                    </div>
                </div>
            </form>
        </div>   
    );
}

export default LoginPage;