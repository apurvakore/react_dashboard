import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { FaShoppingCart } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { IoMdKey } from "react-icons/io";
import { BiSolidDollarCircle } from "react-icons/bi";

export const OrderReview = () => {
  return (
      <div className=' rounded-xl flex flex-col my-7 p-4 bg-white h-[100%]'>
          <h6 className='text-[#344767] font-bold '>Orders overview</h6> 
          <div className="flex-col space-y-6 ">
            <div className="">
                <div className='flex space-x-1 pt-4'>
                        <FaArrowUp className='mt-1 text-[#82D616]' />
                    <span className='text-[#67748E] font-semibold'>24%</span>
                    <span className='text-[#67748E]'>this month</span>
                </div>
            </div>
            <div className="">
                <div className='mt-4 flex space-x-4'>
                    <div className='mt-1'>
                    <FaBell className='text-[#82D616]' />
                    </div>
                    <span className='text-[#344767] font-semibold'>$2400, Design changes</span>     
                </div>
                <div className='pl-[8px]' >
                    <h6 className='text-[#79849B] font-semibold text-xs border border-l-2 border-t-0 border-b-0 border-r-0 pl-[24px] border-[#DEE2E6]'>22 DEC 7:20 PM</h6>
                </div>
            </div>

            <div className="">
                <div className='mt-4 flex space-x-4'>
                    <div className='mt-1'>
                    <MdDelete className='text-[#F4343E] text-lg' />
                    </div>
                    <span className='text-[#344767] font-semibold'>New order #1832412</span>     
                </div>
                <div className='pl-[8px]' >
                    <h6 className='text-[#79849B] font-semibold text-xs border border-l-2 border-t-0 border-b-0 border-r-0  pl-[24px] border-[#DEE2E6]'>21 DEC 11 PM</h6>
                </div>
            </div>
            <div className="">
                <div className='mt-4 flex space-x-4'>
                    <div className='mt-1'>
                    <FaShoppingCart  className='text-[#1F61F1] text-lg'/>
                    </div>
                    <span className='text-[#344767] font-semibold'>Server payments for April</span>     
                </div>
                <div className='pl-[8px]' >
                    <h6 className='text-[#79849B] font-semibold text-xs border border-l-2 border-t-0 border-b-0 border-r-0 pl-[25px] border-[#DEE2E6]'>21 DEC 9:34 PM</h6>
                </div>
            </div>

            <div className="">
                <div className='mt-4 flex space-x-4'>
                    <div className='mt-1'>
                    <CiCreditCard1 className='text-[#F89035] text-lg' />
                    </div>
                    <span className='text-[#344767] font-semibold'>New card added for order #4395133</span>     
                </div>
                <div className='pl-[8px]' >
                    <h6 className='text-[#79849B] font-semibold text-xs border border-l-2 border-t-0 border-b-0 border-r-0  pl-[25px] border-[#DEE2E6]'>20 DEC 2:20 AM</h6>
                </div>
            </div>
            <div className="">
                <div className='mt-4 flex space-x-4'>
                    <div className='mt-1'>
                    <IoMdKey className='text-[#B915A6] text-xl'/>
                    </div>
                    <span className='text-[#344767] font-semibold'>New card added for order #4395133</span>     
                </div>
                <div className='pl-[8px]' >
                    <h6 className='text-[#79849B] font-semibold text-xs border border-l-2 border-t-0 border-b-0 border-r-0   pl-[28px] border-[#DEE2E6]'>18 DEC 4:54 AM</h6>
                </div>
            </div>
            <div className="">
                <div className='mt-4 flex space-x-4'>
                    <div className='mt-1'>
                    <BiSolidDollarCircle className='text-lg' />

                    </div>
                    <span className='text-[#344767] font-semibold'>New order #9583120s</span>     
                </div>
                <div className='pl-[8px]' >
                    <h6 className='text-[#79849B] font-semibold text-xs border border-l-2 border-t-0 border-b-0 border-r-0  pl-[25px] border-[#DEE2E6]'>17 DEC</h6>
                </div>
            </div>

          </div>
    </div>
  )
}
