import React from 'react'
import CardComponents from './CardComponents'

const Section6 = () => {
    return (
        <section
            className="flex flex-col items-center  w-full  mx-auto   justify-center relative  py-4 md:py-16 space-y-8"
        >
            <div className='w-[90%] md:w-4/5 flex pt-4 md:pt-14 pb-8 flex-col items-center  mx-auto space-y-12  justify-around'>
                <h1 style={{fontFamily:"'Afacad Flux', serif"}} className='text-3xl md:text-4xl  lg:text-5xl  uppercase bg-[linear-gradient(to_right,_#e0f4eb,_#b8e8e5,_#90dcd7,_#90dadc)] bg-clip-text text-transparent font-bold text-center'>
                    Let’s unlock Nature’s Potential
                </h1>
                <div className='w-full flex   gap-10 lg:flex-row flex-col   flex-wrap  justify-center items-center  '>
                    <CardComponents />
                    <CardComponents />
                    <CardComponents />
                </div>

            </div>
        </section>
    )
}

export default Section6