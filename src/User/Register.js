import React from 'react';
import Social from './Social';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../firebase.init'
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const onSubmit = async (data) => {


        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('updated')
    }

    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }

    let registerError;
    if (error) {
        registerError = <p>{error?.message}</p>
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input  {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name?.type === 'required' && <p className='text-red-400 pb-2'>{errors.name.message}</p>}
                            </div>


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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <p className='text-red-500'> {registerError}</p>
                            <div className="form-control mt-6">

                                <input type="submit" value="Register" className="input w-full mb-4 bg-primary text-white font=bold text-lg border-none" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Social></Social>
        </>
    );
};

export default Register;