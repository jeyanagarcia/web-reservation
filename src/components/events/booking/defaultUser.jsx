import React from 'react'
import { useUserAuth } from '../../context/authContext';

const DefaultUser = () => {
    const { user } = useUserAuth();
  return (

    <section style={{ width: '40%' }}>
    <h1>Attendee Information </h1>
      <p className='ml-24 mt-5'>Attendee Email: {user && user.email}</p>
      <p className='ml-24 mt-3'>
        Attendee Name: {user && user.firstname} {user && user.lastname}
      </p>
      <div className="flex justify-center mt-4">
        <button className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center 
          bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
          transition-colors duration-1000 text-black mr-4">
          Book Now
        </button>
      </div>
    </section>
            )}

export default DefaultUser
