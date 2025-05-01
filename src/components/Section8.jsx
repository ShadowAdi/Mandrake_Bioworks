import React from 'react'
import AnimatedText from './AnimatedText'

const Section8 = () => {
    return (
        <section
            className="flex flex-col items-center  w-full  mx-auto   justify-center relative   space-y-8"
        >
            <div className='w-[90%] md:w-4/5 flex pt-4 md:pt-14 pb-14 flex-col items-center h-full mx-auto space-y-12  justify-around'>
                <div className='flex flex-col w-[90%] md:w-[60%] space-y-2 md:space-y-6 mx-auto  items-center justify-center'>
                   
                    <AnimatedText text={"OUR Advisors"}/>
                    <h4 className='text-[10px] md:w-full w-[80%] md:text-sm text-white text-center '>
                    We’re guided by Mentors who have spent decades in the Plant Breeding Industry
                    </h4>

                </div>
                <div className='w-[90%] mx-auto md:flex-row flex-col flex items-center justify-between  gap-6 '>
                    <div className='flex flex-col  items-center justify-center gap-y-3'>
                        <img src='https://avatar.iran.liara.run/public' className='h-36 w-36 lg:h-56 lg:w-56 xl:h-64 xl:w-64 object-cover rounded-full' />
                        <div className='flex items-center justify-center flex-col space-y-0 md:space-y-1'>
                        <span className='text-sm md:text-lg font-bold text-white'>
                                Tanay Lohia
                            </span>
                            <span className='text-[10px] md:text-sm font-normal text-white'>
                                Founder
                            </span>
                            <div className='flex items-end space-x-1'>
                                <span className='text-[10px] md:text-base font-medium text-white'>
                                    TanayLohia123
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-y-3'>
                        <img src='https://avatar.iran.liara.run/public' className='h-36 w-36 lg:h-56 lg:w-56 xl:h-64 xl:w-64 object-cover rounded-full' />
                        <div className='flex items-center justify-center flex-col space-y-0 md:space-y-1'>
                            <span className='text-base md:text-lg font-bold text-white'>
                                Tanay Lohia
                            </span>
                            <span className='text-xs md:text-sm font-normal text-white'>
                                Founder
                            </span>
                            <div className='flex items-end space-x-1'>
                                <span className='text-sm md:text-base font-medium text-white'>
                                    TanayLohia123
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-y-3'>
                        <img src='https://avatar.iran.liara.run/public' className='h-36 w-36 lg:h-56 lg:w-56 xl:h-64 xl:w-64 object-cover rounded-full' />
                        <div className='flex items-center justify-center flex-col space-y-0 md:space-y-1'>
                            <span className='text-base md:text-lg font-bold text-white'>
                                Tanay Lohia
                            </span>
                            <span className='text-xs md:text-sm font-normal text-white'>
                                Founder
                            </span>
                            <div className='flex items-end space-x-1'>
                                <span className='text-sm md:text-base font-medium text-white'>
                                    TanayLohia123
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Section8