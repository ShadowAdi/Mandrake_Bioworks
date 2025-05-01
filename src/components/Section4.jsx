import React from 'react'
import AnimatedText from './AnimatedText'
import AnimatedWhiteText from './AnimatedWhiteText'

const Section4 = () => {
    return (
        <section
            className="flex flex-col items-center  w-full  mx-auto  justify-center  md:justify-around relative  py-0 md:py-4 space-y-0 min-h-screen"
        >
            <div className='w-[90%] md:w-4/5  flex pt-4 md:pt-6 pb-2 md:pb-2 flex-col items-center  mx-auto space-y-5 md:space-y-6  justify-around gap-4'>
                <AnimatedText text={"How are we Different?"} />
                <div className='object-contain w-full h-40 md:h-60 lg:h-80 items-center flex justify-center'>
                    <img src='/Arrow.png' className='object-contain h-full w-full' />
                </div>
                <p className="
text-[10px]  md:text-base lg:text-lg 2xl:text-3xl
text-center text-white font-normal w-full md:w-[60%]
">
                    We're unlocking the full potential of crops transforming agriculture from an extractive industry into one that's regenerative,productive, and sustainable.
                </p>
                <AnimatedWhiteText className={"text-white text-base font-semibold  md:text-2xl  xl:text-3xl text-center"} text={""} />
            </div>
        </section>
    )
}

export default Section4