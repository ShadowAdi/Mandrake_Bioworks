import React from 'react'
import AnimatedText from './AnimatedText'

const TeamMember = ({ name, position, username, imageUrl }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-2 md:gap-y-5'>
     <img
        src={imageUrl || 'https://avatar.iran.liara.run/public'}
        className='h-28 w-28 md:h-40 md:w-40 lg:h-48 lg:w-48 2xl:h-80 2xl:w-80 object-cover rounded-full transition-all duration-300'
        alt={`${name} - ${position}`}
      />
      <div className='flex items-center justify-center flex-col space-y-0 md:space-y-0 2xl:space-y-4'>
        <span className='text-base md:text-2xl  2xl:text-4xl  font-semibold text-white text-center'>
          {name}
        </span>
        <span className='text-xs md:text-lg 2xl:text-3xl  text-center font-normal text-white'>
          {position}
        </span>
        {username && (
          <div className='flex items-center space-x-2 mt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-4 md:w-4 2xl:h-8  2xl:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.796-1.75-1.773s.784-1.773 1.75-1.773 1.75.796 1.75 1.773-.784 1.773-1.75 1.773zm13.25 12.268h-3v-5.604c0-1.336-.026-3.056-1.863-3.056-1.865 0-2.151 1.455-2.151 2.957v5.703h-3v-11h2.882v1.5h.042c.402-.762 1.382-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.607v6.456z" />
            </svg>
            <span className='text-xs md:text-base 2xl:text-3xl font-medium text-white'>
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
      className="flex flex-col items-center w-full mx-auto justify-center relative py-8  min-h-[100dvh] "
    >
      <div className='container   flex flex-col h-full items-center mx-auto space-y-10 md:space-y-14 lg:space-y-16 justify-center flex-1 '>
        <div className='flex flex-col w-full space-y-2 mx-auto items-center justify-center flex-1 '>
          <AnimatedText
            className=" text-3xl   sm:text-4xl md:text-5xl 2xl:text-9xl  uppercase font-bold text-center text-white"
            text="OUR TEAM"
          />
         <h4 className='text-[10px] sm:text-sm md:text-md lg:text-md xl:text-lg  2xl:text-4xl text-center text-white font-normal  w-[80%] 2xl:w-[70%] md:w-[50%]'>
            Our diverse team brings in hands-on experience across Agri-tech,
            Bioscience, Genomics & Computational Biology
          </h4>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-6 lg:gap-x-8 xl:gap-x-12'>
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