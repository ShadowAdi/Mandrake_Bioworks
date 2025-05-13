import { BiPhoneCall } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <section className="flex flex-col items-center w-full py-6 pb-4 md:py-10 lg:py-12 ">
      <div className="w-[90%] max-w-7xl flex flex-col py-6 md:py-8 space-y-6 md:space-y-0 mx-auto  rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 w-full px-4 md:px-0">
          <div className="flex flex-col gap-4 items-center md:items-start justify-center">
            <div className="w-20 sm:w-24 lg:w-32 2xl:w-48 h-auto overflow-hidden flex items-start justify-start">
              <img
                className="object-contain cursor-pointer h-full w-full filter invert"
                src="/MandrakeBlackLogoCropped.png"
                alt="Mandrake"
              />
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-white h-4 w-4 sm:h-5 sm:w-5 p-1 flex items-center justify-center rounded-full">
                <FaLocationDot className="h-3 w-3 sm:h-4 sm:w-4 fill-black" />
              </div>
              <p className="text-[10px] sm:text-sm lg:text-base 2xl:text-xl text-left text-white">
                Xodia Industrial Estate, Brik Rd, Hatijugar, India
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-white h-4 w-4 sm:h-5 sm:w-5 p-1 flex items-center justify-center rounded-full">
                <BiPhoneCall className="h-3 w-3 sm:h-4 sm:w-4 fill-black" />
              </div>
              <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white">
                +91 98543 12345
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-white h-4 w-4 sm:h-5 sm:w-5 p-1 flex items-center justify-center rounded-full">
                <MdEmail className="h-3 w-3 sm:h-4 sm:w-4 fill-black" />
              </div>
              <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white">
                contact@mandrakebioworks.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start justify-center">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white font-semibold text-left">
              Services
            </span>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              Structure
            </p>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              Development
            </p>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              Sustainability
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start justify-center">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white font-semibold text-left">
              About Us
            </span>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              About
            </p>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              Portfolio
            </p>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              Team
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start justify-center">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white font-semibold text-left">
              Support
            </span>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              FAQ
            </p>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              How It Works
            </p>
            <p className="text-xs sm:text-sm lg:text-base 2xl:text-xl text-left text-white/80">
              Privacy
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] max-w-7xl flex flex-col items-center gap-4 mt-4">
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="items-center overflow-hidden rounded-full flex justify-center bg-white cursor-pointer">
            <img
              src="/linkedIn.jpg"
              alt="LinkedIn"
              className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 object-contain"
            />
          </div>
          <div className="items-center overflow-hidden rounded-full flex justify-center bg-white cursor-pointer">
            <img
              src="/youtubeLogo.webp"
              alt="YouTube"
              className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 object-contain"
            />
          </div>
        </div>
        <p className="text-[10px] sm:text-sm lg:text-base 2xl:text-xl text-center text-white opacity-90">
          © Copyright 2025, Mandrake Bioworks All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;