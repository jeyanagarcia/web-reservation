import React, { useState } from 'react';

const AdminBlog = () => {


  return (
    <div>
      <div className="flex justify-between items-center px-60 mt-8">
        <h1>Queries</h1>
        <div>
        <input type="text" placeholder="Search Queries"
          style={{border: 'none', outline: 'none', backgroundColor: '#EDEDED', borderRadius: '25px', paddingLeft: '25px', height: '3rem', width: '250px', marginRight: '2rem'}}/>
        </div>

      </div>

      <div className="flex justify-center overflow-y-scroll">
        <table className="w-3/4 mt-4 border rounded mb-8 shadow-md" style={{ borderColor: 'rgba(224, 224, 224, 0.7)' }}>
          <thead>
            <tr>
              <th
                className="p-0.5"
                colSpan="10"
                style={{ backgroundColor: 'rgba(224, 224, 224, 0.7)' }}
              >
                <ul className="flex border-b">
                  
                  <li
                   >
                    Draft
                  </li>
                </ul>
              </th>
            </tr>
            <tr style = {{backgroundColor: 'rgba(252, 252, 252)'}}>
              <th className="border-b p-2">Customer ID</th>
              <th className="border-b p-2">Customer</th>
              <th className="border-b p-2">Email</th>
              <th className="border-b p-2">Contact</th>
              <th className="border-b p-2">Publish Date</th>
              <th className="border-b p-2">Query</th>
              <th className="border-b p-2">Status</th>
              <th className="border-b p-2">Action</th>
            </tr>
          </thead>
          <tbody style = {{backgroundColor: 'rgba(252, 252, 252)'}}>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlog;
