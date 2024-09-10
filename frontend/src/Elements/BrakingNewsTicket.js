import React from 'react';

const BreakingNewsTicket = ({ news }) => {
  return (
    <div className="inline-block w-full h-[42px] relative overflow-hidden">
      <div className="absolute z-10 bg-red-600 h-[42px] w-56 clip-path-polygon shadow-md px-2 py-3 animate-expand">
        <h5 className="text-white inline-block relative opacity-0 animate-slide-in">
          BREAKING NEWS
        </h5>
      </div>
      <div className="relative h-[42px] w-full bg-gray-800 bg-opacity-70 overflow-x-hidden whitespace-nowrap animate-fade-in">
        <div className="absolute top-1/4 left-[240%] whitespace-nowrap animate-scroll text-white">
          <h3 className="inline-block text-[17px] mx-[75px]">{news}</h3>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicket;
