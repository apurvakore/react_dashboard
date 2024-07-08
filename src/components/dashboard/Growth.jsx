import React from 'react'

import growthData from '../../data/dashboard/growth'
import { GrowthItem } from './GrowthItem'



export const Growth = () => {

  return (
    <div className='w-[100%]'>
        <div className="flex justify-between items-start space-x-6 pt-6 pb-6 bg-[#F5F6F7] ">
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
