import React, { useState, useEffect } from 'react';
import OverViewLayout from './adminLayout/overviewLayout';
import { Link } from 'react-router-dom';
import { AdminData } from '../../constant/eventData';
import { sampleEvents } from '../../constant/eventData';
import images from '../../constant/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {


  const [upcomingEventsHeight, setUpcomingEventsHeight] = useState('auto');

  useEffect(() => {
    const setHeight = () => {
      const upcomingEventsDiv = document.getElementById('upcomingEvents');
      if (upcomingEventsDiv) {
        const height = upcomingEventsDiv.offsetHeight;
        setUpcomingEventsHeight(height);
      }
    };

    setHeight();
    window.addEventListener('resize', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  return (
    <section id="blog" className="w-full py-12 border-b-[1px] relative z-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-x-4">
          <div>
            {AdminData.map((adData) => (
              <div className="mb-6" key={adData.adKey}>
                <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-300 hover:bg-[#7a7a7a] transition-colors duration-500">
                  <OverViewLayout
                    events={adData.eventsCreated}
                    user={adData.userRegistration}
                    ticket={adData.ticketSales}
                    total={adData.TotalEarnings}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="ml-8">
            <div
              id="upcomingEvents"
              className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-300 hover:bg-[#7a7a7a] transition-colors duration-500"
            >
              <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
              <ul>
                {sampleEvents.map((events) => (
                  <li key={events.id_1}>
                    <div className="flex items-center">
                      <img src={events.image_1} alt={events.title_1} className="w-12 h-12 rounded border border-gray-300 mr-4" />
                      <div>
                        <h3>{events.title_1}</h3>
                        <p>
                          {events.date_1} | {events.time_1}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-end">
            <div className="w-full md:w-1/2 xl:w-1/2 px-3 mb-6 mt-0 -ml-8" style={{ width: '650px', marginTop: '2rem' }}>
              <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-300 hover:bg-[#7a7a7a] transition-colors duration-500 h-64">
                <ul style={{ fontSize: '20px', fontWeight: 'bold', margin: '1rem' }}>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2" style={{ color: '#525353' }} />
                    20 Events Published
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEdit} className="mr-2" style={{ color: '#525353' }} />
                    5 Draft Events
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFileAlt} className="mr-2" style={{ color: '#525353' }} />
                    10 Articles Created
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );

};

export default Admin;
