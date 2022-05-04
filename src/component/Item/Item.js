import React from 'react';

const Item = (props) => {
    // console.log(props);
    const { _id, name, image, quantity } = props.item;
    return (
        <div>
            <h2>{name}</h2>
            {/* <img src={image} alt="" /> */}
            <button onClick={() => props.handleDeleteItem(_id)}>Delete</button>
        </div>
    );
};

export default Item;