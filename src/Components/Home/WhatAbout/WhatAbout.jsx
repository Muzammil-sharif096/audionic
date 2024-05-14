import React from 'react'
import { products } from '../../../DATA'
const WhatAbout = () => {
    return (
        <div className='bg-black xl:pt-20 pt-10 xl:py-8 py-4  p-4 space-y-20'>
            <h1 className='text-5xl text-center font-bold text-white xl:pt-16 pt-6'>What They Say About Us:</h1>
            <div className='grid xl:grid-cols-3 lg:grid-cols-1 xl:px-28 xl:space-y-0 space-y-28 grid-cols-1 pt-16 gap-6'>
                {
                    products.slice(9, 12).map((ele) => {
                        return (
                            <div className='bg-red-500 space-y-3 text-white'>
                                <div className='flex justify-center p-1'>
                                    <img className='-mt-32' src={ele.img} alt="" />
                                </div>
                                <div className='space-y-4 px-2 py-4 text-center'>
                                    <h1 className='xl:text-xl text-sm  font-medium hover:text-red-500'>{ele.h1}</h1>
                                    <h2 className='xl:text-md text-sm tracking-wider  hover:text-red-500'>{ele.h2}</h2>
                                    <button className='tracking-wider text-black text-sm bg-white font-bold rounded-full px-6 py-2'>{ele.btn3}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="px-16 -pt-32">
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
        </div>
    )
}

export default WhatAbout
