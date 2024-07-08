import React from 'react';
import { MdDelete, MdModeEdit } from "react-icons/md";
import billingInfoData from '../../data/billing/billingInfo'; // Adjust the path as needed

export const BillingInfo = () => {
  return (
    <div className='bg-white rounded-xl '>
      <div className='py-4 pl-3'>
        <span className='text-[#344767] font-semibold text-[17px]'>Billing Information</span>
      </div>
      <div className=' py-3'>
      {billingInfoData.map((info, index) => (
        <div key={index} className='px-7 bg-[#F8F9FA] rounded-lg mx-3 mb-3  flex'>
          <div className='py-4 px-2 w-[75%]'>
            <div className='flex pb-4'>
              <div className='text-[#344767] text-[13px] font-bold'>{info.name}</div>
              
            </div>
            <div className='flex flex-col'>
              <span className='text-xs text-[#99A1B3] pb-1 font-semibold '>Company Name: <span className='text-[#344767]'>{info.company}</span></span>
              <span className='text-xs text-[#99A1B3] pb-1 font-semibold'>Email Address: <span className='text-[#344767]'>{info.email}</span></span>
              <span className='text-xs text-[#99A1B3] pb-1 font-semibold'>VAT Number: <span className='text-[#344767]'>{info.vat}</span></span>
            </div>
          </div>
          <div className='flex  w-[25%]'>
                <div className='flex items-center  '>
                  <MdDelete className='text-[#C70505] text-[13px] ' />
                  <span className='text-[#C70505] text-[11px] font-bold'>DELETE</span>
                </div>
                <div className='flex items-center '>
                  <MdModeEdit className='text-[#344767] text-[13px]' />
                  <span className='text-[#344767] text-[11px] font-bold'>EDIT</span>
                </div>
          </div>
        </div>
       
      ))}
      </div>
      </div>
  );
}

export default BillingInfo;
