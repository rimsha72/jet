import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef();

  // Toggle for opening and closing the nav menu
  const handleNav = () => {
    setNav(!nav);
  };

  // Close the nav menu if clicked outside of it
  useEffect(() => {
    const closeNav = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setNav(false);
      }
    };

    document.addEventListener('mousedown', closeNav);
    return () => document.removeEventListener('mousedown', closeNav);
  }, []);

  return (
    <div ref={navRef} className='flex justify-between items-center h-24 max-w-screen-2xl mx-auto lg:px-8 px-4 text-white pt-24'>
      <img src={Logo} alt="Logo" className='h-20 w-36' />
      <ul className='hidden md:flex text-lg'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About Us</li>
        <li className='p-4'>Book a flight</li>
        <li className='p-4'>Contact us</li>
      </ul>
      <div className='hidden md:flex'>
        <p className='p-4'>Call Us: +1 (324) 454-45</p>
        <button className="bg-[#1DA1F2] text-white py-2 px-4 rounded-md lg:w-40 text-base">
          Request A Quote
        </button>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} aria-label="Close menu" /> : <AiOutlineMenu size={20} aria-label="Open menu" />}
      </div>
      <ul className={`${nav ? 'flex' : 'hidden'} flex-col md:hidden absolute left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`}>
        <img src={Logo} alt="Logo" className='h-20 w-36 m-4' />
        <li className='p-4'>Home</li>
        <li className='p-4'>About Us</li>
        <li className='p-4'>Book a flight</li>
        <li className='p-4'>Contact us</li>
        <p className='p-4'>Call Us: +1 (324) 454-45</p>
      </ul>
    </div>
  );
};

export default Navbar;
