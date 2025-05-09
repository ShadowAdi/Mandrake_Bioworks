import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedWhiteText from './AnimatedWhiteText';

gsap.registerPlugin(ScrollTrigger);

const Section9 = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const popupRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="flex flex-col items-center w-full justify-center relative py-6 md:py-8 min-h-[100dvh]"
      >
        <div className="w-[90%] flex flex-col items-center mx-auto gap-8 md:gap-12 lg:gap-16">
          <div ref={imageWrapperRef} className="w-full max-w-4xl">
            <img
              ref={imageRef}
              src="/Gene.jpg"
              alt="Gene"
              className="w-full h-auto max-h-[40vh] lg:max-h-[80vh] object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col items-center text-center w-[90%] lg:px-16 gap-4 md:gap-6 lg:gap-8">
            <AnimatedWhiteText
              text="Building the Plant Design Factory of the Future"
              className="text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl uppercase font-bold text-white"
            />
            <AnimatedWhiteText
              text="Whether you're interested in joining our team, partnering with us, or simply curious to learn more about our work—let's connect."
              className="text-sm md:text-subheading lg:text-lg xl:text-2xl xl:w-[80%] mx-auto text-white"
            />
            <button
              onClick={handlePopupToggle}
              className="px-6 md:px-10 py-2 md:py-3 mt-4 md:mt-6 rounded-full bg-[#C4E9A2] hover:opacity-90"
            >
              <span className="text-sm md:text-subheading lg:text-xl text-black font-semibold">
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Popup */}
      <div
        ref={popupRef}
        className={`fixed top-0 left-0 w-full h-screen bg-[#282734] flex items-start justify-center 2xl:items-center py-6 z-[9999]`}
        style={{ display: isPopupOpen ? 'flex' : 'none' }} // Initial display state
      >
        <div className="w-[94%] flex flex-col gap-4 mx-auto text-start text-white">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-subheading 2xl:text-5xl font-bold">Contact Us</h2>
            <button
              className="h-6 p-2 w-6 2xl:h-14 2xl:w-14 bg-[#807F87] rounded-full flex items-center justify-center text-[#4E4D58] 2xl:text-5xl text-2xl"
              onClick={handlePopupToggle}
            >
              ×
            </button>
          </div>

          <div className="flex flex-col gap-2 2xl:gap-8">
            <div className="flex flex-col w-full items-start 2xl:gap-5">
              <label className="text-white text-lg 2xl:text-3xl">Who Are you?</label>
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-1 2xl:py-3 w-full outline-0 border-0 text-para-sm sm:text-para-sm xl:text-para-lg 2xl:text-2xl rounded-md bg-[#73727B] text-[#A5A5A9]"
              />
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <label className="text-white text-lg 2xl:text-3xl">What do you work on?</label>
              <textarea
                placeholder="Tell us more about what you do-"
                rows={2}
                className="px-4  py-1 2xl:py-3  w-full outline-0 border-0 text-para-sm sm:text-para-sm xl:text-para-lg rounded-md bg-[#73727B] text-[#A5A5A9]"
              ></textarea>
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <label className="text-white text-lg 2xl:text-3xl">How can we partner?</label>
              <textarea
                placeholder="What got you excited about us?"
                rows={2}
                className="px-4  py-1 2xl:py-3  w-full outline-0 border-0 text-para-sm sm:text-para-sm xl:text-para-lg rounded-md bg-[#73727B] text-[#A5A5A9]"
              />
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <label className="text-white text-lg 2xl:text-3xl">Drop your contact!</label>
              <input
                type="text"
                placeholder="Email or LinkedIn - wherever you want us to reach you"
                className="px-4  py-1 2xl:py-3  w-full outline-0 border-0 text-para-sm sm:text-para-sm xl:text-para-lg rounded-md bg-[#73727B] text-[#A5A5A9]"
              />
            </div>
            <button
              onClick={handlePopupToggle}
              className="px-8 w-max py-2 md:py-3 rounded-full bg-[#C4E9A2] hover:opacity-90 block"
            >
              <span className="text-black font-semibold text-base 2xl:text-subheading">Get In Touch</span>
            </button>
            <p className="text-white text-lg 2xl:text-3xl">
              You can also reach us directly at{' '}
              <span className="underline text-[#A3ABB4]">hello@mandrakebio.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section9;