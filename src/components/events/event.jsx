import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventData } from '../../constant/eventData';
import FeaturedEvent from './featuredLayout';
import UpcomingEvent from './upcomingLayout';
import Search from '../search-dropdown/search';
import {BsChevronCompactLeft, BsChevronCOmpactRight} from 'react-icons/bs';


const Event = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slideshowTimer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(slideshowTimer);
  }, [currentIndex]);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? eventData.length -1: currentIndex -1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === eventData.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  };


  return (
    <section className="w-full py-20 border-b-[1px] relative z-0">

    <div className="min-h-screen flex flex-col justify-between">
        <div className="max-w-[1400px] w-full m-auto py-12 px-4 relative">
          <Link to={`/event/${eventData[currentIndex].eventKey}`} key={eventData[currentIndex].eventKey}>
            <div
              className={`w-full h-[700px] rounded-2xl bg-center bg-cover duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ backgroundImage: `url(${eventData[currentIndex].image})` }}
            ></div>
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mt-9 mb-9 ml-4">
          <h1 className="text-5xl font-bold text-left">Featured Event</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-14">
        {eventData.map(event => (
          <Link to={`/event/${event.eventKey}`} key={event.eventKey}>
            <FeaturedEvent
              title={event.title}
              genre1={event.genre1}
              genre2={event.genre2}
              date_time={event.date_time}
              src={event.image}
            />
          </Link>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10"> 
        <div className="mt-9 mb-9 ml-4">
          <h1 className="text-5xl font-bold text-left">Upcoming Event</h1>
        </div>
        <Search />
      </div>
          
  

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-14">
        {eventData.map(event => (
          <Link to={`/event/${event.eventKey}`} key={event.eventKey}>
            <UpcomingEvent
              title={event.title}
              date_time={event.date_time}
              genre1={event.genre1}
              genre2={event.genre2}
              org={event.organization}
              price={event.price}
              transaction={event.transaction}
              limit={event.limit}
              src={event.image}
            />
          </Link>
        ))}
      </div>

    </section>
  );
}

export default Event;
