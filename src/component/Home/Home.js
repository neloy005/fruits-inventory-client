import React from 'react';
import banner from '../../images/fruits1.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='banner-container'>
            <img className='banner' src={banner} alt="" />
            <p className='tagline' ><span style={{ 'color': '' }}>Our fruit</span>  Inventory</p>
            <p className='tagline-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quam et eius blanditiis cumque doloribus nostrum.</p>

        </div>
    );
};

export default Home;