import React from 'react';
import HeroSection from '../home/HeroSection';
import AboutUs from '../home/AboutUs';
import Service from '../home/Service';
import CoreValues from '../home/CoreValue';
import ClientTestimonials from '../home/ClientTestimonials';
import CasseStudies from '../home/CaseStudies';
import ActionToTake from '../home/CallToAction';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <AboutUs/>
            <Service/>
            <CoreValues/>
            <ClientTestimonials/>
            <CasseStudies/>
            <ActionToTake/>
        </div>
    );
};

export default HomePage;
