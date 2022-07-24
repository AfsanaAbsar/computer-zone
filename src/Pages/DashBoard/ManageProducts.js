import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
const ManageProducts = () => {
    const { data: product, isLoading, refetch } = useQuery('product', () => fetch('https://dry-headland-85365.herokuapp.com/products', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()));

    console.log(product);

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure You want To Delete?')

        if (proceed) {
            const url = `https://dry-headland-85365.herokuapp.com/products/${id}`

            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                })
        }
    }
    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">

                <thead>
                    <tr>

                        <th>Product</th>
                        <th>Product Name</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>

                    {
                        product.map(pd => <tr pd={pd}>

                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={pd.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {pd.name}
                            </td>

                            <td>
                                <button onClick={() => handleDeleteProduct(pd._id)} class="btn bg-red-500 btn-xs">Delete Product</button>
                            </td>

                        </tr>)
                    }


                </tbody>

            </table>
        </div>
    );
};

export default ManageProducts;