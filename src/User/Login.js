import React from 'react';
import Social from './Social';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (data) => {

        signInWithEmailAndPassword(data.email, data.password)

    }

    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user);
    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    const navigateRegister = e => {
        navigate('/register')
    }
    let signInError;
    if (error) {
        signInError = <p>{error?.message}</p>
    }
    return (
        <>
            <div className="w-1/3  mx-auto ">
                <h1 className='text-xl text-center mt-24 mb-12 font-bold'>LOG IN</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="card shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input  {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: "Email Address is required"
                                        }
                                    },
                                    {
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email?.type === 'required' && <p className='text-red-400 pb-2'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-400  pb-2'>{errors.email.message}</p>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        }
                                    })} type="text" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-400  pb-2'>{errors.password.message}</p>}

                                <label className="label">
                                    <p className='text-center'>New To COMPUTER ZONE? <span className='border-0 bg-dark text-primary font-bold' onClick={navigateRegister}>REGISTER</span></p>
                                </label>
                            </div>

                            <p className='text-red-500'> {signInError}</p>
                            <div className="form-control mt-6">

                                <input type="submit" value="Log In" className="input w-full mb-4 bg-primary text-white font=bold text-lg border-none" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Social></Social>
        </>

    );
};

export default Login;