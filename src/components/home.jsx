import React from 'react'
import binanVid from '../assets/vid.mp4'

const home = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' 
        src ={binanVid} autoPlay loop muted 
        />
    
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-black p-4'>
        <h1>Experience the Thrill at Biñan</h1>
        <h2 className='py-4'>Explore the City of Life!</h2>
        <form className='items-center'>
            <div>
            <button className="w-40 h-12 rounded-full shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 transition-colors duration-1000 mx-auto text-black">Browse Events</button>

            </div>
        </form>
        
    </div>
    </div>
  )
}

export default home
