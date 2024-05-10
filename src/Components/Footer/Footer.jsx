import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className=' bg-black text-white xl:px-12 xl:py-12  p-4'>
            <div className='flex flex-col xl:flex-row space-y-4 justify-evenly'>
                <div className='space-y-4'>
                    <img src="./img/logo (9).png" alt="" />
                    <p className='text-sm'>Subscribe to email alerts. We promise not to spam your <br /> inbox.</p>
                    <div className='flex flex-col xl:flex-row gap-4 items-center'>
                        <input className='p-2 text-sm bg-transparent border-2 w-full' type="text" placeholder='Enter The email' />
                        <button className='hover:bg-red-500 tracking-wider xl:w-fit w-full px-3 text-sm py-2   font-bold border-2 border-red-500'>SUBMIT</button>
                    </div>
                    <div className='flex text-xl pt-2 gap-6'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaYoutube />
                        <FaGoogle />
                    </div>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-lg font-bold'>Shop</li>
                        <li className='text-sm'><Link to='/personal'>Personal Audio</Link></li>
                        <li className='text-sm'>Speakers</li>
                        <li className='text-sm'>Power Banks</li>
                        <li className='text-sm'>Channel Speakers</li>
                        <li className='text-sm'>Accessories</li>
                        <li className='text-sm'>Deals & Discounts</li>
                        <li className='text-sm'>Terms of Service</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-lg font-bold'>Company</li>
                        <li className='text-sm' >About Audionic</li>
                        <li className='text-sm' >FAQs</li>
                        <li className='text-sm' >Careers</li>
                        <li className='text-sm' >Return Policy</li>
                        <li className='text-sm' >Shipping Policy</li>
                        <li className='text-sm' >Contact Us</li>
                        <li className='text-sm'>Terms & Conditions</li>
                        <li className='text-sm'>Privacy Policy</li>
                        <li className='text-sm'>Why buy direct?</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li className='text-lg font-bold'>Support</li>
                        <li className='text-sm'>Care Centers</li>
                        <li className='text-sm'>Corporate Gifting</li>
                        <li className='text-sm'>Read Our Blog</li>
                        <li className='text-sm'>Track Your Order</li>
                        <li className='text-sm'>Complaint Form</li>
                        <li className='text-sm'>Corporate Sales Form</li>
                    </ul>
                </div>
            </div>
            <div className='text-white pt-28 text-center'>
                <h1>© 2024 Audionic. All Rights Reserved.</h1>
            </div>
        </footer>
    )
}

export default Footer
