import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";

export const Middle = () => {
  return (
      <>
          <div className='flex justify-start ml-52'>
            <div className=' rounded-lg bg-[#FFFFFF] p-2 flex w-[660px]'>
                <div className='w-[60%] flex flex-col justify-between pt-3 pl-2'>
                      <div className='pb-5'>
                        <p className='text-[16px] text-gray-500 font-semibold pb-1 '>Build by developers</p>
                        <p className='text-[20px] text-gray-700 font-bold pb-1'>Soft UI Dashboard</p>
                        <p className='text-[16px] text-[#78839A] w-[80%] '>From colors, cards, typography to complex elements, you will find the full documentation.</p>
                    </div>
                    <div>
                        <button className='text-[16px] text-gray-500 font-semibold flex space-x-1 '>
                            <div>
                                Read More
                            </div>
                            <div className='pt-[2px]'>
                                <FaArrowRight />
                            </div>
                        </button> 
                    </div>
                </div>
                <div className='w-[40%] p-[3px] h-[220px] rounded-lg bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] flex justify-center items-center'>
                    <div> <img className='w-28'  src="https://www.learnmarketingtools.net/static/img/market-launch.png" alt="rocket" /></div>
                </div>
            </div>
            </div>
    </>
  )
}
