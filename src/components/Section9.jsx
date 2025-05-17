// components/Section9.jsx
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedWhiteText from './AnimatedWhiteText';
import PopupForm from './PopupForm';

gsap.registerPlugin(ScrollTrigger);

const Section9 = () => {
  const sectionRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);
  
  const handleButtonClick = (e) => {
    setClickPosition({
      x: e.clientX,
      y: e.clientY
    });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useGSAP(() => {
    // Set up animations for the section content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "center center",
        scrub: false
      }
    });

    tl.fromTo(
      sectionRef.current.querySelector("img"), 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="flex flex-col items-center py-8 w-full justify-center relative min-h-[100dvh]"
        id="contact"
      >
        <div className="w-[95%] 2xl:w-full container h-full flex flex-col items-center mx-auto gap-1 sm:gap-5">
          <img
            src="/Gene.jpg"
            alt="Gene"
            className="w-[60%] min-h-[30vh] h-full max-h-[60vh] object-fill"
          />

          <div className="flex w-[80%] md:w-full flex-col items-center justify-center text-center lg:px-4 gap-3 h-[30%]">
            <AnimatedWhiteText
              text="Building the Plant Design Factory of the Future"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl uppercase font-bold text-center text-white"
            />
            
              <h1 style={{ fontFamily: "'Afacad Flux', serif" }} className={"w-[90%] sm:w-[60%] 2xl:w-[50%]       text-[10px] sm:text-sm md:text-sm lg:text-sm xl:text-sm  2xl:text-2xl mx-auto text-white"}>
        Whether you're interested in joining our team, partnering with us, or simply curious to learn more about our work—let's connect.
      </h1>
            <button
              onClick={handleButtonClick}
              style={{ fontFamily: "'Poppins',sans-serif" }}
              className="px-6 md:px-10 py-2 md:py-3 mt-2 md:mt-4 rounded-full bg-[#C4E9A2] hover:opacity-90 transition-all hover:shadow-lg"
            >
              <span className="text-xs sm:text-base 2xl:text-3xl text-black font-semibold">
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Improved Popup Form with click position */}
      <PopupForm 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
        clickPosition={clickPosition}
      />
    </>
  );
};

export default Section9;