import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faTicket, faUserGroup } from '@fortawesome/free-solid-svg-icons';


const BlogLayout = ({ events, user, ticket }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10">
      <div className="flex flex-col items-end">
        <div className="text-sm mt-2 flex items-center">
          {events && (
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendar} className="mr-2 text-4xl" style={{ color: '#af6caf', fontSize: '60px' }} />
              <span style={{ fontSize: '60px', margin: '0 10px', color: '#b6b7b6' }}>|</span>
              <h1>{events}</h1>
            </div>
          )}
        </div>
        {user && (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-4xl" style={{ color: '#88ae89', fontSize: '60px' }} />
            <span style={{ fontSize: '60px', margin: '0 10px', color: '#b6b7b6' }}>|</span>
            <h1>{user}</h1>
          </div>
        )}
        {ticket && (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faTicket} className="mr-2 text-4xl" style={{ color: '#5d5be5', fontSize: '60px' }} />
            <span style={{ fontSize: '60px', margin: '0 10px', color: '#b6b7b6' }}>|</span>
            <h1>{ticket}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogLayout;
