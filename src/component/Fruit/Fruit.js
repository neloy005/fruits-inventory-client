import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fruit.css';


const Fruit = (props) => {
    // console.log(props.fruit)
    const { _id, name, image, description, price, quantity, supplier } = props.fruit;
    const navigate = useNavigate();

    const navigateToManageInventory = id => {
        navigate(`/inventory/${id}`);
    }


    return (
        <div>

            <div className='single-fruit-card'>
                <img src={image} alt="" />
                <div className='fruit-details'>
                    <h2>{name}</h2>
                    <h4>Supplier '{supplier}'</h4>
                    <hr />
                    <p>{description.slice(0, 50)}...</p>
                    <div><h5>{quantity}</h5><p>Available</p></div>
                    <div className='price-and-stock'>
                        <h5>${price}</h5>
                        <button className='manage-stock-btn' onClick={() => navigateToManageInventory(_id)} >Manage stock</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Fruit;