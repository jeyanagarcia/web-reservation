import React, { useContext, useState } from 'react';
import { EventContext } from '../Context/eventContext';
import { Menu } from '@headlessui/react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { MdPerson } from 'react-icons/md';

const OrganizerDropdown = () => {
  const { organization, setOrganization, organizer } = useContext(EventContext);
  console.log(organizer);

  const [isOpen, setIsOpen] = useState(false);

  const handleOrganizationSelection = (selectedOrg) => {
    setOrganization(selectedOrg);
    setIsOpen(false);
  };

  return (
    <Menu as="div" className="dropdown relative z-50">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className={'dropdown-btn w-full text-left'}>
        <MdPerson className='dropdown-icon-primary' />
        <div className='dropdown-label'>
          <div className='text-[15px] text-black font-medium leading-tight'>{organization}</div>
          <div className='text-[13px] text-black'>Select your Organizer</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {organizer.map((org, index) => (
          <Menu.Item
            onClick={() => handleOrganizationSelection(org)}
            className='cursor-pointer'
            as='li'
            key={index}
          >
            {org}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default OrganizerDropdown;
