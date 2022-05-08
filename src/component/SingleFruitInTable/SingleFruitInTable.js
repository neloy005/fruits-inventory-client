import React from 'react';
import { Button } from 'react-bootstrap';

const SingleFruitInTable = (props) => {
    const { _id, name, quantity, supplier, sold } = props.fruit;
    return (

        ///////////////////////////////////
        // SINGLE TABLE ROW FOR FRUIT INFO 
        //////////////////////////////////
        <tr>
            <td>{props.count}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{sold}</td>
            <td>{supplier}</td>
            <td><Button onClick={() => props.handleDeleteItem(_id)} variant="danger">Delete</Button></td>
        </tr>

    );
};

export default SingleFruitInTable;