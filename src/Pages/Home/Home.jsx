import React, { useState } from 'react';
import Products from '../Products/Products';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useSearch } from '../../contexts/SearchProvider';
import { GoSearch } from 'react-icons/go';

const Home = () => {
    const navigate = useNavigate();
    const { setSearchText } = useSearch();
    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/")
        setSearchText(e.target.search.value);
        e.target.reset();
    }
    const [arrowUp, setArrowUp] = useState(false);
    const categories = <>
        <li><Link className='hover:text-primary'>Food</Link></li>
        <li><Link className='hover:text-primary'>Cloths</Link></li>
        <li><Link className='hover:text-primary'>Books</Link></li>
    </>
    return (
        <div>
            <ul className="hidden lg:flex flex-wrap gap-5 py-3 mx-8 bg-base-100 w-fit text-sm">
                <li><a className='font-bold uppercase mr-10 flex items-center gap-1'>All Categories <IoIosArrowDown className="w-6 h-6" /></a></li>
                {categories}
            </ul>
            <div className="collapse lg:hidden">
                <input onClick={() => setArrowUp(!arrowUp)} type="checkbox" />
                <div className="collapse-title">
                    <p className='font-bold uppercase text-sm mt-1 flex items-center gap-2'>All Categories <IoIosArrowDown className={`w-8 h-8 text-accent ${arrowUp && 'rotate-180'} duration-300`} /></p>
                </div>
                <ul className="collapse-content flex flex-wrap gap-5 bg-base-100 w-fit text-sm">
                    {categories}
                    <form onSubmit={handleSearch} className="w-full flex md:hidden">
                        <input type="text" name="search" placeholder="Find Cars, Mobile Phones and more..." className="input input-bordered w-full border-2 border-black rounded-sm rounded-r-sm" />
                        <button className='btn text-white rounded-l-sm'><GoSearch className="w-6 h-6" /></button>
                    </form>
                </ul>
            </div>


            {/*Carousel  */}

            <Products />


            
        </div>
    );
};

export default Home;