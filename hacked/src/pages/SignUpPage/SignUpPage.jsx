import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './SignUpPage.css';
import {useState} from 'react';

function SignUpPage(props) {
    const [message, setMessage] = useState('');

    function updateMessage(msg) {
        setMessage(msg);
    }

    return (
        <div className="SignUpPage">
            <SignUpForm {...props} updateMessage={updateMessage}/>
            <p>{message}</p>

        </div>
    );
}   

export default SignUpPage;