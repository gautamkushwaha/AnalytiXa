import React from 'react';

const CoreValues = () => {
  return (
    <div className=" p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* First Column */}
        <div className="w-full md:w-1/2 p-4">
          <img src="/CoreValues/Illustration & Title.svg" alt="Core Values" className="w-full h-auto" />
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          {/* First Row of Second Column */}
          <div className="mb-4">
            
            <p className="text-3xl text-white">
            Our values form the compass guiding our commitment to ethical excellence and innovative solutions in the mining industry.
            </p>
          </div>

          {/* Second Row of Second Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Core Value */}
            <div className="flex flex-col items-left p-4 text-white rounded-lg shadow-md">
              <img src="/CoreValues/innovations.svg" alt="Integrity" className="w-16 h-16 mb-2" />
              <h3 className="text-xl font-semibold ">Innovation</h3>
              <p className=" text-left">We uphold the highest standards of integrity in all of our actions.</p>
            </div>

            {/* Second Core Value */}
            <div className="flex flex-col items-left p-4 text-white rounded-lg shadow-md">
              <img src="/CoreValues/integrity.svg" alt="Commitment" className="w-16 h-16 mb-2" />
              <h3 className="text-xl font-semibold ">Integrity</h3>
              <p className=" text-left">We are committed to delivering the best results for our clients.</p>
            </div>

            {/* Third Core Value */}
            <div className="flex flex-col items-left p-4 text-white rounded-lg shadow-md">
              <img src="/CoreValues/collaboration.svg" alt="Innovation" className="w-16 h-16 mb-2" />
              <h3 className="text-xl font-semibold ">Collaboration</h3>
              <p className=" text-left">We strive for innovation to provide the best solutions.</p>
            </div>

            {/* Fourth Core Value */}
            <div className="flex flex-col items-left p-4  rounded-lg shadow-md">
              <img src="/CoreValues/continuous_learning.svg" alt="Quality" className="w-16 h-16 mb-2" />
              <h3 className="text-xl font-semibold text-white">Continuous Learning</h3>
              <p className="text-white text-left">We deliver high-quality products and services that we stand behind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
