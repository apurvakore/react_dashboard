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
        <div className="flex mt-4 space-x-6 h-[440px] 2xl:h-[500px]">
        <div className="w-[40%] h-[100%] 2xl:w-[45%]">
            <ActiveUser/>
        </div>
        <div className="w-[60%] h-[100%] 2xl:w-[55%]">
            <SalesOverview/>
        </div>
        </div>
        <div className='flex h-[550px] mb-16'>
        <div className='w-[65%]'><Projects/></div>
        <div className="w-[35%]"><OrderReview /></div>
        </div>
        
    </>
  
  )
}
