import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dry-headland-85365.herokuapp.com/products'
        )
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const imgStorageKey = 'bd3caaab7f40d6ca0eba45e63061bcf5'

    const onSubmit = async (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const product = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        quantity: data.quantity,
                        minOrder: data.minOrder,
                        img: img
                    }


                    //send data to database

                    fetch('https://dry-headland-85365.herokuapp.com/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)

                    })

                        .then(res => res.json())
                        .then(inserted => {
                            console.log('inserted', inserted);
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.success('Could not add a product')
                            }
                        })
                }

            })
    }
    return (
        <div>
            <h1>Add A New Product</h1>
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
                    <input {...register("description",
                        {
                            required: {
                                value: true,
                                message: "Description is required"
                            }
                        })} type="text" name='description' placeholder="Product Description" className="input input-bordered w-full mb-4" />
                    {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}
                    <input {...register("price",
                        {
                            required: {
                                value: true,
                                message: "Price is required"
                            }
                        })} type="text" name='price' placeholder="Product Price" className="input input-bordered w-full mb-4" />
                    {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}
                    <input {...register("quantity",
                        {
                            required: {
                                value: true,
                                message: "Quantity is required"
                            }
                        })} type="text" name='quantity' placeholder="Product Quantity" className="input input-bordered w-full mb-4" />
                    {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}
                    <input {...register("minOrder",
                        {
                            required: {
                                value: true,
                                message: "minOrder is required"
                            }
                        })} type="text" name='minOrder' placeholder="Minimum Order" className="input input-bordered w-full mb-4" />
                    {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}




                    <input {...register("image",
                        {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })} type="file" name='image' className="input input-bordered w-full mb-4" />
                    {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}





                    <input type="submit" value="ADD" className="input w-full mb-4 bg-primary text-white font=bold text-lg border-none" />

                </form>
            </div>
        </div>
    );
};

export default AddProducts;