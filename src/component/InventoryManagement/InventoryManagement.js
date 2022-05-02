import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryManagement = () => {
    const { id } = useParams();

    const [fruit, setFruit] = useState({});
    const [fruitAfterDecrease, setFruitAfterDecrease] = useState(0);
    const [fruitCount, setFruitCount] = useState(0)

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



    return (
        <div className='single-fruit'>
            <h2>Inventory Management: {id}</h2>
            <p>{fruit.name}</p>
            <p>{fruitCount}</p>
            <button onClick={handleDecrease}>Delivered</button>
        </div>
    );
};

export default InventoryManagement;