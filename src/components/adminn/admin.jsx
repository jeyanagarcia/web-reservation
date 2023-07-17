import React, { useState, useEffect } from 'react';
import OverViewLayout from './overviewLayout';
import { Link } from 'react-router-dom';
import { AdminData } from './adminData';

const Blog = () => {


  return (

    <section id="blog" className="w-full py-12 border-b-[1px] relative z-0">
    <div className="container mx-auto">

      <div className="grid md:grid-cols-2 ml-8">
        <div className="flex flex-wrap -mx-20 -ml-8 ">
          {AdminData.map((adData) => (
            <div className="w-80 md:w-1/2 xl:w-1/2 px-3 mb-6">
              <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-300 hover:bg-[#7a7a7a] transition-colors duration-500 ">
                <OverViewLayout
                  events={adData.eventsCreated}
                  user={adData.userRegistration}
                  ticket={adData.ticketSales}
                  total={adData.TotalEarnings}
                />
              </div>
            </div>
          ))}
        </div>


        <div className="flex flex-wrap justify-end" >
        <div className="w-full md:w-1/2 xl:w-1/2 px-3 mb-6 mt-0 -ml-8" style = {{width: '650px'}}>
          <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-300 hover:bg-[#7a7a7a] transition-colors duration-500 h-64">
            {/* square1 */}
          </div>
        </div>

        </div>

        <div className="flex flex-wrap justify-end">
  <div className="w-full md:w-1/2 xl:w-1/2 px-2 mb-6 mt-0 -ml-8 " style = {{width: '650px'}}>
    <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-300 hover:bg-[#7a7a7a] transition-colors duration-500 h-64">
      {/* square1 */}
    </div>
  </div>
</div>

        <div className="flex flex-wrap justify-end" >
        <div className="w-full md:w-1/2 xl:w-1/2 px-3 mb-6 mt-0 -ml-8" style = {{width: '650px'}}>
          <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-300 hover:bg-[#7a7a7a] transition-colors duration-500 h-64">
            {/* square1 */}
          </div>
        </div>

        </div>
      </div>
      
    </div>
    

  </section>
    
  ); 
 
};

export default Blog;