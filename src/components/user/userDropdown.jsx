import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/authContext';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../config/firebase';

const UserDropdown = () => {
  const { logout, user } = useUserAuth();
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState(() => {
    const storedPhotoURL = localStorage.getItem('photoURL');
    return storedPhotoURL || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchPhotoURL = async () => {
      try {
        if (user?.photoURL) {
          const storageRef = ref(storage, user.photoURL);
          const downloadURL = await getDownloadURL(storageRef);
          setPhotoURL(downloadURL);
          localStorage.setItem('photoURL', downloadURL);
        }
      } catch (error) {
        console.log('Error fetching photo URL:', error);
      }
    };

    fetchPhotoURL();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div 
        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer z-10"
        onClick={toggleDropdown}
      >
        <img src={photoURL} alt="Profile" className="w-full h-full" />
      </div>

      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-1 py-2 w-48 bg-white rounded-md shadow-lg"
          ref={dropdownRef}
        >
          <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <Link to="/user-profile">Profile</Link>
          </div>

          <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <Link to="/book-events">Book Events</Link>
          </div>

          <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <Link to="/wishlist">Wishlist</Link>
          </div>

          <div
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
