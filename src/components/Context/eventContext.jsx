import React, { useState, useEffect, createContext } from 'react';
import { eventData } from '../../constant/eventData';

export const EventContext = createContext();

const EventContextProvider = ({ children }) => {
  const [eventt, setEventt] = useState(eventData);
  const [organizer, setOrganizer] = useState([]);
  const [choice, setChoices] = useState('Organizer (any)');
  const [genre1, setGenre1] = useState([]);
  const [genre2, setGenre2] = useState([]);

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
        choice,
        setChoices,
        loading,
        setLoading,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;