import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const GenderSelector = ({ selectedGender, setSelectedGender }) => {
  const [open, setOpen] = useState(false);

  const genders = [
    { value: '', label: 'Select Gender' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div className="w-72 font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-transparent w-full p-2 flex items-center justify-between rounded ${
          selectedGender ? 'text-gray-700' : ''
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="relative">
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="block appearance-none w-60 bg-transparent border border-gray-400 px-2 py-1 rounded-full focus:outline-none focus:border-black text-lg"
              style={{ width: '240px' }}
            >
              {genders.map((gender) => (
                <option key={gender.value} value={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <BiChevronDown size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSelector;
