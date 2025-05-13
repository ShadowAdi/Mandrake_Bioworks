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
            className="relative flex flex-col items-center w-full  min-h-[100dvh] justify-around   py-4 sm:py-6 2xl:py-16"
        >
            <div className="w-[98%] md:w-[80%]   flex flex-col items-center justify-between flex-1 mx-auto h-full   ">
                <AnimatedText
                     className=" uppercase font-bold text-center text-white text-2xl  sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-9xl"
                    text="How are we Different?"
                />
                <div className="w-full  h-64 2xl:h-[520px] flex items-center justify-center">
                    <img
                        src="/Arrow.png"
                        className="h-full w-full  object-contain"
                        alt="Arrow Illustration"
                    />
                </div>
                <div
                    ref={paraWrapperRef}
                    className="flex flex-col space-y-5 items-center w-[95%] sm:w-[70%] justify-center mx-auto"
                >
                    <p
                        ref={paraRef}
              className="text-center text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-2xl  w-full  font-semibold 2xl:text-5xl"
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