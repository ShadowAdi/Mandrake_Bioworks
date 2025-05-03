import React, { useState } from 'react';

export const CardComponent = ({ category, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="flex flex-col cursor-pointer items-center xl:items-start gap-2 md:gap-3 xl:gap-5 relative p-4 md:p-6 w-full max-w-md h-full"
      style={{
        position: 'relative',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none opacity-70"
          style={{
            width: '100%',
            height: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle at center, #76B1AA 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
      )}
      
      <span className="text-para-sm md:text-para-md lg:text-para-lg text-white font-medium text-center xl:text-left relative z-10 w-full">
        {category}
      </span>
      
      <h2
        style={{ fontFamily: "'Afacad Flux', serif" }}
        className="text-subheading uppercase font-semibold text-center xl:text-left text-white relative z-10 w-full min-h-[4rem]"
      >
        {title}
      </h2>
      
      <p className="text-center xl:text-left text-white opacity-90 relative z-10 text-para-sm md:text-para-md lg:text-para-lg w-full flex-grow min-h-[8rem]">
        {description}
      </p>
      
      <div className="w-full flex items-center justify-center xl:justify-start relative z-10 mt-4">
        <button className="px-4 lg:px-7 py-2 lg:py-3 rounded-full bg-white hover:bg-opacity-90 transition-all flex items-center justify-center">
          <span className="text-xs sm:text-sm lg:text-base text-black font-medium">
            Get In Touch
          </span>
        </button>
      </div>
    </div>
  );
};

