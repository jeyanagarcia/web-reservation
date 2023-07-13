import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2' style={{ backgroundColor: '#313131', color: '#dcdcdc',  marginTop: '0rem' }}>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
          <div>
            <h6 className='font-bold uppercare pt-2'>ABOUT BIÑAN</h6>
            <ul>
              <li className='py-1'>Biñan's Beginning</li>
              <li className='py-1'>Rizal in Biñan</li>
              <li className='py-1'>Map and Barangays of Biñan</li>
              <li className='py-1'>Biñan Today</li>
              <li className='py-1'>The City Government of Biñan</li>
            </ul>
          </div>

          <div>
            <h6 className='font-bold uppercare pt-2'>EXPERIENCE BIÑAN</h6>
            <ul>
              <li className='py-1'>See Biñan</li>
              <li className='py-1'>Hear Biñan</li>
              <li className='py-1'>Smell Biñan</li>
              <li className='py-1'>Taste Biñan</li>
              <li className='py-1'>Feel Biñan</li>
              <li className='py-1'>Registered Local Tourism Enterprises</li>
            </ul>
          </div>

          <div>
            <h6 className='font-bold uppercare pt-2'>GOVERNMENT LINK</h6>
            <ul>
              <li className='py-1'><a href="https://www.binan.gov.ph/" target="_blank" rel="noopener noreferrer">City of Biñan LGU</a></li>
              <li className='py-1'><a href="https://www.binanstudiescenter.com/website/" target="_blank" rel="noopener noreferrer">Biñan City Studies Center</a></li>
              <li className='py-1'><a href="https://ww5.lovelaguna.com.ph/?subid1=3ba80322-1ee8-11ee-b952-0806ea40d47e" target="_blank" rel="noopener noreferrer">Love Laguna - Province of Laguna</a></li>
              <li className='py-1'><a href="https://www.dilg.gov.ph/" target="_blank" rel="noopener noreferrer">LGU</a></li>
              <li className='py-1'><a href="https://beta.tourism.gov.ph/" target="_blank" rel="noopener noreferrer">Department of Tourism</a></li>
              <li className='py-1'><a href="https://itsmorefuninthephilippines.co.uk/" target="_blank" rel="noopener noreferrer">It's More Fun in the Philippines</a></li>
              
              
              
            </ul>
          </div>

          <div>
            <h6 className='font-bold uppercare pt-2'>WHAT'S NEW?</h6>
            <ul>
              <li className='py-1'>News and Events</li>
              <li className='py-1'>Experience Biñan Vlogs</li>
              <li className='py-1'>Dot Accredited Establishments</li>
            </ul>
          </div>

          <div className='col-span-2 py-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletters</p>
            <p className='py-4'>
              The Latest deals, articles and resources sent to your inbox weekly.
            </p>
            <form className='flex flex-col sm:flex-row'>
              <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
              <button className='p-2 mb-4 rounded-md' style={{ backgroundColor: '#453253' }}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
          <p className='py-4'>2022 Experiences, LLC. All rights reserved</p>
          <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <TiSocialPinterest size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
