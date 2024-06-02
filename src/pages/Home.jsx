import React from 'react';
import HeroSection from '../home/HeroSection';
import AboutUs from '../home/AboutUs';
import Service from '../home/Service';
import CoreValues from '../home/CoreValue';
import ClientTestimonials from '../home/ClientTestimonials';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <AboutUs/>
            <Service/>
            <CoreValues/>
            <ClientTestimonials/>
        </div>
    );
};

export default HomePage;
