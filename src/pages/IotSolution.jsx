import React from 'react'

function IotSolution() {
    return (
        <div>
           
           <div className="bg-black text-white poppins">
          {/* Header Section */}
          <header className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-blue-400 text-lg">Our Services</h2>
              <h1 className="text-4xl font-bold mt-2">Internet Of Things</h1>
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
                  { title: '01 Planning & Design', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
                  { title: '02 Data Processing', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
                  { title: '03 Model Building', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
                  { title: '04 Model Deployment', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
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
            { title: 'Smart Home Automation', description: 'It integrates IoT devices to manage and control home functions such as lighting, heating, security, and appliances remotely. It enhances convenience, security, and energy efficiency through connected and programmable systems', link: '/big-data', imgSrc: '/iot/1.svg' },
            { title: 'Industrial IoT', description: 'It applies IoT technology to industrial processes, enabling real-time data collection and analysis from machinery and systems. This connectivity improves operational efficiency, predictive maintenance, and overall productivity in manufacturing and industrial sectors.', link: '/data-analytics', imgSrc: '/iot/2.svg' },
            { title: 'Smart Cities', description: 'They utilize IoT, data analytics, and advanced technologies to enhance urban living. They focus on improving infrastructure, reducing energy consumption, optimizing traffic flow, and providing better public services for residents and businesses.', link: '/machine-learning', imgSrc: '/iot/3.svg' },
            { title: 'Agriculture IoT', description: 'This involves deploying sensors and connected devices to monitor and manage farming operations. It helps optimize crop yield, monitor soil conditions, manage water usage, and ensure the health of livestock through data-driven insights and automation.', link: '/machine-learning', imgSrc: '/iot/4.svg' },
            
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
    

export default IotSolution
