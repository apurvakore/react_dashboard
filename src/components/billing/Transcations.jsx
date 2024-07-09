import React from 'react'
import { LuCalendarDays } from "react-icons/lu";
import transcationInfoData from '../../data/billing/transcationInfo'

const Transcations = () => {
  return (
    <div className='ml-4 pb-10 bg-white rounded-xl'>
      <div className='flex pt-6 px-3 justify-between'>
        <h6 className='text-[#344767] font-bold'> Your Transaction's</h6>
        <div className='flex space-x-1 items-center'>
          <LuCalendarDays className='text-[#79849B]'/>
          <h6 className='text-[#79849B] text-sm font-semibold'>23 - 30 March 2020</h6>
        </div>
      </div>

      <div>
        {/* Newest Transactions */}
        <div className='pt-8 px-3'>
          <h6 className='text-[#707C95] font-bold text-xs'>NEWEST</h6>
        </div>
        {transcationInfoData.NEWEST.map((transaction, index) => (
          <div key={index} className='flex justify-between pl-3 pr-6 pt-6'>
            <div className='flex space-x-3'>
              <span  style={{ color: transaction.price < 0 ? 'red' : '#6FD830' }}>{transaction.icon}</span>
              <div className='flex flex-col space-y-1'>
                <h6 className='text-[#344767] font-semibold'>{transaction.name}</h6>
                <h6 className='text-[#707C95] text-xs'>{transaction.date}</h6>
              </div>
            </div>
            <span className='text-sm font-semibold' style={{ color: transaction.price < 0 ? 'red' : '#6FD830' }}>
              {transaction.price < 0 ? `- $${Math.abs(transaction.price)}` : `+ $${transaction.price}`}
            </span>
          </div>
        ))}

        {/* Yesterday's Transactions */}
        <div className='pt-8 px-3'>
          <h6 className='text-[#707C95] font-bold text-xs'>YESTERDAY</h6>
        </div>
        {transcationInfoData.YESTERDAY.map((transaction, index) => (
          <div key={index} className='flex justify-between pl-3 pr-6 pt-6'>
            <div className='flex space-x-3'>
              <span style={{ color: transaction.price < 0 ? 'red' : '#6FD830' }}>{transaction.icon}</span>
              <div className='flex flex-col space-y-1'>
                <h6 className='text-[#344767] font-semibold'>{transaction.name}</h6>
                <h6 className='text-[#707C95] text-xs'>{transaction.date}</h6>
              </div>
            </div>
            <span className='text-sm font-semibold' style={{ color: transaction.price === "Pending" ? '#344767' : transaction.price < 0 ? 'red' : '#6FD830' }}>
              {transaction.price === "Pending" ?  transaction.price  : transaction.price < 0 ? `- $${Math.abs(transaction.price)}` : `+ $${transaction.price}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transcations;
