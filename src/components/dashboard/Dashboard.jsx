import React from 'react'
import ActiveUser from './ActiveUser';


import { Growth } from './Growth';
import { Middle } from './Middle';

import { OrderReview } from './OrderReview';
import { Projects } from './Projects';
import SalesOverview from './SalesOverview';


export const Dashboard = () => {
  return (
    <>
        <Growth />
        <Middle />
        <div className="flex flex-col md:flex-row mt-4 md:space-x-6 space-y-4 md:space-y-0 md:h-[440px] 2xl:h-[500px]">
          <div className=" w-[100%] md:w-[40%] h-[100%] 2xl:w-[45%]">
              <ActiveUser/>
          </div>
          <div className=" w-[100%] md:w-[60%] h-[100%] 2xl:w-[55%]">
              <SalesOverview/>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:h-[550px] mb-16'>
          <div className='w-[100%] md:w-[65%]'><Projects/></div>
          <div className="w-[100%] md:w-[35%]"><OrderReview /></div>
        </div>
        
    </>
  
  )
}
