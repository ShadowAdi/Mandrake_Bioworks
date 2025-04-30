import React from 'react'
import AnimatedWhiteText from './AnimatedWhiteText'

const Section2Part1 = () => {
    return (
        <div className='md:w-4/5 w-[90%]  min-h-screen flex flex-col items-center mx-auto   gap-2 lg:gap-12 justify-center lg:justify-center  py-4 md:py-16'>
            {/* <AnimatedText  text={""} /> */}
            <h1 style={{ fontFamily: "'Afacad Flux', serif" }} className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl
                uppercase font-bold text-center text-white  break-words">
                Agriculture Is Falling Behind
            </h1>
          
            <div className='flex flex-col'>
                <AnimatedWhiteText
                    className={"text-lg  md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl uppercase font-semibold text-center text-white  break-words"} text={"Decade-Long Timelines."} />
                <AnimatedWhiteText className={"text-base  md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl uppercase font-semibold text-center text-white  break-words"} text={"Millions in Development Costs."} />
                <AnimatedWhiteText className={"text-base  md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl uppercase font-semibold text-center text-white  break-words"} text={"Just. One. Trait."} />

            </div>
            <div className='flex flex-col space-y-2 items-center w-full md:w-[90%] lg:w-[60%] justify-center'>
                <p className="
text-[10px]  md:text-sm lg:text-base xl:text-xl 2xl:text-3xl
text-center text-white font-medium
">
                    Currently, developing new plants means guesswork & a painfully slow and prohibitively expensive process. This inefficiency leaves countless crop improvements
                    undiscovered, severely constraining agricultural innovation when we need it most .
                </p>
                <p className="
text-[10px]  md:text-sm lg:text-base xl:text-xl 2xl:text-3xl
text-center text-white
">
                    While agriculture remains fundamental to humanity's survival, it's trapped
                    in outdated breeding methods that miss transformative opportunities.
                </p>
            </div>
        </div>)
}

export default Section2Part1