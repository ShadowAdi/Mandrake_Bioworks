import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedWhiteText from './AnimatedWhiteText';
import PopupForm from './PopupForm';

gsap.registerPlugin(ScrollTrigger);

const Section9 = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const popupRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);



  // GSAP animation for popup
  useGSAP(() => {
    if (isPopupOpen) {
      gsap.set(popupRef.current, { display: 'flex' }); // Show popup
      gsap.fromTo(
        popupRef.current,
        { y: '-100%' },
        { y: '0%', duration: 0.5, ease: 'power2.out' }
      );
    } else {
      gsap.to(popupRef.current, {
        y: '-100%',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(popupRef.current, { display: 'none' }); // Hide popup after animation
        },
      });
    }
  }, [isPopupOpen]);



  return (
    <>
      <section
        ref={sectionRef}
        className="flex flex-col items-center w-full justify-center relative   h-[100dvh]"
        id="contact"
      >
        <div className="w-[95%] sm:w-[90%] h-full flex flex-col items-center mx-auto gap-1 sm:gap-5">
          <div
            ref={imageWrapperRef}
            className="w-full h-[50%] overflow-hidden"
          >
            <img
              ref={imageRef}
              src="/Gene.jpg"
              alt="Gene"
              className="w-full h-full object-contain scale-90 rounded-md"
            />
          </div>

          <div className="flex flex-col items-center justify-center text-center w-full sm:w-[80%] lg:px-4 gap-2 md:gap-3 lg:gap-2 h-[50%]">
            <AnimatedWhiteText
              text="Building the Plant Design Factory of the Future"
              className="text-2xl   sm:text-3xl md:text-4xl 2xl:text-9xl uppercase font-bold text-white"
            />
            <AnimatedWhiteText
              text="Whether you're interested in joining our team, partnering with us, or simply curious to learn more about our work—let's connect."
              className="w-[90%] sm:w-[60%] text-sm  sm:text-lg xl:text-xl 2xl:text-4xl  mx-auto text-white"
            />
            <button
              onClick={togglePopup}
              style={{ fontFamily: "'Poppins',sans-serif" }}
              className="px-6 md:px-10 py-2 md:py-3 mt-2 md:mt-4 rounded-full bg-[#C4E9A2] hover:opacity-90"
            >
              <span className="text-xs  sm:text-base 2xl:text-3xl text-black font-semibold">
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Popup */}
      <PopupForm isOpen={isPopupOpen} onClose={togglePopup} />
    </>

  );
};

export default Section9;