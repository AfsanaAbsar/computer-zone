import React from 'react';

const ReviewMessage = ({ reviewMessage }) => {
    return (

        <div className='grid lg:grid-cols-3 gap-10 mt-12'>
            <div className="card lg:w-96 sm:w-1/4 bg-base-100 ">

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{reviewMessage.name}</h2>
                    <p>{reviewMessage.review}</p>
                    <p>Ratings: {reviewMessage.ratings}</p>

                </div>
            </div>
        </div>


    );
};

export default ReviewMessage;