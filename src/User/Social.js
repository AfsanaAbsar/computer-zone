import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }
    let socialError;
    if (error) {
        socialError = <p>{error?.message}</p>
    }
    return (
        <>
            <div className='w-1/3 mx-auto mb-12'>
                <div className="divider mt-12 mb-12">OR</div>
                <p className='text-red-500'>{socialError}</p>
                <div className='flex justify-center'><button className="btn btn-wide bg-white text-primary border-primary" onClick={() => signInWithGoogle()}>Google Sign In</button></div>
            </div>
        </>
    );
};

export default Social;