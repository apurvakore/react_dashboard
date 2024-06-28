import React from 'react'

import growthData from '../data/growth'
import { GrowthItem } from './GrowthItem'


export const Growth = () => {

  return (
      <div>
        <div className="flex justify-center align items-center space-x-6 h-[100vh]  ">
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
