import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    // const [profile, setProfile] = useState([])

    const { data, isLoading, refetch } = useQuery('data', () => fetch(`http://localhost:5000/userProfile/${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }

    ).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }



    const handleUpdateProfile = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const education = e.target.education.value;
        const linkedin = e.target.linkedin.value;

        const profile = {
            user: user.displayName,
            userEmail: user.email,
            phone,
            address,
            education,
            linkedin

        }

        fetch(`http://localhost:5000/userProfile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                refetch()
            })



    }





    // useEffect(() => {
    //     fetch(`http://localhost:5000/userProfile/${user.email}`, {
    //         method: 'GET'
    //     })
    //         .then(res => res.json())
    //         .then(data => setProfile(data[0]))
    // }, [user?.email])

    return (

        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>

            <div className=''>
                <div className="card w-96 bg-white text-primary">
                    <div className="card-body">
                        <h2 className="card-title">User : {user?.displayName}</h2>
                        <p>Phone : {data[0].phone}</p>
                        <p>Email : {user?.email}</p>
                        <p>Address : {data[0].address}</p>
                        <p>Education : {data[0].education}</p>
                        <p>Linked In : {data[0].linkedin}</p>

                    </div>
                </div>
            </div>
            <div>   <form onSubmit={handleUpdateProfile} >
                <div className="form-control">
                    <input type="text" disabled value={user?.displayName} className="input input-bordered mb-4" />
                </div>
                <div className="form-control">
                    <input type="email" disabled value={user?.email} className="input input-bordered mb-4" />
                </div>
                <div className="form-control">
                    <input type="text" name='phone' placeholder='Enter Your Phone Number' className="input input-bordered mb-4" />
                </div>
                <div className="form-control">
                    <input type="text" name='address' placeholder='Enter Your Address' className="input input-bordered mb-4" />
                </div>
                <div className="form-control">
                    <input type="text" name='education' placeholder='Enter Your Educational Qualification' className="input input-bordered mb-4" />
                </div>
                <div className="form-control">
                    <input type="text" name='linkedin' placeholder='Enter Your Linked In Profile' className="input input-bordered mb-4" />
                </div>

                <div className="form-control">
                    <input type="submit" value="Update Profile" className="input input-bordered mb-4 bg-primary text-white" />
                </div>


            </form></div>
        </div>
    );
};

export default MyProfile;