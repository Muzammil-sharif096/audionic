import React from 'react'
import { imgdata, products } from '../../../DATA'


const Products = () => {
    return (
        <div className='xl:px-20 p-4 xl:py-12 bg-black space-y-16'>
            <h1 className='text-6xl text-center font-bold text-white'>Best Sellers</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-1 grid-cols-1  gap-6'>
                {
                    products.slice(0, 3).map((ele) => {
                        return (
                            <div className='border-2 rounded-md text-white'>
                                <div className='flex justify-center bg-gray-400 lg:rounded-b-full rounded-none'>
                                    <img src={ele.img} alt="" />
                                </div>
                                <div className=' px-3 space-y-2 py-4'>
                                    <h1 className='font-bold text-base'>{ele.h1}</h1>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-sm font-bold text-red-500'>{ele.price}</p>
                                        <p className='text-sm'><del className='text-sm'>{ele.delprice}</del></p>
                                    </div>
                                    <h2 className='text-sm font-semibold'>{ele.h2}</h2>
                                    <h3 className='text-sm font-semibold'>{ele.h3}</h3>
                                    <h4 className='text-sm font-semibold'>{ele.h4}</h4>
                                    <h5 className='text-sm font-semibold'>{ele.h5}</h5>
                                    <div className='py-4'>
                                        <button className='w-full text-white tracking-wider  bg-red-500 p-2.5 rounded-lg'>{ele.btn}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-6xl text-center font-bold text-white'>Trending Earbuds</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-1 grid-cols-1  gap-6'>
                {
                    imgdata.map((ele) => {
                        return (
                            <div className='flex justify-center'>
                                <img src={ele.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-6xl text-center font-bold text-white'>Top Wireless</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-1 grid-cols-1 gap-6'>
                {
                    products.slice(3, 6).map((ele) => {
                        return (
                            <div className='border-2 rounded-md  text-white'>
                                <div className='flex justify-center bg-gray-400 lg:rounded-b-full rounded-none'>
                                    <img src={ele.img} alt="" />
                                </div>
                                <div className=' px-3 space-y-2 py-4'>
                                    <h1 className='font-bold text-base'>{ele.h1}</h1>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-sm font-bold text-red-500'>{ele.price}</p>
                                        <p className='text-sm'><del className='text-sm'>{ele.delprice}</del></p>
                                    </div>
                                    <h2 className='text-sm font-semibold'>{ele.h2}</h2>
                                    <h3 className='text-sm font-semibold'>{ele.h3}</h3>
                                    <h4 className='text-sm font-semibold'>{ele.h4}</h4>
                                    <h5 className='text-sm font-semibold'>{ele.h5}</h5>
                                    <div className='py-4'>
                                        <button className='w-full text-white tracking-wider  bg-red-500 p-2.5 rounded-lg'>{ele.btn}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-6xl text-center font-bold text-white'>Audionic Blogs</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-1 xl:px-28 grid-cols-1 gap-6'>
                {
                    products.slice(6, 9).map((ele) => {
                        return (
                            <div className='rounded-md space-y-3 text-white'>
                                <div className='flex justify-center border-2 p-1'>
                                    <img src={ele.img} alt="" />
                                </div>
                                <div className='space-y-4 px-1.5'>
                                    <p className='xl:text-xl text-sm tracking-wider font-bold hover:text-red-500'>{ele.p}</p>
                                    <button className='text-sm text-white tracking-wider hover:bg-red-500 font-bold border-2 border-red-500 px-6 py-2'>{ele.btn2}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-6xl text-center font-bold text-white'>What They Say About Us:</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-1 xl:px-28 grid-cols-1 gap-6'>
                {
                    products.slice(9, 12).map((ele) => {
                        return (
                            <div className='rounded-md bg-red-500 space-y-3 text-white'>
                                <div className='flex justify-center p-1'>
                                    <img src={ele.img} alt="" />
                                </div>
                                <div className='space-y-4 px-2 py-4 text-center'>
                                    <h1 className='xl:text-xl text-sm tracking-wider font-bold hover:text-red-500'>{ele.h1}</h1>
                                    <h2 className='xl:text-lg text-sm tracking-wider  hover:text-red-500'>{ele.h2}</h2>
                                    <button className='tracking-wider text-black text-sm bg-white font-bold rounded-full px-6 py-2'>{ele.btn3}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
