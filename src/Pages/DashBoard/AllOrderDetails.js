import React from 'react';

const AllOrderDetails = ({ order, index }) => {
    console.log(order);
    const handleCancelOrder = id => {
        const proceed = window.confirm('Are You Sure You want To Delete?')
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`

            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)


                })
        }
    }
    return (
        <>
            <th>{index + 1}</th>
            <td>{order.buyer}</td>
            <td>{order.buyerEmail}</td>
            <td>{order.product}</td>

            <td>
                {/* {(order.totalprice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>} */}
                {(order.paid) && <div>
                    <p><span className='text-success'>PAid</span></p>

                    <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                </div>}


            </td>
            <td>{(!order.paid) && <button className='btn btn-xs bg-red-500'>UNPAID</button>}</td>
            <td>{(!order.paid) && <button onClick={() => handleCancelOrder(order._id)} className='btn btn-xs btn-success'>Cancel Order</button>}</td>
        </>
    );
};

export default AllOrderDetails;