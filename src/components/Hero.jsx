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
            className="flex flex-col items-center pb-5   w-full py-5 mx-auto min-h-screen justify-center relative"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat"
            }}
        >
            <Header />
            <div className='w-[90%] md:w-4/5 pb-7 flex flex-col justify-between items-start h-full mx-auto flex-1'>
                <div className="flex-1  h-screen flex flex-col items-center justify-center space-y-3 ">
                    <div ref={textWrapperRef} className="overflow-hidden w-[95%] md:w-[75%]">
                        <h1
                            ref={textRef}
                            style={{ fontFamily: "'Afacad Flux', serif" }}
                            className="
                              text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl
                            uppercase font-bold text-center text-white  
                          "
                        >
                            WHAT IF YOU CAN DESIGN CROPS LIKE YOU DESIGN SOFTWARE
                        </h1>
                    </div>

                    <div ref={underlineRef} className='h-0.5 bg-white w-3/4 md:w-2/4' />
                    <div className="w-[90%] md:w-[68%] mx-auto overflow-hidden">
                        <p
                            ref={paraRef}
                            className="
    text-[10px]  md:text-sm lg:text-base xl:text-xl 2xl:text-3xl
    text-center text-white font-medium
  "
                        >
                            At Mandrake Bioworks, we're changing the way crops are designed.
                            By fusing AI & Omics, we can unlock plants to their full potential —
                            making them stronger, higher yielding, more nutritious.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero