// src/components/AboutUs.jsx

import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-8 md:px-16 bg-[#1E1E1E]">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <img src="/AboutUs/Analytixa.svg" alt="About Us" className="w-full h-auto object-cover" />
      </div>
      {/* Right Column */}
      <div className="w-full md:w-1/2 p-4 md:p-8">
        {/* First Row */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-2xl font-bold text-white mb-4">We are a Digital Production Team</h1>
          <p className="text-lg md:text-xl text-white">we are  dedicated to revolutionizing the mining industry through cutting-edge data science and analytics solutions. With a steadfast commitment to innovation and integrity, we strive to deliver excellence in every facet of our operations. Our mission is clear: to empower mining ventures with actionable insights and technology-driven strategies that drive sustainable growth and responsible practices.</p>
        </div>
        {/* Second Row */}
        <div className="flex flex-wrap">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white my-5">+200</h2>
              <div className="border-b-8 border-blue-500 w-16 mx-auto my-5 rounded items-center"></div>
              <p className="text-3xl font-medium text-white my-5">Employee</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white my-5">+500</h2>
              <div className="border-b-8 border-blue-500 w-16 mx-auto my-5 rounded items-center"></div>
              <p className="text-3xl font-medium text-white my-5">Projects</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white my-5">+300</h2>
              <div className="border-b-8 border-blue-500 w-16 mx-auto my-5 rounded items-center"></div>
              <p className="text-3xl font-medium text-white my-5">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
