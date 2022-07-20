import React from 'react';
import Banner from './Banner';
import ProductArea from './ProductArea';
import Review from './Review';
import Summary from './Summary'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <ProductArea></ProductArea>

            <Review></Review>

        </div>
    );
};

export default Home;