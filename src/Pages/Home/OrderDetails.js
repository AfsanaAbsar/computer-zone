import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';


const OrderDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth);
    //fetching single data by id 
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])




    const handleOrder = e => {
        e.preventDefault()
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const quantity = e.target.quantity.value;
        const order = {
            buyer: user.displayName,
            buyerEmail: user.email,
            phone,
            address,
            product: product.name,
            quantity

        }


        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='grid lg:grid-cols-2 mt-6'>
            <div className='w-1/2 mx-auto'>
                <img className='w-96' src={product.img} alt={product.name} />
                <h1 className='font-bold text-2xl mt-10 mb-10'>{product.name}</h1>

                <p>{product.description}</p>
            </div>

            <div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <div className="card-body">
                        <form onSubmit={handleOrder} >
                            <div className="form-control">
                                <input type="text" disabled value={user?.displayName} className="input input-bordered mb-4" />
                            </div>
                            <div className="form-control">
                                <input type="email" disabled value={user?.email} className="input input-bordered mb-4" />
                            </div>
                            <div className="form-control">
                                <input type="text" disabled value={product.name} className="input input-bordered mb-4" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='phone' placeholder='Enter Your Phone Number' className="input input-bordered mb-4" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='address' placeholder='Enter Your Address' className="input input-bordered mb-4" />
                            </div>
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <div className="form-control">
                                <input type="number" name='quantity' min={product.minOrder} max={product.quantity} className="input input-bordered mb-4" />
                            </div>
                            <div className="form-control">
                                <input type="submit" value="Place Order" className="input input-bordered mb-4 bg-primary text-white" />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;


{/* <h1>{user?.displayName}</h1>
<h1>{user?.email}</h1>

<h1>{product.name}</h1>
<img src={product.img} alt="" />
<h1>{product.price}</h1>
<h1>{product.quantity}</h1>
<h1>{product.minOrder}</h1> */}