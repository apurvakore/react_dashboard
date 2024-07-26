import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import { MdKey } from "react-icons/md";
import { FaUser } from 'react-icons/fa';



export const Navbar = () => {
    return (
    <>
        <div className='m-6 bg-white px-2 py-4 rounded-full shadow-lg'>
                <div className='flex justify-between items-center mx-6'>
                    <h3 className='text-[#344767] font-bold text-sm'>Soft UI Dashboard</h3>
                    <div className='flex space-x-6'>
                        <div className='flex space-x-1'>
                        <FaSpinner className='mt-1 text-[#8392AB]'/>
                            <a href="/dashboard" className='text-[#8392AB]'>Dashboard</a>
                        </div>
                        <div className='flex space-x-1'>
                         <FaUser className='mt-1 text-[#8392AB]'/>
                            <a href="/profile" className='text-[#8392AB]'>Profile</a>
                        </div>
                        <div className='flex space-x-1'>
                        <FaUserCircle className='mt-1 text-[#8392AB]'/>
                            <a href="/signup" className='text-[#8392AB]'>Sign Up</a>
                        </div>
                        <div className='flex space-x-1'>
                        <MdKey className='mt-1 text-[#8392AB] text-xl'/>
                            <a href="/signin" className='text-[#8392AB]'>Sign In</a>
                        </div>
                    </div>
                    <div className='bg-[#333A63] px-6 py-1 rounded-3xl'>
                        <button className='text-white font-semibold text-xs'>FREE DOWNLOAD</button>
                    </div>
               </div> 
        </div>    
    </>
  )
}
