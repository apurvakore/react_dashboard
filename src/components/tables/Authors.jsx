import React from 'react'
import authorsData from '../../data/tables/Authors';
import { AuthorItem } from './AuthorItem';



export const Authors = ({ image, title, icon1, icon2, budget, width, color1, color2 }) => {
  return (
    <div className='rounded-xl my-7 py-5 bg-white h-[100%]'>
        <h6 className='text-[#344767] px-6 font-bold '>Authors table</h6> 
        <div className='flex justify-between pt-2'>
            <div className='w-[100%]'>
                <div className='row px-4 flex  py-4 space-x-2 text-[13px] font-bold'>
                    <div className='text-xs w-[40%] text-[#A8B2C4] flex justify-start pl-2 items-center'>AUTHOR</div>
                    <div className='text-xs w-[15%] text-[#A8B2C4] flex justify-start'>FUNCTION</div>
                    <div className='text-xs w-[15%] text-[#A8B2C4] flex justify-center'>STATUS</div>
                    <div className='text-xs w-[15%] text-[#A8B2C4] flex justify-center'>EMPLOYED</div>
                    <div className='text-xs w-[15%] text-[#A8B2C4] flex justify-center'>ACTION</div>
                </div>
                <div>
                        {authorsData.map((author, index) => (
                            <AuthorItem
                            key={index}
                            profileImage={author.profileImage}
                            name={author.name}
                            email={author.email}
                            role={author.role}
                            department={author.department}
                            status={author.status}
                            employedDate={author.employedDate}
                            />
                        ))}
                </div>
            </div>
        </div>      
    </div>
      
  )
}
