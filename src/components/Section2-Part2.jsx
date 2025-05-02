import React, { useRef } from 'react'
import AnimatedText from './AnimatedText'
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


const Section2Part2 = () => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);
    const paraRef = useRef(null)
    const paraWrapperRef = useRef(null)


    useGSAP(() => {
        const textRefSplit = new SplitType(textRef.current, {
            types: "lines,chars",
            lineClass: "line-wrapper"
        });
        const paraTextSplit = new SplitType(paraRef.current, { types: "chars" })

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
                start: "top bottom", // when top of wrapper hits 80% of screen
            },
        });
        tl.from(paraTextSplit.chars, {
            opacity: 0.5,
            stagger: 0.01,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: paraWrapperRef.current,
                start: "-10% bottom",
                scrub: 1
            },
        });
    }, []);
    return (
        <div className='md:w-4/5 w-[80%] flex pb-3  min-h-screen md:pb-8 flex-col items-center  mx-auto space-y-2 lg:space-y-6  justify-center py-2 md:py-6 '>
            <div ref={textWrapperRef} className="overflow-hidden w-full ">
                <h1 ref={textRef} style={{ fontFamily: "'Afacad Flux', serif" }} className="text-lg  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl
                            uppercase font-bold text-center text-white  ">
                    What If Agriculture Stole a Page from Pharma's Playbook?
                </h1>
            </div>
            <div className=' h-[40vh] md:h-[60vh] w-full'>
                <img src='/Scientist.png' className='object-contain h-full w-full' />
            </div>
            <div ref={paraWrapperRef} className='flex flex-col space-y-9 items-center w-[90%] md:w-[70%] justify-center'>
                <p className="
                            text-center text-white font-normal text-xs  sm:text-sm md:text-base lg:text-lg  xl:text-xl 2xl:text-3xl
                            "
                    ref={paraRef}
                >
                    Industries like pharmaceuticals and materials science have revolutionized their  innovation cycles by integrating AI-driven discovery with automated lab workflows. The result? Dramatically reduced costs, accelerated timelines, and entirely new realms of possibility.
                </p>
            </div>
        </div>
    )
}

export default Section2Part2