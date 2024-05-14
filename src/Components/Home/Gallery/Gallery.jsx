import React from 'react'

const Gallery = () => {
    return (
        <div div className='text-white flex bg-black  xl:p-0 p-4 flex-col xl:flex-row ' >
            <div>
                <div className='relative group'>
                    <img className='' src="./img/sport.webp" alt="" />
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-black/70 p-2 top-0 left-0 w-full h-full'>
                        <div className='text-center xl:pt-60 sm:pt-28 pt-10'>
                            <h1 className='xl:text-3xl text-sm font-bold'>Sport</h1>
                            <p className='xl:text-lg text-sm'>Water and sweat resistant, light and secure fit makes them ideal for outdoor sports or workouts.</p>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <img src="./img/travel.webp" alt="" />
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-black/70 p-2 top-0 left-0 w-full h-full'>
                        <div className='text-center xl:pt-60 sm:pt-28 pt-10'>
                            <h1 className='xl:text-3xl text-sm font-bold'>Travel</h1>
                            <p className='xl:text-lg text-sm'>Comfortable for long flights and drives with ergonomic, snug fit and long lasting battery life</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative group'>
                    <img src="./img/fashion.webp" alt="" />
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-black/70 p-2 top-0 left-0 w-full h-full'>
                        <div className='text-center xl:pt-48 sm:pt-20 pt-6 '>
                            <h1 className='xl:text-3xl text-sm font-bold'>Fashionable</h1>
                            <p className='xl:text-lg text-sm'>
                                Designs that keep up with the latest trends with vibrant & unique colours.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='relative group'>
                        <img src="./img/favourite.webp" alt="" />
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-black/70 p-2 top-0 left-0 w-full h-full'>
                            <div className='text-center xl:pt-60 sm:pt-32 pt-10'>
                                <h1 className='xl:text-3xl text-sm font-bold'>All Time Favourites</h1>
                                <p className='xl:text-lg text-sm'>
                                    Your most favourites at the most incredible prices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img src="./img/corporate.webp" alt="" />
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-black/70 p-2 top-0 left-0 w-full h-full'>
                            <div className='text-center xl:pt-60 sm:pt-32 pt-2'>
                                <h1 className='xl:text-3xl text-sm font-bold'>Corporate</h1>
                                <p className='xl:text-lg text-sm'>
                                    Comfortable ear wear suitable for working from home, with battery life that easily lasts an entire day full of calls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Gallery
