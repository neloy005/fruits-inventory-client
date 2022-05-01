import React from 'react';
import { useNavigate } from 'react-router-dom';


const Fruit = (props) => {
    // console.log(props.fruit)
    const { _id, name, image } = props.fruit;
    const navigate = useNavigate();

    const navigateToManageInventory = id => {
        navigate(`/inventory/${id}`);
    }


    return (
        <div>
            <h2>Single fruit</h2>
            {/* <img src={image} alt="" /> */}
            <button onClick={() => navigateToManageInventory(_id)} >Manage stock</button>
        </div>
    );
};

export default Fruit;