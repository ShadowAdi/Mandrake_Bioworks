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
            className="relative flex flex-col items-center w-full min-h-[100dvh]  px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 justify-around  py-3"
        >
            <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 flex flex-col items-center justify-between flex-1 mx-auto h-full   ">
                <AnimatedText
                     className=" uppercase font-bold text-center text-white  text-heading-sm sm:text-heading-sm md:text-heading-xl lg:text-heading-xl xl:text-heading-xl 2xl:text-heading-2xl "
                    text="How are we Different?"
                />
                <div className="w-full h-72 sm:h-64 md:h-80  2xl:h-[400px]  flex items-center justify-center">
                    <img
                        src="/Arrow.png"
                        className="h-full w-full  object-contain"
                        alt="Arrow Illustration"
                    />
                </div>
                <div
                    ref={paraWrapperRef}
                    className="flex flex-col space-y-5 items-center w-full justify-center"
                >
                    <p
                        ref={paraRef}
              className="text-center text-white font-normal w-full text-para-sm sm:text-para-sm md:text-para-lg lg:text-para-lg xl:text-para-xl 2xl:text-para-2xl leading-relaxed"
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