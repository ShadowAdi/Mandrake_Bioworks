import React from 'react'
import CardComponents from './CardComponents'
import AnimatedText from './AnimatedText'

const Section6 = () => {
    return (
        <section
            className="flex flex-col items-center  w-full  mx-auto   justify-center relative  py-4 md:py-16  space-y-8 min-h-screen"
        >
            <div className='w-[90%]  flex pt-4 md:pt-14  pb-8 flex-col items-center  mx-auto space-y-12  justify-around'>
                <AnimatedText text={"Let’s unlock Nature’s Potential"} />
                <div className='w-full flex   gap-10 xl:flex-row flex-col   flex-wrap  justify-center items-center '>
                    <CardComponents />
                    <CardComponents />
                    <CardComponents />
                </div>

            </div>
        </section>
    )
}

export default Section6