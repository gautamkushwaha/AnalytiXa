import React from 'react'

function SoftwareDevelopment() {
    return (
        <div>
           
           <div className="bg-black text-white poppins">
          {/* Header Section */}
          <header className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-blue-400 text-lg">Our Services</h2>
              <h1 className="text-4xl font-bold mt-2">Software Development</h1>
              <p className="mt-4 text-lg max-w-2xl mx-auto">
                With our awesome team we offer a variety of services from UI/UX design to video productions. Our goal is to help you on your road to create your product.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Let's Talk</button>
                <button className="border border-blue-500 text-white px-6 py-2 rounded-lg">Check our Projects →</button>
              </div>
            </div>
          </header>
    
          {/* Process Section */}
          <section className="py-16">
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
    
          {/* Services Section */}
          <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-10">Our Services</h2>
        <div className="flex flex-col gap-8">
          {[
            { title: 'Product Design', description: 'This involves creating and developing new products through a process that includes idea generation, prototyping, and testing. It focuses on functionality, usability, aesthetics, and user experience to meet market needs and consumer preferences.', link: '/big-data', imgSrc: '/SW/1.svg' },
            { title: 'Web Development', description: 'This is the process of building and maintaining websites, encompassing aspects such as web design, coding, and content creation. It involves front-end development and back-end development to ensure a seamless online experience.', link: '/data-analytics', imgSrc: '/SW/2.svg' },
            { title: 'App Development', description: 'This is the creation of software applications for mobile devices and desktops. This process includes designing the user interface, coding, testing, and deploying apps to platforms such as iOS, Android, or Windows, focusing on performance and user engagement.', link: '/machine-learning', imgSrc: '/SW/3.svg' },
            { title: 'SaaS Application Development', description: 'This involves creating cloud-based applications that are delivered over the internet. It includes developing scalable, secure, and multi-tenant software solutions that users can access via subscription, providing functionality without the need for local installation.', link: '/machine-learning', imgSrc: '/SW/4.svg' },
            
          ].map((service, index) => (
            <div key={index} className={`max-w-3/5 gap-24 flex flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className=" w-1/2  ">
                <img src={service.imgSrc} alt={service.title} className="w-180 h-80 object-cover rounded-xl" />
              </div>
             
              <div className="w-1/2  md:text-right">
                <h3 className="text-3xl text-left font-bold mt-4 ">{service.title}</h3>
                <p className="mt-2  text-xl text-gray-100 text-left">{service.description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Learn More</button>
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
    
export default SoftwareDevelopment
