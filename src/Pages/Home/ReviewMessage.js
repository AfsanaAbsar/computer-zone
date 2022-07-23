import React from 'react';

const ReviewMessage = ({ reviewMessage }) => {
    return (


        <div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 mt-12'>
                <div className="card w-96 bg-base-100 ">

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{reviewMessage.name}</h2>
                        <p>{reviewMessage.review}</p>
                        <p>Ratings: {reviewMessage.ratings}</p>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default ReviewMessage;