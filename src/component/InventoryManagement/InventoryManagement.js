import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InventoryManagement = () => {
    const { id } = useParams();
    const [fruit, setFruit] = useState({});
    const [fruitCount, setFruitCount] = useState(0)
    const [error, setError] = useState('')

    useEffect(() => {
        const url = `http://localhost:5000/fruit/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFruit(data);
                setFruitCount(data.quantity);
            });
    }, [])


    let quantity = fruitCount;
    const handleDecrease = () => {
        quantity -= 1;
        setFruitCount(quantity);
        const decreasedQuantity = { quantity: quantity };
        const url = `http://localhost:5000/fruit/${id}`;
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

    const handleRestock = event => {
        event.preventDefault();
        const restockValue = event.target.restock.value;
        const restock = parseInt(restockValue);
        if (restock <= 0 || (restockValue === '')) {
            setError('Error: Stock amount must be minimum 1');
            return;
        }
        else {
            setError('');
            quantity = quantity + restock;
            setFruitCount(quantity);
            const decreasedQuantity = { quantity: quantity };
            const url = `http://localhost:5000/fruit/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(decreasedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('success', data);

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


    return (
        <div className='single-fruit'>
            <h2>Inventory Management: {id}</h2>
            <p>{fruit.name}</p>
            <p>{fruitCount}</p>
            <button onClick={handleDecrease}>Delivered</button>
            <form onSubmit={handleRestock}>
                <input type="number" name='restock' placeholder='Enter restock amount' /> <br />
                <p style={{ 'color': 'red' }}>{error}</p>
                <input type="submit" value="Restock" />
            </form>
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