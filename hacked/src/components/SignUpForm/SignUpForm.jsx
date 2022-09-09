import React, {Component}from "react";
import {Link} from "react-router-dom";
import userService from "../../utils/userService";
import { useState } from "react";

function SignUpForm () {

    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        password_confrimation: "",
    },
    );

     handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    },

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(state);
            props.handleSignUpOrLogin();
            props.history.push("/");
        } catch (err) {
            alert("Signup Failed - Please try again");
        }
    }

    isFormValid = () => {
        state.email && state.password && state.password === state.password_confrimation;
    }
    

     

    return (
        <div>
            <header className="header-footer">Sign Up</header>
            <form className="form-horizontal" onSubmit={handleSubmit}>
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
                        <input type="password" className="form-control" placeholder="Confirm Password" value={state.password_confrimation} name="password_confrimation" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-default" disabled={!isFormValid()}>Sign Up</button>&nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>

                


    );
}
