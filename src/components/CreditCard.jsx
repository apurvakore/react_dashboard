import React from 'react'
import { BiSolidBank } from "react-icons/bi";

export const CreditCard = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[50%]'></div>
                <div className='w-[25%]  bg-white flex flex-col justify-center items-center p-8  rounded-lg mr-6'>
                    <div className='w-fit p-3 xl:p-[16px]  h-fit rounded-[9px] bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] mb-4'>
                            <div className='flex items-center justify-center'><BiSolidBank className='text-white text-[28px]' /></div>
                        </div>
                    <span className='text-[#344767] font-semibold mb-2'>Salary</span>
                    <span className='text-xs text-[#9BA3B5] mb-4'>Belong Interactive</span>
                 
                    <span className='text-[#1E2634] font-bold border border-t-2 border-l-0 border-b-0 border-r-0 pt-4'>+$2000</span>
                </div>
                <div className='w-[25%]  bg-white flex flex-col justify-center items-center p-8  rounded-lg'>
                    <div className='w-fit p-3 xl:p-[16px]  h-fit rounded-[9px] bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] mb-4'>
                            <div className='flex items-center justify-center'><BiSolidBank className='text-white text-[28px]' /></div>
                        </div>
                    <span className='text-[#344767] font-semibold mb-2'>Salary</span>
                    <span className='text-xs text-[#9BA3B5] mb-4'>Belong Interactive</span>
                 
                    <span className='text-[#1E2634] font-bold border border-t-2 border-l-0 border-b-0 border-r-0 pt-4'>+$2000</span>
                </div>
            </div>
            <div></div>
        </div>
  )
}
