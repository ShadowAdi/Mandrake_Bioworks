import React, { useRef } from 'react'
import Header from './Header'
import bgImage from "/Gradient.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const textWrapperRef = useRef(null);
    const textRef = useRef(null);
    const underlineRef = useRef(null)
    const paraRef = useRef(null)

    useGSAP(() => {
        const paraTextSplit = new SplitType(paraRef.current, { types: "chars" })
        const textRefSplit = new SplitType(textRef.current, {
            types: "lines,chars", lineClass: "line-wrapper"
        })

        const tl = gsap.timeline()
        tl.from(textRefSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 2,
            ease: "expo.out",
            stagger: 0.5,
        }, "anim");
        tl.from(underlineRef.current, {
            scaleX: "0",
            transformOrigin: "left center",
            duration: 2,
        }, "anim")
        tl.from(paraTextSplit.chars, {
            opacity: 0.5,
            stagger: 0.01,
            duration: 0.7,
            ease: "power2.out",
        }, "anim");


    }, []);
    return (
        <section
            className="flex flex-col items-center pb-5  w-full py-5 mx-auto h-screen justify-center relative"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className='w-[90%] md:w-4/5 pb-7 flex flex-col items-center h-full mx-auto '>
                <Header />
                <div className="flex-1  flex flex-col items-center justify-center space-y-3 ">
                    <div ref={textWrapperRef} className="overflow-hidden">
                        <h1
                            ref={textRef}
                            style={{ fontFamily: "'Afacad Flux', serif" }}
                            className='text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center'
                        >
                            WHAT IF YOU CAN DESIGN CROPS LIKE YOU DESIGN SOFTWARE
                        </h1>
                    </div>

                    <div ref={underlineRef} className='h-0.5 bg-white w-2/4' />
                    <div className="w-full md:w-[68%] mx-auto overflow-hidden">
                        <p ref={paraRef} className='text-center text-white text-sm font-medium'>
                            At Mandrake Bioworks, we're changing the way crops are designed.
                            By fusing AI & Omics, we can unlock plants to their full potential - making
                            them stronger, higher yielding, more nutritious.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero