import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import SingleFruitInTable from '../SingleFruitInTable/SingleFruitInTable';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './ManageFullInventory.css';

const ManageFullInventory = () => {
    const navigate = useNavigate();
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        fetch('https://rocky-ravine-30128.herokuapp.com/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            console.log('Deleting', id);
            const url = `https://rocky-ravine-30128.herokuapp.com/fruit/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // console.log(data);
                        toast.success('Deleted successfully!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        const remaining = fruits.filter(fruit => fruit._id !== id);
                        setFruits(remaining);
                    }
                })
        }
    }
    const handleAddNewItem = () => {
        navigate('/addfruit');
    }
    let count = 1;
    return (
        <div>
            <h2 style={{ 'marginTop': '50px', 'marginBottom': '30px' }}>All <span style={{ 'color': 'yellow' }}>🍉Fruits🍋</span>:</h2>
            <div className='add-new-fruit'>
                <h2>You can add new items in the inventory
                </h2> <br />
                <button onClick={handleAddNewItem}>Add New Item</button>
            </div>
            <div>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Sold</th>
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

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ManageFullInventory;