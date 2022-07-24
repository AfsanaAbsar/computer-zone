import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {

        if (user) {
            fetch(`https://dry-headland-85365.herokuapp.com/order?buyerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setOrders(data);
                });
        }
    }, [user])

    const handleCancelOrder = id => {
        const proceed = window.confirm('Are You Sure You want To Delete?')
        if (proceed) {
            const url = `https://dry-headland-85365.herokuapp.com/order/${id}`

            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                })
        }
    }
    return (
        <div>
            My Orders : {orders.length}
            <div className="overflow-x-auto">
                <table className="table w-1/3">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.buyer}</td>
                                <td>{order.buyerEmail}</td>
                                <td>{order.product}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                <td>{order.totalprice}</td>
                                <td>
                                    {(order.totalprice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.totalprice && order.paid) && <div>
                                        <p><span className='text-success font-bold'>PAID</span></p>
                                        <p>Transaction id: <span className='text-success '>{order.transactionId}</span></p>
                                    </div>}


                                </td>
                                <td>{(order.totalprice && !order.paid) && <button onClick={() => handleCancelOrder(order._id)} className='btn btn-xs btn-success'>Cancel Order</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;