import React from 'react';

const HeroSection = () => {
    return (
        <div className='bg-[#1E1E1E]'>
            <div className="absolute inset-0  bg-no-repeat left-0 mt-[100px]" style={{ backgroundImage: "url('/Hero/AnalytiXalogo .svg')" }}></div>
            <div className="flex flex-row-2 items-center justify-center  pt-50 ">
                {/* Left Column */}
                <div className="w-full md:w-1/2 p-8 md:p-16   relative overflow-hidden">

                    <div className="relative z-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl text-white font-bold">Welcome to <span className='text-[#1C98F3]'>AnalytiXa</span></h1>
                        <p className="text-lg md:text-2xl text-white mt-4">Where data science meets industry expertise to<br></br> unlock the full potential of your business.</p>
                        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">More About us</button>
                    </div>
                </div>
                {/* Right Column */}
                <div className="w-full md:w-1/2 p-8 md:p-16">
                    <div className="mx-auto inset-0 flex items-center justify-center">
                        <img src="/Hero/AnalytiXalogoHome .svg" alt="Right Image" className="max-w-full h-auto" />
                    </div>


                </div>

            </div>

            <div className="flex items-center justify-between mx-[100px] pb-[50px] ">
                {/* Column 1 */}
                <div className="w-1/3 px-4 relative">
                    <div className="group">
                        <h2 className="text-[32px] font-medium mb-2 text-white group-hover:text-blue-500">Data Analytics</h2>
                        
                        <p className="text-[18px] text-white mb-4">Interdum et malesuada fames ac ante…</p>
                        <div className="h-1 w-[40%] bg-transparent group-hover:bg-blue-500 transition-all duration-300"></div>
                    </div>
                </div>
                {/* Vertical Line */}
                <div className="border-l border-gray-300 h-20 mr-12"></div>
                {/* Column 2 */}
                <div className="w-1/3 px-4 relative">
                    <div className="group">
                        <h2 className="text-[32px] font-medium mb-2 text-white group-hover:text-blue-500">Technology Solutions</h2>
                        <p className="text-[18px] text-white mb-4">Interdum et malesuada fames ac ante…</p>
                        <div className="h-1 w-[40%] bg-transparent group-hover:bg-blue-500 transition-all duration-300"></div>
                    </div>
                </div>
                {/* Vertical Line */}
                <div className="border-l border-gray-300 h-20  mr-12"></div>
                {/* Column 3 */}
                <div className="w-1/3 px-4 relative">
                    <div className="group">
                        <h2 className="text-[32px] font-medium mb-2 text-white group-hover:text-blue-500">IOT Solutions</h2>
                        <p className="text-[18px] text-white mb-4">Interdum et malesuada fames ac ante…</p>
                        <div className="h-1 w-[40%] bg-transparent group-hover:bg-blue-500 transition-all duration-300"></div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
