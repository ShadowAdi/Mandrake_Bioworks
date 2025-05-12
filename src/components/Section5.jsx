import React from 'react';

const Section5 = () => {
  return (
    <section className="flex flex-col items-center w-screen h-[100vh] mx-auto justify-center">
      <div className="flex flex-col sm:flex-row w-full sm:h-[50vh]">
        <div className="relative w-full sm:w-1/2 h-[33.33vh] sm:h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/shadowaditya/video/upload/v1746365188/lznhg1airqcreeq1mos6.mp4"
          />
          <div className="absolute bottom-4 md:bottom-10 z-40 w-[80%] sm:w-[60%] md:w-full max-w-xs lg:max-w-sm 2xl:max-w-3xl left-1/2 -translate-x-1/2 xl:left-1/4 xl:-translate-x-[25%] text-white rounded space-y-2">
            <span className="text-sm sm:text-sm lg:text-md xl:text-lg 2xl:text-6xl text-white font-semibold text-left">
              Resilient from the ground-up
            </span>
            <p
              style={{ lineHeight: 1.35 }}
              className="text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-3xl opacity-90 text-left"
            >
              Plants designed to handle pests, disease, drought, extreme temperatures, and unpredictable weather on their own — ensuring resilience even in tough environments without toxic inputs.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        </div>
        <div className="relative w-full sm:w-1/2 h-[33.33vh] sm:h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/shadowaditya/video/upload/v1746365188/lznhg1airqcreeq1mos6.mp4"
          />
          <div className="absolute bottom-4 md:bottom-10 z-40 w-[80%] sm:w-[60%] md:w-full max-w-xs lg:max-w-sm 2xl:max-w-3xl left-1/2 -translate-x-1/2 xl:left-1/4 xl:-translate-x-[25%] text-white rounded space-y-2">
            <span className="text-sm sm:text-sm lg:text-md xl:text-lg 2xl:text-6xl text-white font-semibold text-left">
              Master of All Traits
            </span>
            <p
              style={{ lineHeight: 1.35 }}
              className="text-xs md:text-sm lg:text-base 2xl:text-3xl opacity-90 text-left"
            >
              Efficiently combining multiple beneficial traits—such as enhanced nutrition, better yields, and longer shelf-life—allowing effective innovation even in traditionally overlooked crops.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        </div>
      </div>
      <div className="relative w-full h-[33.33vh] sm:h-[50vh]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/shadowaditya/video/upload/v1746365179/dvg1v5n85ghetsjywm3a.mp4"
        />
        <div className="absolute bottom-4 md:bottom-10 z-40 w-[80%] sm:w-[60%] md:w-full max-w-xs lg:max-w-sm 2xl:max-w-3xl left-1/2 -translate-x-1/2 xl:left-1/4 xl:-translate-x-[25%] text-white rounded space-y-2">
          <span className="text-sm sm:text-sm lg:text-md xl:text-lg 2xl:text-6xl text-white font-semibold text-left">
            Breaking Barriers in Agriculture
          </span>
          <p
            style={{ lineHeight: 1.35 }}
            className="text-xs md:text-sm lg:text-base 2xl:text-3xl opacity-90 text-left"
          >
            We make advanced crop development accessible to everyone. By drastically reducing barriers, farmers worldwide can benefit from better, more productive, and more resilient plants.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Section5;