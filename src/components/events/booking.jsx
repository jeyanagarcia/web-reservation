import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { eventData } from "../../constant/eventData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  const { eventKey } = useParams();
  const parsedEventKey = parseInt(eventKey);
  const eventInfo = eventData.find((event) => event.eventKey === parsedEventKey);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              Close
            </button>
            <div className="flex flex-wrap justify-left">
              <div className="w-full">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={eventInfo.image}
                  alt="Event Image"
                />
              </div>
            </div>
            <div className="ml-12">
              <h2 className="text-3xl font-bold mt-4">{eventInfo.title}</h2>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
