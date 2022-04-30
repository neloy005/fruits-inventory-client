import React, { useEffect, useState } from 'react';
import banner from '../../images/fruits1.jpg';
import Fruit from '../Fruit/Fruit';
import './Home.css'

const Home = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])
    return (
        <div>
            <div className='banner-container'>
                <img className='banner' src={banner} alt="" />
                <p className='tagline' ><span style={{ 'color': '' }}>Our fruit</span>  Inventory</p>
                <p className='tagline-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quam et eius blanditiis cumque doloribus nostrum.</p>
            </div>


            <h2>Inventory Overview:</h2>
            {
                fruits.map(fruit => <Fruit
                    key={fruit._id}
                    fruit={fruit}
                ></Fruit>)
            }


        </div>
    );
};

export default Home;