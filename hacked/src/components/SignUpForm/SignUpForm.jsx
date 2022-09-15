import React from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import { useState } from 'react';
import axios from 'axios';

function SignUpForm({props}) {
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
            [e.target.username]: e.target.value
        });
    }
    
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     try {
    //         userService.signup(state);
    //         props.handleSignUporLogin();
    //     } catch (err) {
    //         alert("Invalid Credentials");
    //     }
    //}
   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(state);
            props.handleSignUporLogin();
        } catch (err) {
            console.log(err)
            alert("Invalid Credentials");
        }
    }


    const isFormInvalid = () => {
        return !(state.username && state.email && state.password === state.password_confirmation);
    }

     

    return (
        <div className="SignUpForm">
            <header className="header-footer">Sign Up</header>
            <form className="form-horizontal" onSubmit={handleSubmit} >
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

                        <button className="btn btn-default" disabled={isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                    </div>
                </div>
            </form>
        </div>


    );
}

export default SignUpForm;
