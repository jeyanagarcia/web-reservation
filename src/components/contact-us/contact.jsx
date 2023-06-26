import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import images from '../../constant/images';

const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center p-4 ">
      <form action="" className="flex flex-col max-w-[600px] w-full ml-12 mr-12 md:mt-8">
        <div className="pb-8">
          <p className="text-4xl font-bold text-black">Contact Us</p>
          <p className="text-black py-4">We are here for you. How can we help?</p>
        </div>
        <input className="bg-gray-300 border border-gray-400 rounded-lg py-2 px-4 mb-4" type="text" placeholder="Name" name="name" />
        <input className="bg-gray-300 border border-gray-400 rounded-lg py-2 px-4 mb-4" type="email" placeholder="Email" name="email" />
        <textarea className="bg-gray-300 border border-gray-400 rounded-lg py-2 px-4 mb-4" name="message" rows="10" placeholder="Message"></textarea>
        <button className="w-40 h-12 mb-5 rounded-full shadow-shadowOne flex items-center justify-center 
          bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
          transition-colors duration-1000 mx-auto text-black">Submit</button>
      </form>

      <div name="contact-information" className="flex flex-col max-w-[600px] w-full ml-12 md:mt-8">
        <div className="pb-8">
          <img className="icon ml-12 mb-4" src={images.contacticon} style={{ maxWidth: '300px' }} />
          <p className="text-4xl font-bold text-black mb-6">Get in Touch with Us</p>
          <p><FontAwesomeIcon icon={faLocationDot} /> 83QM+GPF, Old Municipal Building, Biñan, Laguna</p>
          <p className="mt-2"><FontAwesomeIcon icon={faPhone} /> 091234567891</p>
          <p className="mt-2"><FontAwesomeIcon icon={faEnvelope} /> Example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
