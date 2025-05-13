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
    const para2Ref = useRef(null);
    const paraWrapperRef = useRef(null);
    const sectionRef = useRef(null)

    useGSAP(() => {
        const paraTextSplit = new SplitType(paraRef.current, { types: "words" });
        const paraTextSplit1 = new SplitType(para2Ref.current, { types: "words" });
        const textRefSplit = new SplitType(textRef.current, {
            types: "lines,words",
            lineClass: "word-wrapper"
        });

        // Set initial styles
        gsap.set(paraTextSplit.words, { opacity: 0 });
        gsap.set(paraTextSplit1.words, { opacity: 0 });

        textRefSplit.lines.forEach((line) => {
            line.style.overflow = 'hidden';
            line.style.display = 'block';
            line.style.backgroundImage = 'linear-gradient(to right, #e0f4eb, #b8e8e5, #90dcd7, #90dadc)';
            line.style.webkitBackgroundClip = 'text';
            line.style.backgroundClip = 'text';
            line.style.color = 'transparent';
        });

        gsap.from(textRefSplit.lines, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "5% bottom",
                scrub: 1
            }
        });

        // Animate first paragraph
        ScrollTrigger.create({
            trigger: paraWrapperRef.current,
            start: "10% bottom",
            scrub: true,
            onEnter: () => {
                gsap.to(paraTextSplit.words, {
                    opacity: 1,
                    duration: 1,
                    stagger: 0.01,
                    ease: "power2.out"
                });
            }
        });

        // Animate second paragraph
        ScrollTrigger.create({
            trigger: para2Ref.current,
            start: "top bottom",
            scrub: true,
            onEnter: () => {
                gsap.to(paraTextSplit1.words, {
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.01,
                    ease: "power2.out"
                });
            }
        });
    }, []);


    return (
        <div
            ref={sectionRef}
            className="w-full sm:w-11/12 md:w-4/5 lg:w-[90%] xl:w-[90%] min-h-[100dvh] flex flex-col py-4 items-center mx-auto gap-4 sm:gap-6 lg:gap-10 2xl:gap-12 justify-around px-2 sm:px-6"
        >
            <div ref={textWrapperRef} className="overflow-hidden w-full lg:w-[90%] ">
                <h1
                    ref={textRef}
                    style={{ fontFamily: "'Afacad Flux', serif" }}
                    className="uppercase font-bold text-center text-white 
    text-2xl sm:text-3xl  lg:text-4xl xl:text-5xl 2xl:text-9xl"
                >
                    WHAT IF YOU CAN DESIGN CROPS LIKE SOFTWARE?
                </h1>
            </div>

            <div className="flex flex-col w-full items-center justify-center gap-1 sm:gap-2 lg:gap-3">
                <AnimatedWhiteTextSvg
                    className="text-lg sm:text-2xl  lg:text-5xl 2xl:text-7xl  font-semibold text-center text-white "
                    text="Decade-Long Timelines."
                    numWordsToOverlay={1}
                />
                <AnimatedWhiteTextSvg
                    className="text-lg sm:text-2xl  lg:text-5xl 2xl:text-7xl  font-semibold text-center text-white "
                    text="Millions in Development Costs."
                    numWordsToOverlay={1}
                />
                <AnimatedWhiteTextSvg
                    className="text-lg sm:text-2xl  lg:text-5xl  2xl:text-7xl  font-semibold text-center text-white "
                    text="Just. One. Trait."
                    numWordsToOverlay={3}
                />
            </div>

            <div
                ref={paraWrapperRef}
                className="flex flex-col space-y-1 sm:space-y-2 lg:space-y-3 2xl:space-y-4 items-center w-full justify-around "
            >
                <p
                    ref={paraRef}
                    className="text-center text-white font-normal 
     w-[98%] sm:w-[95%] md:w-[95%] lg:w-[90%] xl:w-[75%] 2xl:w-[50%] 
    text-xs sm:text-base md:text-sm lg:text-sm xl:text-base  2xl:text-3xl leading-relaxed"
                >
                    Currently, developing new plants means guesswork & a painfully slow and prohibitively
                    expensive process. This inefficiency leaves countless crop improvements undiscovered,
                    severely constraining agricultural innovation when we need it most.
                </p>
                <p
                    ref={para2Ref}
                 className="text-center text-white font-normal 
   w-[98%] sm:w-[95%] md:w-[95%] lg:w-[90%] xl:w-[75%] 2xl:w-[50%] 
    text-xs sm:text-base md:text-sm lg:text-sm xl:text-base  2xl:text-3xl leading-relaxed"
                >
                    While agriculture remains fundamental to humanity's survival, it's trapped in outdated
                    breeding methods that miss transformative opportunities.
                </p>
            </div>
        </div>

    );
};

export default Section2Part1;