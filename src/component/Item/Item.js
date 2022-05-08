import React from 'react';
import './Item.css';

const Item = (props) => {
    const { _id, name, image, quantity, description, price, supplier, sold } = props.item;
    return (
        <div className='single-item'>

            {/* //////////////////////////////////  */}
            {/* SINGLE ITEM FOR USERS MY ITEM  */}
            {/* //////////////////////////////////  */}
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>Supplied by '{supplier}'</h4>
            <div className='stock-and-sold'>
                <div><h5>{quantity}</h5><p>in stock</p></div>
                <div><h5>{sold}</h5><p>sold</p></div>
            </div>

            <h3>${price}</h3>


            <p>{description}</p>
            <button className='dlt-item-btn' onClick={() => props.handleDeleteItem(_id)}>Delete 🗑️</button>
        </div>
    );
};

export default Item;