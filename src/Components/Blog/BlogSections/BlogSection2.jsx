import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaIdeal } from "react-icons/fa6";
import { BsJournalCheck } from "react-icons/bs";
function BlogSection2() {
   return (
      <div>
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
   )
}
export default BlogSection2
