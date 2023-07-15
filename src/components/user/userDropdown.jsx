import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/authContext';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const UserDropdown = () => {
  const { logout } = useUserAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="rounded-full border w-full my-5 py-2 bg-green-600 hover:bg-green-500 text-white"
        onClick={toggleDropdown}
      >
        <FaUserCircle />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          <Link to="/user-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Profile
          </Link>
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

