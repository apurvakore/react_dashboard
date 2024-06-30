import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const SalesOverview = () => {
  return (
    <div className='p-8 bg-white h-[100%] rounded-xl'>
        <div className="flex flex-col">
            <div className="text part">
                <h1 className='font-semibold text-[#344767] mb-3'>Sales Overview</h1>
                <div className="flex space-x-2">
                    <div className="icon flex items-center text-[#9CDF47]"><FaArrowUp /></div>
                    <p className='text-[#727E96]'><span className='font-semibold'>4% more</span> in 2021</p>
                </div>
            </div>
            <div className="image-part py-5 ">
                <img className='w-[100%]' src="https://i.ibb.co/qRfBYYt/download-2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default SalesOverview