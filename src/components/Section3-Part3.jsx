import React from 'react'
import bgImage from "/Gradient.jpg";
import AnimatedWhiteText from './AnimatedWhiteText';


const Section3Part3 = () => {
  return (
    <section
      className="flex flex-col items-center w-full mx-auto  py-12 px-4 min-h-screen justify-center relative gap-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className='w-full md:w-[90%] lg:w-[75%] space-y-3  flex flex-col gap-3 items-center justify-center mx-auto '>
        <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6'>
          <div className='flex flex-col gap-1 items-center md:items-start text-center md:text-left flex-1 justify-center'>
            <AnimatedWhiteText text={"AI-Led Genetic Prospecting"} className={'text-base md:text-xl text-white font-semibold px-4 md:px-0'} />
            <p className='text-xs sm:text-sm text-white md:leading-3 max-w-md px-4 md:px-0'>
              Cutting-edge AI algorithms quickly analyze vast Omics datasets, pinpointing genes linked to
              resilience, nutrition, yield, and adaptability.
            </p>
          </div>
          <div className=' flex items-center justify-center h-28  md:h-64 w-full mt-0'>
            <img
              className='h-full w-full object-contain'
              alt='AI Genetic Prospecting Visualization'
              src='/Placeholder.jpg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3Part3