import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AllOrderDetails from './AllOrderDetails';
const ManageAllOrders = () => {
    const { data: orders, isLoading } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }





    return (
        <div>
            All Orders : {orders.length}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr >
                                <AllOrderDetails key={order._id} index={index} order={order} ></AllOrderDetails>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;