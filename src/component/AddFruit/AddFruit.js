import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './AddFruit.css'
import 'react-toastify/dist/ReactToastify.css';

const AddFruit = () => {
    const [user] = useAuthState(auth);

    const handleAddFruit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const sold = event.target.sold.value;
        const fruitInfo = { name, email, image, description, price, quantity, supplier, sold };
        fetch('http://localhost:5000/fruitinfo', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fruitInfo)

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully added 🍉', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                event.target.reset();
            })

    }

    return (
        <div>
            <h2>Add fruit</h2>
            <form onSubmit={handleAddFruit} >
                <div className='add-fruit-form'>
                    <div>
                        <input type="text" name='name' placeholder='Fruit Name' required /> <br />
                        <input type="email" name='email' value={user.email} disabled /> <br />
                        <input type="text" name='image' placeholder='Image URL' required /> <br />
                        <textarea type="text" name='description' placeholder='Description' required /> <br />

                    </div>
                    <div>
                        <input type="number" name='price' placeholder='Price' required /> <br />
                        <input type="number" name='quantity' placeholder='Enter quantity' required /> <br />
                        <input type="text" name='supplier' placeholder='Supplier Name' required /> <br />
                        <input type="number" name='sold' placeholder='Sold Amount' required /> <br />

                    </div>
                </div>

                <input className='submit-btn' type="submit" value='Add' />


            </form>
            <ToastContainer
                position="top-center"
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

export default AddFruit;