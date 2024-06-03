import React from 'react'

function AboutUs() {
  return (
    <div>
        <div className="bg-black text-white poppins">
            {/* Header Section */}
          <header className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-blue-400 text-lg">About Us</h2>
              <h1 className="text-4xl font-bold mt-2">What we do is what make us Who we <br></br> are</h1>
              <p className="mt-4  text-lg max-w-2xl mx-auto">
              DigitUx is a Digital agencay founded 2022, that create User Centred Product that help her client to evolve ,our core idealogy is Perfection , our goal is to make usefull and easy to use products And help people to grow their business,
              </p>
              

              <div className="mt-6 flex justify-center space-x-4">
                <button className="bg-blue-500 text-white px-10 py-2 rounded-lg">Let's Talk</button>
                <button className="border border-blue-500 text-white px-6 py-2 rounded-lg">Check our Services →</button>
              </div>
            </div>
          </header>

          {/* team section */}
          
          
          <div className='flex flex-row gap-4 sm:flex-col md:flex-row justify-center items-center max-w-80% pb-10'>
                   
                
                  <div className='w-1/6 text-left'>
                  <p className=''>Our Team</p>
                  
                    
                    <p className='text-4xl font-bold leading-normal'>Meet The Awesome and Creative Members of Our Team</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center">
                        {[
                          { title: 'Jamila Smail', description: 'CO-Founder', link: '/big-data', imgSrc: '/aiml/1.svg' },
                          { title: 'Farouk Dari', description: 'Full Stack Developer', link: '/data-analytics', imgSrc: '/aiml/2.svg' },
                          { title: 'Aksel Juba', description: 'Graphic Designer', link: '/machine-learning', imgSrc: '/aiml/3.svg' },
                          { title: 'Dihia Numida', description: 'UI/UX Designer', link: '/machine-learning', imgSrc: '/aiml/4.svg' },
                        ].map((service, index) => (
                          <div key={index} className="flex flex-col items-center mx-4 my-4">
                            <div className="rounded overflow-hidden">
                              <img src={service.imgSrc} alt={service.title} className="w-32 h-48 object-cover" />
                            </div>
                            <div className="mt-2">
                              <h3 className="text-center text-2xl font-bold">{service.title}</h3>
                              <p className="text-center text-sm mt-4">{service.description}</p>
                            </div>
                          </div>
                        ))}
                   </div>
           </div>

           {/* testinomails */}
           <div className='w-4/6 mx-auto' >
           <div>
           <p className='text-left'> Testinomials</p>
           <p className='text-left text-3xl font-bold'>You still hesitate about working with Us ? <br /> Check what They say about Us</p>
           </div>

           </div>


        </div>
      
    </div>
  )
}

export default AboutUs
