import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';


function LoginPage() {


    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const navigate = useNavigate();

    const onLogInClicked = async () => {
        const response = await axios.post('/api/login', {
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        console.log(token);

        navigate('/');
    }


    return (
        <div className="content-container">
            <h1>Log In</h1>

            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com" />
            <input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <button
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}>Log In</button>
            <button onClick={() => navigate('/forgot-password')}>Forgot your password?</button>
            <button onClick={() => navigate('/signup')}>Don't have an account? Sign Up</button>
        </div>
    );
}

export default LoginPage
