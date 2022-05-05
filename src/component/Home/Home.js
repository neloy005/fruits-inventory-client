import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';
import banner from '../../images/fruits1.jpg';
import Fruit from '../Fruit/Fruit';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();

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
            break;
        }
    }

    let totalFruit = 0;
    let totalSold = 0;
    let totalPrice = 0;
    let totalSupplierArr = [];
    for (const fruit of fruits) {
        totalFruit = totalFruit + parseInt(fruit.quantity);
        totalSold = totalSold + parseInt(fruit.sold);
        totalPrice = totalPrice + parseInt(fruit.quantity) * parseInt(fruit.price);
        if (totalSupplierArr.indexOf(fruit.supplier) === -1) {
            totalSupplierArr.push(fruit.supplier);
        }
        console.log(totalFruit);
    }

    const navigateToManageInventory = () => {
        navigate('/manageinventory');
    }


    return (
        <div>
            <div className='banner-container'>
                <img className='banner' src={banner} alt="" />
                <p className='tagline' ><span style={{ 'color': '' }}>Our fruit</span>  Inventory</p>
                <p className='tagline-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quam et eius blanditiis cumque doloribus nostrum.</p>
            </div>

            <h2>Inventory Overview:</h2>
            <div className='inventory-overview-container'>
                <div>
                    <h2>{totalFruit}</h2> <p>total <span style={{ 'color': 'yellow' }}>🍉Fruits🍋</span></p>
                </div>
                <div>
                    <h2>{totalSold}</h2> <p><span style={{ 'color': 'yellow' }}>🍉Fruits🍋</span> Sold</p>
                </div>
                <div>
                    <h2>${totalPrice}</h2> <p>Expected<span style={{ 'color': 'yellow' }}>💵Revenue💰</span></p>
                </div>
                <div>
                    <h2>{totalSupplierArr.length}</h2> <p>Different<span style={{ 'color': 'yellow' }}>🧑‍🌾Suppliers🛒</span></p>
                </div>
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
            <button onClick={navigateToManageInventory}>Manage Inventory</button>


            <div className='bar'>
                <div className='bar-container'>
                    <h3>Sale vs month graph</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            // width={1200}
                            // height={300}
                            data={fruits}
                        >
                            <CartesianGrid strokeDasharray="1 3" />
                            <XAxis dataKey="name" style={{ 'fontSize': '14px', 'fill': 'rgb(255,255,255)' }} />
                            <YAxis style={{ 'fill': 'rgb(255,255,255)' }} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div>
    );
};

export default Home;