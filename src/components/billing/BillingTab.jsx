import React from 'react'
import { CreditCard } from './CreditCard'
import Invoices from './Invoices'
import { BillingInfo } from './BillingInfo'
import Transcations from './Transcations'



export const BillingTab = () => {
  return (
    <>
      <div className=''>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 mt-8'>
              <div className='w-[100%] md:w-[65%] mr-6'>
                <CreditCard/>
              </div>
              <div className='w-[100%] md:w-[35%] '>
                <Invoices/>
              </div>
          </div>
          <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row mt-8'>
            <div className=' w-[100%] md:w-[60%]  '>
              <BillingInfo/>
            </div>
            <div className=' w-[100%] md:w-[40%] '>
              <Transcations/>
            </div>
          </div>
    </div>

    </>
  )
}

