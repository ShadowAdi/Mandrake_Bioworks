import React from 'react';
import AnimatedWhiteText from './AnimatedWhiteText';
import Section2Part1 from './Section2-Part1';
import Section2Part2 from './Section2-Part2';

const Section2 = () => {
    return (
        <section
            className="relative flex flex-col items-center w-full min-h-[200vh] py-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
        >
            <Section2Part1 />
            <Section2Part2 />
            <AnimatedWhiteText
                text="We think it's time Agriculture catches up."
                className="text-heading-sm md:text-heading-md lg:text-heading-lg xl:text-heading-xl my-4 sm:my-6 lg:my-8 px-4 text-white font-semibold md:font-bold text-center"
            />
        </section>
    );
};

export default Section2;