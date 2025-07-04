import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <>
            <div className='h-max w-full flex items-center justify-center gap-2'>
                <div class="bg-gradient-to-br from-gray-800 via-black to-black rounded-b-[5px] w-full h-full text-white shadow-lg relative p-0.5 ">
                    <Navbar />
                    <div className='h-[calc(90vh-80px)] w-full text-white mt-2 md:pt-18 flex lg:items-start items-center '>
                        <div className='md:h-[calc(100%-140px)] h-[max] sm:mb-0 mb-16 w-full md:ps-16 sm:px-12 px-7 font-[500] font-primary flex flex-col items-center md:justify-start justify-center '>
                            <h1 className='lg:text-[6rem] sm:text-[4.9rem] text-[3.5rem] sm:leading-20 leading-16 text-center'>We Build <span className='text-teal-500'>Smart Apps</span></h1>
                            <h1 className='lg:text-[5rem] sm:text-[3.5rem] text-[2.5rem] text-center'>& <span className='text-teal-500 text-center'>Modern Webistes</span></h1>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='h-[60vh] w-full relative flex items-center justify-center'>
                <div className=' h-[400px] w-[85%] absolute sm:top-[-140px] top-[-90px]'>
                    <img src="./hero.jpg" className='h-full w-full rounded-2xl object-cover' />
                    <div className='h-full w-full bg-gradient-to-br from-gray-800 via-black to-gray-800 absolute top-0 opacity-60 rounded-2xl'></div>
                </div>
            </div>

        </>
    )
}

export default Hero
