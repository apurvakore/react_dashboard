import React from 'react'
import { HiPlus } from "react-icons/hi";


export const Design = () => {
  return (
    <>
          <div className='mt-5  bg-white rounded-lg'>
              <div className='p-3 flex flex-col space-y-5'>
                  <h6 className='text-[#344767] font-semibold'>Projects</h6>
                  <span className='text-[#727E96] text-sm font-medium'>Architects design houses</span>
                  <div className='flex space-x-5'>
                      <div className='flex flex-col space-y-4 w-[25%]'>
                          <img src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg" className='w-[280px] rounded-xl' alt="" />
                          <h6 className='text-[#343A63] text-[16px]'>Project #2</h6>
                          <h1 className='font-semibold text-lg text-[#344767]'>Modern</h1>
                          <p className='text-[#79849B] font-semibold text-sm'>As Uber works through a huge amount of internal management turmoil.</p>
                      </div>

                      <div className='flex flex-col space-y-4 w-[25%]'>
                          <img src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/home-decor-2.b4e5397c9846645ba275.jpg" className='w-[280px] rounded-xl' alt="" />
                          <h6 className='text-[#343A63] text-[16px]'>Project #1</h6>
                          <h1 className='font-semibold text-lg text-[#344767]'>Scandinavian</h1>
                          <p className='text-[#79849B] font-semibold text-sm'>Music is something that every person has his or her own specific opinion about</p>
                      </div>


                      <div className='flex flex-col space-y-4 w-[25%]'>
                          <img src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/home-decor-3.74d13fcbd3c631fc7908.jpg" className='w-[280px] rounded-xl' alt="" />
                          <h6 className='text-[#343A63] text-[16px]'>Project #3</h6>
                          <h1 className='font-semibold text-lg text-[#344767]'>Minimalist</h1>
                          <p className='text-[#79849B] font-semibold text-sm'>Different people have different taste, and various types of music.</p>
                      </div>


                      <div className='flex flex-col  justify-center items-center space-y-4 w-[25%] border rounded-xl'>
                          <HiPlus className='text-[#8392AB] font-semibold text-xl' />
                          <h1 className='text-[#8392AB] font-semibold text-xl'>New Project</h1>
                      </div>
                  </div>
              </div>
         </div> 
    </>
  )
}
