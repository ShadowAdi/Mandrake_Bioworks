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
            className="relative flex flex-col items-center w-full min-h-[100dvh] py-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 justify-center "
        >
            <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 flex flex-col items-center justify-center mx-auto pt-4 sm:pt-6 pb-2 sm:pb-4 space-y-4 sm:space-y-4 md:space-y-2">
                <AnimatedText
                    className="text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl uppercase font-bold text-center text-white"
                    text="How are we Different?"
                />
                <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-60 flex items-center justify-center">
                    <img
                        src="/Arrow.png"
                        className="h-full w-full max-w-md object-contain"
                        alt="Arrow Illustration"
                    />
                </div>
                <div
                    ref={paraWrapperRef}
                    className="flex flex-col space-y-5 items-center w-full justify-center"
                >
                    <p
                        ref={paraRef}
                        className="text-para-sm sm:text-para-md lg:text-para-lg xl:text-para-xl text-center text-white font-normal w-full sm:w-4/5 md:w-3/4 lg:w-2/3 leading-relaxed"
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