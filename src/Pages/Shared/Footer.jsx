import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { ImPlay3 } from 'react-icons/im';
import playstore from '../../assets/playstore_2x.webp'
import appstore from '../../assets/appstore_2x.webp'

const Footer = () => {
    return (
        <footer>
            <div className="footer py-5 px-20 bg-base-300 text-base-content">
                <div>
                    <span className="font-medium text-black">POPULAR LOCATIONS</span>
                    <div className='flex flex-col gap-1 text-xs text-accent'>
                        <a className="text-xs hover:text-black">Kolkata</a>
                        <a className="text-xs hover:text-black">Mumbai</a>
                        <a className="text-xs hover:text-black">Chennai</a>
                        <a className="text-xs hover:text-black">Pune</a>
                    </div>
                </div>
                <div>
                    <span className="font-medium text-black">TRENDING LOCATIONS</span>
                    <div className='flex flex-col gap-1 text-xs text-accent'>
                        <a className="text-xs hover:text-black">Bhubaneshwar</a>
                        <a className="text-xs hover:text-black">Hyderabad</a>
                        <a className="text-xs hover:text-black">Chandigarh</a>
                        <a className="text-xs hover:text-black">Nashik</a>
                    </div>
                </div>
                <div>
                    <span className="font-medium text-black">ABOUT US</span>
                    <div className='flex flex-col gap-1 text-xs text-accent'>
                        <a className="text-xs hover:text-black">About OLX Group</a>
                        <a className="text-xs hover:text-black">Careers</a>
                        <a className="text-xs hover:text-black">Contact Us</a>
                        <a className="text-xs hover:text-black">OLXPeople</a>
                        <a className="text-xs hover:text-black">Waah Jobs</a>
                    </div>
                </div>
                <div>
                    <span className="font-medium text-black">OLX</span>
                    <div className='flex flex-col gap-1 text-xs text-accent'>
                        <a className="text-xs hover:text-black">Help</a>
                        <a className="text-xs hover:text-black">Sitemap</a>
                        <a className="text-xs hover:text-black">Legal & Privacy information</a>
                        <a className="text-xs hover:text-black">Blog</a>
                        <a className="text-xs hover:text-black">OLX Autos Sell Car</a>
                    </div>
                </div>
                <div className='flex flex-col h-full'>
                    <span className="font-medium text-black">FOLLOW US</span>
                    <div className='flex text-accent gap-3'>
                        <FaFacebookF className='border-[2px] border-accent w-5 h-5 rounded-full p-[2px]' />
                        <AiOutlineInstagram className='border-[2px] border-accent w-5 h-5 rounded-full p-[2px]' />
                        <AiOutlineTwitter className='border-[2px] border-accent w-5 h-5 rounded-full p-[2px]' />
                        <ImPlay3 className='border-[2px] border-accent w-5 h-5 rounded-full p-[2px]' />
                    </div>
                    <div className='flex flex-wrap gap-2 mt-auto'>
                        <img className='w-20' src={playstore} alt="" />
                        <img className='w-20' src={appstore} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer items-center py-4 px-20 bg-neutral text-white text-xs">
                <div className="items-center grid-flow-col">
                    <p>Other Countries Pakistan - South Africa - Indonesia</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p>All rights reserved © 2006-2022 OLX</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;