import React, { useRef, useState } from 'react';
import Header from './Header';
import heroVideo from '/Hero.mp4'; // Adjust path as needed
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type';
import PopupForm from './PopupForm';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textWrapperRef = useRef(null);
  const textRef = useRef(null);
  const underlineRef = useRef(null);
  const paraRef = useRef(null);
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
    const paraTextSplit = new SplitType(paraRef.current, {
      types: "words",
      wordClass: "word-wrapper"
    });

    const textRefSplit = new SplitType(textRef.current, {
      types: "lines,words",
      lineClass: "line-wrapper",
      wordClass: "word-wrapper"
    });

    const tl = gsap.timeline();
    tl.from(textRefSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      stagger: 0.5,
    }, "anim");

    tl.from(underlineRef.current, {
      scaleX: "0",
      transformOrigin: "left center",
      duration: 2,
    }, "anim");

    tl.from(paraTextSplit.words, {
      opacity: 0.2,
      stagger: 0.05,
      duration: 0.7,
      ease: "power2.out",
    }, "anim");
  }, []);

  return (
    <>
      <section className="relative w-full h-[100dvh] flex  items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="flex flex-col items-center pb-5 w-full py-5 mx-auto min-h-[100dvh] justify-center relative z-10 ">
          <Header handleButtonClick={handleButtonClick} />
          <div className="w-[90%] sm:w-full md:w-[80%] 2xl:w-full pb-7 flex container flex-col justify-between items-start h-full mx-auto flex-1 ">
            <div className="flex-1 h-screen flex flex-col  items-center justify-center space-y-4">
              <div ref={textWrapperRef} className="overflow-hidden sm:w-[90%] w-full">
                <h1
                  ref={textRef}
                  style={{ fontFamily: "'Afacad Flux', serif" }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl uppercase font-bold text-center text-white"
                >
                  WHAT IF YOU CAN DESIGN CROPS LIKE SOFTWARE?
                </h1>
              </div>

              <div ref={underlineRef} className="h-0.5 bg-white w-[90%] sm:w-2/3 md:w-[90%] xl:w-[60%] 2xl:w-[70%]" />

              <div className="w-[80%] sm:w-[70%] xl:w-[60%] 2xl:w-[70%] mx-auto overflow-hidden">
                <p
                  ref={paraRef}
                  className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-lg  2xl:text-3xl text-center text-white font-medium whitespace-normal"
                >
                  At Mandrake Bioworks, we're changing the way crops are designed.
                  By fusing AI & Omics, we can unlock plants to their full potential —
                  making them stronger, higher yielding, more nutritious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopupForm
        isOpen={isPopupOpen}
        onClose={closePopup}
        clickPosition={clickPosition}
      />
    </>
  );
};

export default Hero;
