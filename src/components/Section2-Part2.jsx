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
        const paraTextSplit = new SplitType(paraRef.current, { types: "chars" })
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
                trigger: textWrapperRef2.current,
                start: "-170% bottom",
                scrub: 1,
            },
        }, "anim");
    }, []);


    return (
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-[90%] xl:w-[90%] min-h-[100dvh] flex flex-col py-4 items-center mx-auto gap-1 sm:gap-2 lg:gap-2 2xl:gap-2 justify-between px-4 sm:px-6">
            <div ref={textWrapperRef} className="overflow-hidden  w-full ">
                <h1 ref={textRef} style={{ fontFamily: "'Afacad Flux', serif" }}
                    className="uppercase font-bold text-center text-white text-heading-sm sm:text-heading-sm md:text-heading-lg lg:text-heading-lg xl:text-heading-xl 2xl:text-heading-2xl">
                    What If Agriculture Stole a Page from Pharma's Playbook?
                </h1>
            </div>
            <div className=' h-[50vh]  w-full'>
                <img src='/Scientist.png' className='object-contain h-full w-full' />
            </div>
            <div ref={paraWrapperRef} className='flex flex-col  items-center w-full md:w-[90%] justify-center'>
                <p    className="text-center text-white font-normal w-full text-para-sm sm:text-para-sm md:text-para-md lg:text-para-lg xl:text-para-xl 2xl:text-para-2xl leading-relaxed"
                    ref={paraRef}
                >
                    Industries like pharmaceuticals and materials science have revolutionized their  innovation cycles by integrating AI-driven discovery with automated lab workflows. The result? Dramatically reduced costs, accelerated timelines, and entirely new realms of possibility.
                </p>
            </div>
            <div ref={textWrapperRef2} className="overflow-hidden w-full    ">
                <h1 ref={textRef2} style={{ fontFamily: "'Afacad Flux', serif" }} className={"uppercase font-semibold text-center text-white text-subheading-sm sm:text-subheading md:text-subheading-md lg:text-subheading-lg xl:text-subheading-xl 2xl:text-subheading-2xl 3xl:text-subheading-3xl "}>
                    We think it's time Agriculture catches up.      </h1>
            </div>
        </div>
    )
}

export default Section2Part2