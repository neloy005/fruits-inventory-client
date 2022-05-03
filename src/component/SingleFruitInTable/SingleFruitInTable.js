import React from 'react';
import { Button } from 'react-bootstrap';

const SingleFruitInTable = (props) => {
    // console.log(props);
    const { _id, name, quantity, supplier } = props.fruit;
    return (


        <tr>
            <td>{props.count}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{supplier}</td>
            <td><Button onClick={() => props.handleDeleteItem(_id)} variant="danger">Delete</Button></td>
        </tr>

    );
};

export default SingleFruitInTable;