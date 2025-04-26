import React from 'react'

const Section9 = () => {
    return (
        <section
            className="flex flex-col  items-center  w-full  mx-auto   justify-around relative  py-4  md:py-16 pb-2 md:pb-10 "
        >
            <div className='w-[90%] md:w-4/5 flex pb-2 flex-col items-center gap-20 mx-auto space-y-1 md:space-y-12 justify-center  md:justify-around'>
            <div className='w-full h-auto   '>
                <img src='/Gene.jpg' className='object-contain  h-full w-full' />
            </div>
                <div className='flex flex-col space-y-2 md:space-y-7 items-center w-[90%] md:w-[70%] justify-center'>
                    <h1 style={{fontFamily:"'Afacad Flux', serif"}} className='lg:text-4xl md:text-3xl text-2xl xl:text-5xl  uppercase text-white font-bold text-center'>
                        Building the Plant Design Factory
                        of the Future
                    </h1>
                    <p className="text-white text-sm md:text-xl text-center">
                        Whether you're interested in joining our team, partnering with us,
                        or simply curious to learn more about our work—let's connect.
                    </p>
                    <button className='px-6 md:px-14 py-3 rounded-full bg-[#C4E9A2]  hover:opacity-90 flex items-center justify-center '>
                        <span className='text-sm md:text-base text-black font-semibold'>
                            Get In Touch
                        </span>

                    </button>

                </div>
            </div>
        </section>)
}

export default Section9