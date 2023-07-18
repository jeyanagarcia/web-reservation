import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc, doc, runTransaction, where, getDocs, query } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { useUserAuth } from '../../context/authContext';
import {eventData} from '../../../constant/eventData';

const DefaultUser = ({ onConfirm }) => {
  const { user } = useUserAuth();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [ticketCount, setTicketCount] = useState(0); 
  const { eventKey } = useParams();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find((event) => event.eventKey === parsedEventKey); 

  useEffect(() => {
    const fetchTicketCount = async () => {
      try {
        const attendeesQuery = query(collection(db, 'attendees'), where('eventKey', '==', parsedEventKey));
        const attendeesSnapshot = await getDocs(attendeesQuery);
        const count = attendeesSnapshot.size;
        setTicketCount(count);
      } catch (error) {
        console.error('Error fetching ticket count:', error);
      }
    };
  
    fetchTicketCount();
  }, [parsedEventKey]);

  const handleConfirm = async () => {
    const reservationDate = new Date().toISOString().split('T')[0]; 
  
    const userData = {
      email: user && user.email,
      name: `${user && user.firstname} ${user && user.lastname}`,
      age: user && user.age,
      userId: user.uid,
      eventKey: parsedEventKey, 
      ticketCount: ticketCount + 1,
      reservationDate,
      price: eventInfo.price,
    };
  
    try {
      const docRef = await addDoc(collection(db, 'attendees'), userData);
      setIsConfirmed(true);
      console.log('Document written with ID:', docRef.id);
      onConfirm(userData);
  
     
      const eventDocRef = doc(db, 'events', parsedEventKey); 
      await runTransaction(db, async (transaction) => {
        const eventDocSnapshot = await transaction.get(eventDocRef);
        if (eventDocSnapshot.exists()) {
          if (eventInfo.price === 'Free') {
           
            transaction.update(eventDocRef, {
              ticketCount: ticketCount + 1,
              totalPrice: 'Free', 
            });
          } else {
            
            const eventPrice = parseFloat(eventInfo.price);
            transaction.update(eventDocRef, {
              ticketCount: ticketCount + 1,
              totalPrice: (ticketCount + 1) * eventPrice, 
            });
          }
        } else {
          console.log('Event document does not exist.');
        }
      });
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <div>
      {!isConfirmed ? (
        <section style={{ width: '100%' }}>
          <h1>Attendee Information</h1>
          <p className="ml-36 mt-12">Attendee Email: {user && user.email}</p>
          <p className="ml-36 mt-3">
            Attendee Name: {user && user.firstname} {user && user.lastname}
          </p>
          {!isConfirmed && (
            <div className="flex justify-center ml-32 mt-4">
              <button
                className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b
             hover:from-green-200 hover:to-green-300 transition-colors duration-1000 text-black mr-4"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          )}
        </section>
      ) : (
        <section>
          <h1 className="text-2xl ml-32">Attendee Information is Confirmed</h1>
          <div className="bg-lightGreen-100 py-2 px-4 rounded-lg mt-4">
            <p className="text-black ml-28 bg-green-300 rounded-lg p-6 items-center justify-center">
              Notice: all events organized by BCHATO<br /> are offered completely free of charge.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default DefaultUser;