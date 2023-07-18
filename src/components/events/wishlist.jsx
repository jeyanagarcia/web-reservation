import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/wishlistContext';
import { eventData } from '../../constant/eventData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { useUserAuth } from '../context/authContext';

const Wishlist = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  if (!cartItems || Object.keys(cartItems).length === 0) {
    return (
      <div className="wishlist-container flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4 absolute top-1/2 transform -translate-y-1/2">Wishlist</h1>
        <FontAwesomeIcon icon={faGhost} size="6x" color="#84D7A0" />
        <p className="text-lg">Your wishlist is empty</p>
      </div>
    );
  }

  return (
    <div className="wishlist-container h-screen overflow-y-auto">
      <h1 className="text-3xl mb-4 mt-12 ml-12">Wishlist</h1>
      {Object.keys(cartItems).map((eventId) => {
        const parsedEventId = parseInt(eventId);
        const eventInfo = eventData.find((event) => event.eventKey === parsedEventId);
        return (
          <div key={eventId} className="wishlist-item flex items-center justify-between p-4 border-b">
            <Link
              to={`/event/${eventInfo.eventKey}`}
              className="flex items-center w-full"
              onClick={(e) => {
                if (e.target.tagName.toLowerCase() === 'button') {
                  e.preventDefault();
                  removeFromCart(eventId);
                }
              }}
            >
              <div className="flex items-center">
                <img src={eventInfo.image} alt="Event Image" className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h2 className="text-lg">{eventInfo.title}</h2>
                  <p className="text-sm">{eventInfo.date_time}</p>
                </div>
              </div>
            </Link>
            <div className="flex items-center">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-full"
                onClick={() => removeFromCart(eventId)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
