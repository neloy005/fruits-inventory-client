import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './InventoryManagement.css';

const InventoryManagement = () => {
    const { id } = useParams();
    const [fruit, setFruit] = useState({});
    const [fruitCount, setFruitCount] = useState(0);
    const [soldCount, setSoldCount] = useState(0);
    const [error, setError] = useState('');
    const [stockOut, setStockOut] = useState('');
    const navigate = useNavigate();


    ///////////////////////////////////
    // GET FRUIT INFO WITH SPECIFIC ID 
    ///////////////////////////////////
    useEffect(() => {
        const url = `https://rocky-ravine-30128.herokuapp.com/fruit/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFruit(data);
                setFruitCount(data.quantity);
                setSoldCount(data.sold);
                if (data.quantity === 0) {
                    setStockOut('Stock Out!');
                }
            });
    }, [])


    //////////////////////////////////////////////////////////////
    // FUNCTION TO DECREASE DELIVERED COUND AND INCREASE SOLD NUMBER 
    //////////////////////////////////////////////////////////////
    let sold = soldCount;
    let quantity = fruitCount;
    const handleDeliveredAndSold = () => {
        if (quantity === 0) {
            setStockOut('Stock Out!');
            return;
        }
        quantity -= 1;
        sold += 1;
        setFruitCount(quantity);
        setSoldCount(sold);
        if (quantity === 0) {
            setStockOut('Stock Out!');
        }
        const decreasedQuantity = { quantity: quantity, sold: sold };
        const url = `https://rocky-ravine-30128.herokuapp.com/fruit/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(decreasedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })
    }

    //////////////////////////////////////////////////////////////
    // FUNCTION TO HANDLE RESTOCK AMOUNT 
    //////////////////////////////////////////////////////////////
    const handleRestock = event => {
        event.preventDefault();
        const restockValue = event.target.restock.value;
        const restock = parseInt(restockValue);
        if (restock <= 0 || (restockValue === '')) {
            setError('Error: Stock amount must be minimum 1');
            return;
        }
        else {
            setStockOut('');
            setError('');
            quantity = quantity + restock;
            setFruitCount(quantity);
            const decreasedQuantity = { quantity: quantity, sold: soldCount };
            const url = `https://rocky-ravine-30128.herokuapp.com/fruit/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(decreasedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(`restocked ${restock} items!`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    event.target.reset();
                })
        }

    }
    const navigateToManageInventory = () => {
        navigate('/manageinventory');
    }


    return (
        <div style={{ 'minHeight': '650px' }} className='single-fruit'>
            {/* /////////////////////////////////  */}
            {/* FRUIT INFO SECTION  */}
            {/* /////////////////////////////////  */}
            <h2 style={{ 'marginTop': '50px', 'marginBottom': '30px' }}>Manage {fruit.name} Stock????:</h2>
            <div className='single-inventory-fruit'>
                <img src={fruit.image} alt="" />
                <div className='fruit-info'>
                    <h2>{fruit.name}</h2>
                    <h3>Supplied by '{fruit.supplier}'</h3>
                    <hr />
                    <p style={{ 'fontSize': '20px' }}>{fruit.description}</p>
                    <div className='sold-and-price'>
                        <div><h2>{soldCount}</h2> <p>sold so far</p></div>
                        <div><h2>${fruit.price}</h2> <p>per item</p></div>
                    </div>


                </div>
                {/* /////////////////////////////////  */}
                {/* DELIVERED AND RESTOCK SECTION  */}
                {/* /////////////////////////////////  */}

                <div className='delivery-and-restock'>
                    <div><h2>{fruitCount}</h2><p>in stock</p></div>
                    <p style={{ 'color': 'red' }}>{stockOut}</p>
                    <button className='delivered-btn' onClick={handleDeliveredAndSold}>Delivered</button>
                    <hr />
                    <form onSubmit={handleRestock}>
                        <input style={{ 'width': '85%', 'borderRadius': '10px', 'padding': '9px 2px', 'fontSize': '18px' }} type="number" name='restock' placeholder='Enter restock amount' /> <br />
                        <p style={{ 'color': 'red' }}>{error}</p>
                        <input className='restock-btn' type="submit" value="Restock" />
                    </form>
                    <hr />
                    <button className='manage-inventories-btn' onClick={navigateToManageInventory}>Manage Inventories</button>
                </div>
            </div>


            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default InventoryManagement;