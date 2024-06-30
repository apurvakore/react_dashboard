import React from 'react'
import { FaArrowRight } from "react-icons/fa6";;

export const Middle = () => {
  return (
    <>
    <div className='flex space-x-5 bg-[#F3F4F5] '>
      <div className='flex justify-start w-[50%]'>
          <div className=' rounded-lg bg-[#FFFFFF]  flex w-[100%] p-4'>
            <div className='w-[60%] flex flex-col justify-between pt-3 pl-2'>
              <div className='pb-5'>
                  <p className='text-[16px] text-gray-500 font-semibold pb-1 '>Build by developers</p>
                  <p className='text-[20px] text-gray-700 font-bold pb-1'>Soft UI Dashboard</p>
                  <p className='text-[16px] text-[#78839A] w-[90%] 2xl:w-[80%] '>From colors, cards, typography to complex elements, you will find the full documentation.</p>
              </div>
              <div>
                <button className='text-[14px] text-gray-500 font-semibold flex space-x-1 pb-2 '>
                    <div>
                        Read More
                    </div>
                    <div className='pt-[5px]'>
                        <FaArrowRight />
                    </div>
                </button> 
              </div>
            </div>
            <div className='w-[40%] p-3  h-[220px] rounded-lg bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] flex justify-center items-center'>
                <div> <img className='w-28'  src="https://www.learnmarketingtools.net/static/img/market-launch.png" alt="rocket" /></div>
            </div>
          </div>
        </div>
  
        <div className='relative rounded-lg p-4 bg-white w-[50%]'>
          <div className='relative h-[220px]  '>
            <img
              className='h-[220px] w-[100%] object-cover rounded-lg '
              src='https://i.pinimg.com/736x/77/71/10/777110032fa0c5faa81e28f7c21fc618.jpg'
              alt=''
            />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-3 bg-opacity-80 bg-[#1A2642] rounded-lg '>
              <div>
                <p className='text-white font-bold text-[20px] pt-2 pb-5'>Work with the rockets</p>
                <p className='text-white font-medium'>
                  Wealth creation is an evolutionarily recent positive-sum game. It is all about who takes the opportunity first.
                </p>
              </div>
              <div>
                <button className='text-[14px] text-white font-semibold flex space-x-1'>
                  <div>Read More</div>
                  <div className='pt-[5px]'>
                    <FaArrowRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>      
    </>
  )
}
