import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/order?buyerEmail=${user.email}`, {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setOrders(data);
                });
        }
    }, [user])
    return (
        <div>
            My Orders : {orders.length}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.buyer}</td>
                                <td>{order.buyerEmail}</td>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                {/* <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                </div>}


                            </td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;