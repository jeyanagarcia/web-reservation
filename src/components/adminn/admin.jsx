import React, { useState, useEffect } from 'react';
import OverViewLayout from './overviewLayout';
import { Link } from 'react-router-dom';
import { AdminData } from './adminData';
import images from '../../constant/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const sampleEvents = [
    {
      id: 1,
      title: 'Sining Konsiyerto',
      date: '2023-07-20',
      time: '8:00 A.M.',
      image: images.event1,
    },
    {
      id: 2,
      title: 'Dula, Dulaan',
      date: '2023-07-25',
      time: '8:00 A.M.',
      image: images.event2,
    },
    {
      id: 3,
      title: 'Bingo ng Binan',
      date: '2023-07-30',
      time: '8:00 A.M.',
      image: images.event3,
    },
    {
      id: 4,
      title: 'Kakahuyan',
      date: '2023-08-05',
      time: '8:00 A.M.',
      image: images.event4,
    },
    {
      id: 5,
      title: 'Sining Konsiyerto',
      date: '2023-08-10',
      time: '8:00 A.M.',
      image: images.event1,
    },
  ];

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
                {sampleEvents.map((event) => (
                  <li key={event.id}>
                    <div className="flex items-center">
                      <img src={event.image} alt={event.title} className="w-12 h-12 rounded border border-gray-300 mr-4" />
                      <div>
                        <h3>{event.title}</h3>
                        <p>
                          {event.date} | {event.time}
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
