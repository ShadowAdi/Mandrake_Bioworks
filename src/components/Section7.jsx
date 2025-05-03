import React from 'react'
import AnimatedText from './AnimatedText'

const TeamMember = ({ name, position, username, imageUrl }) => {
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
        <span className='text-para-sm md:text-para-md lg:text-para-lg xl:text-para-xl text-center font-normal text-white'>
          {position}
        </span>
        {username && (
          <div className='flex items-center space-x-2 mt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
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

const Section7 = () => {
  const teamMembers = [
    {
      name: "Tanay Lohia",
      position: "Founder & CEO",
      username: "TanayLohia123",
      imageUrl: "https://avatar.iran.liara.run/public"
    },
    {
      name: "Alex Chen",
      position: "Head of Research",
      username: "AlexChenBio",
      imageUrl: "https://avatar.iran.liara.run/public"
    },
    {
      name: "Sarah Johnson",
      position: "Lead Bioinformatician",
      username: "SarahJohnson",
      imageUrl: "https://avatar.iran.liara.run/public"
    }
  ];

  return (
    <section
      className="flex flex-col items-center w-full mx-auto justify-center relative py-8 md:py-12 lg:py-16 min-h-screen"
    >
      <div className='w-[95%] md:w-4/5 max-w-7xl flex flex-col h-full items-center mx-auto space-y-10 md:space-y-16 lg:space-y-20 justify-around'>
        <div className='flex flex-col w-[90%] md:w-[70%] lg:w-[60%] space-y-4 mx-auto items-center justify-center'>
          <AnimatedText 
            className="text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl uppercase font-bold text-center text-white" 
            text="OUR TEAM" 
          />
          <h4 className='text-para-sm md:text-para-md lg:text-para-lg xl:text-para-xl text-center text-white font-normal w-full'>
            Our diverse team brings in hands-on experience across Agri-tech, 
            Bioscience, Genomics & Computational Biology
          </h4>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-6 lg:gap-x-8 xl:gap-x-12'>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              username={member.username}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section7