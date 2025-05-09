import React from 'react'
import AnimatedText from './AnimatedText'

const AdvisorCard = ({ name, position, username, imageUrl }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-3 md:gap-y-4'>
      <img 
        src={imageUrl || 'https://avatar.iran.liara.run/public'} 
        className='h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-56 lg:w-56 xl:h-64 xl:w-64 2xl:h-80 2xl:w-80 object-cover rounded-full transition-all duration-300' 
        alt={`${name} - ${position}`}
      />
      <div className='flex items-center justify-center flex-col space-y-0 md:space-y-1'>
        <span className='text-subheading font-bold text-white text-center'>
          {name}
        </span>
        <span className='text-para-sm md:text-para-md lg:text-para-md xl:text-para-xl text-center font-normal text-white'>
          {position}
        </span>
        {username && (
         <div className='flex items-center space-x-2 mt-1'>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.796-1.75-1.773s.784-1.773 1.75-1.773 1.75.796 1.75 1.773-.784 1.773-1.75 1.773zm13.25 12.268h-3v-5.604c0-1.336-.026-3.056-1.863-3.056-1.865 0-2.151 1.455-2.151 2.957v5.703h-3v-11h2.882v1.5h.042c.402-.762 1.382-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.607v6.456z"/>
  </svg>
  <span className='text-para-sm md:text-para-md lg:text-para-lg font-medium text-white'>
    {username}
  </span>
</div>

        )}
      </div>
    </div>
  )
}

const Section8 = () => {
  const advisors = [
    {
      name: "Dr. James Miller",
      position: "Former VP, Agricultural Research",
      username: "JamesMiller",
      imageUrl: "https://avatar.iran.liara.run/public"
    },
    {
      name: "Dr. Elena Rodriguez",
      position: "Plant Genetics Pioneer",
      username: "ElenaRodriguez",
      imageUrl: "https://avatar.iran.liara.run/public"
    },
    {
      name: "Dr. Michael Thompson",
      position: "Breeding Innovation Expert",
      username: "MThompson",
      imageUrl: "https://avatar.iran.liara.run/public"
    }
  ];

  return (
    <section
      className="flex flex-col items-center w-full mx-auto justify-center relative py-8 md:py-12 lg:py-16 min-h-[100dvh]"
    >
          <div className='w-[95%] md:w-4/5 max-w-7xl flex flex-col h-full items-center mx-auto space-y-10 md:space-y-14 lg:space-y-16 justify-around'>
        <div className='flex flex-col w-[90%] md:w-[70%] lg:w-[60%] space-y-0 mx-auto items-center justify-center'>
          <AnimatedText 
            className="text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl uppercase font-bold text-center text-white" 
            text="OUR ADVISORS" 
          />
          <h4 className='text-para-sm md:text-para-md lg:text-para-lg xl:text-para-xl text-center text-white font-normal w-full'>
            We're guided by Mentors who have spent decades in the Plant Breeding Industry
          </h4>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-6 lg:gap-x-8 xl:gap-x-12'>
          {advisors.map((advisor, index) => (
            <AdvisorCard
              key={index}
              name={advisor.name}
              position={advisor.position}
              username={advisor.username}
              imageUrl={advisor.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section8