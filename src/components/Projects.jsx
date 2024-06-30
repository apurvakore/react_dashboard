import React from 'react'
import { FaCheck } from "react-icons/fa6";


export const Projects = () => {
  return (
      <div className='rounded-lg my-7 p-4 bg-white mr-5'>
         <h6 className='text-[#344767] font-bold '>Projects</h6> 
          <div className='flex space-x-1 pt-1'>
                <FaCheck className='mt-1 text-[#1BC2E8]'/>
              <span className='text-[#67748E] font-bold'>30 done</span>
              <span className='text-[#67748E]'>this month</span>
          </div>

          <div className='flex justify-between pt-8'>
              <div className='w-[100%]'>
                <div className='flex justify-between'>
                    <div className='text-xs text-[#A8B2C4] flex justify-start pl-2 items-center'>COMPANIES</div>
                    <div className='text-xs text-[#A8B2C4] flex justify-start'>MEMBERS</div>
                    <div className='text-xs text-[#A8B2C4] flex justify-start'>BUDGET</div>
                    <div className='text-xs text-[#A8B2C4] flex justify-start'>COMPLETION</div>
                </div>
                <div className='flex'>
                        <div className='flex space-x-2 items-center justify-start'>
                            <img src="https://divemewagon.gidivub.io/soft-ui-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg" className='w-[50px] ' alt="" />
                            <span>Soft UI XD Version</span>
                        </div>
                </div>
                        
                <div className=" pr-[3px] py-4">
                <div class="flex -space-x-4 rtl:space-x-reverse">
                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://img.freepik.com/free-psd/3d-illusdivation-person-widiv-sunglasses_23-2149436178.jpg" alt=""/>
                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://img.freepik.com/free-psd/3d-illusdivation-human-avatar-profile_23-2150671142.jpg" alt=""/>
                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://img.freepik.com/free-psd/3d-illusdivation-human-avatar-profile_23-2150671116.jpg" alt=""/>
                    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://img.freepik.com/free-psd/3d-illusdivation-person-widiv-sunglasses_23-2149436188.jpg?" alt=""/>
                </div>
                </div>
                <div className="px-[18px] py-4 text-[14px] font-semibold text-[#68758F]">
                    $14,000
                </div>
                <div className="px-[30px]">
                <div class="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                    <div class="bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] h-1.5 rounded-full  w-[65%]" ></div>
                </div>
                </div>
                </div>
            </div>
         
          

          
          
         
      </div>
      
  )
}
