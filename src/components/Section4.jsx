import React from 'react'

const Section4 = () => {
    return (
        <section
            className="flex flex-col items-center  w-full  mx-auto  justify-center relative  py-4 md:py-16 space-y-0"
        >
            <div className='w-[90%] md:w-4/5 flex pt-4 md:pt-14 pb-8 flex-col items-center  mx-auto space-y-3 md:space-y-12  justify-around'>
                <h1 style={{fontFamily:"'Afacad Flux', serif"}} className='text-2xl md:text-4xl  lg:text-5xl  uppercase  font-bold text-center bg-[linear-gradient(to_right,_#e0f4eb,_#b8e8e5,_#90dcd7,_#90dadc)] bg-clip-text text-transparent'>
                    How are we Different?
                </h1>
                <div className='object-contain w-full h-80 items-center flex justify-center'>
                    <img src='/Arrow.png' className='object-contain h-full w-full' />
                </div>
                <p className="text-white text-base font-semibold  md:text-2xl  xl:text-3xl text-center">
                    We're unlocking the full potential of crops 
                    transforming agriculture from an extractive 
                    industry into one that's regenerative,
                    productive, and sustainable.
                </p>

            </div>
        </section>
    )
}

export default Section4