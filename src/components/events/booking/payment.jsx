import React from 'react';
import { MdOutlineReceiptLong } from 'react-icons/md';

const Payment = () => {
  return (
    <div className="payment-container h-[168%] w-full border-2 rounded-lg border-gray-500 mt-10 flex flex-col">
      <h1 className="payment-title text-2xl mt-4 ml-4">Payment Summary</h1>
      <div className="payment-content flex flex-col items-center justify-center flex-1">
        <div className="payment-icon flex items-center justify-center mt-4">
          <MdOutlineReceiptLong className="payment-icon-svg text-5xl text-green-500" />
        </div>
        <p className="payment-text mt-4 text-center">
          Your Payment Summary Will Be Displayed Here.
        </p>
      </div>
    </div>
  );
};

export default Payment;
