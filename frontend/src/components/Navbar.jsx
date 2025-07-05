import React from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { TiThMenu } from 'react-icons/ti'

const Navbar = () => {
    return (
        <>
            <nav className='h-[65px] w-full text-white font-primary flex items-center justify-between px-7 '>
                <div className='flex items-center'>
                    <img src="./Devlink-Logo.png" className='h-[30px]' />
                    <h1 className='text-xl'>EVLINK</h1>
                </div>
                <div className='md:flex hidden items-center gap-18'>
                    <ul className='flex gap-7 text-[14.5px] font-[500] font-secondary text-gray-300'>
                        <li className="cursor-pointer relative px-1 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#bd3bbd] after:to-pink-500 after:rounded-full after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:text-white after:duration-300"> Home</li>
                        <li className="cursor-pointer relative px-1 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#bd3bbd] after:to-pink-500  after:rounded-full after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:text-white after:duration-300"> Services</li>
                        <li className="cursor-pointer relative px-1 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#bd3bbd] after:to-pink-500  after:rounded-full after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:text-white after:duration-300"> Project</li>
                        <li className="cursor-pointer relative px-1 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#bd3bbd] after:to-pink-500  after:rounded-full after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:text-white after:duration-300"> About Us</li>
                    </ul>
                    <button className="h-[38px] w-[130px] cursor-pointer rounded font-semibold text-[14px] font-secondary text-white bg-gradient-to-r from-[#bd3bbd] to-pink-500  hover:from-pink-500 hover:to-[#bd3bbd] transition-colors duration-500 ease-in-out shadow-lg">Get Started</button>
                </div>
                <div className='md:hidden block'>
                    <RiMenu4Fill className='text-2xl' />
                </div>
            </nav>
        </>
    )
}

export default Navbar
