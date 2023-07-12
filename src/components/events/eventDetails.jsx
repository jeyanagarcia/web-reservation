import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLocationDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import WelcomeModal from '../login-signup/welcomeModal';
import EventGenerator from './eventGenerator'; 
import { eventData } from '../../constant/eventData'; 
import { useUserAuth } from '../context/authContext';

const EventDetails = () => {
  const { eventKey } = useParams();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find(event => event.eventKey === parsedEventKey);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isLoading } = useUserAuth();

  const openWelcomeModal = () => {
    if (user) {
      navigate(`/booking/${parsedEventKey}`);
    } else {
      setIsOpen(true);
    }
  };

  const closeWelcomeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isLoading && user) {
      setIsOpen(false); 
    }
  }, [isLoading, user]);

  return (
    <section>
      <div className="container mx-auto min-h-[300px] mb-14 ">
        <div className="flex flex-wrap justify-left lg:flex-nowrap">
          <div className="container mx-auto mt-32 flex flex-wrap justify-left md:flex-nowrap">
            <div className="w-full md:w-80 h-auto bg-gray-300 rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-6">
              <img
                className="w-full h-full object-cover"
                src={eventInfo.image}
                alt="Event Image"
              />
            </div>

            <div className="p-6 flex flex-col justify-left">
              <h1 className="text-4xl font-bold">{eventInfo.title}</h1>
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
              <div className="flex gap-32 mt-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  <span>{eventInfo.organization}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUserGroup} className="mr-2" />
                  <span>{eventInfo.limit}</span>
                </div>
              </div>

              <div className="flex justify-left mt-5">
                <button
                  className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center 
                    bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
                    transition-colors duration-1000 mx-auto text-black mr-4"
                  onClick={openWelcomeModal}
                >
                  Book Now
                </button>
                <button
                  className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center 
                    bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
                    transition-colors duration-1000 mx-auto text-black mr-4"
                  onClick={openWelcomeModal}
                >
                  Wishlist
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='container mx-auto min-w-[400px]'>
          <div className="container relative p-6 justify-center">
            <h1 className="text-2xl font-bold">About The Event</h1>
            <div className="bg-gray-300 rounded-lg p-6">
              <p className="text-justify">{eventInfo.description}</p>
            </div>
          </div>

          <div className="container relative p-6  justify-center">
            <h1 className="text-2xl font-bold">Hosts</h1>
            <div className="bg-gray-300 rounded-lg p-6">
              <p className="text-justify">{eventInfo.description}</p>
            </div>
          </div>
        </div>
      </div>

      <EventGenerator eventData={eventData} count={4} excludeKey={parsedEventKey} />

      {isOpen && <WelcomeModal closeModal={closeWelcomeModal} />}
    </section>
  );
};

export default EventDetails;
