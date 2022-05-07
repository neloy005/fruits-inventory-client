import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../images/fruits1.jpg';
import Fruit from '../Fruit/Fruit';
import Operation from '../Operation/Operation';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const [fruits, setFruits] = useState([]);
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        fetch('https://rocky-ravine-30128.herokuapp.com/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])


    useEffect(() => {
        fetch('https://rocky-ravine-30128.herokuapp.com/operation')
            .then(res => res.json())
            .then(data => setOperations(data))
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
    }

    const navigateToManageInventory = () => {
        navigate('/manageinventory');
    }


    return (
        <div>
            <div className='banner-container'>
                <div className='img-overlay'>

                    <img className='banner' src={banner} alt="" />
                </div>
                <p className='tagline' ><span style={{ 'color': '' }}>Our <span style={{ 'color': 'yellow' }}><u> <i> Fruit</i>🛒</u></span></span> Inventory</p>

                <p className='tagline-description'>Fresh <span style={{ 'color': 'yellow' }}>🍉Fruits🍋</span> collected from the garden, <br /> stored in mint and hyienic condition.</p>
            </div>

            <h2 style={{ 'fontSize': '37px', 'marginBottom': '50px', 'fontWeight': '550' }}>Inventory Analysis📝:</h2>
            <div className='inventory-analysis-container'>
                <div>
                    <h2>{totalFruit}</h2> <p><span style={{ 'color': 'yellow' }}>🍉Fruits🍋</span> In Stock</p>
                </div>
                <div>
                    <h2>{totalSold}</h2> <p><span style={{ 'color': 'yellow' }}>🍉Fruits🍋</span> Sold</p>
                </div>
                <div>
                    <h2>${totalPrice}</h2> <p>Expected <span style={{ 'color': 'yellow' }}>💵Revenue💰</span></p>
                </div>
                <div>
                    <h2>{totalSupplierArr.length}</h2> <p>Different <span style={{ 'color': 'yellow' }}>🧑‍🌾Suppliers🛒</span></p>
                </div>
            </div>



            <h2 style={{ 'fontSize': '37px', 'marginBottom': '50px', 'fontWeight': '550' }} className='inventory-overview'>Inventory Overview📌:</h2>
            <div className='fruit-container'>
                {
                    fruitArrayForHome.map(fruit => <Fruit
                        key={fruit._id}
                        fruit={fruit}
                    ></Fruit>)
                }
            </div>
            <button className='manage-inventories' onClick={navigateToManageInventory}>Manage Inventories</button>

            <div>
                <h2 style={{ 'fontSize': '37px', 'marginBottom': '50px', 'fontWeight': '550' }}>How We Operate 🗓️:</h2>
                <div className='how-we-operate'>
                    {
                        operations.map(operation => <Operation
                            key={operation._id}
                            operation={operation}
                        ></Operation>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;