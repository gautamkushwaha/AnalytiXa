import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { FaGlobeAmericas } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-24 py-10  text-white">
      <div className="flex flex-col md:flex-row md:justify-between">
        
        {/* First Column - Company Logo and Description */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <img src="/navbar/Frame 5.svg" alt="Company Logo" className="mb-4" />
          <p>Our company is dedicated to providing excellent service and unmatched quality. Join us on our journey to excellence.</p>
        </div>
        
        {/* Second Column - Links */}
        <div className="w-full md:w-2/4 mb-8 md:mb-0 flex flex-wrap px-10">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="font-bold mb-2 text-[#BBDEFB]">Services</h3>
            <ul>
              <li><a href="/service1" className="hover:underline">Service 1</a></li>
              <li><a href="/service2" className="hover:underline">Service 2</a></li>
              <li><a href="/service3" className="hover:underline">Service 3</a></li>
              <li><a href="/service4" className="hover:underline">Service 4</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="font-bold mb-2 text-[#BBDEFB]">About Us</h3>
            <ul>
              <li><a href="/about" className="hover:underline">Our Story</a></li>
              <li><a href="/team" className="hover:underline">Team</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className="font-bold mb-2 text-[#BBDEFB]">Support</h3>
            <ul>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/help" className="hover:underline">Help Center</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Third Column - Social Media and Language Choice */}
        <div className="w-full md:w-1/4 flex flex-col items-left md:items-center">
          <div className="mb-4">
            <h3 className="font-bold mb-5">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-[#2196F3] hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className="text-[#2196F3] hover:text-gray-400"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="text-[#2196F3] hover:text-text-[#2196F3]"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className="text-[#2196F3] hover:text-gray-400"><FaLinkedin size={24} /></a>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1 bg-gray-400 px-3 py-2 rounded border-2 border-[#2196F3]">
                <div> <FaGlobeAmericas className="h-6 w-6 mx-5" /></div>
           
              <span className='mr-5 mx-3'>English-EN</span>

              <div>  <FaChevronDown size={16}  className='mx-5'/></div>
            
            </div>
          </div>
        </div>
        
      </div>
      <div>
            <p className='text-gray-500 py-5'>
                @All right reserved @Analytixa
            </p>
        </div>
    </footer>
  );
};

export default Footer;
