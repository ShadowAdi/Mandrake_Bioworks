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
        <div ref={sectionRef} className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 min-h-[100dvh] flex flex-col py-2 items-center mx-auto gap-4 sm:gap-6 lg:gap-8  justify-around   px-4 sm:px-6 ">
            <div ref={textWrapperRef} className="overflow-hidden w-full">
                <h1
                    ref={textRef}
                    style={{ fontFamily: "'Afacad Flux', serif" }}
                    className="text-2xl md:text-4xl 2xl:text-[132px] uppercase font-bold text-center text-white lg:text-5xl xl:text-6xl  xl:leading-snug"
                >
                    Agriculture Is Falling Behind
                </h1>
            </div>

            <div className="flex flex-col w-full items-center justify-center ">
                <AnimatedWhiteTextSvg
                    className="text-base md:text-4xl  uppercase font-semibold text-center text-white lg:text-4xl xl:text-4xl 2xl:text-8xl"
                    text="Decade-Long Timelines."
                    numWordsToOverlay={1}
                />
                <AnimatedWhiteTextSvg
                    className="text-base  md:text-3xl uppercase font-semibold text-center text-white  lg:text-4xl xl:text-4xl 2xl:text-8xl"
                    text="Millions in Development Costs."
                    numWordsToOverlay={1}
                />
                <AnimatedWhiteTextSvg
                    className="text-base  md:text-3xl uppercase font-semibold text-center text-white  lg:text-4xl xl:text-4xl 2xl:text-8xl"
                    text="Just. One. Trait."
                    numWordsToOverlay={3}
                />
            </div>

            <div
                ref={paraWrapperRef}
                className="flex flex-col space-y-3 2xl:space-y-3 items-center w-full sm:w-4/5 md:w-[90%] lg:w-[95%] 2xl:w-[85] justify-around"
            >
                <p
                    ref={paraRef}
                    className="text-xs sm:text-sm md:text-lg lg:text-2xl  text-center text-white font-normal leading-relaxed w-full 2xl:text-4xl 2xl:leading-[56px]"
                >
                    Currently, developing new plants means guesswork & a painfully slow and
                    prohibitively expensive process. This inefficiency leaves countless crop
                    improvements undiscovered, severely constraining agricultural innovation
                    when we need it most.
                </p>
                <p
                    ref={para2Ref}
                    className="text-xs sm:text-sm md:text-lg lg:text-2xl  text-center text-white font-normal leading-relaxed w-full 2xl:leading-[56px] 2xl:text-5xl "
                >
                    While agriculture remains fundamental to humanity's survival, it's trapped
                    in outdated breeding methods that miss transformative opportunities.
                </p>
            </div>
        </div>
    );
};

export default Section2Part1;