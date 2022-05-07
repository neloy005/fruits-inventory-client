import React from 'react';
import './NotFound.css';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFound} alt="" />
            <h1>4🍓4__Not__Found 🥲</h1>
            <br />
            <h5>The page you're looking for doesn't exist!</h5>
        </div>
    );
};

export default NotFound;