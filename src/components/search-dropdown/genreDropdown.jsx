import React, { useContext, useState } from 'react';
import { EventContext } from '../Context/eventContext';
import { Menu } from '@headlessui/react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { MdPerson } from 'react-icons/md';

const GenreDropdown = () => {
  const { genre, setGenre, eventt } = useContext(EventContext);
  console.log(eventt);

  const [isOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState(genre);

  const handleGenreSelection = (selectedGenre) => {
    setChoice(selectedGenre);
    setIsOpen(false);
  };

  const genres = [...new Set(eventt.flatMap((event) => [event.genre1, event.genre2]))];

  return (
    <Menu as="div" className="dropdown relative z-50">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className={'dropdown-btn w-full text-left'}>
        <MdPerson className='dropdown-icon-primary' />
        <div className='dropdown-label'>
          <div className='text-[13px] text-black font-medium leading-tight'>{choice}</div>
          <div className='text-[12px] text-black'>Select Genre</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {genres.map((genre, index) => (
          <Menu.Item
            onClick={() => handleGenreSelection(genre)}
            className='cursor-pointer'
            as='li'
            key={index}
          >
            {genre}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default GenreDropdown;
