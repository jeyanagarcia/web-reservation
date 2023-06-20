import React from 'react';
import GenreDropdown from './genreDropdown';
import OrganizerDropdown from './organizerDropdown';
import { FaSearch } from 'react-icons/fa';
import { EventContext } from '../Context/eventContext';


const Search = () => {
 

  return (
    <div className='flex flex-col lg:flex-row justify-end items-center gap-2 lg:gap-1 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <div className="mr-2 lg:mr-4">
        <GenreDropdown />
      </div>
      <div className="mr-2 lg:mr-4">
        <OrganizerDropdown />
      </div>
      <button className="px-3 py-1bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 w-full lg:max-w-[162px] h-10 rounded-lg flex justify-center items-center text-white text-lg">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
