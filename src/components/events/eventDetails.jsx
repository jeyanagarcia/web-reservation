import React from "react";
import { useParams, Link } from 'react-router-dom';
import { eventData } from '../../constant/eventData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLocationDot, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import EventList from './eventList';

const EventDetails = () => {
  const { eventKey } = useParams();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find(event => event.eventKey === parsedEventKey);

  const randomEvents = eventData ? getRandomUniqueEvents(eventData, 4, parsedEventKey) : [];

  // Function to get random unique events
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

  return (
    <section>
      <div className="container mx-auto min-h-[400px] mb-14">
        <div className="flex flex-wrap items-start justify-between lg:flex-nowrap">
          <div className="mt-24 ml-8 flex">
            <div className="w-70% bg-gray-300 rounded-lg overflow-hidden">
              <img
                className="w-80 h-full object-cover"
                src={eventInfo.image}
                alt="Event Image"
              />
            </div>

            <div className="p-6 flex flex-col justify-left ml-12">
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
                <button className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center 
                    bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
                    transition-colors duration-1000 mx-auto text-black mr-4">Book Now</button>

                <button className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center 
                    bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
                    transition-colors duration-1000 mx-auto text-black mr-4">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative p-6 flex flex-col justify-left ml-24 mt-4">
        <h1 className="text-2xl ml-24 font-bold">About The Event</h1>
        <div className="bg-gray-300 rounded-lg p-6 mt-4 ml-24 w-1/2">
          <p className="text-justify">{eventInfo.description}</p>
        </div>       
      </div>

      <div className="container relative p-6 flex flex-col justify-left ml-24 mt-4">
        <h1 className="text-2xl ml-24 font-bold">Hosts</h1>
        <div className="bg-gray-300 rounded-lg p-6 mt-4 ml-24 w-1/2">
          <p className="text-justify">{eventInfo.description}</p>
        </div>       
      </div>

      <div className="absolute top-5 right-10">
      <div className="container relative mt-24 mr-24">
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-bold">More Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2">
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
      </div>
    </section>
  );
};

export default EventDetails;
