import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black p-7 text-white h-[100px]">
            <div className="container mx-auto flex justify-between items-center align-center">

                {/* logo */}
                <div className="text-3xl font-bold">
                    <a href="/">
                        <img src="/navbar/Frame 5.svg" alt="Analytixa" className="h-[55px] w-[247px]" />
                    </a>
                </div>

                {/* navbar: Home, services, our values,  Resources,company  */}

                {/* Home */}
                <nav className="hidden md:flex space-x-12 ">
                    <a href="/" className="hover:text-gray-400 text-[20px] font-medium">Home</a>

                    {/*   services*/}
                    <div className="group relative">
                        <button className="hover:text-gray-400 flex text-[20px] font-medium w-full">
                            Services<img src="/navbar/Vector.svg" alt="Analytixa" className="items-center pt-3 pl-1" />
                        </button>
                        
                        <div className="absolute hidden group-hover:block left-[-800px]">
                            <div className='flex   space-x-4 left-[-500px] mt-10 bg-white text-black ' >
                            <a href="/resource1" className="hover:text-gray-400">Resource 1</a>
                            <a href="/resource2" className="hover:text-gray-400">Resource 2</a>
                            <a href="/resource3" className="hover:text-gray-400">Resource 3</a>
                            <a href="/resource3" className="hover:text-gray-400">Resource 3</a>
                            <a href="/resource1" className="hover:text-gray-400">Resource 1</a>
                            <a href="/resource2" className="hover:text-gray-400">Resource 2</a>
                            <a href="/resource3" className="hover:text-gray-400">Resource 3</a>
                            <a href="/resource3" className="hover:text-gray-400">Resource 10</a>
                            <a href="/resource1" className="hover:text-gray-400">Resource 1</a>
                            <a href="/resource2" className="hover:text-gray-400">Resource 2</a>
                        </div>
                        </div>
                    </div>


                    {/*   our values*/}
                    <a href="/values" className="hover:text-gray-400 text-[20px] font-medium">Our Values</a>

                    {/* Resources */}
                    <div className="group relative">
                        <button className="hover:text-gray-400 flex text-[20px] font-medium w-full">
                            Resources<img src="/navbar/Vector.svg" alt="Analytixa" className="items-center pt-3 pl-1" />
                        </button>
                        
                        <div className="absolute hidden group-hover:block">
                            <div className='flex  justify-between space-x-4 left-[-100px] mt-10 bg-white text-black ' >
                            <a href="/resource1" className="hover:text-gray-400">Resource 1</a>
                            <a href="/resource2" className="hover:text-gray-400">Resource 2</a>
                            <a href="/resource3" className="hover:text-gray-400">Resource 3</a>
                        </div>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="group relative">
                        <button className="hover:text-gray-400 flex text-[20px] font-medium">Company <img src="/navbar/Vector.svg" alt="Analytixa" className="items-center pt-3 pl-1" /></button>
                        <div className="absolute hidden group-hover:block bg-black text-white p-4 space-y-2">
                            <a href="/about" className="block hover:text-gray-400">About Us</a>
                            <a href="/team" className="block hover:text-gray-400">Our Team</a>
                            <a href="/careers" className="block hover:text-gray-400">Careers</a>
                        </div>
                    </div>
                </nav>


                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-black text-white p-4 space-y-2">
                    <a href="/" className="block hover:text-gray-400">Home</a>
                    <div className="block">
                        <button className="hover:text-gray-400">Services</button>
                        <div className="pl-4">
                            <a href="/service1" className="block hover:text-gray-400">Service 1</a>
                            <a href="/service2" className="block hover:text-gray-400">Service 2</a>
                            <a href="/service3" className="block hover:text-gray-400">Service 3</a>
                        </div>
                    </div>
                    <a href="/values" className="block hover:text-gray-400">Our Values</a>
                    <div className="block">
                        <button className="hover:text-gray-400">Resources</button>
                        <div className="pl-4">
                            <a href="/resource1" className="block hover:text-gray-400">Resource 1</a>
                            <a href="/resource2" className="block hover:text-gray-400">Resource 2</a>
                            <a href="/resource3" className="block hover:text-gray-400">Resource 3</a>
                        </div>
                    </div>
                    <div className="block">
                        <button className="hover:text-gray-400">Company</button>
                        <div className="pl-4">
                            <a href="/about" className="block hover:text-gray-400">About Us</a>
                            <a href="/team" className="block hover:text-gray-400">Our Team</a>
                            <a href="/careers" className="block hover:text-gray-400">Careers</a>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
