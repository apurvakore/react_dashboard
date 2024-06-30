import React from 'react'

import growthData from '../data/growth'
import { GrowthItem } from './GrowthItem'



export const Growth = () => {

  return (
    <div>
     
        <div className="flex justify-center items-start space-x-7  p-10 pl-9 pt-6 pb-6 bg-[#F5F6F7] ">
        {growthData.map((data, index) => (
            <GrowthItem
                key={index}
                title={data.title}
                number={data.number}
                growth={data.growth}
                icon={data.icon}
            />
        ))}
      </div>
    
      
    </div>
  )
}
