import React from 'react'
import { MdPictureAsPdf } from "react-icons/md"

const InvoiceItem = ({ dateOfBill, invoiceID, price, pdfLink }) => {
  return (
    <div className='flex justify-between my-5'>
      <div className="flex flex-col space-y-1">
        <div className="date text-sm font-semibold text-[#344767]">{dateOfBill}</div>
        <div className="invoiceId font-medium text-[12px] text-[#697690] ">{invoiceID}</div>
      </div>
      <div className="flex space-x-5 items-center">
        <div className="amount text-sm text-[#697690]">{price}</div>
        <div className="button">
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            <button className='flex space-x-2 text-[#344767]'>
              <div className="icon text-xl pt-1"><MdPictureAsPdf /></div>
              <div className="font-semibold text-[15px]">PDF</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default InvoiceItem
