import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LoginModal from '../components/Auth/LoginModal';
import Navbar from '../Pages/Shared/Navbar';
import Hero from '../Pages/Shared/Hero';

const Root = () => {
    const [loginModal, setLoginModal] = useState(true);
    return (
        <div>
            <Navbar setLoginModal={setLoginModal} />
            <Outlet />
            <Hero/>

            {
                loginModal &&
                <LoginModal setLoginModal={setLoginModal} />
            }
        </div>
    );
};

export default Root;