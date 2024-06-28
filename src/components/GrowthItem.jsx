import React from 'react'



export const GrowthItem = ({ title, number, growth, icon }) => {

    return (
        <>

                <div className=' rounded-md pt-1 pl-2 pr-2 pb-1 flex  items-center space-x-10 w-fit h-fit bg-[#FFFFFF]'>
                    <div>
                        <p className='text-gray-500 font-bold text-[6px] '>{title}</p>
                        <div className='flex items-baseline'>
                            <p className='text-gray-700 font-bold text-[9px]'>{number}</p>
                        <span className={` ${growth >= 0 ? 'text-[#9ADE43]' : 'text-[#EA0606]'} text-[5px] font-bold m-[1px]`}>{growth > 0 ? '+' : ''}{growth}%</span>
                        </div>
                    </div>
                    <div className='w-fit p-[3px]  h-fit rounded-[3px] bg-gradient-to-br from-[#21CDFD] to-[#1F61F1]'>
                        <div className='flex items-center justify-center'>{icon}</div>
                    </div>
                </div>

                
       
    </>
      
  )
}

