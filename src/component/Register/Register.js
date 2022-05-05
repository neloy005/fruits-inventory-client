import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }

    const [
        createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    // if (error || updateError) {
    //     toast(error.message);
    // }

    const createNewUser = async (event) => {
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
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });


    }

    // if (user) {
    //     toast('email varification sent');
    // }
    if (token) {
        navigate('/');
    }
    if (loading) {
        return <Loading></Loading>
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
            <ToastContainer />
        </div>
    );
};

export default Register;