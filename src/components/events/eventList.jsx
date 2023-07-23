import React from "react";

const EventList = ({ src, title, genre1, genre2, date_time, price }) => {
    return (
      <div className="relative w-[450px] p-4 xl:p-6 h-[150px] xl:h-[200px] xl:py-4 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 transition-colors duration-1000">
        <div className="flex items-center h-full">
          <img
            className="w-1/2 h-full object-cover rounded-lg transition-transform duration-300 cursor-pointer transform group-hover:scale-105"
            src={src}
            alt="Event Image"
          />
          <div className="flex flex-col justify-center ml-4">
            <div className="text-base text-designColor font-normal">{title}</div>
            <div className="text-sm mt-1">{date_time}</div>
            <div className="flex gap-3 mt-1">
              <div className="text-xs px-2 py-1 rounded-full border border-black">{genre1}</div>
              <div className="text-xs px-2 py-1 rounded-full border border-black">{genre2}</div>
            </div>
            <div className="text-sm mt-2">{price}</div>
          </div>
        </div>
      </div>
    );
  };

  export default EventList;
  