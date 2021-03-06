import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Item from '../Item/Item';
import 'react-toastify/dist/ReactToastify.css';
import './MyItem.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    //////////////////////////////////////////
    // GET DATA FROM DB WITH SPECIFIC USER EMAIL 
    //////////////////////////////////////////

    useEffect(() => {
        const email = user?.email;
        const url = `https://rocky-ravine-30128.herokuapp.com/item?email=${email}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [user])

    //////////////////////////////////////////
    // DELETE DATA FROM DB WITH SPECIFIC USER ID 
    //////////////////////////////////////////
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
        <div className='my-items-container'>
            {
                items.length > 0 && <h2 style={{ 'marginBottom': '50px' }}>You've added {items.length} <span style={{ 'color': 'yellow' }}>????Fruits????</span>  so far</h2>
            }

            {/* //////////////////////////////////////////////////////  */}
            {/* SHOW ADDED PRODUCTS OF A USER IN MY ITEM  */}
            {/* //////////////////////////////////////////////////////  */}
            {
                items.length > 0 ?
                    <div className='item-container'>
                        {
                            items.map(item => <Item
                                key={item._id}
                                item={item}
                                handleDeleteItem={handleDeleteItem}
                            ></Item>)
                        }
                    </div>
                    : <h2>You didn't add any <span style={{ 'color': 'yellow' }}>????Fruits????</span>  yet!</h2>
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