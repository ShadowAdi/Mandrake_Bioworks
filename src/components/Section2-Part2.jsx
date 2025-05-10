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


    useGSAP(() => {
        const textRefSplit = new SplitType(textRef.current, {
            types: "lines,words",
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
        },"anim");
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
        },"anim");
    }, []);
    return (
        <div className='sm:w-full  w-[90%] flex    h-screen  flex-col items-center  mx-auto  justify-around py-2  '>
            <div ref={textWrapperRef} className="overflow-hidden  w-full ">
                <h1 ref={textRef} style={{ fontFamily: "'Afacad Flux', serif" }}
                 className="text-2xl md:text-3xl 2xl:text-[132px] uppercase font-bold text-center text-white lg:text-4xl  xl:leading-snug ">
                    What If Agriculture Stole a Page from Pharma's Playbook?
                </h1>
            </div>
            <div className=' h-[40vh]  w-full'>
                <img src='/Scientist.png' className='object-contain h-full w-full' />
            </div>
            <div ref={paraWrapperRef} className='flex flex-col  items-center w-full md:w-[90%] justify-center'>
                <p   className="text-xs sm:text-sm md:text-base lg:text-lg  text-center text-white font-normal leading-relaxed w-full 2xl:text-4xl 2xl:leading-[56px]"
                    ref={paraRef}
                >
                    Industries like pharmaceuticals and materials science have revolutionized their  innovation cycles by integrating AI-driven discovery with automated lab workflows. The result? Dramatically reduced costs, accelerated timelines, and entirely new realms of possibility.
                </p>
            </div>
             <AnimatedWhiteText
                text="We think it's time Agriculture catches up."
                className="text-base md:text-3xl  uppercase font-semibold text-center text-white lg:text-5xl xl:text-4xl 2xl:text-8xl"
            />
        </div>
    )
}

export default Section2Part2