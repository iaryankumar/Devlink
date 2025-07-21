import React from 'react'
import { IoLogoGithub } from 'react-icons/io'

const Hero = () => {
  return (
    <>
      <section className='h-max py-12 w-full flex items-center justify-center font-primary hero-container'>

        {/* Left Side div */}
        <div className='h-full w-1/2 hero-child flex flex-col justify-center px-10 text-left'>
          <h1 className='text-[3.2rem] font-bold leading-15 lDfonts'>From Visuals to Powerful React Applications.</h1>
          <p className='mt-5 text-[15px] text-gray-600'>We turn your designs into fully functional, scalable React apps. No bloated code — just clean, component-based architecture that brings your ideas to life.</p>
          <div className='h-[100px] w-full flex items-center'>
            <button className='text-[13.5px] flex items-center gap-2 border border-gray-300 rounded px-6 py-2 text-gray-500 cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-75'>
              <span><IoLogoGithub className='text-[17px]' /></span>
              <span>Work Demo</span>
            </button>
          </div>
        </div>
        {/* Left Side div */}

        {/* right Side div */}
        <div className='h-full w-1/2 hero-child flex flex-col items-center justify-center'>
          <div className='h-[230px] lg:w-[550px] w-[95%] flex items-center p-1 gap-4 relative'>

            <div className='h-full w-1/2 border-2 border-gray-300 stylishDiv overflow-hidden'>
              <img src="https://media.istockphoto.com/id/1221204650/photo/business-can-not-wait.jpg?s=612x612&w=0&k=20&c=1ZJn_BWN-OqIlnjohELZnsUlaXsw9LsKHkUDS8mHfhY=" className='h-full w-full object-cover' />
            </div>

            {/* <div className='h-[60px] w-[60px] absolute top-5 left-20 bg-black rounded-full'></div> */}

            <div className='h-full w-1/2 bg-gray-100 rounded sm:p-6 p-4'>
              <h1 className='text-5xl font-bold tracking-wide'>100+</h1>
              <p className='ml-1 mt-1.5'>Projects Done</p>
              <p className='ml-1 sm:text-[14px] text-[14px] leading-5 mt-2 font-light'>We're ready to take on exciting projects</p>
            </div>

          </div>
          <div className='sm:h-[180px] h-[200px] lg:w-[550px] w-[95%] border mt-3 rounded-2xl bg-black flex text-white px-3'>
            <div className='h-full flex-1 px-4 py-6'>
              <h1 className='text-xl'>Grow your busisness online & get more intrection</h1>
              <button className='h-[35px] w-[150px] bg-white text-black rounded mt-5'>Contact Us</button>
            </div>
            <div className='h-full w-max  flex items-end justify-end gap-5 overflow-hidden'>
              <div className='h-[40%] w-[40px] bg-green-600 rounded-t'></div>
              <div className='h-[70%] w-[40px] bg-green-600 rounded-t'></div>
              <div className='h-[90%] w-[40px] bg-green-600 rounded-t'></div>
            </div>
          </div>
        </div>
        {/* right Side div */}

      </section>

    </>
  )
}

export default Hero
