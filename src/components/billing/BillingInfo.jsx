import React from 'react';
import { MdDelete, MdModeEdit } from "react-icons/md";
import billingInfoData from '../../data/billing/billingInfo'; // Adjust the path as needed

export const BillingInfo = () => {
  return (
    <div className='bg-white py-5 px-6 rounded-xl w-[100%] h-[100%]'>
      <div className='text-[#344767] font-semibold mb-3 text-[17px]'>Billing Information</div>
      <div className='py-3 w-[100%]'>
        {billingInfoData.map((info, index) => (
          <div key={index} className='px-7 py-5 bg-[#F8F9FA] rounded-lg mb-6  flex justify-between w-[100%]'>
            <div className=''>
              <div className='flex pb-4'>
                <div className='text-[#344767] text-[13px] font-bold'>{info.name}</div> 
              </div>
              <div className='flex flex-col'>
                <div className='text-xs text-[#99A1B3] pb-1 font-semibold '>Company Name: <span className='text-[#344767]'>{info.company}</span></div>
                <div className='text-xs text-[#99A1B3] pb-1 font-semibold'>Email Address: <span className='text-[#344767]'>{info.email}</span></div>
                <div className='text-xs text-[#99A1B3] pb-1 font-semibold'>VAT Number: <span className='text-[#344767]'>{info.vat}</span></div>
              </div>
            </div>
            <div className='flex justify-center items-start space-x-6 '>
                  <div className='flex items-center space-x-1 '>
                    <MdDelete className='text-[#E40808] text-[13px] ' />
                    <span className='text-[#E40808] text-[11px] font-bold'>DELETE</span>
                  </div>
                  <div className='flex items-center space-x-1 '>
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
