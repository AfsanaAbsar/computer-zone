import React from 'react';
import Banner from './Banner';
import Offer from './Offer';
import ProductArea from './ProductArea';
import Review from './Review';
import Summary from './Summary'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <ProductArea></ProductArea>
            <Offer></Offer>
            <Review></Review>

        </div>
    );
};

export default Home;