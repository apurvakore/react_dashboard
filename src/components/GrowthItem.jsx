import React from 'react'



export const GrowthItem = ({ title, number, growth, icon }) => {

    return (
        <>

                <div className=' rounded-[10px]  pl-4 pr-4 pb-3 pt-3 flex  items-center space-x-6 2xl:space-x-20 w-fit h-fit bg-[#FFFFFF]'>
                    <div>
                        <p className='text-gray-500 font-bold text-sm 2xl:text-[16px] '>{title}</p>
                        <div className='flex items-baseline'>
                            <p className='text-gray-700 font-bold text-[20px]'>{number}</p>
                        <span className={` ${growth >= 0 ? 'text-[#9ADE43]' : 'text-[#EA0606]'} text-[15px] font-bold m-[1px]`}>{growth > 0 ? '+' : ''}{growth}%</span>
                        </div>
                    </div>
                    <div className='w-fit p-3 xl:p-[16px]  h-fit rounded-[6px] bg-gradient-to-br from-[#21CDFD] to-[#1F61F1]'>
                        <div className='flex items-center justify-center'>{icon}</div>
                    </div>
                </div>

                
       
    </>
      
  )
}

