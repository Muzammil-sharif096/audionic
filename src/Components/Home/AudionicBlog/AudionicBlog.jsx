import React from 'react'
import { products } from '../../../DATA'
const AudionicBlog = () => {
    return (
        <div className='bg-black xl:pt-20 pt-10 xl:p-0 p-4 space-y-12'>
            <h1 className='text-5xl text-center font-bold text-white xl:pt-20 pt-6'>Audionic Blogs</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 xl:px-28  grid-cols-1 gap-6'>
                {
                    products.slice(6, 9).map((ele) => {
                        return (
                            <div className='rounded-md space-y-3 text-white'>
                                <div className='flex h-72  justify-center p-1'>
                                    <img className='w-full grayscale hover:grayscale-0' src={ele.img} alt="" />
                                </div>
                                <div className='space-y-4 px-1.5'>
                                    <p className='xl:text-lg text-sm tracking-wider font-bold hover:text-red-500'>{ele.h1}</p>
                                    <button className='text-sm text-white tracking-wider rounded-md font-bold border-2 border-red-500 px-6 py-2'>{ele.btn2}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AudionicBlog
