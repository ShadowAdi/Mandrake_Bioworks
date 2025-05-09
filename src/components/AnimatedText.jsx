import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);


const AnimatedText = ({ text,className,divClassName }) => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);
    useGSAP(() => {
        const textRefSplit = new SplitType(textRef.current, {
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

        gsap.from(textRefSplit.lines, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: textWrapperRef.current,
                start: "top bottom", // when top of wrapper hits 80% of screen,
            },
        });
    }, []);

    return (
        <div ref={textWrapperRef} className={`overflow-hidden sm:w-[90%] w-[96%] mx-auto  `}>
            <h1 ref={textRef} style={{ fontFamily: "'Afacad Flux', serif" }}
             className={className+" text-center"}>
                {text}
            </h1>
        </div>
    )
}

export default AnimatedText