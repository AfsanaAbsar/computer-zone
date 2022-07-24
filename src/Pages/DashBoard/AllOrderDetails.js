import React from 'react';

const AllOrderDetails = ({ order, index }) => {
    console.log(order);

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

                {(order.paid) &&
                    <p><span className='text-success font-bold'>PAID</span> </p>

                }



            </td>
            <td> {(order.paid) && <p>Transaction id: <span className='font-bold'>{order.transactionId}</span></p>}</td>
            <td>{(!order.paid) && <p className='font-bold text-red-500'>UNPAID</p>}</td>
            <td>{(!order.paid) && <button onClick={() => handleCancelOrder(order._id)} className='btn btn-xs btn-success'>Cancel Order</button>}</td>
        </>
    );
};

export default AllOrderDetails;