import React, { useRef } from 'react'
import AnimatedText from './AnimatedText'
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedWhiteText from './AnimatedWhiteText';
gsap.registerPlugin(ScrollTrigger);


const Section2Part2 = () => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);
    const paraRef = useRef(null)
    const paraWrapperRef = useRef(null)
    const textWrapperRef2 = useRef(null);
    const textRef2 = useRef(null);

    useGSAP(() => {
        const textRefSplit = new SplitType(textRef.current, {
            types: "lines,words",
            lineClass: "line-wrapper"
        });
        const paraTextSplit = new SplitType(paraRef.current, { types: "words" })
        const textRefSplit2 = new SplitType(textRef2.current, {
            types: "lines,words",
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
                start: "top bottom", // when top of wrapper hits 80% of screen
            },
        }, "anim");
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
        }, "anim");

        tl.from(textRefSplit2.lines, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: textWrapperRef.current,
                start: "-10% bottom",
                scrub: 1,
            },
        }, "anim");
    }, []);


    return (
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-[90%] xl:w-[90%] min-h-[100dvh] flex flex-col py-4 items-center mx-auto gap-2 sm:gap-3 lg:gap-4 2xl:gap-5 justify-around px-2 sm:px-6">
            <div ref={textWrapperRef} className="overflow-hidden  w-full ">
                <h1 ref={textRef} style={{ fontFamily: "'Afacad Flux', serif" }}
                    className="uppercase font-bold text-center text-white 
    text-xl sm:text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    What If Agriculture Stole a Page from Pharma's Playbook?
                </h1>
            </div>
            <div className=' h-[35vh]  md:h-[40vh] lg:h-[45vh]  w-full'>
                <img src='/Scientist.png' className='object-fill h-full w-full' />
            </div>
            <div ref={paraWrapperRef} className='flex mx-auto flex-col  items-center w-full
             sm:w-[80%] md:w-[96%] justify-center'>
                <p className="text-center text-white font-normal 
    w-[98%] sm:w-[95%] md:w-[95%] lg:w-[90%] xl:w-[75%] 2xl:w-[70%] 
    text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg  2xl:text-3xl leading-relaxed"
                    ref={paraRef}
                >
                    Industries like pharmaceuticals and materials science have revolutionized their  innovation cycles by integrating AI-driven discovery with automated lab workflows. The result? Dramatically reduced costs, accelerated timelines, and entirely new realms of possibility.
                </p>
            </div>
            <div ref={textWrapperRef2} className="overflow-hidden w-full    ">
                <h1 ref={textRef2} style={{ fontFamily: "'Afacad Flux', serif" }} className={"uppercase font-semibold text-center text-white  text-base sm:text-lg  lg:text-xl xl:text-2xl 2xl:text-6xl "}>
                    We think it's time Agriculture catches up.      </h1>
            </div>
        </div>
    )
}

export default Section2Part2