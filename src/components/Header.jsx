import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
    const headerRef = useRef(null);
    const coverRef = useRef(null)
    const buttonSpanRef = useRef(null)

    useGSAP(() => {
        gsap.from(headerRef.current, {
            opacity: 0,
            y: -200,       // 👈 move from -200px above
            duration: 1.5,  // 👈 shorter and snappier
            ease: "expo.out" // 👈 expo out feels nice for entering
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
        },"anim")
        tl.to(buttonSpanRef.current, {
            color: "black",
            duration: 0.3,
            ease: "power2.inOut"
        },"anim")
    }

    const handleLeave = () => {
        const tl = gsap.timeline()
        tl.to(coverRef.current, {
            scaleX: 0,
            duration: 1,
            ease: "expo.inOut"
        },"anim")
        tl.to(buttonSpanRef.current, {
            color: "white",
            duration: 0.3,
            ease: "power2.inOut"
        },"anim")

    }

    return (
        <header
            ref={headerRef}
            className='header flex w-full z-[100] justify-between items-start'
        >
            <div className="flex flex-col items-start space-y-0.5">
                <div className="h-24 w-24 overflow-hidden flex items-start justify-start">
                    <img
                        className='object-contain cursor-pointer object-top h-full w-full filter invert'
                        src='/MandrakeBlackLogoCropped.png'
                        alt='Mandrake'
                    />
                </div>
            </div>
            <button onMouseEnter={handleHover} onMouseLeave={handleLeave} className='border relative border-white px-3 rounded-full overflow-hidden flex items-center justify-center md:px-6 py-2'>
                <span ref={buttonSpanRef} className='text-sm md:text-base text-white z-20'>
                    Get In Touch
                </span>
                <div ref={coverRef} className='absolute top-0 left-0 bg-white w-full h-full rounded-full' />
            </button>
        </header>
    );
};

export default Header;
