import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }


    return (

        <div className='login-container'>
            <h2>Welcome to 🍉Fruits🍋 account registration</h2>

            <form onSubmit={createNewUser}>
                <input type="text" name='name' placeholder='Enter your name' required /> <br />
                <input type="text" name='email' placeholder='Enter email' required /> <br />
                <input type="password" name='password' placeholder='Enter password' required /> <br />
                <input className='submit-btn' type="submit" value='Register' />
            </form>
            <br />
            <p>Already registered? <span style={{ 'color': 'blue', 'cursor': 'pointer' }} onClick={navigateToLogin}>Login</span></p>
            <br />
        </div>
    );
};

export default Register;