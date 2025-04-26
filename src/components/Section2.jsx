import React from 'react'
import scientistImage from "/Scientist.png";


const Section2 = () => {
    return (
        <section
            className="flex flex-col items-center  w-full  mx-auto  justify-around relative py-2 md:py-8 gap-2 md:gap-12 "
        >
            <div className='md:w-4/5 w-[90%]  flex flex-col items-center mx-auto space-y-8  justify-around py-4 md:py-16'>
                <h1 style={{fontFamily:"'Afacad Flux', serif"}} className="text-3xl md:text-4xl  lg:text-5xl font-bold text-center bg-[linear-gradient(to_right,_#e0f4eb,_#b8e8e5,_#90dcd7,_#90dadc)] bg-clip-text text-transparent">
                    AGRICULTURE IS FALLING BEHIND
                </h1>

                <div className='flex flex-col'>
                    <h3 style={{fontFamily:"'Afacad Flux', serif"}} className='text-xl md:text-3xl lg:text-4xl font-semibold text-white text-center'>Decade-Long Timelines.</h3>
                    <h3 style={{fontFamily:"'Afacad Flux', serif"}} className='text-xl md:text-3xl lg:text-4xl font-semibold text-white text-center'>Millions in Development Costs.</h3>
                    <h3 style={{fontFamily:"'Afacad Flux', serif"}} className='text-xl md:text-3xl lg:text-4xl font-semibold text-white text-center'>Just. One. Trait.</h3>
                </div>
                <div className='flex flex-col space-y-4 items-center w-full md:w-[80%] lg:w-[60%] justify-center'>
                    <p className='text-white text-xs md:text-base lg:text-lg text-center'>
                        Currently, developing new plants means guesswork & a painfully slow and prohibitively expensive process. This inefficiency leaves countless crop improvements
                        undiscovered, severely constraining agricultural innovation when we need it most .
                    </p>
                    <p className='text-white text-xs md:text-base lg:text-lg text-center'>
                        While agriculture remains fundamental to humanity's survival, it's trapped
                        in outdated breeding methods that miss transformative opportunities.
                    </p>
                </div>
            </div>
            <div className='md:w-4/5 w-[90%] flex pb-3 md:pb-8 flex-col items-center  mx-auto space-y-8  justify-around py-4 md:py-16'>
                <h1 style={{fontFamily:"'Afacad Flux', serif"}} className='text-2xl md:text-4xl  lg:text-5xl  uppercase bg-[linear-gradient(to_right,_#e0f4eb,_#b8e8e5,_#90dcd7,_#90dadc)] bg-clip-text text-transparent font-bold text-center'>
                    What If Agriculture Stole a Page <br /> from Pharma's Playbook?
                </h1>
                <img src='/Scientist.png' className='object-contain h-full w-full' />
                <div className='flex flex-col space-y-9 items-center w-full justify-center'>
                    <p className="text-white  w-full md:w-[90%]  text-xs md:text-sm lg:text-base text-center">
                        Industries like pharmaceuticals and materials science have revolutionized their  innovation cycles by integrating AI-driven discovery with automated lab workflows. The result? Dramatically reduced costs, accelerated timelines, and entirely new realms of possibility..
                    </p>
                    <h1 style={{fontFamily:"'Afacad Flux', serif"}} className='text-sm md:text-4xl  lg:text-5xl   text-white font-semibold md:font-bold text-center'>
                        We think it's time Agriculture catches up.
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Section2