import React from 'react'
import AnimatedWhiteText from './AnimatedWhiteText';
import Section2Part1 from './Section2-Part1';
import Section2Part2 from './Section2-Part2';


const Section2 = () => {
    return (
        <>
            <section
                className="flex flex-col items-center  w-full  mx-auto  justify-around relative py-2 md:py-4 gap-2  pb-10 md:gap-8    min-h-screen"
            >

                <Section2Part1 />
                <Section2Part2 />
                <AnimatedWhiteText text={"We think it's time Agriculture catches up."} className={'text-subheading my-0  px-4 text-white font-semibold md:font-bold text-center'} />
            </section>

        </>
    )
}

export default Section2