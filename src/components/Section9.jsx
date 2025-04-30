import React, { useRef, useEffect } from 'react';
import AnimatedWhiteText from './AnimatedWhiteText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Section9 = () => {
    const imageRef = useRef(null);
    const sectionRef = useRef(null);
    const imageWrapperRef = useRef(null)

    useGSAP(() => {
        gsap.from(imageWrapperRef.current, {
            scaleY: 100,
            duration: 2,
            transformOrigin: "top center",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "-20% start",
                scrub: 1
            }
        })
    })

    return (
        <section
            className="flex flex-col items-center w-full mx-auto justify-center relative py-4 md:py-16 pb-2 md:pb-10 h-screen"
        >
            <div className="w-[90%] md:w-4/5 flex pb-2 flex-col items-center gap-20 mx-auto space-y-1 md:space-y-12 justify-center md:justify-around">
                <div ref={sectionRef} className="w-full relative  overflow-hidden max-h-[60vh] ">
                    <img
                        ref={imageRef}
                        src="/Gene.jpg"
                        className="object-fill h-full w-full"
                        alt="Gene"
                    />
                </div>
                <div className="flex flex-col space-y-2 md:space-y-7 items-center w-[90%] md:w-[70%] justify-center">
                    <AnimatedWhiteText
                        text="Building the Plant Design Factory of the Future"
                       className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl
                uppercase font-bold text-center text-white  break-words"
                    />
                    <AnimatedWhiteText
                        className="text-white text-[10px] md:text-xl text-center"
                        text="Whether you're interested in joining our team, partnering with us, or simply curious to learn more about our work—let's connect."
                    />
                    <button className="px-6 md:px-14 py-3 mt-6 rounded-full bg-[#C4E9A2] hover:opacity-90 flex items-center justify-center">
                        <span className="text-[10px] md:text-base text-black font-semibold">
                            Get In Touch
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section9;