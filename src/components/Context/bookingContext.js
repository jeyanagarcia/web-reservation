import React, { createContext, useState, useEffect, useContext } from 'react';
import { doc, getDoc, getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const BookingContext = createContext();

export const BookingContextProvider = ({ children }) => {
  const [bookingId, setBookingId] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [reservationData, setReservationData] = useState(null);

  const fetchReservationData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'attendees'));
      const reservations = [];
      querySnapshot.forEach((doc) => {
        const reservationData = doc.data();
        reservations.push({
          id: doc.id,
          reservationDate: reservationData.reservationDate,
          price: reservationData.price,
          ...reservationData,
        });
      });
      setReservationData(reservations[0]);
      console.log(reservations);
    } catch (error) {
      console.error('Error fetching reservation data:', error);
    }
  };

  useEffect(() => {
    fetchReservationData();
  }, []);

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
