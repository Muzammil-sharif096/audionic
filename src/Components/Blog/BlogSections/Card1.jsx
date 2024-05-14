import React from 'react'
function Card1({data}) {
  return (
    <div>
         <div className='bg-[#333] grid gap-4 h-[55vh]'>
            <div className=''>
            <img src={data.img} alt=""/>
            </div>
            <h1 className='text-xl font-bold text-white pb-20 pl-2'>{data.h1}</h1>
         </div>
    </div>
  )
}
export default Card1