import React from 'react'
import { FaSquareWebAwesome } from 'react-icons/fa6'
import { ImLab } from 'react-icons/im'
import { SiAndroidstudio, SiMockserviceworker } from 'react-icons/si'

const Services = ({setIsServiceHover}) => {
    return (
        <>
            <section onMouseEnter={() => setIsServiceHover(true)} onMouseLeave={() => setIsServiceHover(false)}  className='h-[380px] w-[350px] border shadow-xs border-gray-200 rounded bg-white absolute top-[105%] left-12 overShadow p-2 flex flex-col items-center justify-center gap-3 z-50 font-primary'>
                <div className='h-[80px] w-full flex items-center hover:bg-gray-100 rounded cursor-pointer'>
                    <div className='h-full w-[60px] text-4xl flex ps-2.5 py-2'>
                        <FaSquareWebAwesome />
                    </div>
                    <div className='h-full w-[calc(100%-60px)] py-1.5 px-2'>
                        <h1 className='text-[17px] text-gray-800 font-semibold'>Premium Website</h1>
                        <p className='text-[13px] font-[400]'>We provides the premium web development services & managment </p>
                    </div>
                </div>
                <div className='h-[80px] w-full flex items-center hover:bg-gray-100 rounded cursor-pointer'>
                    <div className='h-full w-[60px] text-2xl flex ps-2.5 py-4'>
                        <ImLab />
                    </div>
                    <div className='h-full w-[calc(100%-60px)] py-1.5 px-2'>
                        <h1 className='text-[17px] text-gray-800 font-semibold'>Desktop App</h1>
                        <p className='text-[13px] font-[400]'>We provides the best quality react-native electron based desktop application  </p>
                    </div>
                </div>
                <div className='h-[80px] w-full flex items-center hover:bg-gray-100 rounded cursor-pointer'>
                    <div className='h-full w-[60px] text-4xl flex ps-2.5 py-2'>
                        <SiAndroidstudio />
                    </div>
                    <div className='h-full w-[calc(100%-60px)] py-1.5 px-2'>
                        <h1 className='text-[17px] text-gray-800 font-semibold'>Android Apps - Native</h1>
                        <p className='text-[13px] font-[400]'>We provides the premium react-native development services & managment </p>
                    </div>
                </div>
                <div className='h-[80px] w-full flex items-center hover:bg-gray-100 rounded cursor-pointer'>
                    <div className='h-full w-[60px] text-4xl flex ps-2.5 py-2'>
                        <SiMockserviceworker />
                    </div>
                    <div className='h-full w-[calc(100%-60px)] py-1.5 px-2'>
                        <h1 className='text-[17px] text-gray-800 font-semibold'>School ERP</h1>
                        <p className='text-[13px] font-[400] ps-2'>Budget friendly school managment stystem for your schools. </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
