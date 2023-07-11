import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImage from '../assets/bchato.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search functionality here with the searchQuery state
    console.log('Search query:', searchQuery);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const navbar = document.querySelector('.navbar');

      if (offset > 100) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black navbar`} style={{ backgroundColor: '#f5f5f5' }}>
      <div>
        <img src={logoImage} alt="Logo" style={{ height: '40px' }} />
      </div>

      <div className='ml-auto'>
        <ul className='flex'>
          <li>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to="/article" className='nav-link'>Blog</Link>
          </li>
          <li>
            <Link to="/event" className='nav-link'>Events</Link>
          </li>
          <li>
            <Link to="/contact-us" className='nav-link'>Contact Us</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/login" className='nav-link'>Log In</Link>
          </li>
          <li>
            <Link to="/signup" className='nav-link'>Sign Up</Link>
          </li>
        </ul>
      </div>

      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <img src={logoImage} alt="Logo" style={{ height: '40px' }} />

          <li className='border-b hover:bg-green-200'>
            <Link to="/" className='nav-link'>Home</Link>
          </li>

          <li className='border-b hover:bg-green-200'>
            <Link to="/article" className='nav-link'>Blog</Link>
          </li>

          <li className='border-b hover:bg-green-200'>
            <Link to="/event" className='nav-link'>Events</Link>
          </li>

          <li className='border-b hover:bg-green-200'>
            <Link to="/contact-us" className='nav-link'>Contact Us</Link>
          </li>

          <div className='flex flex-col'>
            <Link to="/login">
              <button className='rounded-full border w-full my-5 py-2 bg-green-600 hover:bg-green-500 text-white'>
                Log In
              </button>
            </Link>
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

      <form onSubmit={handleSearch} className='hidden md:block'>
  <div className="relative">
    <input
      type="text"
      placeholder="Search"
      className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button
      type="submit"
      className='absolute right-0 top-0 h-full px-3 text-gray-600 focus:outline-none'
    >
      <svg
        className='h-5 w-5'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 0a8 8 0 100 16A8 8 0 008 0zM7 16a9 9 0 111.4-1.4L18 18l-1.4-5.4A9 9 0 017 16z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</form>

    </div>
  );
};

export default Navbar;
