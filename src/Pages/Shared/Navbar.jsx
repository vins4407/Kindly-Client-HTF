import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoSearch } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiCurrentLocation, BiPurchaseTag } from 'react-icons/bi'
import { MdOutlineExitToApp, MdOutlineLibraryBooks } from 'react-icons/md'
import { useAuth } from '../../contexts/AuthProvider';
import avatar from '../../assets/avatar.png';
import { IoIosArrowDown } from 'react-icons/io';
import { SlArrowDown } from 'react-icons/sl';
import { useSearch } from '../../contexts/SearchProvider';
import DonateBtn from '../../components/DonateBtn';
import logo from '../../assets/kindly_logo.png'


const Navbar = ({ setLoginModal }) => {
    const navigate = useNavigate();
    const { user, logOut } = useAuth();
    const { setSearchText } = useSearch();
    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/")
        setSearchText(e.target.search.value);
        e.target.reset();
    }
    return (
        <header className='sticky top-0 z-50'>
            <nav className="navbar bg-base-200 py-10 px-5 md:px-8">
                <div className='flex-1 mr-2  '>

                    <Link onClick={() => setSearchText("")} className='mr-3' to="/">
                        <img className="w-14 md:w-20" src={logo} alt="" />
                    </Link>

                    <div className="hidden lg:block dropdown ml-3 mr-4">
                        <div className=' relative'>
                            <input tabIndex={0} className="input input-bordered w-[270px] border-2 border-black rounded-sm" placeholder='Search city, area or locality' />
                            <IoIosArrowDown className="w-8 h-8 absolute top-1/2 right-2 -translate-y-1/2" />
                        </div>
                        <div tabIndex={0} className="dropdown-content card card-compact rounded-sm text-base p-2 shadow bg-base-100">
                            <div className="card-body">
                                <div className='flex items-center gap-3 text-blue-500 border-b pb-3'>
                                    <BiCurrentLocation className='w-10 h-10' />
                                    <div>
                                        <h3 className="text-base font-bold">Use current location!</h3>
                                        <p>Location blocked.Check browser/phone settings.</p>
                                    </div>
                                </div>
                                <p className='text-xs text-accent mt-2'>POPULAR LOCATIONS</p>
                                <div className='mt-5 grid gap-6'>
                                    <p className='flex items-center gap-3'><HiOutlineLocationMarker className="w-6 h-6 text-accent" /> Mumbai</p>
                                    <p className='flex items-center gap-3'><HiOutlineLocationMarker className="w-6 h-6 text-accent" /> Pune</p>
                                    <p className='flex items-center gap-3'><HiOutlineLocationMarker className="w-6 h-6 text-accent" /> Ahamdabad</p>
                                    <p className='flex items-center gap-3'><HiOutlineLocationMarker className="w-6 h-6 text-accent" /> Gandhinagar</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <form onSubmit={handleSearch} className="w-half hidden md:flex">
                        <input type="text" name="search" placeholder="Donations near you..." className="input input-bordered w-full border-2 border-black rounded-sm rounded-r-sm" />
                        <button className='btn text-white rounded-l-sm'><GoSearch className="w-6 h-6" /></button>
                    </form>
                </div>

                <div>
                    <ul className="menu menu-horizontal p-0 items-center">
                        {/* <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="m-1 p-3 font-medium flex items-center gap-1">ENGLISH <IoIosArrowDown className="w-8 h-8" /></label>
                            <ul tabIndex={0} className="mt-3 dropdown-content p-2 bg-base-100 rounded-sm w-64 drop-shadow-lg">
                                <li className='p-3 mb-2'>English</li>
                                <li className='p-3'>हिंदी</li>
                            </ul>
                        </div> */}

                        {
                            user?.email
                                ? <>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="mt-2 flex items-center gap-2">
                                            {
                                                user.photoURL
                                                    ? <img className='w-9 mx-1 rounded-full' src={user.photoURL} alt="" />
                                                    : <img className='w-9 mx-1 rounded-full' src={avatar} alt="" />
                                            }
                                            <SlArrowDown className="w-6 h-6 mr-2" />
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded drop-shadow-lg w-72 mt-2">
                                            <div className='flex items-center gap-3 p-5 pb-8'>
                                                {
                                                    user.photoURL
                                                        ? <img className='w-14 rounded-full' src={user.photoURL} alt="" />
                                                        : <img className='w-14 rounded-full' src={avatar} alt="" />
                                                }
                                                <div>
                                                    <p className='text-sm'>Hello,</p>
                                                    <h3 className='font-bold text-lg'>{user.displayName}</h3>
                                                </div>
                                            </div>
                                            <div className='border-t'>
                                                <Link to="/myadds">
                                                    <button className='flex items-center gap-3 w-full p-3 text-lg hover:bg-blue-100'><MdOutlineLibraryBooks className="w-6 h-6" />My Givings</button>
                                                </Link>
                                                <Link to="/mypurchase">
                                                    <button className='flex items-center gap-3 w-full p-3 text-lg hover:bg-blue-100'><BiPurchaseTag className="w-6 h-6" />My Receivings</button>
                                                </Link>
                                            </div>
                                            <div className='border-t'>
                                                <button onClick={logOut} className='flex items-center gap-3 w-full p-3 text-lg hover:bg-blue-100'><MdOutlineExitToApp className="w-6 h-6 rotate-180" /> Logout</button>
                                            </div>
                                        </ul>
                                    </div>
                                </>
                                : <label htmlFor="login-modal" onMouseOver={() => setLoginModal(true)} className='font-medium border-b-2 border-black mx-4 cursor-pointer'>Login</label>
                        }
                        {
                            user
                                ? <Link to="/add-donations"><DonateBtn className="" >Donate</DonateBtn> </Link>
                                : <DonateBtn><label htmlFor="login-modal" onMouseOver={() => setLoginModal(true)} >Donate</label></DonateBtn> 
                        }
                    </ul>
                </div>
            </nav>
            <div className='h-1 w-full bg-[#8abdb6] drop-shadow-sm'></div>
        </header>
    );
};

export default Navbar;





