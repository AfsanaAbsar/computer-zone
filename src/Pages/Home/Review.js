import React, { useEffect, useState } from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewMessage from './ReviewMessage';
const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReview(data))
    }, [review])
    return (
        <>
            <h1 className='text-center text-primary uppercase text-3xl font-bold mt-12'>Our Clients</h1>

            <div >
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}

                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        review?.map(reviewMessage => <SwiperSlide> <ReviewMessage

                            reviewMessage={reviewMessage}
                        ></ReviewMessage>
                        </SwiperSlide>)

                    }

                </Swiper>
            </div>
        </>

    );
};

export default Review;