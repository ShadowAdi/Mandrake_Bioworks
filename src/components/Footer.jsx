import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <section
            className="flex flex-col items-center  w-full py-0 pb-4 md:py-12    justify-center "
        >
            <div className='w-[90%] md:w-[60%]  flex py-2 md:py-8 flex-col space-y-0 md:items-start items-center  mx-auto  justify-center '>
                <div className="flex md:items-start md:justify-start items-center justify-center w-full ">
                    <img className='h-32 w-32 object-contain object-bottom filter invert'
                        src='/MandrakeLogo.png'
                        alt='Mandrake' />
                </div>
                <div className="flex flex-col md:flex-row w-full py-6  items-center  px-4 ">
                    <div className="flex flex-col items-center md:items-start flex-1 gap-6 md:gap-3 ">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                            <div className="p-1 bg-white rounded-full">
                                <FaLocationDot className="text-black h-3 w-3" />
                            </div>
                            <p className="text-[10px] md:text-sm opacity-90 text-white text-center md:text-left">
                                Mandrake Bioworks, Aspire Coworks, <br />
                                17, 7th Main Rd, 2nd Stage, Indiranagar, <br />
                                Bengaluru, Karnataka 560038
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                            <div className="p-1 bg-white rounded-full">
                                <MdEmail className="text-black h-3 w-3" />
                            </div>
                            <p className="text-[10px] md:text-sm opacity-90 text-white text-center md:text-left">
                                hello@Mandrakebio.com
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center md:justify-end gap-10 flex-1  p-6 rounded-lg">
                        <div className="flex flex-col flex-1 items-center md:items-start gap-3">
                            <h1 className="text-xs md:text-lg text-white font-semibold">
                                About Us
                            </h1>
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <span className="text-[10px] md:text-sm opacity-90 text-white font-normal">
                                    About
                                </span>
                                <span className="text-[10px]  md:text-sm opacity-90 text-white font-normal">
                                    Portfolio
                                </span>
                                <span className="text-[10px]  md:text-sm opacity-90 text-white font-normal">
                                    Team
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col items-center md:items-start gap-3">
                        <h1 className="text-xs md:text-lg text-white font-semibold">
                        Support
                            </h1>
                            <div className="flex flex-col items-center md:items-start gap-2">
                            <span className="text-[10px] md:text-sm opacity-90 text-white font-normal">

                                    FAQ
                                </span>
                                <span className="text-[10px] md:text-sm opacity-90 text-white font-normal">

                                    How It Works
                                </span>
                                <span className="text-[10px] md:text-sm opacity-90 text-white font-normal">

                                    Privacy
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[90%] md:w-2/5 flex flex-col items-center gap-4 '>
                <div className="flex flex-row items-center justify-center space-x-4">
                    <div className='p-2 items-center overflow-hidden rounded-full flex justify-center bg-white cursor-pointer'>
                        <img src='/linkedIn.jpg' alt='No Image' className='lg:h-16 h-4 w-4 md:w-8 md:h-8 lg:w-16 object-contain' />
                    </div>
                    <div className='p-2 items-center overflow-hidden flex rounded-full justify-center bg-white cursor-pointer'>
                        <img src='/youtubeLogo.webp' alt='No Image' className='md:h-16 w-8 h-8 md:w-16 object-contain' />
                    </div>
                </div>
                <p className='text-[10px] md:text-base  text-center text-white opacity-90'>
                    © Copyright 2025, Mandrake Bioworks All Rights Reserved
                </p>
            </div>
        </section>
    )
}

export default Footer