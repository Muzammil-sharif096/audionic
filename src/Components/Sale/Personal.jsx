import React from 'react'
import { useState } from 'react'

const Personal = () => {
    const [showcompo, setshowcompo] = useState(false)


    const openpage = () => {
        setshowcompo(true)
    }
    const saleItems = [
        { id: 1, name: 'Airbud Signature s650 Wireless Earbuds', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/AirbudSignatureS650-Image-7_1_255x255.png', price: 100 },
        { id: 2, name: 'Elite 1000 Sound bar', para1: 'Rs.37,999', colors: [{ color: "bg-red-600 " }, { color: 'bg-green-600' }, { color: 'bg-black' }, { color: 'bg-blue-700' }], para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/ELITEBAR1000-6_255x255.png', price: 200 },
        { id: 3, name: 'Airbud 550 slide Earbuds', para1: 'Rs.3,899', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/Airbud550-Png-2_255x255.png', price: 300 },
        { id: 4, name: ' Magneto Wireless 1000MAh Power Bank', para1: 'Rs.4,599', colors: [{ color: "bg-red-600 " }, { color: 'bg-green-600' }, { color: 'bg-black' }, { color: 'bg-blue-700' }], para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-black-lava-bluetooth-speaker-34852274012316_255x255.png', price: 400 },
        { id: 5, name: 'Airbud Signature s650 Wireless Earbuds', para1: 'Rs.4,199', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-green-airbud-590-wireless-earbuds-36447054463132_255x255.png', price: 500 },
        { id: 6, name: 'AD 7000 Multimedia Speaker', para1: 'Rs.6,499', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-default-title-solo-x50-bluetooth-speaker-34510759723164_255x255.png', price: 600 },
        // Diğer ürünler...
        { id: 16, name: 'AD 7000 Multimedia Speaker', para1: 'Rs.8,699', colors: [{ color: "bg-red-600 " }, { color: 'bg-green-600' }, { color: 'bg-black' }, { color: 'bg-blue-700' }], para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-default-title-ad-7000-plus-2-1-multimedia-speaker-ac-dc-supported-33845783101596_255x255.png', price: 1600 },
        { id: 17, name: 'Benz 1000 MAH  Power Bank', para1: 'Rs.3,249', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-default-title-benz-black-10000-mah-power-bank-5x-devices-3-in-1-cable-35440524722332_255x255.png', price: 1700 },
        { id: 18, name: 'Dany Evolution smartwatch', para1: 'Rs.14,999', colors: [{ color: "bg-red-600 " }, { color: 'bg-green-600' }, { color: 'bg-black' }, { color: 'bg-blue-700' }], para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/Evolution-ThumbnailImage-2_255x255.png', price: 1800 },
        { id: 19, name: 'Airbud 550 slide Earbuds', para1: 'Rs.4,199', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-red-airbud-500-36128278347932_255x255.png', price: 1900 },
        { id: 20, name: 'Airbud Signature s650 Wireless Earbuds', para1: 'Rs.3,999', colors: [{ color: "bg-red-600 " }, { color: 'bg-green-600' }, { color: 'bg-black' }, { color: 'bg-blue-700' }], para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-black-airbud-425-tws-earbuds-35775641485468_255x255.png', price: 2000 },
        { id: 21, name: 'Dany Evolution smartwatch', para1: 'Rs.6,699',  para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/4png_255x255.png', price: 2100 },
        { id: 4, name: ' Magneto Wireless 1000MAh Power Bank', para1: 'Rs.4,599', colors: [{ color: "bg-red-600 " }, { color: 'bg-green-600' }, { color: 'bg-black' }, { color: 'bg-blue-700' }], para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-black-supreme-x-10-wireless-neckband-33569167081628_255x255.png', price: 400 },
        { id: 5, name: 'Airbud Signature s650 Wireless Earbuds', para1: 'Rs.4,199', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-green-airbud-590-wireless-earbuds-36447054463132_255x255.png', price: 500 },
        { id: 6, name: 'AD 7000 Multimedia Speaker', para1: 'Rs.6,499', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-default-title-solo-x50-bluetooth-speaker-34510759723164_255x255.png', price: 600 },
    ];


    console.log("Colors", saleItems)
    return (
        <>
            <div className=' bg-black'>
                <div className=" border-2 border-black   ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:px-6 p-4  gap-4">
                        {saleItems.map((item, index) => (
                            <div className="overflow-hidden bg-gray-100 rounded-xl grid">
                                <div className='flex justify-center items-center bg-gray-300  rounded-b-[80%]  p-4  '>
                                    <img className=" " src={item.image} alt='' />
                                </div>
                                <div className="px-6 flex flex-col justify-center gap-1">
                                    <h2 className="font-medium text-base ">{item.name}</h2>
                                    <p className=' text-red-600 text-sm font-bold'>{item.para1} <span className=' font-normal text-gray-700 text-sm delete'> <del>Rs.9,499</del></span></p>
                                    <div className=' flex  items-center gap-1'>
                                        <div className=' h-1 w-1 bg-red-600'></div>
                                        <p className="text-gray-700 text-sm">{item.para2}</p>
                                    </div>
                                    <div className=' flex  items-center gap-1'>
                                        <div className=' h-1 w-1 bg-red-600'></div>
                                        <p className="text-gray-700 text-sm">{item.para3}</p>
                                    </div>

                                    <div className=' flex  items-center gap-1'>
                                        <div className=' h-1 w-1 bg-red-600'></div>
                                        <p className="text-gray-700 text-sm">{item.para4}</p>
                                    </div>

                                    <div className=' flex  items-center gap-1'>
                                        <div className=' h-1 w-1 bg-red-600'></div>
                                        <p className="text-gray-700 text-sm">{item.para5}</p>
                                    </div>
                                    

                                        <div className="flex gap-1.5 pt-1 ">
                                            {item.colors && item.colors.map((i) => {
                                                return (
                                                    <div className={`h-4 w-4 rounded-full ${i.color}`}></div>
                                                )
                                            })}
                                        </div>
                                    
                                </div>
                                <div className=' p-4 self-end'>
                                    <button onClick={openpage} className='h-12 btn text-white  rounded-br-full    w-72 sm:w-96  md:w-80  lg:w-96'>ADD TO CART</button>
                                    {
                                        showcompo && (
                                            <div className='flex justify-center items-center h-screen absolute left-1/2'>
                                                <div className='fixed top-0 left-0 w-full h-full bg-gray-900  opacity-5 z-50'></div>
                                                <div className='bg-black fixed top-5 p-20  md:w-3/4 w-full space-y-1 h-[calc(100vh-40px)] rounded-lg z-50 border'>
                                                    <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer p-2' onClick={() => setshowcompo(false)}>X</h1>
                                                    <div className=' grid md:grid-cols-3 grid-cols-1 gap-6 '>
                                                        <div className='  space-y-8'>
                                                            <h2 className=' text-white text-lg'>QUICK CART</h2>
                                                            <p className=' text-sm text-white'>5 items in your shopping cart</p>
                                                            <button className='  h-12 text-sm w-full bg-white hover:bg-gray-600 duration-300  hover:text-white text-black'>CONTINUE SHOPPING</button>
                                                            <button className='  h-12 text-sm w-full bg-white hover:bg-gray-600 duration-300  hover:text-white text-black'>VIEW CART</button>
                                                            <button className='  h-12 text-sm w-full bg-red-600  text-white'>PROCEED TO CHECKOUT</button>


                                                        </div>
                                                        <div className='  space-y-5 hidden md:block px-10'>

                                                            <div className=' flex items-center justify-center gap-2 '>
                                                                <img src="/img/AirbudSignatureS650-Image-10_1_160x.png" alt="" />
                                                                <p className=' text-sm text-white'>Airbud Signature S650</p>
                                                            </div>
                                                            <div className=' flex items-center justify-center gap-2 '>
                                                                <img src="/img/ELITEBAR1000-6_160x.png" alt="" />
                                                                <p className=' text-sm text-white'>Airbud Signature S650</p>
                                                            </div>
                                                        </div>
                                                        <div className='  space-y-14 hidden md:block px-10  '>
                                                            <div className=' flex lg:flex-row flex-col gap-4 items-center justify-center'>
                                                                <p className=' text-white'>Rs.26,999</p>
                                                                <div className=' flex'>
                                                                    <button className=' h-10 w-8 border text-white'>-</button>
                                                                    <button className=' h-10 w-8 border text-white'>1</button>
                                                                    <button className=' h-10 w-8 border text-white'>+</button>


                                                                </div>

                                                            </div>
                                                            <div className=' flex gap-4 items-center justify-center lg:flex-row flex-col'>
                                                                <p className=' text-white'>Rs.26,999</p>
                                                                <div className=' flex'>
                                                                    <button className=' h-10 w-8 border text-white'>-</button>
                                                                    <button className=' h-10 w-8 border text-white'>1</button>
                                                                    <button className=' h-10 w-8 border text-white'>+</button>


                                                                </div>

                                                            </div>

                                                        </div>


                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-wrap justify-center  gap-3 pt-20 pb-20 px-4'>
                    <div className=' lg:w-96 w-full bg-gray-800  space-y-3  pb-4 '>
                        <img src="/img/earbuds_large.png" alt="" />
                        <div className='pl-3 space-y-4'>
                            <p className=' text-white hover:text-red-600 duration-300'>Wireless Earbuds Buying Guide</p>
                            <button className=' h-10 w-28 duration-300 border-2 hover:bg-red-600 border-red-600 text-white'>Read more</button>
                        </div>
                    </div>
                    <div className='lg:w-96 w-full bg-gray-800 space-y-3 pb-4   '>
                        <img src="/img/Airdot_570x.png" alt="" />
                        <div className='pl-3 space-y-4'>
                            <p className=' text-white hover:text-red-600 duration-300'>Airbud 625 Pro Vs Airbud 550 Slide</p>
                            <button className=' h-10 w-28 duration-300 border-2 hover:bg-red-600 border-red-600 text-white'>Read more</button>
                        </div>
                    </div>
                    <div className=' lg:w-96 w-full bg-gray-800   space-y-3  pb-4 '>
                        <img src="/img/equalizer_large.png" alt="" />
                        <div className='pl-3 space-y-4'>
                            <p className=' text-white hover:text-red-600 duration-300'>How To Use An Equalizer To Tune Your Audio Setup?</p>
                            <button className=' h-10 w-28 duration-300 hover:bg-red-600 border-2 border-red-600 text-white'>Read more</button>
                        </div>
                    </div>
                    <div className="px-16 pt-20">
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
                </div>
            </div>
        </>
    )
}

export default Personal
