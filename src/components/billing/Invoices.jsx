import React from 'react'
import InvoiceItem from './InvoiceItem'
import invoiceData from '../../data/billing/Invoice';

const Invoices = () => {
  return (
    <div className='p-5 bg-white rounded-xl h-[100%] '>
        <div className='tab-name flex justify-between '>
            <div className="flex items-center font-semibold text-[#405270]">Invoices</div>
            <div className="">
                <button className='px-8 py-2 text-[12px] font-bold border border-[#34C1E1] text-[#34C1E1] hover:text-[#51D1EE] hover:border-[#51D1EE] rounded-lg '>
                    VIEW ALL
                </button>
            </div>
        </div>
        <div className="data mt-5">
            {invoiceData.map((invoice) => (
                <InvoiceItem
                key={invoice.id}
                dateOfBill={invoice.dateOfBill}
                invoiceID={invoice.invoiceID}
                price={invoice.price}
                pdfLink={invoice.pdfLink}
                />
            ))}
        </div>
    </div>
  )
}

export default Invoices