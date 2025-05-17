import React, { useRef } from 'react';
import AnimatedText from './AnimatedText';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
    const paraRef = useRef(null);
    const paraWrapperRef = useRef(null);

    useGSAP(() => {
        const paraTextSplit = new SplitType(paraRef.current, { types: "words" });

        const tl = gsap.timeline();
        tl.from(paraTextSplit.chars, {
            opacity: 0.5,
            stagger: 0.01,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: paraWrapperRef.current,
                start: "top bottom-=10%",
                scrub: 1
            },
        });
    }, []);

    return (
        <section
            className="relative flex flex-col items-center w-full  min-h-[100dvh] justify-around   py-4 sm:py-6 2xl:py-16 "
        >
            <div className=" container flex flex-col items-center justify-between flex-1 mx-auto h-full   ">
                <AnimatedText
                    className="uppercase font-bold text-center text-white text-2xl  sm:text-3xl md:text-4xl  lg:text-5xl xl:text-5xl 2xl:text-8xl"
                    text="How are we Different?"
                />
                <div className="w-[80%]  md:w-full  h-64 md:h-80 2xl:h-[490px] flex items-center justify-center">
                    <img
                        src="/Arrow.png"
                        className="h-full w-full  object-contain"
                        alt="Arrow Illustration"
                    />
                </div>
                <div
                    ref={paraWrapperRef}
                    className="flex flex-col space-y-5 items-center w-[90%] sm:w-[90%] justify-center mx-auto md:w-[65%] 2xl:w-[80%]"
                >
                    <p
                        ref={paraRef}
              className="text-center text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl  w-full  font-semibold 2xl:text-4xl"
                    >
                        We're unlocking the full potential of crops
                        transforming agriculture from an extractive
                        industry into one that's regenerative,
                        productive, and sustainable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section4;