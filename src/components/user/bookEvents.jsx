import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import BookedEventsLayout from './bookedEventsLayout';
import { MdOutlineReceiptLong } from 'react-icons/md';
import TicketLayout from './ticketLayout';


const BookEvents = () => {
  const [reservationData, setReservationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [pageIndex, setPageIndex] = useState(0); 

  useEffect(() => {
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
            name: reservationData.name,
            age: reservationData.age,
            ...reservationData,
          });
        });
        setReservationData(reservations);
        console.log(reservations);
      } catch (error) {
        console.error('Error fetching reservation data:', error);
      }
    };

    fetchReservationData();
  }, []);

  const handleEventClick = async (event) => {
    try {
      setLoading(true);
      if (selectedEvent && selectedEvent.id === event.id) {
        setSelectedEvent(null);
      } else {
        setSelectedEvent(event);
      }
    } catch (error) {
      console.error('Error handling event click:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(reservationData.length / 3);

  const startIdx = pageIndex * 3;
  const endIdx = Math.min(startIdx + 3, reservationData.length);
  const currentData = reservationData.slice(startIdx, endIdx);

  const handleNextPage = () => {
    if (pageIndex < totalPages - 1) {
      setPageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pageIndex > 0) {
      setPageIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="wishlist-container flex justify-center h-screen">
      <div className="grid grid-cols-2 gap-8">
        <div className="mr-2 mt-12">
          <h1>Booked Events</h1>
          <div className="info-container">
            <BookedEventsLayout events={currentData} onEventClick={handleEventClick} />
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              <button
                className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handlePreviousPage}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleNextPage}
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="ticket-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {selectedEvent ? (
                <TicketLayout selectedEvent={selectedEvent} />
              ) : (
                <div className="payment-container h-[80%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col">
                  <h1 className="payment-title text-2xl mt-4 ml-4 text-left">Your Ticket</h1>
                  <div className="empty-content flex flex-col items-center justify-center flex-1">
                    <MdOutlineReceiptLong className="payment-icon-svg text-8xl text-green-500" />
                    <div className="payment-icon flex items-center justify-center mt-4"></div>
                    <p className="payment-text mt-4 text-center">
                      Your Ticket Information <br />
                      will be displayed here
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookEvents;
