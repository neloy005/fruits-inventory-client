import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const createNewUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            setErrorMessage('Password must be 6 charachters or more!');
        }
        else {
            setErrorMessage('');
        }
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/');
    }
    if (loading) {
        return <Spinner animation="border" variant="success" />
    }


    return (

        <div className='login-container'>
            <h2>Welcome to 🍉Fruits🍋 account registration</h2>

            <form onSubmit={createNewUser}>
                <input type="text" name='name' placeholder='Enter your name' required /> <br />
                <input type="email" name='email' placeholder='Enter email' required /> <br />
                <input type="password" name='password' placeholder='Enter password' required /> <br />
                <p style={{ 'color': 'red' }}>{errorMessage} </p>
                <input className='submit-btn' type="submit" value='Register' />
            </form>
            <br />
            <p>Already registered? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={navigateToLogin}>Login</span></p>
            <br />
        </div>
    );
};

export default Register;