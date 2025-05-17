import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Header = ({ handleButtonClick }) => {
    const headerRef = useRef(null);
    const coverRef = useRef(null)
    const buttonSpanRef = useRef(null)

    useGSAP(() => {
        gsap.from(headerRef.current, {
            opacity: 0,
            y: -200,       // 👈 move from -200px above
            duration: 1.5,  // 👈 shorter and snappier
            ease: "expo.out",
            scrollTrigger: {
                start: "top 40%"
            }
        })

        gsap.set(coverRef.current, {
            scaleX: 0,
            transformOrigin: "left center"
        });
    }, []);

    const handleHover = () => {
        const tl = gsap.timeline()
        tl.to(coverRef.current, {
            scaleX: 1,
            duration: 1,
            ease: "expo.inOut"
        }, "anim")
        tl.to(buttonSpanRef.current, {
            color: "black",
            duration: 0.3,
            ease: "power2.inOut"
        }, "anim")
    }

    const handleLeave = () => {
        const tl = gsap.timeline()
        tl.to(coverRef.current, {
            scaleX: 0,
            duration: 1,
            ease: "expo.inOut"
        }, "anim")
        tl.to(buttonSpanRef.current, {
            color: "white",
            duration: 0.3,
            ease: "power2.inOut"
        }, "anim")

    }

    return (
        <header
            ref={headerRef}
            className='header flex  z-[100] w-[90%] justify-between items-start'
        >
            <div className="flex flex-col items-start space-y-0.5">
                <div className="h-12 w-24 lg:h-32 lg:w-32 2xl:h-80 2xl:w-80 overflow-hidden flex items-start justify-start ">
                    <img
                        className='object-contain cursor-pointer object-top h-full w-full filter invert '
                        src='/MandrakeBlackLogoCropped.png'
                        alt='Mandrake'
                    />
                </div>
            </div>
            <button onClick={handleButtonClick} onMouseEnter={handleHover} onMouseLeave={handleLeave} className='border relative border-white px-3 rounded-full overflow-hidden flex items-center justify-center md:px-6 py-2'>
                <span ref={buttonSpanRef} className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  text-white z-20'>
                    Get In Touch
                </span>
                <div ref={coverRef} className='absolute top-0 left-0 bg-white w-full h-full rounded-full' />
            </button>
        </header>
    );
};

export default Header;
