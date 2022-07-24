import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LOhaoHInTu5vk2ni4I4qMqqTdWCGfRADy8dQxMOz8YQblczl4pSbngz9R9t0D6b8g4KbjuHOexwDZiizjdosdPZ00cNsFPP1n');
const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <div class="card w-50 max-w-md bg-base-100  my-12">
                <h1>pay for {id}</h1>
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.buyer}</p>
                    <h2 class="card-title">Please Pay for {order.product}</h2>
                    <p>Your ordered Quantity: {order.orderQuantity}</p>
                    <p>Please pay: ${order.totalprice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md  bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;