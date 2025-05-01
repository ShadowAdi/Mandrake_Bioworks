import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const AnimatedWhiteTextSvg = ({
    text,
    className,
    highlightLetters = { start: "D", end: "G" } // Default values
}) => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);
    const overlayRef = useRef(null);

    useGSAP(() => {
        const split = new SplitType(textRef.current, {
            types: "lines, chars",
            lineClass: "line-wrapper",
        });

        const chars = split.chars;
        const startChar = chars.find(c => c.textContent.toUpperCase() === highlightLetters.start.toUpperCase());
        const endChar = chars.findLast(c => c.textContent.toUpperCase() === highlightLetters.end.toUpperCase());

        if (startChar && endChar && overlayRef.current) {
            const startBox = startChar.getBoundingClientRect();
            const endBox = endChar.getBoundingClientRect();
            const wrapperBox = textWrapperRef.current.getBoundingClientRect();

            const overlay = overlayRef.current;


            const left = startBox.left - wrapperBox.left - 10;
            const width = endBox.right - startBox.left;
            const topOffset = (startBox.height / 2) + 10;
            const extraHeight = 30;
            const baseHeight = startBox.height + extraHeight;

            overlay.style.left = `${left}px`;
            overlay.style.width = `${width}px`;
            overlay.style.top = `${topOffset}px`;
            overlay.style.height = `${baseHeight}px`;
        }

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

        gsap.fromTo(
            overlayRef.current,
            { scaleX: 0 },
            {
                scaleX: 1,
                transformOrigin: "left center",
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: textWrapperRef.current,
                    start: "top bottom",
                },
            }
        );
    }, [text, highlightLetters]);

    return (
        <div ref={textWrapperRef} className="relative overflow-hidden w-full md:w-[80%]">
            <div
                ref={overlayRef}
                className="absolute bg-[linear-gradient(to_right,_#e0f4eb,_#b8e8e5,_#90dcd7,_#90dadc)] rounded pointer-events-none"

                style={{
                    position: 'absolute',
                    height: '45px',
                    top: '0px',
                    left: '0px',
                    width: '0px',
                }}
            ></div>
            <h1
                ref={textRef}
                style={{ fontFamily: "'Afacad Flux', serif" }}
                className={className}
            >
                {text}
            </h1>
        </div>
    );
};

export default AnimatedWhiteTextSvg