import React from 'react';

const Fruit = (props) => {
    // console.log(props.fruit)
    const { name, image } = props.fruit;



    return (
        <div>
            <h2>Single fruit</h2>
            {/* <img src={image} alt="" /> */}
        </div>
    );
};

export default Fruit;