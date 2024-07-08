import React from 'react'
import { BiSolidBank } from "react-icons/bi";
import { FaPaypal } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";




export const CreditCard = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[50%] mr-6 '>
                    <img src="https://i.ibb.co/xFzCSX8/Screenshot-2024-07-08-165432.png" className='rounded-xl h-[100%] ' alt="" />
                </div>
                <div className='w-[25%]  bg-white flex flex-col  items-center   rounded-xl mr-6'>
                    <div className='w-fit p-3 xl:p-[16px]  h-fit rounded-[9px] bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] my-4'>
                            <div className='flex items-center justify-center'><BiSolidBank className='text-white text-[28px]' /></div>
                        </div>
                    <span className='text-[#344767] font-semibold mb-2'>Salary</span>
                    <span className='text-xs text-[#8A94A8] font-semibold mb-4'>Belong Interactive</span>
                 
                    <span className='text-[#344767] font-semibold border border-t-1 border-l-0 border-b-0 border-r-0 py-4 text-xl'>+$2000</span>
                </div>
                <div className='w-[25%]  bg-white flex flex-col  items-center   rounded-xl '>
                    <div className='w-fit p-3 xl:p-[16px]  h-fit rounded-[9px] bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] my-4'>
                            <div className='flex items-center justify-center'><FaPaypal className='text-white text-[28px]' /></div>
                        </div>
                    <span className='text-[#344767] font-semibold mb-2'>Paypal</span>
                    <span className='text-xs text-[#8A94A8] font-semibold mb-4'>Freelance Payment</span>
                 
                    <span className='text-[#344767] font-semibold border border-t-1 border-l-0 border-b-0 border-r-0 py-4 text-xl'>$455.00</span>
                </div>
            </div>

            <div className='py-2 mt-6  bg-white rounded-xl'>
                <div className='flex justify-between my-4 mx-3 '>
                    <span className='text-[#344767] font-semibold text-[16px]'>Payment Method</span>
                    <div className='bg-gradient-to-br from-[#343A63] to-[#1F243D] py-[12px] px-[20px] rounded-lg  '>
                        <div className='flex space-x-2 '>
                            <FaPlus className='text-white text-sm' />
                            <span className='text-xs font-bold text-white'>  ADD NEW CARD</span>
                        </div>
                      
                    </div>
                </div>
                <div className='mx-3 mb-4 flex'>
                    <div className='border flex justify-between items-center  py-6 w-[50%] rounded-xl mr-4'>
                        <img className='h-[26px] mx-3' src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png" alt="" />
                        <div className='text-[#344767] font-semibold'>****  ****  ****  7852</div>
                        <div className="mx-3">
                            <MdModeEdit className='text-[20px] text-[#344767]' />
                        </div>
                    </div>
                    <div className='border flex  justify-between items-center  py-6 w-[50%] rounded-xl'>
                        <img className='h-[26px] mx-3' src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/visa.71c0d5e9e2aaee42e4c3.png" alt="" />
                        <div className='text-[#344767] font-semibold'>****  ****  ****  5248</div>
                        <div className="mx-3">
                            <MdModeEdit className='text-[20px] text-[#344767]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
