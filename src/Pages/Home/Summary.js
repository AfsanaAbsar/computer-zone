import React from 'react';
import productimg from '../../images/settings.png'
import userimg from '../../images/people.png'
import newRegimg from '../../images/team.png'

const Summary = () => {
    return (
        <div className='grid grid-cols-3  mt-12 stats shadow mr-24 ml-24 mb-12'>


            <div className="stat place-items-center">
                <div className='flex justify-center'><img className='w-1/4' src={productimg} alt="" /></div>
                <div className="stat-title text-3xl font-bold text-primary mt-6 mb-6">Products</div>
                <div className="stat-value">31K</div>

            </div>

            <div className="stat place-items-center">
                <div className='flex justify-center'><img className='w-1/4' src={userimg} alt="" /></div>
                <div className="stat-title text-3xl font-bold text-primary mt-6 mb-6">Users</div>
                <div className="stat-value ">4,200</div>

            </div>

            <div className="stat place-items-center">
                <div className='flex justify-center'><img className='w-1/4' src={newRegimg} alt="" /></div>
                <div className="stat-title text-3xl font-bold text-primary mt-6 mb-6">New Registers</div>
                <div className="stat-value">1,200</div>

            </div>

        </div>

    );
};

export default Summary;