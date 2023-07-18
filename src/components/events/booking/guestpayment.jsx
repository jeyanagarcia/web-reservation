import React from 'react';
import { MdOutlineReceiptLong } from 'react-icons/md';


const Payment = ({ onConfirmed }) => {
  

  return (
    <div className="payment-container h-[168%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col">
      <h1 className="payment-title text-2xl mt-4 ml-4">Payment Summary</h1>

    
        <div className="payment-content flex flex-col items-left ml-5 justify-center flex-1">
          <div className="payment-icon flex items-center justify-center mt-4">
            <MdOutlineReceiptLong className="payment-icon-svg text-5xl text-green-500" />
          </div>
          <p className="payment-text mt-4">Reservation Date:</p>
          <p className="payment-text mt-4">Ticket Fee:</p>
          <p className="payment-text mt-4">Order No:</p>
          <p className="payment-text mt-4">Attendee Name: </p>
          <p className="payment-text mt-4">Total:</p>

          <button
            className="w-32 h-10 ml-24 mt-12 rounded-full shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b
             hover:from-green-200 hover:to-green-300 transition-colors duration-1000 text-black mr-4" 
          >
            Book Event
          </button>
        </div>
 
    </div>
  );
};

export default Payment;
