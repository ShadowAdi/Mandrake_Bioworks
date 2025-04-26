import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Header = () => {
    const gsap=useGSAP({})
    return (
        <header className='flex w-full z-[100] justify-between items-start'>
            <div className="flex flex-col items-start space-y-0.5">
                <div className="h-24 w-24 overflow-hidden flex items-start justify-start">
                    <img
                        className='object-contain object-top  h-full w-full filter invert'
                        src='/MandrakeBlackLogoCropped.png'
                        alt='Mandrake'
                    />
                </div>
            </div>
            <button className='border border-white px-3   rounded-full flex items-center justify-center  md:px-6 py-2 '>
                <span className='text-sm md:text-base text-white'>
                    Get In Touch
                </span>
            </button>
        </header>
    )
}

export default Header