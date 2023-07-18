import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import QRCode from "react-qr-code";


const TicketLayout = ({ selectedEvent }) => {
  const [reservationData, setReservationData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewMap = () => {
    setShowModal(true);
  };

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

  const handleRemoveEvent = () => {
    setShowModal(true);
  };

  const handleConfirmRemove = async () => {
    try {
      await deleteDoc(doc(db, 'attendees', reservationData.id));
      console.log('Event removed successfully');
      window.location.reload(); 
    } catch (error) {
      console.error('Error removing event:', error);
    }
  };

  const handleCancelRemove = () => {
    setShowModal(false);
  };

  if (!reservationData) {
    return (
      <div className="payment-container h-[80%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col items-center justify-center">
        <h1 className="payment-title text-2xl mt-4 ml-4 text-left">Your Ticket</h1>
        <div className="empty-content">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const { title, eventDate, price, ticketCount, name, age, location } = reservationData;

  return (
    <div className="payment-container h-[80%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col items-center justify-center">
      <h1 className="payment-title text-2xl mt-4 ml-4 text-left">Your Ticket</h1>
      <div className="empty-content flex flex-col items-center justify-center flex-1">
        <h1 className=''>{title}</h1>
        <p className='mt-2'>{location}</p>
        <p className='mt-2'>Date: {eventDate}</p>
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

      <div className='mt-2 mb-28 flex items-center justify-center'>
        <button
          className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b
          hover:from-green-200 hover:to-green-300 transition-colors duration-1000 text-black mr-4"
          onClick={handleViewMap}
        >
          View Map
        </button>
        <button
          className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b
          hover:from-green-200 hover:to-green-300 transition-colors duration-1000 text-black mr-4"
          onClick={handleRemoveEvent}
        >
          Remove
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p>Are you sure you want to remove this event?</p>
            <div className="flex justify-center mt-4">
              <button
                className="mr-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={handleConfirmRemove}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                onClick={handleCancelRemove}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketLayout;
