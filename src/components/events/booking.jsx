import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../../constant/eventData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useUserAuth } from '../context/authContext';

const Booking = ({ isOpen, onClose }) => {
  const { user } = useUserAuth();
  const [info, setInfo] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [residency, setResidency] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);

  const { eventKey } = useParams();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find((event) => event.eventKey === parsedEventKey);

  const [ticketCount, setTicketCount] = useState(1);


  const closeModal = () => {
    onClose();
  };


  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    setInfo(checkboxValue);
    setResidency(checkboxValue === 'yes');
    setShowSecondSection(checkboxValue === 'no');
    setShowThirdSection(checkboxValue === 'yes');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white w-full max-w-6xl p-6 rounded-lg relative">
            <button
              className="absolute top-0 right-0 m-3 p-2 border-b-gray-500 text-black hover:text-gray-700 hover:bg-red-500 bg-transparent"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <section>
              <h1>Check Out</h1>
              <div className="container mx-auto min-h-[300px] mb-14">
                <div className="flex flex-wrap justify-left lg:flex-nowrap">
                  <div className="w-full md:w-80 h-auto bg-gray-300 rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-6">
                    <img
                      className="w-full h-full object-cover"
                      src={eventInfo.image}
                      alt="Event Image"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-left">
                    <h1 className="text-4xl font-bold">{eventInfo.title}</h1>
                    <div className="flex items-center mt-2">
                      <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                      <span>{eventInfo.location}</span>
                    </div>
                    <div className="mt-2">{eventInfo.date_time}</div>
                    <div className="flex gap-3 mt-4">
                      <div className="text-xs px-2 py-1 rounded-full border border-black">
                        {eventInfo.genre1}
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full border border-black">
                        {eventInfo.genre2}
                      </div>
                    </div>

                    <div className="mt-3 mb-4">
                      Ticket for {ticketCount} : {eventInfo.price}
                    </div>
               

                    <div className="flex flex-col">
                      <p>Is the ticket for you?</p>
                      <div className="flex gap-3 mt-1">
                        <div className="flex items-center mt-1">
                          <input
                            id="yesCheckbox"
                            type="radio"
                            value="yes"
                            checked={info === 'yes'}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="yesCheckbox" className="ml-2">
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center mt-1">
                          <input
                            id="noCheckbox"
                            type="radio"
                            value="no"
                            checked={info === 'no'}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="noCheckbox" className="ml-2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>








            

            {showSecondSection && (
              <section style={{ width: '40%' }}>
              <h1>Attendee Information </h1>
                <div className="mt-4">
                  <div className="flex flex-col py-2">
                    <label htmlFor="attendeeName" className="block font-medium">
                      Attendee Name:
                    </label>
                    <input
                      id="attendeeName"
                      className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent"
                      type="text"
                      placeholder="Enter attendee name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <label htmlFor="attendeeEmail" className="block font-medium">
                      Attendee Email:
                    </label>
                    <input
                      id="attendeeEmail"
                      className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent"
                      type="email"
                      placeholder="Enter attendee email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="attendeeAge" className="block font-medium">
                      Attendee Age:
                    </label>
                    <input
                      id="attendeeAge"
                      className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent"
                      type="text"
                      placeholder="Enter attendee age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <p>Resident of Binan?</p>
                    <div className="flex gap-3 mt-1">
                      <div className="flex items-center mt-1">
                        <input
                          id="yesCheckbox"
                          type="checkbox"
                          checked={residency === true}
                          onChange={() => setResidency(true)}
                        />
                        <label htmlFor="yesCheckbox" className="ml-2">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center mt-1">
                        <input
                          id="noCheckbox"
                          type="checkbox"
                          checked={residency === false}
                          onChange={() => setResidency(false)}
                        />
                        <label htmlFor="noCheckbox" className="ml-2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center 
                    bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
                    transition-colors duration-1000 text-black mr-4">
                    Book Now
                  </button>
                </div>
              </section>
            )}

            {showThirdSection && (
              <section style={{ width: '40%' }}>
              <h1>Attendee Information </h1>
                <p className='ml-24 mt-5'>Attendee Email: {user && user.email}</p>
                <p className='ml-24 mt-3'>
                  Attendee Name: {user && user.firstname} {user && user.lastname}
                </p>
                <div className="flex justify-center mt-4">
                  <button className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center 
                    bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
                    transition-colors duration-1000 text-black mr-4">
                    Book Now
                  </button>
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
