import React from 'react';
import AnimatedWhiteText from './AnimatedWhiteText';
import Section2Part1 from './Section2-Part1';
import Section2Part2 from './Section2-Part2';

const Section2 = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-between w-full min-h-[200vh]  px-4 py-2  sm:px-6 lg:px-8 xl:px-12 2xl:px-16 "
        >
            <Section2Part1 />
            <Section2Part2 />
           
        </section>
    );
};

export default Section2;