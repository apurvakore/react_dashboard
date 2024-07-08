import React from 'react'
import { CreditCard } from './CreditCard'



export const BillingTab = () => {
  return (
      <>
          <div className='flex'>
              <div className='w-[65%] h-[400px] border border-b-2 mr-6'>
                  <CreditCard/>
              </div>

              <div className='w-[35%] h-[400px] bg-blue-700'>hello</div>
          </div>

    </>
  )
}

