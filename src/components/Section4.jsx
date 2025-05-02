import React, { useRef } from 'react'
import AnimatedText from './AnimatedText'
import AnimatedWhiteText from './AnimatedWhiteText'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import gsap from 'gsap'

const Section4 = () => {
    const paraRef = useRef(null)
    const paraWrapperRef = useRef(null)

    useGSAP(() => {
        const paraTextSplit = new SplitType(paraRef.current, { types: "chars" })

        const tl = gsap.timeline()
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
        });
    }, []);
    return (
        <section
            className="flex flex-col items-center  w-full  mx-auto  justify-center  md:justify-around relative  py-0 md:py-4 space-y-0 min-h-screen"
        >
            <div className='w-[90%] md:w-4/5  flex pt-4 md:pt-6 pb-2 md:pb-2 flex-col items-center  mx-auto space-y-5 md:space-y-6  justify-around gap-4'>
                <AnimatedText text={"How are we Different?"} />
                <div className='object-contain w-full h-40 md:h-60 lg:h-80 items-center flex justify-center'>
                    <img src='/Arrow.png' className='object-contain h-full w-full' />
                </div>
                <div ref={paraWrapperRef} className='flex flex-col space-y-5 items-center w-full md:w-[90%] lg:w-[80%] justify-center'>
                    <p className="
                                text-[10px]  md:text-base lg:text-lg 2xl:text-4xl
                                text-center text-white font-normal w-full md:w-[60%]
                                "
                        ref={paraRef}
                    >
                        We're unlocking the full potential of crops transforming agriculture from an extractive industry into one that's regenerative,productive, and sustainable.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Section4