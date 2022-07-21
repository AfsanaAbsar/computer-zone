import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
    const navigate = useNavigate();
    const navigateToOrderDetails = id => {
        navigate(`/products/${id}`)
    }
    return (
        <div>
            <div className="card w-100 h-100 bg-base-100 shadow-xl">
                <figure><img src={product.img} alt={product.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">
                        {product.name}

                    </h2>
                    <p>{product.description}</p>
                    <h2 className='font-bold text-xl text-center'>Price : $ {product.price}</h2>
                    <div className="card-actions justify-center mt-6">
                        <div className="badge badge-outline">Quantity: {product.quantity}</div>
                        <div className="badge badge-outline">Min Orders: {product.minOrder}</div>
                    </div>
                    <div className="card-actions justify-center mt-6">
                        <button className="btn btn-primary " onClick={() => navigateToOrderDetails(product._id)}>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;