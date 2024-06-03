import React from 'react'

function AI_MLandDataAnalytics() {
  return (
    <div>
       
       <div className="bg-black text-white poppins">
      {/* Header Section */}
      <header className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-blue-400 text-lg">Our Services</h2>
          <h1 className="text-4xl font-bold mt-2">AI/ML and Data Analytics</h1>
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
              { title: '01 Data Collection', description: 'User research helps us find out exactly how our target customers feel when interacting with a product.' },
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
        { title: 'Big Data Consulting', description: 'This involves providing expert advice and solutions for managing and analyzing vast amounts of data.Consultants help organizations implement big data technologies, optimize data storage, and extract valuable insights to drive business decisions.', link: '/big-data', imgSrc: '/aiml/1.svg' },
        { title: 'Data Analytics', description: 'This is the process of examining data sets to draw conclusions about the information they contain. It involves techniques ranging from descriptive statistics to advanced data mining and predictive analytics, helping organizations make informed decisions and solve problems.', link: '/data-analytics', imgSrc: '/aiml/2.svg' },
        { title: 'Machine Learning', description: 'This is a branch of artificial intelligence that enables systems to learn and improve from experience without explicit programming. By using algorithms and statistical models, it helps computers recognize patterns, make decisions, and predict outcomes based on data.', link: '/machine-learning', imgSrc: '/aiml/3.svg' },
        { title: 'Data Security', description: 'Data Security focuses on protecting digital information from unauthorized access, corruption, or theft. It involves implementing measures such as encryption, access controls, and secure data storage to safeguard data privacy and integrity', link: '/machine-learning', imgSrc: '/aiml/4.svg' },
        { title: 'Artificial Intelligence', description: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines. AI systems are designed to perform tasks such as learning, reasoning, problem-solving, and natural language understanding, aiming to enhance efficiency and automate complex processes.', link: '/artificial-intelligence', imgSrc: '/aiml/5.svg' },
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

export default AI_MLandDataAnalytics
