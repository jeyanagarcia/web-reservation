import React, { useState } from 'react';

const AdminBlog = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex justify-between items-center px-60 mt-8">
        <h1>Articles Created</h1>

        <div>
        <input type="text" placeholder="Search Articles"
          style={{border: 'none', outline: 'none', backgroundColor: '#EDEDED', borderRadius: '25px', paddingLeft: '25px', height: '3rem', width: '250px', marginRight: '2rem'}}/>
        </div>

      </div>

      <div className="flex justify-center overflow-y-scroll">
        <table className="w-3/4 mt-4 border rounded mb-8 shadow-md" style={{ borderColor: 'rgba(224, 224, 224, 0.7)' }}>
          <thead>
            <tr>
              <th
                className="p-2"
                colSpan="7"
                style={{ backgroundColor: 'rgba(224, 224, 224, 0.7)' }}
              >
                <ul className="flex border-b">
                  <li
                    className={`cursor-pointer py-2 px-4 ${activeTab === 'published' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleTabChange('published')}>
                    Published
                  </li>
                  <li
                    className={`cursor-pointer py-2 px-4 ${activeTab === 'draft' ? 'bg-blue-500 text-white' : ''}`}onClick={() => handleTabChange('draft')}>
                    Draft
                  </li>
                </ul>
              </th>
            </tr>
            <tr style = {{backgroundColor: 'rgba(252, 252, 252)'}}>
              <th className="border-b p-2">#</th>
              <th className="border-b p-2">Article Title</th>
              <th className="border-b p-2">Organizer</th>
              <th className="border-b p-2">Date</th>
              <th className="border-b p-2">Publish Date</th>
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
