import React from 'react';
import useProducts from '../../hooks/useProducts'
import ProductDetails from './ProductDetails';
const ProductArea = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h1 className='text-center text-primary uppercase text-3xl font-bold'>Our Products</h1>
            <div className='flex items-center justify-center'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>

                    {
                        products.map(product => <ProductDetails
                            key={product._id}
                            product={product}
                        ></ProductDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductArea;