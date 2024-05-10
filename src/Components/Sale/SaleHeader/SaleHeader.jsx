import React from 'react'
import { useState } from 'react'

const SaleHeader = () => {
    const [showcompo, setshowcompo] = useState(false)


    const openpage = () => {
        setshowcompo(true)
    }
    const saleItems = [
        { id: 1, name: 'Airbud Signature s650 Wireless Earbuds', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/AirbudSignatureS650-Image-7_1_255x255.png', price: 100 },
        { id: 2, name: 'Elite 1000 Sound bar', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/ELITEBAR1000-6_255x255.png', price: 200 },
        { id: 3, name: 'Airbud 550 slide Earbuds', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/Airbud550-Png-2_255x255.png', price: 300 },
        { id: 4, name: ' Magneto Wireless 1000MAh Power Bank', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/ProductImage-5_255x255.png', price: 400 },
        { id: 5, name: 'Airbud Signature s650 Wireless Earbuds', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-green-airbud-590-wireless-earbuds-36447054463132_255x255.png', price: 500 },
        { id: 6, name: 'AD 7000 Multimedia Speaker', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-default-title-solo-x50-bluetooth-speaker-34510759723164_255x255.png', price: 600 },
        // Diğer ürünler...
        { id: 16, name: 'AD 7000 Multimedia Speaker', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-default-title-ad-7000-plus-2-1-multimedia-speaker-ac-dc-supported-33845783101596_255x255.png', price: 1600 },
        { id: 17, name: 'Benz 1000 MAH  Power Bank', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-default-title-benz-black-10000-mah-power-bank-5x-devices-3-in-1-cable-35440524722332_255x255.png', price: 1700 },
        { id: 18, name: 'Dany Evolution smartwatch', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/Evolution-ThumbnailImage-2_255x255.png', price: 1800 },
        { id: 19, name: 'Airbud 550 slide Earbuds', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-red-airbud-500-36128278347932_255x255.png', price: 1900 },
        { id: 20, name: 'Airbud Signature s650 Wireless Earbuds', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-black-airbud-425-tws-earbuds-35775641485468_255x255.png', price: 2000 },
        { id: 21, name: 'Dany Evolution smartwatch', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/4png_255x255.png', price: 2100 },
        { id: 4, name: ' Magneto Wireless 1000MAh Power Bank', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/ProductImage-5_255x255.png', price: 400 },
        { id: 5, name: 'Airbud Signature s650 Wireless Earbuds', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-green-airbud-590-wireless-earbuds-36447054463132_255x255.png', price: 500 },
        { id: 6, name: 'AD 7000 Multimedia Speaker', para1: 'Rs 37,99', para2: 'Quad Mic ENC', para3: '35 Hours Playtime', para4: 'Gaming Mode', para5: 'Low Latency 45ms', image: '/img/audionic-the-sound-master-default-title-solo-x50-bluetooth-speaker-34510759723164_255x255.png', price: 600 },
    ];


    return (
        <>
            <div className=' bg-black'>
                <div className=" border-2 border-black   ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:px-12 p-4  gap-5">
                        {saleItems.map((item) => (
                            <div className="rounded overflow-hidden shadow-lg bg-white ">
                                <div className=' p-24 '>
                                    <img className="w-full" src={item.image} alt='' />
                                </div>
                                <div className="px-6 py-4 flex flex-col justify-center gap-1 ">
                                    <h2 className="font-medium text-base">{item.name}</h2>
                                    <p className=' text-red-600 text-sm font-bold'>{item.para1} <span className=' font-normal text-gray-400 text-sm delete'><del>Rs 442</del></span></p>
                                    <div className=' flex  items-center gap-1'>
                                        <div className=' h-2 w-2 bg-red-600'></div>
                                        <p className="text-gray-700 text-sm">{item.para2}</p>
                                    </div>
                                    <div className=' flex  items-center gap-1'>
                                        <div className=' h-2 w-2 bg-red-600'></div>
                                        <p className="text-gray-700 text-sm">{item.para3}</p>
                                    </div>

                                    <div className=' flex  items-center gap-1'>
                                        <div className=' h-2 w-2 bg-red-600'></div>
                                        <p className="text-gray-700 text-sm">{item.para4}</p>
                                    </div>

                                    <div className=' flex  items-center gap-1'>
                                        <div className=' h-2 w-2 bg-red-600'></div>
                                        <p className="text-gray-700 text-sm">{item.para5}</p>
                                    </div>




                                </div>
                                <div className=' p-4 '>
                                    <button onClick={openpage} className=' h-12 text-white  bg-red-600 rounded-2xl w-full'>Add To Cart</button>

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
                <div className='flex flex-wrap justify-center  gap-7 pt-20 pb-20 px-4'>
                    <div className=' lg:w-96 w-full bg-gray-800  flex justify-center flex-col items-center gap-4 p-4 '>
                        <img src="/img/4png_255x255.png" alt="" />
                        <p className=' text-white'>Dany Evolution smartwatch</p>
                        <button className=' h-12 w-36 border-2 hover:bg-red-500 border-red-600 text-white'>Read more</button>
                    </div>
                    <div className='lg:w-96 w-full bg-gray-800  flex justify-center flex-col items-center gap-4 p-4 '>
                        <img src="/img/Airdots220ProPlus-ThumbnailImage..1_255x255.png" alt="" />
                        <p className=' text-white'>Wireless Earbuds Buying Guide</p>
                        <button className=' h-12 w-36 border-2 hover:bg-red-500 border-red-600 text-white'>Read more</button>
                    </div>
                    <div className=' lg:w-96 w-full bg-gray-800  flex justify-center flex-col items-center gap-4  p-4'>
                        <img src="/img/audionic-the-sound-master-default-title-ad-7000-plus-2-1-multimedia-speaker-ac-dc-supported-33845783101596_255x255.png" alt="" />
                        <p className=' text-white'>AD 7000 Multimedia Speaker</p>
                        <button className=' h-12 w-36 hover:bg-red-500 border-2 border-red-600 text-white'>Read more</button>
                    </div>
                    <div className="px-16">
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

export default SaleHeader
