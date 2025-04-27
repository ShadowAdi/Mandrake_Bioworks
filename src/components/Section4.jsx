import React from 'react'
import AnimatedText from './AnimatedText'
import AnimatedWhiteText from './AnimatedWhiteText'

const Section4 = () => {
    return (
        <section
            className="flex flex-col items-center  w-full  mx-auto  justify-center relative  py-4 md:py-16 space-y-0"
        >
            <div className='w-[90%] md:w-4/5 flex pt-4 md:pt-14 pb-8 flex-col items-center  mx-auto space-y-3 md:space-y-12  justify-around'>

                <AnimatedText text={"How are we Different?"} />
                <div className='object-contain w-full h-80 items-center flex justify-center'>
                    <img src='/Arrow.png' className='object-contain h-full w-full' />
                </div>
                <p className="">

                </p>
                <AnimatedWhiteText className={"text-white text-base font-semibold  md:text-2xl  xl:text-3xl text-center"} text={"We're unlocking the full potential of crops transforming agriculture from an extractive industry into one that's regenerative,productive, and sustainable."} />

            </div>
        </section>
    )
}

export default Section4