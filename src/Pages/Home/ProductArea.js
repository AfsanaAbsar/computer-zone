import React from 'react';
import useProducts from '../../hooks/useProducts'
import ProductDetails from './ProductDetails';
const ProductArea = () => {
    const [products, setProducts] = useProducts()
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                products.map(product => <ProductDetails
                    key={product._id}
                    product={product}
                ></ProductDetails>)
            }
        </div>
    );
};

export default ProductArea;