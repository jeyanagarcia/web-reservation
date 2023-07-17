import React from 'react';
import { MdOutlineReceiptLong } from 'react-icons/md';

const Payment = ({ onConfirmed }) => {
  return (
    <div className="payment-container h-[168%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col">
      <h1 className="payment-title text-2xl mt-4 ml-4">Payment Summary</h1>

      {!onConfirmed ? (
        <div className="empty-content flex flex-col items-center justify-center flex-1">
          <div className="payment-icon flex items-center justify-center mt-4">
            <MdOutlineReceiptLong className="payment-icon-svg text-5xl text-green-500" />
          </div>
          <p className="payment-text mt-4 text-center">
            Your Payment Summary Will Be Displayed Here.
          </p>
        </div>
      ) : (
        <div className="payment-content flex flex-col items-center justify-center flex-1">
          <div className="payment-icon flex items-center justify-center mt-4">
            <MdOutlineReceiptLong className="payment-icon-svg text-5xl text-green-500" />
          </div>
          <p className="payment-text mt-4 text-center">Reservation Date:</p>
          <p className="payment-text mt-4 text-center">Ticket Fee:</p>
          <p className="payment-text mt-4 text-center">Order No:</p>
          <p className="payment-text mt-4 text-center">Attendee Name:</p>
          <p className="payment-text mt-4 text-center">Total:</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
