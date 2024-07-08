import React from 'react'
import { CreditCard } from './CreditCard'
import Invoices from './Invoices'



export const BillingTab = () => {
  return (
      <>
          <div className='flex'>
              <div className='w-[65%] h-[400px]   mr-6'>
                <CreditCard/>
              </div>
              <div className='w-[35%] h-[400px] '>
                <Invoices/>
              </div>
          </div>

    </>
  )
}

