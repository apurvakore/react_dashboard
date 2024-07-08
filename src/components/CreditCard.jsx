import React from 'react'
import { BiSolidBank } from "react-icons/bi";

export const CreditCard = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[50%]'></div>
                <div className='w-[25%]'>
                <div className='w-fit p-3 xl:p-[16px]  h-fit rounded-[6px] bg-gradient-to-br from-[#21CDFD] to-[#1F61F1]'>
                        <div className='flex items-center justify-center'><BiSolidBank /></div>
                    </div>
                </div>
                <div className='w-[25%]'></div>
            </div>
            <div></div>
        </div>
  )
}
