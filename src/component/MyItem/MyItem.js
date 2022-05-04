import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Item from '../Item/Item';
import 'react-toastify/dist/ReactToastify.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => {
                const newItem = data.filter(fruit => fruit.email === user.email);
                setItems(newItem);
            })
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
                        const remaining = items.filter(fruit => fruit._id !== id);
                        setItems(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2>My Items: {items.length}</h2>
            {
                items.length > 0 ?
                    <div>
                        {
                            items.map(item => <Item
                                key={item._id}
                                item={item}
                                handleDeleteItem={handleDeleteItem}
                            ></Item>)
                        }
                    </div>
                    : <h2>You didn't add any items  yet!</h2>
            }
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

export default MyItem;