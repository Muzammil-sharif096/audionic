import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../../DATA';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [div, setDiv] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    const handleSearchItem = (e) => {
        const value = e.target.value.toLowerCase();

        if (value === '') {
            setFilteredData([]);
        }
        else {
            const filteredData = products.filter((item) =>
                item.h1.toLowerCase().includes(value)
            );
            setFilteredData(filteredData);
        }
    };

    const handleclk = () => {
        setShowNavbar(false)
    }

    return (
        <div className='bg-black xl:px-12 p-4 py-4'>
            <nav className='flex w-full justify-between items-center'>
                <Link to='/'>
                    <img src="./img/logo (9).png" alt="" />
                </Link>
                <ul className='xl:flex gap-2 hidden cursor-pointer text-white font-semibold items-center'>
                    <li className="group  flex items-center gap-1.5 tracking-[1px] hover:text-gray-300"><Link to='/sale'>Sales</Link></li>
                    <li className="group relative  w-full flex items-center border-l-2 border-red-500 pl-2 tracking-[1px] hover:text-gray-300">Shop
                        <IoIosArrowDown className='ml-1' />
                        <div className="absolute hidden bg-black transition-opacity duration-300 ease-in-out delay-100  top-full -left-[795px] w-[99.5vw] p-16 text-white z-10 group-hover:block mt-4">
                            <div className='grid grid-cols-4  gap-6'>
                                <div >
                                    <img src="./img/101.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/wire.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/wooferspeaker.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/portablespeaker.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/hometheaters.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/stero.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/speakersmobile.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/mobile.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/trolly.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/lifestyle.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/woofer.avif" alt="" />
                                </div>
                                <div >
                                    <img src="./img/limited.avif" alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="group relative flex items-center  border-l-2 border-red-500 pl-2 tracking-[1px] hover:text-gray-300">
                        More
                        <IoIosArrowDown className='ml-1' />
                        <div className="absolute hidden bg-black top-full left-16 w-60 right-0 px-6 h-72 py-3 text-white z-10 group-hover:block transition-opacity duration-300 ease-in-out delay-100">
                            <ul className='space-y-7'>
                                <li><Link to='/about'>About Audionic</Link></li>
                                <li>Track My Order</li>
                                <li><Link to='/corporate'>Corporate Sales & Gifts</Link></li>
                                <li><Link to='/blog'>Our Blogs</Link></li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className='xl:flex hidden gap-32 justify-between items-center'>
                    <div className='relative'>
                        <input
                            onChange={handleSearchItem} className='p-1.5 w-full pl-7  rounded-full' type="text" name="" id="" placeholder='Search' />
                        <FaSearch className='absolute text-sm top-3 left-2' />
                        {
                            filteredData.length > 0 && (
                                <div className="absolute -left-52 right-0 w-96 top-14 bg-white shadow-lg rounded-md z-10 max-h-[600px] overflow-auto">
                                    {
                                        filteredData.map((ele, index) => (
                                            <div key={index} className="p-6 space-y-2">
                                                <img className='w-20' src={ele.img} alt="" />
                                                <h1 className='text-sm font-bold tracking-wider'> Title : {ele.h1}</h1>
                                                <p className='text-sm font-bold tracking-wider text-black'> Price : {ele.price}</p>
                                                <hr className='border' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className='xl:flex hidden cursor-pointer items-center gap-3 text-white'>
                        <div className='group relative'>
                            <img onClick={() => setDiv(true)} className='w-5' src="./img/contact.avif" alt="" />
                            <h1 className='absolute w-24 top-6 right-0 text-sm hidden duration-500 transition-all group-hover:block text-white'>My Account</h1>
                        </div>
                        <div className='group relative'>
                            <FaShoppingCart onClick={() => { setSidebar(true) }} className='text-xl' />
                            <h1 className='absolute top-6 right-0 text-sm hidden duration-500 transition-all group-hover:block text-white'>Cart</h1>
                        </div>
                    </div>
                </div>
                <button onClick={() => setShowNavbar(true)} className='xl:hidden text-white block'>
                    <FaBars className='text-2xl' />
                </button>
                {showNavbar && (
                    <div className='xl:hidden fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50'>
                        <div className='flex justify-end p-4'>
                            <button className='text-white text-2xl cursor-pointer' onClick={() => setShowNavbar(false)}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className='mt-4 p-2'>
                            <Link onClick={handleclk} to='/'>
                                <img src="./img/logo (9).png" alt="" />
                            </Link>
                            <hr className='border-[#63B597] p-2 mt-2' />
                            <ul className='text-white flex flex-col cursor-pointer items-start px-4 text-xl space-y-4 font-semibold text-center'>
                                <li><Link onClick={handleclk} to='/sale'>Sales</Link></li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                                <li>Create An Account</li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                                <li><Link onClick={handleclk} to='/about'>About Audionic</Link></li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                                <li><Link onClick={handleclk} to='/corporate'>Corporate</Link></li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                                <li><Link onClick={handleclk} to='/login'>Login</Link></li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                            </ul>
                        </div>
                    </div>
                )}
                {
                    sidebar && (
                        <div className='fixed xl:block hidden duration-1000 transition-all top-0 right-0 w-96 h-screen bg-red-500 bg-opacity-100 z-50'>
                            <div className='flex justify-end p-4'>
                                <button className='text-white text-2xl cursor-pointer' onClick={() => setSidebar(false)}>
                                    <FaTimes />
                                </button>
                            </div>
                            <div className='mt-4 p-2 text-center'>
                                <h1 className='text-3xl text-white'>Cart is Empty</h1>
                            </div>
                        </div>
                    )
                }
            </nav>
            {div && (
                <div className='bg-black absolute h-[85px] p-1.5 px-2 top-[80px]  w-[210px] right-6'>
                    <div className='flex justify-between'>
                        <h1 className='text-red-500 text-sm font-bold'>Hi Audionic Star!</h1>
                        <FaTimes className='text-white cursor-pointer' onClick={() => { setDiv(false) }} />
                    </div>
                    <button className='w-full p-1.5 mt-4 text-sm font-bold text-white  bg-red-500'><Link to='/login'>Login</Link></button>
                </div>
            )}
        </div>
    )
}

export default Navbar;
