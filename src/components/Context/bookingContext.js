import React, { createContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const BookingContext = createContext();

export const BookingContextProvider = ({ children }) => {
  const [bookingId, setBookingId] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  const handleConfirm = async (attendeeData) => {
    try {
      const { userId, ...data } = attendeeData;
      const docRef = await addDoc(collection(db, 'attendees'), data);
      console.log('Document written with ID:', docRef.id);
      setBookingId(docRef.id);
    } catch (error) {
      console.error('Error saving attendee data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (bookingId) {
        try {
          const bookingDocRef = doc(db, 'attendees', bookingId);
          const bookingSnapshot = await getDoc(bookingDocRef);
          if (bookingSnapshot.exists()) {
            setBookingData(bookingSnapshot.data());
          } else {
            console.log('Document does not exist.');
          }
        } catch (error) {
          console.error('Error fetching booking data:', error);
        }
      }
    };

    fetchData();
  }, [bookingId]);

  const contextValue = {
    bookingId,
    bookingData,
    handleConfirm,
  };

  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
