import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaBell } from "react-icons/fa";



export const OrderReview = () => {
  return (
      <div className=' rounded-lg m-7 p-4 bg-white '>
          <h6 className='text-[#344767] font-bold '>Orders overview</h6> 
          <div className='flex space-x-1 pt-4'>
                <FaArrowUp className='mt-1 text-[#82D616]' />
              <span className='text-[#67748E] font-semibold'>24%</span>
              <span className='text-[#67748E]'>this month</span>
          </div>

          <div className='mt-4 flex space-x-4'>
              <div className='mt-1'>
              <FaBell className='text-[#82D616]' />
              </div>
              <span className='text-[#344767] font-semibold'>$2400, Design changes</span>     
          </div>
          <div >
              <h6 className='text-[#79849B] font-semibold text-sm border border-black'>22 DEC 7:20 PM</h6>
          </div>
    </div>
  )
}
