import React, { useEffect, useState } from 'react';
import { MdOutlineReceiptLong } from 'react-icons/md';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const DuPayment = () => {
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
          price: reservationData.price, // Add the price to the reservation data
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

  return (
    <div className="payment-container h-[168%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col">
      <h1 className="payment-title text-2xl mt-4 ml-4">Payment Summary</h1>

      <div className="payment-content flex flex-col items-left ml-10 justify-center flex-1">
        <div className="payment-icon flex items-center justify-center mt-4">
          <MdOutlineReceiptLong className="payment-icon-svg text-5xl text-green-500" />
        </div>
        {reservationData && (
          <div>
            <p className="payment-text mt-4">Reservation Date: {reservationData.reservationDate}</p>
            <p className="payment-text mt-4">Ticket Fee: {reservationData.price}</p> 
            <p className="payment-text mt-4">Order No: {reservationData.ticketCount}</p>
            <p className="payment-text mt-4">Attendee Name: {reservationData.name}</p>
            <p className="payment-text mt-4">Total: {reservationData.price} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DuPayment;
