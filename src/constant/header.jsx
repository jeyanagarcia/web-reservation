import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {FaFacebook,FaTwitter,FaInstagram,FaGoogle,FaYoutube,} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black '>
      <div>
        <h1 >Biñan</h1>
      </div>   
    
      <ul className='hidden md:flex'>
        <li>
        <Link to="/">Home</Link></li>
        <li>
        <Link to="/blog">Blog</Link></li>
        <li>
        <Link to="/event">Events</Link></li>
        <li>
        <Link to="/contact-us">Contact Us</Link></li>
 
      </ul>
      <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
        <li>
        <Link to="/login">Login</Link></li>
        <li>
        <Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>

      {/* Button Dropdown */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>Biñan</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Blog</li>
          <li className='border-b'>Events</li>
          <li className='border-b'>Contact Us</li>
        
          <div className='flex flex-col'>
            <button>Account</button>
          </div>

          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaGoogle className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;