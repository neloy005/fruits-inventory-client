import React from 'react';
import './Login.css';
import google from '../../images/google.png';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/');
    }
    return (
        <div className='login-container'>
            <h2>Login to 🍉Fruits🍋</h2>

            <form>
                <input type="text" name='email' placeholder='Enter e-mail' required /> <br />
                <input type="password" name='password' placeholder='Enter password' required /> <br />
                <input className='submit-btn' type="submit" />
            </form>
            <br />
            <p>Forgot password?</p>
            <p>New here? <span>Register first</span></p>
            <h4>Or</h4>
            <br />
            <div className='google-signin-container' onClick={() => signInWithGoogle()}>
                <img style={{ 'width': '20px' }} src={google} alt="" />
                <span>Sign in with google</span>
            </div>
        </div>
    );
};

export default Login;