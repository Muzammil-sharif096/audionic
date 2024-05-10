import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../../DATA';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [div, setDiv] = useState(false);
    const [filteredData, setFilteredData] = useState([]);


    const [text, setText] = useState('')

    // const handleSearchItem = (e) => {
    //     const value = e.target.value.toLowerCase();

    //     if (value === '') {
    //         setFilteredData([]);
    //     }
    //     else {
    //         const filteredData = products.filter((item) =>
    //             item.h1.toLowerCase().includes(value)
    //         );
    //         setFilteredData(filteredData);
    //     }
    // };


    const handleSearchItem = (e) => {
        const value = e.target.value.toLowerCase()
        setText(value)

        const filter = products.filter((item) => {
            item.h1.toLocaleLowerCase().includes(value)
            setFilteredData(filter)
        })
    }
    console.log(text, "test text");
    console.log(filteredData, "filter")


    const handleclk = () => {
        setShowNavbar(false)
    }

    return (
        <div className='bg-black xl:px-12 p-4 py-4'>
            <nav className='flex w-full justify-between items-center'>
                <Link to='/'>
                    <img src="./img/logo (9).png" alt="" />
                </Link>
                <ul className='xl:flex hidden cursor-pointer text-white font-semibold gap-1.5 items-center'>
                    <li className="group  flex items-center gap-1.5 tracking-[1px] hover:text-gray-300"><Link to='/sale'>Sales</Link>
                        <IoIosArrowDown className='ml-1' />
                    </li>
                    <li className="group relative  w-full flex items-center gap-1.5 border-l-2 border-red-500 pl-4 tracking-[1px] hover:text-gray-300">Shop
                        <IoIosArrowDown className='ml-1' />
                        <div className="absolute opacity-0 bg-black transition-all  duration-500  top-full left-[-400px] w-[1000px] p-6 text-white z-10 group-hover:opacity-100 mt-4">
                            <div className='grid grid-cols-4  gap-6'>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>WIRELESS</span> <br /> Airburds</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>WIRELESS</span> <br /> NECKBANDS</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>SOUNDBAR</span> <br /> WITH WOOFER</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>PORTABLE</span> <br /> SPEAKER</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>HOME</span> <br /> THEATERS</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>AIRPHONE</span> <br /> STERO</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>MOBILE</span> <br /> SPEAKER</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>MOBILE</span> <br /> ACCESSORIES</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>TROLLEY</span> <br /> SPEAKERS</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>LIFESTYLE</span> <br /> COLLECTION</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1> <span className='text-3xl'>WOOFER</span> <br /> SPEAKER</h1>
                                </div>
                                <div className='border-l-2 tracking-widest  px-3 py-3'>
                                    <h1><span className='text-3xl'>LIMITED</span> <br /> EDITION</h1>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="group relative flex items-center gap-1.5 border-l-2 border-red-500 pl-4 tracking-[1px] hover:text-gray-300">More
                        <IoIosArrowDown className='ml-1' />
                        <div className="absolute opacity-0 bg-black top-full left-16 w-60 transition-all duration-700 right-0 px-3 h-72 py-4 text-white z-10 group-hover:opacity-100">
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
                        <input value={text} onChange={handleSearchItem} className='p-1.5 w-full pl-7 rounded-full' type="text" name="" id="" placeholder='Search' />
                        <FaSearch className='absolute text-sm top-3 left-2' />
                        {
                            filteredData && (
                                <div className="absolute -left-52 right-0 w-96 top-14 bg-white shadow-lg rounded-md z-10 max-h-[600px] overflow-auto">
                                    {
                                        filteredData.map((ele, index) => (
                                            <div key={index} className="p-6 space-y-2">
                                                <img className='w-20' src={ele.img} alt="" />
                                                <h1 className='text-sm font-bold tracking-wider'> Title : {ele.h1}</h1>
                                                <p className='text-sm font-bold tracking-wider text-black'> Price : {ele.p}</p>
                                                <hr className='border' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className='xl:flex hidden items-center gap-3 text-white'>
                        <IoMdContact onClick={() => setDiv(!div)} className='text-2xl' />
                        <FaShoppingCart className='text-xl' />
                    </div>
                </div>
                <button onClick={() => setShowNavbar(true)} className='xl:hidden text-white block'>
                    <FaBars className='text-2xl' />
                </button>
                {showNavbar && (
                    <div className='lg:hidden fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50'>
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
                                <li>Shop</li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                                <li>More</li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                                <li><Link onClick={handleclk} to='/about'>About Audionic</Link></li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                                <li><Link onClick={handleclk} to='/corporate'>Corporate</Link></li>
                                <hr className='border-[#63B597] p-2 mt-2 w-full' />
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
            {div && (
                <div className='bg-gray-300 absolute rounded-md z-50 p-2  w-[120px] right-12'>
                    <button className='px-8 py-2 bg-red-500'><Link to='/login'>Login</Link></button>
                </div>
            )}
        </div>
    )
}

export default Navbar;
