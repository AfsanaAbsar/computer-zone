import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderPage from './OrderPage';

const OrderDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    //fetching single data by id 
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.img} alt="" />
            <h1>{product.price}</h1>
            <h1>{product.quantity}</h1>
            <h1>{product.minOrder}</h1>
        </div>
    );
};

export default OrderDetails;