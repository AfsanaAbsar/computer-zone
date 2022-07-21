import React from 'react';

const OrderPage = ({ product }) => {
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

export default OrderPage;