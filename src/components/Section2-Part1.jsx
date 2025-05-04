import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedWhiteTextSvg from './AnimatedWhiteTextSvg';

gsap.registerPlugin(ScrollTrigger);

const Section2Part1 = () => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);
    const paraRef = useRef(null);
    const paraWrapperRef = useRef(null);

    useGSAP(() => {
        const paraTextSplit = new SplitType(paraRef.current, { types: "chars" });
        const textRefSplit = new SplitType(textRef.current, {
            types: "lines,words",
            lineClass: "word-wrapper"
        });

        textRefSplit.lines.forEach((line) => {
            line.style.overflow = 'hidden';
            line.style.display = 'block';
            line.style.backgroundImage = 'linear-gradient(to right, #e0f4eb, #b8e8e5, #90dcd7, #90dadc)';
            line.style.webkitBackgroundClip = 'text';
            line.style.backgroundClip = 'text';
            line.style.color = 'transparent';
        });

        const tl = gsap.timeline();
        tl.from(textRefSplit.lines, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: textWrapperRef.current,
                start: "top bottom-=20%",
                scrub: 1
            },
        });
        tl.from(paraTextSplit.chars, {
            opacity: 0.5,
            stagger: 0.01,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: paraWrapperRef.current,
                start: "top bottom-=20%",
                scrub: 1
            },
        });
    }, []);

    return (
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 min-h-[100dvh] flex flex-col items-center mx-auto gap-4 sm:gap-6 lg:gap-8 xl:gap-10 justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6">
            <div ref={textWrapperRef} className="overflow-hidden w-full">
                <h1
                    ref={textRef}
                    style={{ fontFamily: "'Afacad Flux', serif" }}
                    className="text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl uppercase font-bold text-center text-white"
                >
                    Agriculture Is Falling Behind
                </h1>
            </div>

            <div className="flex flex-col w-full items-center justify-center ">
                <AnimatedWhiteTextSvg
                    className="text-subheading uppercase font-semibold text-center text-white"
                    text="Decade-Long Timelines."
                    numWordsToOverlay={1}
                />
                <AnimatedWhiteTextSvg
                    className="text-subheading uppercase font-semibold text-center text-white"
                    text="Millions in Development Costs."
                    numWordsToOverlay={1}
                />
                <AnimatedWhiteTextSvg
                    className="text-subheading uppercase font-semibold text-center text-white"
                    text="Just. One. Trait."
                    numWordsToOverlay={3}
                />
            </div>

            <div
                ref={paraWrapperRef}
                className="flex flex-col space-y-5 items-center w-full sm:w-4/5 md:w-[90%] lg:w-[95%] 2xl:w-3/4 justify-center"
            >
                <p
                    ref={paraRef}
                    className="text-para-sm sm:text-para-sm lg:text-para-md xl:text-para-xl text-center text-white font-normal leading-relaxed w-full"
                >
                    Currently, developing new plants means guesswork & a painfully slow and
                    prohibitively expensive process. This inefficiency leaves countless crop
                    improvements undiscovered, severely constraining agricultural innovation
                    when we need it most.
                </p>
                <p
                    ref={paraRef}
                    className="text-para-sm sm:text-para-sm lg:text-para-lg xl:text-para-xl text-center text-white font-normal leading-relaxed w-full"
                >
                    While agriculture remains fundamental to humanity's survival, it's trapped
                    in outdated breeding methods that miss transformative opportunities.
                </p>
            </div>
        </div>
    );
};

export default Section2Part1;