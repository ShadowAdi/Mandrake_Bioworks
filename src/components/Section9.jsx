import React, { useRef } from 'react';
import AnimatedWhiteText from './AnimatedWhiteText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Section9 = () => {
    const imageRef = useRef(null);
    const sectionRef = useRef(null);
    const imageWrapperRef = useRef(null);

    return (
        <section
            className="flex flex-col items-center w-full justify-center relative py-8 md:py-10 min-h-screen"
        >
            <div className="w-[90%] max-w-[1600px] flex flex-col items-center mx-auto gap-8 md:gap-12 lg:gap-16">
                <div ref={imageWrapperRef} className="w-full max-w-4xl">
                    <img
                        ref={imageRef}
                        src="/Gene.jpg"
                        className="w-full h-auto max-h-[60vh] object-cover rounded-md"
                        alt="Gene"
                    />
                </div>

                <div className="flex flex-col items-center text-center w-[80%] px-2  lg:px-16 gap-4 md:gap-6 lg:gap-8 break-words ">
                    <AnimatedWhiteText
                        text="Building the Plant Design Factory of the Future"
                        className="text-lg md:text:xl lg:text-2xl xl:text-3xl 2xl:text-5xl uppercase font-bold text-white "
                    />
                    <AnimatedWhiteText
                        text="Whether you're interested in joining our team, partnering with us, or simply curious to learn more about our work—let's connect."
                        className="text-sm md:text-base lg:text-lg  mx-auto text-white"
                    />
                    <button className="px-6 md:px-10 py-2 md:py-3 mt-4 md:mt-6 rounded-full bg-[#C4E9A2] hover:opacity-90">
                        <span className="text-sm md:text-base text-black font-semibold">
                            Get In Touch
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section9;
