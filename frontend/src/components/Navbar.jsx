import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import Services from './Services'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Mobile_Nav from './Mobile_Nav'

const Navbar = ({ isMenuOpen, toggleMenu, animateMenu }) => {
    const [isServiceHover, setIsServiceHover] = useState(false)
    return (
        <>
            <nav className='h-[70px] w-full shadow-xs border-b border-gray-200 flex items-center justify-between sm:px-14 px-5 font-primary'>
                {/* This is the logo part */}
                <div className='flex items-center justify-center gap-2'>
                    <div className='bg-black rounded'>
                        <img src="devlink.png" alt="devlink_logo" className='h-[25px] w-[25px]' />
                    </div>
                    <h1><span className='text-[1.29rem] font-[500] tracking-wide'>Devlink</span> <span className='text-[1.29rem] ml-1 font-normal text-gray-500 sm:inline-block hidden'>|</span> <span className='text-[0.95rem] font-normal text-gray-500 sm:inline-block hidden'> Only React Apps</span></h1>
                </div>
                {/* This is the logo part */}

                {/* This is desktop navigations */}
                <div className='h-full flex-1 lg:flex hidden items-center justify-end text-gray-600'>
                    <ul className='flex gap-2 text-[14.5px] relative navRes'>
                        <li className='cursor-pointer hover:bg-gray-50 py-1 px-3 rounded-full'>Docs</li>
                        <li onMouseEnter={() => setIsServiceHover(true)} onMouseLeave={() => setIsServiceHover(false)} className='cursor-pointer hover:bg-gray-50 py-1 px-2 rounded-full flex items-center gap-1 relative'>
                            <span>Services </span>
                            <span><MdOutlineArrowDropDown /></span>
                        </li>
                        {isServiceHover && <Services setIsServiceHover={setIsServiceHover} />}
                        <li className='cursor-pointer hover:bg-gray-50 py-1 px-3 rounded-full'>Community</li>
                        <li className='cursor-pointer hover:bg-gray-50 py-1 px-3 rounded-full'>Clients</li>
                    </ul>
                    <button className='bg-black text-white px-8 py-2 ml-16 rounded text-[15px] cursor-pointer hover:bg-[#363333]'>Hire a developer</button>
                </div>
                {/* This is desktop navigations */}

                {/* This is mobile navigations */}
                <HiOutlineMenuAlt4 onClick={toggleMenu} className='text-2xl lg:hidden block' />
                {/* This is mobile navigations */}
            </nav>

            {isMenuOpen && <section className={`h-[calc(100vh-70px)] w-full relative`}>
                <div
                    className={`absolute top-0 left-0 h-full w-full bg-white shadow-lg z-40 
                        transform transition-transform duration-300 ease-in-out 
                        ${animateMenu ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <Mobile_Nav />
                </div>

            </section>}
        </>
    )
}

export default Navbar
