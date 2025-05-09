import React from 'react';

const Section5 = () => {
    return (
        <section className="flex flex-col   items-center w-screen h-[100dvh] mx-auto
         justify-center  relative">
            <div className="flex flex-col flex-1   sm:flex-row  w-full h-2/3 sm:h-1/2">
                <div className="relative w-full flex-1 sm:w-1/2 h-1/2 sm:h-full">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        src="https://res.cloudinary.com/shadowaditya/video/upload/v1746365188/lznhg1airqcreeq1mos6.mp4"
                    />
                    <div className="absolute sm:translate-x-0  bottom-10  md:w-full w-[80%]  z-40 right-1/2 translate-x-1/2  sm:right-4 text-white rounded space-y-2 max-w-xs lg:max-w-sm  2xl:right-10 2xl:max-w-4xl ">
                        <span className="text-xs sm:text-sm lg:text-lg xl:text-2xl    text-white font-semibold text-left 2xl:text-8xl ">
                            Resilient from the ground-up
                        </span>
                        <p  className="text-[10px] sm:text-xs lg:text-base xl:text-lg 2xl:text-4xl  opacity-90 text-left">
                            Plants designed to handle pests, disease, drought, extreme temperatures, and unpredictable weather on their own — ensuring resilience even in tough environments without toxic inputs.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
                </div>
                <div className="relative w-full flex-1 sm:w-1/2 h-1/2 sm:h-full">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        src="https://res.cloudinary.com/shadowaditya/video/upload/v1746365188/lznhg1airqcreeq1mos6.mp4"
                    />
                    <div className="absolute  md:w-full w-[80%]   bottom-10 left-1/2  -translate-x-1/2 sm:translate-x-0 sm:left-4  z-40  text-white rounded space-y-2 max-w-xs lg:max-w-sm 2xl:left-10  2xl:max-w-4xl  ">
                        <span className="text-xs sm:text-sm lg:text-lg  xl:text-2xl  2xl:text-8xl     text-white font-semibold text-left">
                            Master of All Traits
                        </span>
                        <p className="text-[10px] sm:text-xs lg:text-base xl:text-lg 2xl:text-4xl      opacity-90 text-left">
                            Efficiently combining multiple beneficial traits—such
                            as enhanced nutrition, better yields, and longer
                            shelf-life—allowing effective innovation even in
                            traditionally overlooked crops.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
                </div>
            </div>
            <div className="relative w-full h-1/3 flex-1 sm:h-1/2">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    src="https://res.cloudinary.com/shadowaditya/video/upload/v1746365179/dvg1v5n85ghetsjywm3a.mp4"
                />
                <div className="absolute bottom-10 z-40 md:w-full w-[80%] -translate-x-1/2 left-1/2 mx-auto md:left-1/4 text-white rounded space-y-2 2xl:max-w-4xl max-w-xs lg:max-w-sm ">
                    <span className="text-xs sm:text-sm  lg:text-lg  xl:text-2xl 2xl:text-8xl    text-white font-semibold text-left ">
                        Breaking Barriers in Agriculture
                    </span>
                    <p className="text-[10px] sm:text-xs  lg:text-base xl:text-lg  2xl:text-4xl    opacity-90 text-left">
                        We make advanced crop development accessible
                        to everyone. By drastically reducing barriers, farmers
                        worldwide can benefit from better, more productive,
                        and more resilient plants.

                    </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
            </div>
        </section>

    );
};

export default Section5;
