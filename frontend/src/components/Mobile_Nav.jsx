import React from 'react'
import { FaSquareWebAwesome, FaUser } from 'react-icons/fa6'
import { ImLab } from 'react-icons/im'
import { RiCommunityFill } from 'react-icons/ri'
import { SiAndroidstudio, SiGoogledocs, SiMockserviceworker } from 'react-icons/si'

const Mobile_Nav = () => {
    return (
        <>
            <div className='h-full w-full px-5 py-3 font-primary'>
                <ul>
                    <h1 className='font-semibold text-[17px] mb-2'>Home</h1>
                    <li className='flex items-center gap-2 text-gray-800 w-full bg-gray-50 rounded py-3 px-3'><span><SiGoogledocs /></span> <span>Docs</span></li>
                    <li className='mt-2 flex items-center gap-2 text-gray-800 w-full bg-gray-50 rounded py-3 px-3'><span><FaUser /></span> <span>Clients</span></li>
                    <li className='mt-2 flex items-center gap-2 text-gray-800 w-full bg-gray-50 rounded py-3 px-3'><span><RiCommunityFill /></span> <span>Community</span></li>
                </ul>
                <ul>
                    <h1 className='font-semibold text-[17px] mb-2 mt-5'>Products</h1>
                    <li className='flex items-center gap-2 text-gray-800 w-full bg-gray-50 rounded py-3 px-3'><span><FaSquareWebAwesome /></span> <span>Premium Websites</span></li>
                    <li className='mt-2 flex items-center gap-2 text-gray-800 w-full bg-gray-50 rounded py-3 px-3'><span><ImLab /></span> <span>Desktop App (Electron)</span></li>
                    <li className='mt-2 flex items-center gap-2 text-gray-800 w-full bg-gray-50 rounded py-3 px-3'><span><SiAndroidstudio /></span> <span>Android Apps - Native</span></li>
                    <li className='mt-2 flex items-center gap-2 text-gray-800 w-full bg-gray-50 rounded py-3 px-3'><span><SiMockserviceworker /></span> <span>School ERP</span></li>
                </ul>
            </div>
        </>
    )
}

export default Mobile_Nav
