import React from 'react';
import { FaReact } from 'react-icons/fa';

const ActionToTake = () => {
  return (
    <div className="flex flex-col md:flex-row my-20 items-center justify-center bg-[#0D47A1] mx-[100px] rounded-3xl px-10 py-3">
      {/* First Column */}
      <div className="w-full md:w-2/3 p-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Ready to get Started ?</h1>
        <h2 className="text-2xl font-semibold">Make a difference by reaching out to us and taking your business ahead of the rest..</h2>
      </div>

      {/* Second Column */}
      <div className="w-full md:w-1/3 p-4 flex justify-center md:justify-end">
        <button className="bg-white text-black py-4 px-10 rounded-lg flex items-center shadow-md hover:shadow-lg">
          Write to Us <FaReact className="ml-5" />
        </button>
      </div>
    </div>
  );
};

export default ActionToTake;
