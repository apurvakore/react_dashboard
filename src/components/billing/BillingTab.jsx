import React from 'react'
import { CreditCard } from './CreditCard'
import Invoices from './Invoices'
import { BillingInfo } from './BillingInfo'



export const BillingTab = () => {
  return (
    <>
      <div>
          <div className='flex'>
              <div className='w-[65%] h-[400px]   mr-6'>
                <CreditCard/>
              </div>
              <div className='w-[35%] h-[400px] '>
                <Invoices/>
              </div>
      </div>
      
      <div className='flex mt-6'>
        <div className='w[60%] h-fit '>
          <BillingInfo/>
        </div>
        <div className='w[30%]'></div>
        </div>
      </div>

    </>
  )
}

