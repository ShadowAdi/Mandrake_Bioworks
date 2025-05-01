import React, { useRef } from 'react'
import AnimatedWhiteText from './AnimatedWhiteText'
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap/all';
import AnimatedWhiteTextSvg from './AnimatedWhiteTextSvg';

const Section2Part1 = () => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);
    const paraRef = useRef(null)
    const paraWrapperRef = useRef(null)
    useGSAP(() => {
        const paraTextSplit = new SplitType(paraRef.current, { types: "chars" })
        const textRefSplit = new SplitType(textRef.current, {
            types: "lines,chars",
            lineClass: "line-wrapper"
        });

        
        textRefSplit.lines.forEach((line) => {
            line.style.overflow = 'hidden';
            line.style.display = 'block';
            line.style.backgroundImage = 'linear-gradient(to right, #e0f4eb, #b8e8e5, #90dcd7, #90dadc)';
            line.style.webkitBackgroundClip = 'text';
            line.style.backgroundClip = 'text';
            line.style.color = 'transparent';
        });

        const tl = gsap.timeline()
        tl.from(textRefSplit.lines, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: textWrapperRef.current,
                start: "-20% bottom",
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
                start: "-20% bottom",
                scrub: 1
            },
        });
    }, []);
    return (
        <div className='md:w-4/5 w-[90%]  min-h-screen flex flex-col items-center mx-auto   gap-2 lg:gap-12 justify-center lg:justify-center  py-4 md:py-16'>
            <div ref={textWrapperRef} className="overflow-hidden w-full    ">
                <h1 ref={textRef} style={{ fontFamily: "'Afacad Flux', serif" }} className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-8xl
                uppercase font-bold text-center text-white  break-words">
                    Agriculture Is Falling Behind
                </h1>

            </div>

            <div className='flex flex-col w-full items-center justify-center'>
                <AnimatedWhiteTextSvg
                    className={"text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl uppercase font-semibold text-center text-white"}
                    text={"Decade-Long Timelines."}
                    highlightLetters={{ start: "D", end: "G" }}
                />
                <AnimatedWhiteTextSvg
                    className={"text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl uppercase font-semibold text-center text-white break-words"}
                    text={"Millions in Development Costs."}
                    highlightLetters={{ start: "M", end: "S" }}
                />
                <AnimatedWhiteTextSvg
                    className={"text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl uppercase font-semibold text-center text-white break-words"}
                    text={"Just. One. Trait."}
                    highlightLetters={{ start: "J", end: "T" }}
                />
            </div>
            <div ref={paraWrapperRef} className='flex flex-col space-y-5 items-center w-full md:w-[90%] lg:w-[80%] justify-center'>
                <p className="
                            text-[10px]  md:text-base lg:text-lg 2xl:text-3xl
                            text-center text-white font-normal
                            "
                    ref={paraRef}
                >
                    Currently, developing new plants means guesswork & a painfully slow and prohibitively expensive process. This inefficiency leaves countless crop improvements
                    undiscovered, severely constraining agricultural innovation when we need it most .
                </p>
                <p className="
                            text-[10px]  md:text-sm lg:text-base xl:text-xl 2xl:text-3xl
                            text-center text-white
                            "
                    ref={paraRef}
                >
                    While agriculture remains fundamental to humanity's survival, it's trapped
                    in outdated breeding methods that miss transformative opportunities.
                </p>
            </div>
        </div>)
}

export default Section2Part1