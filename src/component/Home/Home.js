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

    let fruitArrayForHome = [];
    let count = 0;
    for (const fruit of fruits) {
        count += 1;
        fruitArrayForHome.push(fruit);
        if (count === 6) {
            console.log(fruitArrayForHome);
            break;
        }
    }


    return (
        <div>
            <div className='banner-container'>
                <img className='banner' src={banner} alt="" />
                <p className='tagline' ><span style={{ 'color': '' }}>Our fruit</span>  Inventory</p>
                <p className='tagline-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quam et eius blanditiis cumque doloribus nostrum.</p>
            </div>


            <h2>Inventory Overview:</h2>
            <div className='fruit-container'>
                {
                    fruitArrayForHome.map(fruit => <Fruit
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruit>)
                }
            </div>



        </div>
    );
};

export default Home;