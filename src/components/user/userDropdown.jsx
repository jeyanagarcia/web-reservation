import React, { useState, useEffect } from 'react';
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
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="relative">
      <div
        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={photoURL}
          alt="Profile"
          className="w-full h-full"
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-1 py-2 w-48 bg-white rounded-md shadow-lg">
          <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <Link to="/user-profile">Profile</Link>
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
