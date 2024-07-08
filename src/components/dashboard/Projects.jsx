import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { ProjectItem } from './ProjectItem'
import projectsData from '../../data/dashboard/Project';



export const Projects = ({ image, title, icon1, icon2, budget, width, color1, color2 }) => {
  return (
    <div className='rounded-xl my-7 py-4 bg-white mr-5 h-[100%]'>
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
                <div>
                        {projectsData.map((project, index) => (
                            <ProjectItem
                            key={index}
                            image={project.image}
                            title={project.title}
                            icon1={project.icon1}
                            icon2={project.icon2}
                            icon3={project.icon3}
                            icon4={project.icon4}
                            budget={project.budget}
                            width={project.width}
                            color1={project.color1}
                            color2={project.color2}
                            />
                        ))}
                </div>
            </div>
        </div>      
    </div>
      
  )
}
