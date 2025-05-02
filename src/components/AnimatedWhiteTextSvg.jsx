import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AnimatedWhiteTextSvg = ({
    text,
    className,
}) => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const split = new SplitType(textRef.current, {
            types: "lines, chars",
            lineClass: "line-wrapper",
        });

        // Wrap each line with a container for the overlay
        split.lines.forEach((line) => {
            const wrapper = document.createElement("div");
            wrapper.className = "relative w-fit inline-block"; // holds both line + overlay
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);

            const overlay = document.createElement("div");
            overlay.className = "absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-60 rounded-sm";
            wrapper.appendChild(overlay);
        });

        gsap.from(split.lines, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: textWrapperRef.current,
                start: "top bottom",
            },
        });

    }, [text]);

    return (
        <div ref={textWrapperRef} className="relative overflow-hidden w-full md:w-[80%]">
            <h1
                ref={textRef}
                style={{ fontFamily: "'Afacad Flux', serif" }}
                className={`${className} whitespace-pre-wrap`} 
            >
                {text}
            </h1>
        </div>
    );
};

export default AnimatedWhiteTextSvg;
