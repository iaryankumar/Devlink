import React from 'react'
import Navbar from './Navbar'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Hero = () => {
    return (
        <>
            <div class="bg-gradient-to-br from-gray-800 via-black to-black rounded-b-[5px] w-full h-full text-white shadow-lg relative p-0.5 ">
                <Navbar />
                <div className='min-h-[500px] max-h-[600px] sm:h-[550px] h-[600px] relative'>
                    <div className='h-full w-full flex flex-col items-center justify-center font-[550] font-secondary md:px-3 px-8 text-center'>
                        <h1 className='xl:text-[6.5rem] lg:text-[5.8rem] md:text-[4.5rem] text-[4rem] metallicEffect lg:leading-28 leading-23 textt'>We Build Smart Apps</h1>
                        <h1 className='xl:text-[4.5rem] text-[3rem] metallicEffect textt'>& Modern Wesites</h1>
                    </div>
                    
                </div>
            </div>


        </>
    )
}

export default Hero
