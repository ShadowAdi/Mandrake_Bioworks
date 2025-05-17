import React, { useState } from 'react';

export const CardComponent = ({ category, title, description, cardNumber, handleButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorMap = {
    1: { start: '#76B1AA', end: '#76B1AA00' }, // full transparent
    2: { start: '#507562', end: '#5075621A' }, // 10% opacity
    3: { start: '#183e5e', end: '#183e5e1A' }, // ~5% opacity
  };

  const { start, end } = colorMap[cardNumber] || colorMap[1];

  return (
    <div
      className="flex flex-col justify-between items-center md:items-start p-4 w-full h-full max-w-full relative flex-1 gap-1 md:gap-2 lg:gap-3 2xl:flex-[0.8]  2xl:gap-4"
      style={{
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: '90%',
          height: '90%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle at center, ${start} 0%, ${end} 70%)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: isHovered ? 0.7 : 0,
          transition: 'opacity 0.8s ease-in-out',
          zIndex: 0,
        }}
      />

      <span className=" text-[10px] sm:text-base 2xl:text-2xl text-white font-medium text-center md:text-left relative z-10 w-full">
        {category}
      </span>

      <h2
        style={{
          fontFamily: "'Afacad Flux', serif",
          color: isHovered ? '#CBF5E7' : 'white',
          transition: 'color 0.3s ease'
        }}
        className="uppercase font-semibold text-center md:text-left relative z-10 w-full text-base sm:text-xl lg:text-3xl 2xl:text-6xl"
      >
        {title}
      </h2>
      <p className="text-center  md:text-left text-white opacity-90 relative z-10  w-full      text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-sm  2xl:text-2xl " >
        {description}
      </p>

      <div className="w-full flex items-center justify-center md:justify-start relative z-10 ">
        <button onClick={handleButtonClick} style={{
          backgroundColor: isHovered ? '#749F8B' : 'white',
          transition: 'background-color 0.3s ease'
        }} className="px-4 lg:px-7 py-2 lg:py-3 rounded-full  transition-all flex items-center justify-center">
          <span className="    text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-sm  2xl:text-4xl  text-black font-medium">
            Get In Touch
          </span>
        </button>
      </div>
    </div>
  );
};

