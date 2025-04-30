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
    useGSAP(() => {
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

        gsap.from(textRefSplit.lines, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: textWrapperRef.current,
                start: "top bottom", // when top of wrapper hits 80% of screen
            },
        });
    }, []);
    return (
        <div className='md:w-4/5 w-[80%] flex pb-3 min-h-screen md:pb-8 flex-col items-center  mx-auto space-y-8  justify-center py-4 md:py-16 '>
            <AnimatedText text="What If Agriculture Stole a Page from Pharma's Playbook?
"/>
            <div className='h-[60vh] w-full'>
                <img src='/Scientist.png' className='object-contain h-full w-full' />
            </div>
            <div className='flex flex-col space-y-9 items-center w-[90%] md:w-[70%] justify-center'>
                <p className="
    text-[10px]  md:text-xs lg:text-sm xl:text-base 2xl:text-3xl
    text-center text-white font-normal
  ">
                    Industries like pharmaceuticals and materials science have revolutionized their  innovation cycles by integrating AI-driven discovery with automated lab workflows. The result? Dramatically reduced costs, accelerated timelines, and entirely new realms of possibility..
                </p>
            </div>
        </div>
    )
}

export default Section2Part2