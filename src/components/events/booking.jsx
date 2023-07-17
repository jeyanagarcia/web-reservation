

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../../constant/eventData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useUserAuth } from '../context/authContext';
import DefaultUser from './booking/defaultUser';
import Guest from './booking/guest';
import Payment from './booking/payment';

const Booking = ({ isOpen, onClose }) => {
  const { user } = useUserAuth();
  const [info, setInfo] = useState('');
  
  const [residency, setResidency] = useState(false);
 
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);

  const { eventKey } = useParams();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find((event) => event.eventKey === parsedEventKey);

  const [ticketCount, setTicketCount] = useState(1);

  const closeModal = () => {
    onClose();
  };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    setInfo(checkboxValue);
    setResidency(checkboxValue === 'yes');
    setShowSecondSection(checkboxValue === 'yes');
    setShowThirdSection(checkboxValue === 'no');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white w-full max-w-6xl p-6 rounded-lg relative" style={{ maxHeight: '880px' }}>


            <button
              className="absolute top-0 right-0 m-3 p-2 border-b-gray-500 text-black hover:text-gray-700 hover:bg-red-500 bg-transparent"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
  
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-screen">
            <div className="image-container flex items-center justify-center bg-gray-200">
              <img
                className="max-w-full max-h-full object-contain"
                src={eventInfo.image}
                alt="Event Image"
              />
            </div>

            
              <div className="info-container flex items-center justify-center bg-gray-300">
                {/* Info Container Content */}
                <div className="col-span-2 p-6">
                <h1 className="text-2sm font-bold">{eventInfo.title}</h1>
                    <div className="flex items-center mt-2">
                      <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                      <span>{eventInfo.location}</span>
                    </div>
                    <div className="mt-2">{eventInfo.date_time}</div>
                    <div className="flex gap-3 mt-4">
                      <div className="text-xs px-2 py-1 rounded-full border border-black">
                        {eventInfo.genre1}
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full border border-black">
                        {eventInfo.genre2}
                      </div>
                    </div>

                    <div className="mt-3 mb-4">
                      Ticket for {ticketCount} : {eventInfo.price}
                    </div>

                    <div className="flex flex-col">
                      <p>Is the ticket for you?</p>
                      <div className="flex gap-3 mt-1">
                        <div className="flex items-center mt-1">
                          <input
                            id="yesCheckbox"
                            type="radio"
                            value="yes"
                            checked={info === 'yes'}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="yesCheckbox" className="ml-2">
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center mt-1">
                          <input
                            id="noCheckbox"
                            type="radio"
                            value="no"
                            checked={info === 'no'}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="noCheckbox" className="ml-2">
                            No
                          </label>
                        </div>
                        </div>
                        </div>
                        </div>
              </div>
  
              {/* Payment Container */}
              <div className="payment-container flex items-start justify-center">
      <Payment />
    </div>
  
              {/* Hidden Container */}
              <div className="hiddencontainer-container flex items-center  col-span-2 row-span-2 mb-32">
                {showSecondSection && (
                  <div className="flex-col justify-center">
                    <DefaultUser user={user} />
                  </div>
                )}

                {showThirdSection && (
                  <div className="flex-col justify-center">
                    <Guest />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  
};

export default Booking;


