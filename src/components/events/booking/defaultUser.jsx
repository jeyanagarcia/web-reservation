import React, { useState } from 'react';
import { useUserAuth } from '../../context/authContext';

const DefaultUser = ({ onConfirm }) => {
  const { user } = useUserAuth();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    const userData = {
      email: user && user.email,
      name: `${user && user.firstname} ${user && user.lastname}`,
    };

    onConfirm(userData);
    setIsConfirmed(true);
  };

  return (
    <section style={{ width: '100%' }}>
      <h1>Attendee Information</h1>
      <p className="ml-52 mt-12">Attendee Email: {user && user.email}</p>
      <p className="ml-52 mt-3">
        Attendee Name: {user && user.firstname} {user && user.lastname}
      </p>
      {!isConfirmed && (
        <div className="flex justify-center ml-52 mt-4">
          <button
            className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 transition-colors duration-1000 text-black mr-4"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      )}
    </section>
  );
};

export default DefaultUser;
