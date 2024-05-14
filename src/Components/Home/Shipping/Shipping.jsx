import React from 'react'

const Shipping = () => {
    return (
        <div>
            <div className='bg-black/90 flex items-center justify-center space-y-2 gap-12 p-4'>
                <div className='items-center gap-4 flex flex-col sm:flex-row justify-center text-center'>
                    <img className='w-11 pt-1' src="./img/shipping.avif" alt="" />
                    <h3 className='text-sm text-white'>Free Shipping</h3>
                </div>
                <div className='items-center gap-4 flex flex-col sm:flex-row justify-center text-center'>
                    <img className='w-9' src="./img/exclusive.png" alt="" />
                    <h3 className='text-sm text-white'>Exclusive Deals</h3>
                </div>
                <div className='items-center gap-4 flex flex-col sm:flex-row justify-center text-center'>
                    <img className='w-9' src="./img/secure.png" alt="" />
                    <h3 className='text-sm text-white'>Secure Checkout</h3>
                </div>
            </div>
            <div className='bg-black/70 flex items-center justify-center space-y-2 gap-12 p-4'>
                <p className='text-center text-sm text-gray-400'>Pakistan's No.1 audio & wearables brand. Audionic holds the widest range of wireless Earbuds, Bluetooth Speakers, home audio & Accessories. From <br /> workouts to adventures, We have you covered!</p>
            </div>
        </div>
    )
}

export default Shipping
