import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { eventData } from '../../constant/eventData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLocationDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import EventList from './eventList';
import WelcomeModal from "../login-signup/welcomeModal";

const EventDetails = () => {
  const { eventKey } = useParams();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find(event => event.eventKey === parsedEventKey);

  const randomEvents = eventData ? getRandomUniqueEvents(eventData, 4, parsedEventKey) : [];

  function getRandomUniqueEvents(data, count, excludeKey) {
    const events = [...data];
    const randomEvents = [];

    while (randomEvents.length < count && events.length > 1) {
      const randomIndex = Math.floor(Math.random() * events.length);
      const randomEvent = events[randomIndex];

      if (randomEvent.eventKey !== excludeKey) {
        randomEvents.push(randomEvent);
        events.splice(randomIndex, 1);
      }
    }

    return randomEvents;
  }

  const [isOpen, setIsOpen] = useState(false);

  const openWelcomeModal = () => {
    setIsOpen(true);
  };

  const closeWelcomeModal = () => {
    setIsOpen(!isOpen);
  };

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

      <div className="container mx-auto ">
        <div className='container mx-auto min-w-[400px]'>
          <h1 className="text-2xl font-bold ml-5">More Events</h1>
          <div className="items-center justify-center ml-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 mx-auto">
            {randomEvents.map(event => (
              <Link to={`/event/${event.eventKey}`} key={event.eventKey}>
                <EventList
                  src={event.image}
                  title={event.title}
                  genre1={event.genre1}
                  genre2={event.genre2}
                  date_time={event.date_time}
                  price={event.price}
                  limit={event.limit}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isOpen && <WelcomeModal closeModal={closeWelcomeModal} />}
    </section>
  );
};

export default EventDetails;
