import React, { useRef } from 'react';
import './Login.css';
import google from '../../images/google.png';

import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Login = () => {
    const emailRef = useRef('');

    let errorMessage;

    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
    ] = useSendPasswordResetEmail(auth);

    if (user || user1) {
        navigate('/');
    }

    if (error || error1) {
        errorMessage = <p style={{ 'color': 'red' }}>Error: {error?.message}{error1?.message}</p>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    const navigateToRegister = () => {
        navigate('/register');
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Passsword Reset Email sent');
        }
        else {
            toast('Enter your email first');
        }

    }
    return (
        <div className='login-container'>
            <h2>Login to 🍉Fruits🍋</h2>

            <form onSubmit={handleLogin}>
                <input type="email" name='email' placeholder='Enter email' ref={emailRef} required /> <br />
                <input type="password" name='password' placeholder='Enter password' required /> <br />
                {errorMessage}
                <input className='submit-btn' type="submit" value='Login' />
            </form>
            <br />
            <p>Forgot password? <span onClick={resetPassword} style={{ 'color': 'blue', 'cursor': 'pointer' }}>Forgot password?</span></p>

            <p>New here? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={navigateToRegister}>Register first</span></p>
            <h4>Or</h4>
            <br />
            <div className='google-signin-container' onClick={() => signInWithGoogle()}>
                <img style={{ 'width': '20px' }} src={google} alt="" />
                <span>Sign in with google</span>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;