import React, { useState } from 'react';

export const CardComponent = ({ category, title, description, cardNumber, togglePopup }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorMap = {
    1: { start: '#76B1AA', end: '#76B1AA00' }, // full transparent
    2: { start: '#507562', end: '#5075621A' }, // 10% opacity
    3: { start: '#183e5e', end: '#183e5e1A' }, // ~5% opacity
  };

  const { start, end } = colorMap[cardNumber] || colorMap[1];

  return (
    <div
      className="flex flex-col justify-between items-center lg:items-start p-4 w-full h-full max-w-full"
      style={{
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
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

      <span className="text-para-sm md:text-para-md lg:text-para-lg 2xl:text-2xl text-white font-medium text-center lg:text-left relative z-10 w-full">
        {category}
      </span>

      <h2
        style={{ fontFamily: "'Afacad Flux', serif" }}
        className="uppercase font-semibold text-center lg:text-left text-white relative z-10 w-full min-h-[4rem]  text-subheading-sm sm:text-subheading md:text-subheading-md lg:text-subheading-lg xl:text-subheading-xl 2xl:text-subheading-3xl "
      >
        {title}
      </h2>

      <p className="text-center  lg:text-left text-white opacity-90 relative z-10   w-full   text-para-sm sm:text-para-sm md:text-para-md lg:text-para-lg xl:text-para-xl 2xl:text-para-2xl" >
        {description}
      </p>

      <div className="w-full flex items-center justify-center lg:justify-start relative z-10 mt-4">
        <button onClick={() => {
          window.location.hash = "contact"
        }} className="px-4 lg:px-7 py-2 lg:py-3 rounded-full bg-white hover:bg-opacity-90 transition-all flex items-center justify-center">
          <span className="text-xs sm:text-sm lg:text-base xl:text-2xl text-black font-medium">
            Get In Touch
          </span>
        </button>
      </div>
    </div>
  );
};

