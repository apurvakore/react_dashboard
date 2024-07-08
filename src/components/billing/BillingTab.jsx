import React from 'react'
import { CreditCard } from './CreditCard'
import Invoices from './Invoices'
import { BillingInfo } from './BillingInfo'



export const BillingTab = () => {
  return (
    <>
      <div className=''>
          <div className='flex mt-8'>
              <div className='w-[65%]    mr-6'>
                <CreditCard/>
              </div>
              <div className='w-[35%] '>
                <Invoices/>
              </div>
          </div>
          <div className='flex mt-8'>
            <div className='w-[60%] h-fit '>
              <BillingInfo/>
            </div>
            <div className=''>

            </div>
          </div>
    </div>

    </>
  )
}

