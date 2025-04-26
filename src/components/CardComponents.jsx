import React from 'react'

const CardComponents = () => {
    return (
        <div className='flex flex-col cursor-pointer flex-1 items-center lg:items-start  gap-3 xl:gap-5 relative'>
            <span className='text-xs md:text-sm text-white font-medium text-center lg:text-left'>
                Seed companies
            </span>
            <h1 style={{fontFamily:"'Afacad Flux', serif"}} className='text-lg md:text-xl lg:text-2xl font-bold text-white'>
                Supercharge
                your Elite Varieties
            </h1>
            <p className='text-center lg:text-left text-white text-sm  opacity-90 w-full xl:w-[80%]'>
                Mandrake Bioworks accelerates your
                breeding programs— identifying,
                engineering, and testing valuable traits
                with unprecedented speed. Enhance
                your competitive advantage and
                slash time-to-market with our
                breakthrough platform.
            </p>
            <div className="w-full flex items-center lg:items-start justify-center lg:justify-start">
                <button className='px-4 lg:px-7 py-2 lg:py-3 rounded-full bg-white  hover:opacity-90 flex items-center justify-center '>
                    <span className='text-xs sm:text-sm lg:text-base text-black font-medium'>
                        Get In Touch
                    </span>

                </button>
            </div>
        </div>
    )
}

export default CardComponents