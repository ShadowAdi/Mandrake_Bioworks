import React from 'react'
import bgImage from "/Gradient.jpg";


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
            <h1 style={{fontFamily:"'Afacad Flux', serif"}} className='text-xl md:text-4xl  lg:text-5xl  text-center font-bold bg-[linear-gradient(to_right,_#e0f4eb,_#b8e8e5,_#90dcd7,_#90dadc)] bg-clip-text text-transparent'>
                At Mandrake, we’re re-inventing crop
                development from the ground up
            </h1>
            <div className='w-full md:w-[90%] lg:w-[75%] space-y-8 flex flex-col gap-6 items-center justify-center mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center w-full gap-8'>
                    <div className='flex flex-col gap-1 items-center md:items-start text-center md:text-left flex-1 justify-center'>
                        <h1 className='text-lg md:text-2xl text-white font-semibold px-4 md:px-0'>
                            AI-Led Genetic Prospecting
                        </h1>
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