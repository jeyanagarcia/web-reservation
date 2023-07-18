import React from 'react';

const BookedEventsLayout = ({ events, onEventClick }) => {
  const handleEventClick = (event) => {
    onEventClick(event);
  };

  return (
    <div className="mt-10 mr-48">
      {events.length > 0 ? (
        events.map((event) => (
          <div
            key={event.id}
            className="border border-gray-500 rounded-lg p-4 mb-4 cursor-pointer"
            onClick={() => handleEventClick(event)}
          >
            <h1>{event.title}</h1>
            <p>When: {event.eventDate}</p>
            <p>Organizer: {event.organizer}</p>
            <p>Ticket No: {event.ticketCount}</p>
          </div>
        ))
      ) : (
        <p>No booked events</p>
      )}
    </div>
  );
};

export default BookedEventsLayout;
