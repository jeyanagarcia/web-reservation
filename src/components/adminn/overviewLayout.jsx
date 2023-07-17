import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';


const BlogLayout = ({events, user, ticket, total }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10">
  <div className="flex flex-col items-end">
    <div className="text-sm mt-2 flex items-center">
      {events && (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUserGroup} className="mr-2 text-4xl" />
          <h1>{events}</h1>
        </div>
      )}
    </div>
    {user && (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faUserGroup} className="mr-2 text-4xl" />
        <h1>{user}</h1>
      </div>
    )}
    {ticket && (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faUserGroup} className="mr-2 text-4xl" />
        <h1>{ticket}</h1>
      </div>
    )}
    {total && (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faUserGroup} className="mr-2 text-4xl" />
        <h1>{total}</h1>
      </div>
    )}
  </div>
</div>
  );
};

export default BlogLayout;
