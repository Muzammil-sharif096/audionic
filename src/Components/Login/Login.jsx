import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});
const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };
    return (
        <div>
            <div className='lg:px-10 px-6 pt-32 xl:px-44'>
                <div className='bg-black text-white flex  justify-around p-3 font-semibold lg:text-xl text-xs lg:gap-20 gap-10'>
                    <h1>Returning Customer</h1>
                    <h1>New Customer</h1>
                </div>
                <div className='flex lg:flex-row flex-col justify-between sm:px-20 px-4 lg:px-5'>
                    <div className='py-14'>
                        <form action="" onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className='flex flex-col py-2 gap-2'>
                                <label htmlFor="firstinp">Email Address * </label>
                                <input type="text" id='firstinp' {...register("email")} className='border border-black  py-4 px-24 text-xs' />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className='flex flex-col py-2 gap-2'>
                                <label htmlFor="secondinp">Password * </label>
                                <input type="text" id='secondinp' {...register("password")} className='border border-black px-24   py-4 text-xs' />
                                <p>{errors.password?.message}</p>
                            </div>
                            <button className='border border-black px-6 py-2 text-lg font-bold'>LOGIN</button>
                        </form>
                    </div>
                    <div className=' pt-16 xl:px-60  sm:px-4'>
                        <h1 className='text-gray-500 text-[16px] py-4 leading-7'>Register with us for a faster checkout, to track the status of your order and more </h1>
                        <button className='bg-red-500 text-white px-10 py-2 font-semibold mt-7 hover:bg-white hover:text-black hover:border hover:border-black'> <Link to="/Account">CREATE AN ACCOUNT</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
