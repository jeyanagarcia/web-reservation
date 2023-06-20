import React, { useState, useEffect, createContext } from 'react';
import { eventData } from '../../constant/eventData';

export const EventContext = createContext();

const EventContextProvider = ({ children }) => {
  const [organizer, setOrganizer] = useState([]);
  const [organization, setOrganization] = useState('Organizer (any)');
  const [eventt, setEventt] = useState(eventData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allOrganizers = eventt.map((event) => event.organization);
    const uniqueOrganizers = ['Organizer (any)', ...new Set(allOrganizers)];

    setOrganizer(uniqueOrganizers);
  }, [eventt]);

  return (
    <EventContext.Provider
      value={{
        eventt,
        setEventt,
        organizer,
        setOrganizer,
        organization,
        setOrganization,
        loading,
        setLoading,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
