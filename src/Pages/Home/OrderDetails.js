import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';



const OrderDetails = () => {
    const { productId } = useParams();

    const [user] = useAuthState(auth);


    const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`http://localhost:5000/products/${productId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()));



    if (isLoading) {
        return <Loading></Loading>
    }


    const { quantity } = product;

    const handleOrder = e => {
        e.preventDefault()
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const orderQuantity = e.target.orderQuantity.value;
        const price = product.price;
        const totalprice = price * orderQuantity
        const order = {
            buyer: user.displayName,
            buyerEmail: user.email,
            phone,
            address,
            product: product.name,
            orderQuantity,
            totalprice

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
                e.target.reset();

            })

        if (quantity) {
            const updatedQuantity = parseInt(quantity) - parseInt(orderQuantity);

            const url = `http://localhost:5000/products/${productId}`
            fetch((url), {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ updatedQuantity })
            })
                .then(res => res.json())
                .then(data => {

                    alert('Delivered Successfully')
                    refetch();
                })

        }


    }





    return (
        <div className='grid lg:grid-cols-2 mt-6'>
            <div className='w-1/2 mx-auto'>
                <img className='w-96' src={product.img} alt={product.name} />
                <h1 className='font-bold text-2xl mt-10 mb-10'>{product.name}</h1>
                <h3>Quantity : {product.quantity}</h3>
                <h3>Minimum Orders : {product.minOrder}</h3>
                <h3>Price : {product.price}</h3>
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
                                <input required type="number" placeholder={product.minOrder} name='orderQuantity' min={product.minOrder} max={product.quantity} className="input input-bordered mb-4" />
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


