import React from 'react'
import { FaCheck } from "react-icons/fa6";


export const Projects = () => {
  return (
    <div className='rounded-lg my-7 py-4 bg-white mr-5'>
        <h6 className='text-[#344767] px-4 font-bold '>Projects</h6> 
        <div className='flex px-4 space-x-1 pt-1'>
            <FaCheck className='mt-1 text-[#1BC2E8]'/>
            <span className='text-[#67748E] font-bold'>30 done</span>
            <span className='text-[#67748E]'>this month</span>
        </div>

        <div className='flex justify-between pt-8'>
            <div className='w-[100%]'>
                <div className='row px-4 flex border-b py-4 space-x-2 text-[13px] font-bold'>
                    <div className='text-xs w-[45%] text-[#A8B2C4] flex justify-start pl-2 items-center'>COMPANIES</div>
                    <div className='text-xs w-[15%] text-[#A8B2C4] flex justify-start'>MEMBERS</div>
                    <div className='text-xs w-[10%] text-[#A8B2C4] flex justify-start'>BUDGET</div>
                    <div className='text-xs w-[30%] text-[#A8B2C4] flex justify-center'>COMPLETION</div>
                </div>
                <div className='row px-4 flex space-x-2 border-b py-3'>
                    <div className='col-1 w-[45%] flex space-x-2 items-center justify-start'>
                        <img className='w-[40px]' src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg"  alt="" />
                        <div className='text-sm font-semibold text-[#344767]'>Soft UI XD Version</div>
                    </div>
                        
                    <div className="col-2 w-[15%] pr-[3px] py-4">
                        <div class="flex -space-x-2 rtl:space-x-reverse">
                            <img class="w-6 h-6 border-2 border-white rounded-full " src="https://img.freepik.com/free-psd/3d-illusdivation-person-widiv-sunglasses_23-2149436178.jpg" alt=""/>
                            <img class="w-6 h-6 border-2 border-white rounded-full " src="https://img.freepik.com/free-psd/3d-illusdivation-human-avatar-profile_23-2150671142.jpg" alt=""/>
                            <img class="w-6 h-6 border-2 border-white rounded-full " src="https://img.freepik.com/free-psd/3d-illusdivation-human-avatar-profile_23-2150671116.jpg" alt=""/>
                            <img class="w-6 h-6 border-2 border-white rounded-full " src="https://img.freepik.com/free-psd/3d-illusdivation-person-widiv-sunglasses_23-2149436188.jpg?" alt=""/>
                        </div>
                    </div>
                    <div className="col-3 w-[10%]  py-4 text-[13px] font-semibold text-[#68758F]">
                        $14,000
                    </div>
                    <div className="col-4 w-[30%] flex items-center px-2">
                        <div class="w-full flex items-center bg-gray-200 rounded-full h-1 ">
                            <div class="bg-gradient-to-br from-[#21CDFD] to-[#1F61F1] h-1.5 rounded-full  w-[65%]" ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
      
  )
}
