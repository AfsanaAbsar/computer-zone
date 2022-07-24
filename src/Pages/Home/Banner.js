import React from 'react';
import bannerImg from '../../images/38504.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="w-1/2 rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold text-primary">Welcome To Computer Zone</h1>

                </div>
            </div>
        </div>
    );
};

export default Banner;