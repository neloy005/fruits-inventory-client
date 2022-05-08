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
    let errorMsg;
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }

    const [
        createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile] = useUpdateProfile(auth);

    //////////////////////////
    // GET JWT TOKEN 
    ///////////////////////
    const [token] = useToken(user);

    if (error) {
        errorMsg = <p style={{ 'color': 'red' }}>Error: {error?.message}</p>
    }

    ///////////////////////
    // CREATE NEW USER 
    ///////////////////////
    const createNewUser = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            setErrorMessage('Password must be 6 charachters or more!');
            return;
        }
        else {
            setErrorMessage('');
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });


    }

    if (token) {
        navigate('/');
    }
    if (loading) {
        return <Loading></Loading>
    }


    return (

        <div className='login-container'>
            <h2 style={{ 'marginTop': '50px', 'marginBottom': '30px' }}>Welcome to 🍉Fruits🍋 account registration</h2>

            {/* //////////////////////////////  */}
            {/* USER REGISTRATION FORM  */}
            {/* /////////////////////////////// */}
            <form onSubmit={createNewUser}>
                <input type="text" name='name' placeholder='Enter your name' required /> <br />
                <input type="email" name='email' placeholder='Enter email' required /> <br />
                <input type="password" name='password' placeholder='Enter password' required /> <br />
                <p style={{ 'color': 'red' }}>{errorMessage} </p>
                <p style={{ 'color': 'red' }}>{errorMsg} </p>
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