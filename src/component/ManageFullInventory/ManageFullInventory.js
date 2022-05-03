import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SingleFruitInTable from '../SingleFruitInTable/SingleFruitInTable';

const ManageFullInventory = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])
    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            console.log('Deleting', id);
            const url = `http://localhost:5000/fruit/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = fruits.filter(fruit => fruit._id !== id);
                        setFruits(remaining);
                    }
                })
        }
    }

    let count = 1;
    return (
        <div>
            <h2>All Fruits</h2>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fruits.map(fruit => <SingleFruitInTable
                                count={count}
                                key={fruit._id}
                                fruit={fruit}
                                handleDeleteItem={handleDeleteItem}
                            >
                                {
                                    count += 1
                                }
                            </SingleFruitInTable>)
                        }
                    </tbody>
                </Table>
            </div>


        </div>
    );
};

export default ManageFullInventory;