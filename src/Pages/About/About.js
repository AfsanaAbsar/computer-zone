import React from 'react';
import aboutimg from '../../images/banner.jpg'
const About = () => {
    return (
        <>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={aboutimg} class="max-w-sm rounded-lg " />
                    <div>
                        <h1 class="text-5xl font-bold text-primary">About Computer Zone</h1>
                        <p class="py-6">Computer zone is a computer manufacturer website. It is a multi user website. </p>

                    </div>
                </div>
            </div>


        </>
    );
};

export default About;