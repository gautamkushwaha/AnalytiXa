import React from 'react'
import  { useState, useEffect } from 'react';


function OurProjects() {
    function Counter({ endValue }) {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCount(prevCount => {
              if (prevCount < endValue) {
                return prevCount + 1;
              } else {
                clearInterval(interval); // Stop the interval when the count reaches the endValue
                return prevCount;
              }
            });
          }, 100); // Adjust the interval timing as needed
      
          return () => clearInterval(interval); // Cleanup function to clear the interval when component unmounts
        }, [endValue]);
      
        return (
          <div>+{count}</div>
      );
      }
      
    return (
        <div>
           
           <div className="bg-black text-white poppins">
          {/* Header Section */}
          <header className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-blue-400 text-lg">Our Services</h2>
              <h1 className="text-4xl font-bold mt-2">Our Projects</h1>
              <p className="mt-4 text-lg max-w-2xl mx-auto">
              Our team helped alot of startup and company to realise their Products and helped thousnd of client to grow their business
              </p>
              <div className='flex flex-row gap-8 justify-center items-center text-left m-8 pb-2'>
    <p className='text-sm'>Happy Clients <span className='text-3xl font-bold'><Counter endValue={10} /></span></p>
    <p className='text-sm'>Project Done <span className='text-3xl font-bold'><Counter endValue={10} /></span></p>
    <p className='text-sm'>Solutions Created <span className='text-3xl font-bold'><Counter endValue={10} /></span></p>
    <p className='text-sm'>Business Growed <span className='text-3xl font-bold'><Counter endValue={10} /></span></p>
</div>

              <div className="mt-6 flex justify-center space-x-4">
                <button className="bg-blue-500 text-white px-10 py-2 rounded-lg">Let's Talk</button>
                {/* <button className="border border-blue-500 text-white px-6 py-2 rounded-lg">Check our Projects →</button> */}
              </div>
            </div>
          </header>
    
          {/* Process Section */}
          {/* <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-l text-left font-bold">Our Process</h2>
                <div className='flex max-w-70% '>
                   <div className='flex-row text-left w-1/2'>
                   
                    <p className=" text-5xl font-bold  mx-auto mr-10">
                     working process helps you to get the best from our team skill.
                   </p>
                   </div>
                   <div className='text-left w-1/3'>
                   <p className="mt-2 text-lg max-w-2xl mx-auto mt-15">
                   With our team knowledge of different processes, we choose the perfect process to suit the development of your product.
                   </p>
                   </div>
                </div>
              
              <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 ">
                {[
                  { title: '01 Getting Requirements', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
                  { title: '02 Planning & Design', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
                  { title: '03 Development & testing', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
                  { title: '04 Deployment', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
                ].map((process, index) => (
                  <div key={index} className="text-left">
                    <h3 className="text-2xl font-bold font-semibold"> {process.title}</h3>
                    <p className="mt-2">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
     */}
          {/* Services Section */}
          <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-left mb-10">Our Services</h2> */}
        <div className="flex flex-col gap-8">
          {[
            { title: 'UI/UX Design',heading:'Delex Relay , a delivery platfrome', description: 'Delex is a Delivery Platforme for bussiness owner And indivudial who want to send packages from a point to an other ,Delex offer a tracking system too ', link: '/big-data', imgSrc: '/ourProjects/1.svg' },
            { title: 'Web / app Development',heading:'Cooke Me ,Fresh food At your Home',  description: 'TCooke me is an platform that offer fresh meal with a cheap price and allow indivudial to sell their meals ', link: '/data-analytics', imgSrc: '/ourProjects/2.svg' },
            { title: 'UI/UX Design',heading:'ADOC,Your Online Medical Appoinments',  description: 'ADOC Is an online Medical appoinment That allow user To take an appoinment with a doctor , it alos work as a medical files Holder', link: '/machine-learning', imgSrc: '/ourProjects/3.svg' },
            
            
          ].map((service, index) => (
            <div key={index} className={`max-w-3/5 gap-24 flex flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className=" w-1/2  ">
                <img src={service.imgSrc} alt={service.title} className="w-110 h-110 object-cover rounded-xl" />
              </div>
             
              <div className="w-1/2  md:text-right">
              <h3 className="text-sm text-left font-bold mt-4 ">{service.title}</h3>
                <h3 className="text-2xl text-left font-bold mt-4 ">{service.heading}</h3>
                <p className="mt-2  text-xl text-gray-100 text-left">{service.description}</p>
                <button className="mt-4  text-sm text-white px-4 py-2 border-2 rounded-sm">Check the Project {'>'} </button>
              </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
    
    
        </div>
      
          
        </div>
      )
    } 

export default OurProjects
