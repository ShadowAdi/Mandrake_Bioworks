import React from 'react'
import Header from './Header'
import bgImage from "/Gradient.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
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
                    <h1 style={{ fontFamily: "'Afacad Flux', serif" }} className='text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center '>
                        WHAT IF YOU CAN DESIGN CROPS LIKE YOU DESIGN SOFTWARE
                    </h1>
                    <div className='h-0.5 bg-white w-2/4' />
                    <div className="w-full md:w-[65%] mx-auto">
                        <p className='text-center text-white text-sm font-medium'>
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