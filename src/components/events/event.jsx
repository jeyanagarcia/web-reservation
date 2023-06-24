import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedEvent from './featuredLayout';
import UpcomingEvent from './upcomingLayout';
import { eventData } from '../../constant/eventData';
import Search from '../search-dropdown/search';

const Event = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] relative z-0">
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
