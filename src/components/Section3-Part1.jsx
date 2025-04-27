import React from 'react'
import bgImage from "/Gradient.jpg";
import AnimatedText from './AnimatedText';
import AnimatedWhiteText from './AnimatedWhiteText';


const Section3Part1 = () => {
    return (
        <section
            className="flex flex-col items-center w-full mx-auto  py-8 px-4 justify-center relative gap-12"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat"
            }}
        >
            <AnimatedText text={"At Mandrake, we’re re-inventing crop development from the ground up"} />

            <div className='w-full md:w-[90%] lg:w-[75%] space-y-8 flex flex-col gap-6 items-center justify-center mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center w-full gap-8'>
                    <div className='flex flex-col gap-1 items-center md:items-start text-center md:text-left flex-1 justify-center'>
                        <AnimatedWhiteText text={"AI-Led Genetic Prospecting"} className={'text-lg md:text-2xl text-white font-semibold px-4 md:px-0'} />

                        <p className='text-xs sm:text-sm text-white leading-6 max-w-md px-4 md:px-0'>
                            Cutting-edge AI algorithms quickly analyze vast Omics datasets, pinpointing genes linked to
                            resilience, nutrition, yield, and adaptability.
                        </p>
                    </div>

                    <div className='flex-1 flex items-center justify-center h-32 sm:h-56 md:h-64 w-full mt-6 md:mt-0'>
                        <img
                            className='h-full w-full object-contain'
                            alt='AI Genetic Prospecting Visualization'
                            src='/Placeholder.jpg'
                        />
                    </div>
                </div>
            </div>

        </section >)
}

export default Section3Part1