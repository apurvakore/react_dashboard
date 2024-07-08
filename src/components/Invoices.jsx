import React from 'react'

const Invoices = () => {
  return (
    <div>
        <div className='tab-name flex justify-between p-2'>
            <div className="flex items-center font-semibold text-[#405270]">Invoice</div>
            <div className="">
                <button className='px-4 py-2 text-sm font-semibold border border-[#51D1EE] rounded-xl '>
                    VIEW ALL
                </button>
            </div>
        </div>
        <div className="data">

        </div>
    </div>
  )
}

export default Invoices