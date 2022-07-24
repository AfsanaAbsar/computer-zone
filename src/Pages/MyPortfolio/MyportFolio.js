import React, { useEffect, useState } from 'react';
import booxplained from '../../images/booxplained.png'
import cakeoclock from '../../images/cakey.png'
import cuisine from '../../images/cuisine.png'
const MyportFolio = () => {
    const [portfolio, setPortFolio] = useState([])
    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => setPortFolio(data))
    }, [])
    return (
        <div>
            <div className='flex items-center justify-center mb-12 font-bold'>
                <div>
                    <h1>Hey There, I am Afsana Absar</h1>
                    <h3>Email : afsanaabsarchy@gmail.com</h3>
                    <p>I am a undergraduate student.</p>
                </div>
            </div>
            <div className='flex items-center justify-center mb-12'>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-10 '>
                    {
                        portfolio.map(pt => < div >
                            <div class="card w-1/4 bg-base-100 ">
                                <div class="avatar">
                                    <div class="rounded w-1/2">
                                        <img src={pt.img} />
                                    </div>
                                </div>
                                <div class="card-body items-center text-center w-1/2">
                                    <p>{pt.name}</p>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <h1 className='text-center font-bold text-lg text-primary'>My Three Projects and live link are given below</h1>
            <div className='flex items-center justify-center mb-12'>

                <div className='grid grid-cols-1 gap-10'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={booxplained} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">BOOXPLAINED</h2>

                            <div class="card-actions">
                                <a href='https://booxplained.netlify.app/' target='_blank'> <button class="btn btn-primary">Visit Website</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={cakeoclock} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">CAKE O' CLOCK</h2>

                            <div class="card-actions">
                                <a href='https://henna-react-firebase.web.app/' target='_blank'> <button class="btn btn-primary">Visit Website</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={cuisine} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">CUISINE</h2>

                            <div class="card-actions">
                                <a href='https://cuisine-react-firebase.web.app/' target='_blank'> <button class="btn btn-primary">Visit Website</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyportFolio;