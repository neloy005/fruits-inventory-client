import React from 'react';
import './Operation.css'

const Operation = (props) => {
    const { name, description, image } = props.operation;
    return (
        <div className='single-operation'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <hr />
            <p>{description}</p>
        </div>
    );
};

export default Operation;