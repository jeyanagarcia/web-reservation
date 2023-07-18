import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import QRCode from "react-qr-code";

const TicketLayout = ({ selectedEvent }) => {
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

      const matchedEvent = reservations.find(event => event.eventKey === selectedEvent.eventKey);
      setReservationData(matchedEvent);
      console.log(matchedEvent);
    } catch (error) {
      console.error('Error fetching reservation data:', error);
    }
  };

  useEffect(() => {
    fetchReservationData();
  }, [selectedEvent]);

  if (!reservationData) {
    return (
      <div className="payment-container h-[80%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col">
        <h1 className="payment-title text-2xl mt-4 ml-4 text-left">Your Ticket</h1>
        <div className="empty-content flex flex-col items-center justify-center flex-1">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const { title, reservationDate, price, ticketCount, name, age } = reservationData;

  return (
    <div className="payment-container h-[80%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col">
      <h1 className="payment-title text-2xl mt-4 ml-4 text-left">Your Ticket</h1>
      <div className="empty-content flex flex-col items-left ml-28 justify-center flex-1">
        <h1 className=''>{title}</h1>
        <p>Sentrong Pangkultura ng Binan</p>
        <p className='mt-2'>Date: {reservationDate}</p>
        <div className='flex'>
          <p className='mt-2 mr-16'>Price: {price}</p>
          <p className='mt-2'>Ticket No: {ticketCount}</p>
          <p className='test-title'></p>
        </div>
        <div className="w-full h-auto max-w-64 ml-5 mt-12">
          <QRCode
            size={200}
            className="ml-18 w-150 h-auto max-w-100"
            value={name}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketLayout;
