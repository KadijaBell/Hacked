import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import userService from '../../utils/userService';
import { useState } from 'react';
import './SignUpPage.css';


function SignUpPage(props) {
  
    
    
    
    //need a handlelogin/signup function(mastermind)
        const [state, setState] = useState({
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        );
    
    
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
                await userService.signup(state);
                props.handleSignUporLogin();
                navigate('/list')
            } catch (err) {
                console.log(err)
                alert("Invalid Credentials");
            }
        }
    
    
        
    
         
    
        return (
            <div className="SignUpForm" >
                <header className="header-footer">Sign Up</header>
                <form className="form-horizontal"  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Username" value={state.username} name="username" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={state.email} name="email" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={state.password} name="password" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Confirm Password" value={state.password_confirmation} name="password_confirmation" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
    
                            <button className="btn btn-default" >Sign Up</button>&nbsp;&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
    
    
        );
    }
    
  
    

export default SignUpPage;