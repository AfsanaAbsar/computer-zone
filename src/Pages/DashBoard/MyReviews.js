import React from 'react';
import { useForm } from 'react-hook-form';


const MyReviews = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const review = {
            name: data.name,
            review: data.review,
            ratings: data.ratings,

        }
        console.log(review);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)


        })

            .then(res => res.json())
            .then(inserted => {
                console.log('inserted', inserted);
                if (inserted.insertedId) {
                    alert('Review added successfully');
                    reset();
                }
                else {
                    alert('couldnot add a Review')
                }
            })
    }
    return (
        <div>
            <h1>Add A Review</h1>
            <div className='flex items-center w-1/2'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("name",
                        {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })} type="text" name='name' placeholder="Your Name" className="input input-bordered w-full mb-4" />
                    {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}

                    <input {...register("review",
                        {
                            required: {
                                value: true,
                                message: "review is required"
                            }
                        })} type="text" name='review' placeholder="Your Review" className="input input-bordered w-full mb-4" />
                    {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}
                    <input {...register("ratings",
                        {
                            required: {
                                value: true,
                                message: "ratings is required"
                            }
                        })} type="text" name='ratings' placeholder="Your Ratings" className="input input-bordered w-full mb-4" />
                    {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}


                    <input type="submit" value="ADD REVIEW" className="input w-full mb-4 bg-primary text-white font=bold text-lg border-none" />

                </form>
            </div>
        </div>
    );
};

export default MyReviews;