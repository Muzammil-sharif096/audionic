import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaIdeal } from "react-icons/fa6";
import { BsJournalCheck } from "react-icons/bs";
const schema = yup.object().shape({
    firstname: yup.string().firstname().required(),
    lastname: yup.string().lastname().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});
function SignUp() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };
    return (
        <div className='pt-10 '>
            <div className=' px-36'>
                <h1 className='text-3xl font-semibold text-center border-b border-b-black pb-7'>CREATE AN ACCOUNT</h1>
            </div>
            <div>
                <form action="" className='flex flex-col px-36 gap-4 pt-10' onSubmit={handleSubmit(onSubmitHandler)}>
                    <label htmlFor="firstname">First Name</label>
                    <input type="firstname" {...register("firstname")} id='firstname' className='border border-gray-400 w-1/3 p-2 ' />
                    <p>{errors.firstname?.message}</p>
                    <label htmlFor="secondname">Last Name</label>
                    <input type="lastname" {...register("lastname")} id='secondname' className='border border-gray-400 w-1/3 p-2' />
                    <p>{errors.lastname?.message}</p>
                    <label htmlFor="email">Your Email Address</label>
                    <input type="text" {...register("email")} id='email' className='border border-gray-400 p-2 w-1/3 ' />
                    <p>{errors.email?.message}</p>
                    <label htmlFor="password">Your Password</label>
                    <input type="text" {...register("password")} id='password' className='border border-gray-400 p-2 w-1/3 ' />
                    <p>{errors.password?.message}</p>
                    <button className='border border-black px-8 w-56 py-3 hover:bg-red-500 hover:border-none hover:text-white'>CREATE AN ACCOUNT</button>
                </form>
            </div>
            <div className='pt-32'>
                <div className="px-16 py-10 bg-black">
                    <marquee
                        behavior=""
                        direction="scroll"
                        scrollamount=""
                        className="text-white text-3xl font-bold"
                    >
                        <span className="text-red-500"> Pakistan's # 1 Audio Brand </span>
                        Pakistan's # 1 Audio Brand Pakistan's # 1 Audio Brand Pakistan's #
                        1 Audio Brand Pakistan's # 1 Audio Brand Pakistan's # 1 Audio
                        Brand Pakistan's # 1 Audio Brand Pakistan's # 1 Audio Brand
                        Pakistan's # 1 Audio Brand
                    </marquee>
                </div>
                <div className='bg-black/90 flex md:gap-10 gap-6  text-white justify-center lg:gap-28 py-5'>
                    <div className='flex md:flex-row flex-col items-center gap-3 sm:text-xl text-sm text-center'><MdOutlineLocalShipping className='text-red-600 text-4xl' />
                        <h1>Free Shipping</h1></div>
                    <div className='flex md:flex-row flex-col items-center gap-3 sm:text-xl text-sm text-center'><FaIdeal className='text-red-600 text-4xl' />
                        <h1>Exclusive Deals</h1></div>
                    <div className='flex md:flex-row flex-col items-center gap-3 sm:text-xl text-sm text-center'><BsJournalCheck className='text-red-600 text-4xl' />
                        <h1>Secure Checkout</h1></div>
                </div>
                <div className='bg-[#333] px-20 py-5 '>
                    <h1 className='text-gray-400 text-center lg:text-[14px] sm:text-[10px] text-[6px] '>Pakistan's No.1 audio & wearables brand. Audionic holds the widest range of wireless Earbuds, Bluetooth Speakers, home audio & Accessories. From <br /> workouts to adventures, We have you covered!</h1>
                </div>
            </div>
        </div>
    )
}
export default SignUp