import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import {eventData} from '../../constant/eventData'

const Wishlist = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <article>
      <h1>Wishlist</h1>
      {Object.keys(cartItems).map((eventId) => {
        const eventInfo = eventData.find((event) => event.eventKey === parseInt(eventId));
        return (
          <div className="flex items-center justify-between p-4 border-b" key={eventId}>
            <div className="flex items-center">
              <img src={eventInfo.image} alt="Event Image" className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <p className="text-lg font-bold">{eventInfo.title}</p>
              </div>
            </div>
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
    </article>
  );
};

export default Wishlist;
