
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from '../../Shared/Loading'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewMessage from './ReviewMessage';
const Review = () => {
    // const [review, setReview] = useState([])
    const { data: review, isLoading } = useQuery('review', () => fetch('https://dry-headland-85365.herokuapp.com/reviews', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <>
            <h1 className='text-center text-primary uppercase text-3xl font-bold mt-12'>Our Clients</h1>

            <div >

                <div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
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
            </div>


        </>

    );
};

export default Review;