import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUserAuth } from '../../context/authContext';
import { collection, addDoc, doc, runTransaction, where, getDocs, query } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import {eventData} from '../../../constant/eventData';

const Guest = ({ eventKey,  onConfirm }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [residency, setResidency] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);
  const { user } = useUserAuth();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find((event) => event.eventKey === parsedEventKey);

 useEffect(() => {
    const fetchTicketCount = async () => {
      try {
        const attendeesQuery = query(collection(db, 'attendees'), where('eventKey', '==', eventKey));
        const attendeesSnapshot = await getDocs(attendeesQuery);
        const count = attendeesSnapshot.size;
        setTicketCount(count);
      } catch (error) {
        console.error('Error fetching ticket count:', error);
      }
    };

    fetchTicketCount();
  }, [eventKey]);

  const handleConfirm = async () => {
    const reservationDate = new Date().toISOString().split('T')[0]; 
    const attendeeData = {
      email:email,
      name: name,
      age: age,
      userId:user.uid,
      eventKey:eventKey,
      residency,
      eventKey,
      userId: user.uid,
      ticketCount: ticketCount + 1,
      reservationDate,
      price: eventInfo.price,
      title: eventInfo.title,
      organizer: eventInfo.organization,
      eventDate: eventInfo.date_time,
      location: eventInfo.location,

    };
  
    try {
      const docRef = await addDoc(collection(db, 'attendees'), attendeeData);
      setIsConfirmed(true);
      console.log(docRef.id);
      onConfirm(attendeeData); 
    } catch (error) {
      console.error('Error saving attendee data:', error);
    }
  };
  

  return (
    <div>
    {!isConfirmed ? (
    <section style={{ width: '100%' }}>
      <h1>Attendee Information</h1>
      <div className="mt-2">
        <div className="flex flex-col py-1">
          <label htmlFor="attendeeName" className="block font-medium ml-32">
            Attendee Name:
          </label>
          <input
            id="attendeeName"
            className="border-black border-opacity-40 p-1 rounded-full pl-8 border w-full bg-transparent ml-32"
            type="text"
            placeholder="Enter attendee name"
            value={name}
            style={{ width: '250px' }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col py-1">
          <label htmlFor="attendeeEmail" className="block font-medium ml-32">
            Attendee Email:
          </label>
          <input
            id="attendeeEmail"
            className="border-black border-opacity-40 p-1 rounded-full pl-8 border w-full bg-transparent  ml-32"
            type="email"
            placeholder="Enter attendee email"
            value={email}
            style={{ width: '250px' }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col py-1">
          <label htmlFor="attendeeAge" className="block font-medium ml-32">
            Attendee Age:
          </label>
          <input
            id="attendeeAge"
            className="border-black border-opacity-40 p-1 rounded-full pl-8 border w-full bg-transparent ml-32"
            type="text"
            placeholder="Enter attendee age"
            value={age}
            style={{ width: '250px' }}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-1">
          <p className="ml-32">Resident of Binan?</p>
          <div className="flex gap-2 mt-1">
            <div className="flex items-center ml-40">
              <input
                id="yesCheckbox"
                type="checkbox"
                checked={residency === true}
                onChange={() => setResidency(true)}
              />
              <label htmlFor="yesCheckbox" className="ml-1">
                Yes
              </label>
            </div>
            <div className="flex items-center ml-8">
              <input
                id="noCheckbox"
                type="checkbox"
                checked={residency === false}
                onChange={() => setResidency(false)}
                
              />
              <label htmlFor="noCheckbox" className="ml-1">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-left mt-3">
          <button
            className="w-32 h-10 ml-48 rounded-full shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 transition-colors duration-1000 text-black mr-4"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
    ) : (
        <section>
        <h1 className="text-2xl ml-28">Attendee Information is Confirmed</h1>
        <div className="bg-lightGreen-100 py-2 px-4 rounded-lg mt-4">
        <p className="text-black ml-28 bg-green-300 rounded-lg p-6 items-center justify-center">
        Notice: all events organized by BCHATO<br/> are offered completely free of charge.
      </p>
    </div>
    </section>
    )}
    </div>
  );
};

export default Guest;