import React from "react";
import { useParams } from 'react-router-dom';
import { eventData } from '../../constant/eventData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Booking = () => {
  const { eventKey } = useParams();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find(event => event.eventKey === parsedEventKey);

  return (
    <section>
      <div className="container mx-auto min-h-[500px] mb-14 ">
        <div className="flex flex-wrap justify-left lg:flex-nowrap">
          <div className="container mx-auto mt-32 text-left">
            <h1 className="text-5xl font-bold mb-4">Booking an Event</h1>

            <div className="container mx-auto mt-12 flex flex-wrap justify-left">
              <div style={{ width: '50%', height: '100%', objectFit: 'cover' }}>
                <img
                  style={{ width: '50%', height: '100%', objectFit: 'cover' }}
                  src={eventInfo.image}
                  alt="Event Image"
                />           
              </div>
            </div>
          </div>
        </div>


            <div className="ml-12">
              <h2 className="text-3xl font-bold mt-4">{eventInfo.title}</h2>
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
            </div>
      </div>
    </section>
  );
};

export default Booking;
