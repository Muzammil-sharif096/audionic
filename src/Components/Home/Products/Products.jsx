import React from 'react'
import { imgdata, products } from '../../../DATA'


const Products = () => {
    return (
        <div className='xl:px-20 p-4 xl:py-12 bg-black space-y-16'>
            <div className="px-16">
                <marquee
                    behavior=""
                    direction="scroll"
                    scrollamount=""
                    className="text-white text-3xl font-bold"
                >
                    <span className="text-red-500"> Pakistan's # 1 Audio Brand </span>
                    Pakistan's # 1 Audio Brand Pakistan's # 1 Audio Brand Pakistan's #
                    1 Audio Brand
                    <span style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', WebkitTextSizeAdjust: "100%", WebkitTapHighlightColor: "transparent", }}>
                        Pakistan's # 1 Audio Brand Pakistan's # 1 Audio
                        Brand Pakistan's # 1 Audio Brand Pakistan's # 1 Audio Brand
                        Pakistan's # 1 Audio Brand
                    </span>
                </marquee>
            </div>
            <h1 className='text-5xl text-center font-bold text-white'>Best Sellers</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-6'>
                {
                    products.slice(0, 3).map((ele, index) => {
                        return (
                            <div className='border-2 bg-gray-200 rounded-md flex flex-col h-full'>
                                <div className='img flex justify-center rounded-b-full'>
                                    <img src={ele.img} alt='' />
                                </div>
                                <div className='flex-1 px-3 py-4 border-2 flex flex-col justify-between'>
                                    <div className='space-y-1'>
                                        <h1 className='font-semibold text-base'>{ele.h1}</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-sm font-bold text-red-500'>{ele.price}</p>
                                            <p className='text-sm'><del className='text-sm'>{ele.delprice}</del></p>
                                        </div>
                                        <h2 className='text-sm text-gray-500 font-normal'>{ele.h2}</h2>
                                        <h3 className='text-sm text-gray-500 font-normal'>{ele.h3}</h3>
                                        <h4 className='text-sm text-gray-500 font-normal'>{ele.h4}</h4>
                                        <h5 className='text-sm text-gray-500 font-normal'>{ele.h5}</h5>
                                    </div>
                                    {index === 0 && <div className='flex gap-2 mt-2'>
                                        <div className='h-5 w-5 rounded-full bg-black'></div>
                                        <div className='h-5 w-5 rounded-full bg-white'></div>
                                        <div className='h-5 w-5 rounded-full bg-black'></div>
                                        <div className='h-5 w-5 rounded-full bg-blue-500'></div>
                                    </div>}
                                    <div className='pt-6'>
                                        <button className='w-full text-white tracking-wider bg-red-500 p-2.5 rounded-tr-md rounded-br-full rounded-bl-sm'>{ele.btn}</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <h1 className='text-5xl text-center font-bold text-white'>Trending Earbuds</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  gap-6'>
                {
                    imgdata.map((ele) => {
                        return (
                            <div className='flex justify-center'>
                                <img className='w-full' src={ele.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-5xl text-center font-bold text-white'>Top Wireless</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6'>
                {
                    products.slice(3, 6).map((ele) => {
                        return (
                            <div className='border-2 bg-gray-200 rounded-md flex flex-col h-full'>
                                <div className='img flex justify-center rounded-b-full'>
                                    <img src={ele.img} alt='' />
                                </div>
                                <div className='flex-1 px-3 py-4 border-2 flex flex-col justify-between'>
                                    <div className='space-y-1'>
                                        <h1 className='font-semibold text-base'>{ele.h1}</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-sm font-bold text-red-500'>{ele.price}</p>
                                            <p className='text-sm'><del className='text-sm'>{ele.delprice}</del></p>
                                        </div>
                                        <h2 className='text-sm text-gray-500 font-normal'>{ele.h2}</h2>
                                        <h3 className='text-sm text-gray-500 font-normal'>{ele.h3}</h3>
                                        <h4 className='text-sm text-gray-500 font-normal'>{ele.h4}</h4>
                                        <h5 className='text-sm text-gray-500 font-normal'>{ele.h5}</h5>
                                    </div>
                                    <div className='flex gap-2 mt-2'>
                                        <div className='h-5 w-5 rounded-full bg-black'></div>
                                        <div className='h-5 w-5 rounded-full bg-white'></div>
                                        <div className='h-5 w-5 rounded-full bg-black'></div>
                                        <div className='h-5 w-5 rounded-full bg-blue-500'></div>
                                    </div>
                                    <div className='pt-6'>
                                        <button className='w-full text-white tracking-wider bg-red-500 p-2.5 rounded-tr-md rounded-br-full rounded-bl-sm'>{ele.btn}</button>
                                    </div>
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






