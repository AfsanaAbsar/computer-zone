import React from 'react';
import productimg from '../../images/settings.png'
import userimg from '../../images/people.png'
import newRegimg from '../../images/team.png'

const Summary = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1  mt-12  mr-24 ml-24 mb-24'>


            <div className="items-center mb-24">
                <div className='flex justify-center'><img className='w-1/4' src={productimg} alt="" /></div>
                <div className="stat-title text-3xl font-bold text-primary mt-6 mb-6 text-center">Products</div>
                <div className="stat-value text-center">31K</div>

            </div>

            <div className="items-center mb-24">
                <div className='flex justify-center'><img className='w-1/4' src={userimg} alt="" /></div>
                <div className="stat-title text-3xl font-bold text-primary mt-6 mb-6 text-center">Users</div>
                <div className="stat-value text-center">4,200</div>

            </div>

            <div className="items-center mb-24">
                <div className='flex justify-center'><img className='w-1/4' src={newRegimg} alt="" /></div>
                <div className="stat-title text-3xl font-bold text-primary mt-6 mb-6 text-center">New Registers</div>
                <div className="stat-value text-center">1,200</div>

            </div>

        </div>

    );
};

export default Summary;